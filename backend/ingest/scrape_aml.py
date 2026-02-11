import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
import os
import json
import re

BASE_URL = "https://www.bvifsc.vg"

# Defined based on user request and inspection
TARGET_PAGES = {
    "amlcft-policies": "https://www.bvifsc.vg/fsc-amlcft-policies",
    "amlcft-strategies": "https://www.bvifsc.vg/fsc-amlcft-strategies",
    "guidance": "https://www.bvifsc.vg/guidance-1",
    "faqs": "https://www.bvifsc.vg/faqs",
    "fatf-guidance": "https://www.bvifsc.vg/fatf-guidance",
    "cfatf": "https://www.bvifsc.vg/cfatf-public-statements",
    "public-statements": "https://www.bvifsc.vg/public-statements-0",
    "legislation": "https://www.bvifsc.vg/legislation",
    "risk-assessments": "https://www.bvifsc.vg/risk-assessments",
    "amlcft-media": "https://www.bvifsc.vg/amlcft-media"
}

OUTPUT_DIR = "../db/data/processed/pages"
PDF_DIR = "../db/data/raw/pdfs"

visited = set()
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(PDF_DIR, exist_ok=True)

def download_pdf(url):
    try:
        if url in visited: return None
        visited.add(url)
        
        print("Downloading PDF:", url)
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        r = requests.get(url, headers=headers, timeout=15)
        if r.status_code == 200:
            fname = os.path.basename(urlparse(url).path)
            if not fname.lower().endswith('.pdf'):
                fname = f"doc_{len(visited)}.pdf"
            
            # Clean filename
            fname = "".join(x for x in fname if x.isalnum() or x in "._-")
            
            path = os.path.join(PDF_DIR, fname)
            with open(path, "wb") as f:
                f.write(r.content)
            print(f"Saved PDF: {fname}")
            return fname
    except Exception as e:
        print(f"Failed to download PDF {url}: {e}")
    return None

def scrape_page(slug, url):
    print(f"Scraping Page ({slug}):", url)
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        r = requests.get(url, headers=headers, timeout=15)
        soup = BeautifulSoup(r.text, "html.parser")
        
        # Extract Title
        title = soup.find("h1", class_="page-header")
        if not title: title = soup.find("title")
        title_text = title.get_text(strip=True) if title else slug

        # Extract Main Content
        # Refined selector to avoid sidebars/events
        # Target the specific node content if possible, or #block-system-main
        content_div = soup.find('div', id='block-system-main')
        
        # If not found, fall back but try to decompose known noise
        if not content_div:
            content_div = soup.find('div', class_='region-content') or soup.find('article') or soup.find('main')
        
        html_content = ""
        text_content = ""
        attachments = []

        if content_div:
            # Remove unwanted blocks from the soup before extracting
            for noise in content_div.find_all(class_=['view-events', 'block-views', 'block-cookie-popup']):
                noise.decompose()

            # Further refine to the body field if available to skip titles/metadata repeated
            body_div = content_div.find('div', class_='field-name-body')
            target_div = body_div if body_div else content_div

            # Process links within content to find attachments
            for a in target_div.find_all("a", href=True):
                link = urljoin(url, a["href"])
                link_text = a.get_text(strip=True)
                
                if link.lower().endswith(".pdf"):
                    fname = download_pdf(link)
                    if fname:
                        attachments.append({
                            "name": link_text or fname,
                            "filename": fname,
                            "url": link
                        })
            
            # Get HTML content (for display)
            # We use target_div to get the cleanest html
            html_content = str(target_div)
            text_content = target_div.get_text(separator="\n", strip=True)

        # Save Data
        data = {
            "slug": slug,
            "title": title_text,
            "url": url,
            "content_html": html_content,
            "content_text": text_content,
            "attachments": attachments
        }

        with open(f"{OUTPUT_DIR}/{slug}.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
            
    except Exception as e:
        print(f"Failed to scrape {slug}: {e}")

if __name__ == "__main__":
    print("Starting AML/CFT Scrape...")
    for slug, url in TARGET_PAGES.items():
        scrape_page(slug, url)
    print("Scraping completed.")
