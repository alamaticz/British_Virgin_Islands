import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
import os

BASE_URL = "https://www.bvifsc.vg/amlcft"
OUTPUT_DIR = "../db/data/raw/pages"
PDF_DIR = "../db/data/raw/pdfs"

visited = set()
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(PDF_DIR, exist_ok=True)

def is_internal(url):
    return urlparse(url).netloc == urlparse(BASE_URL).netloc

def download_pdf(url):
    try:
        print("Downloading PDF:", url)
        r = requests.get(url, timeout=15)
        if r.status_code == 200:
            # Extract filename from URL or header
            fname = os.path.basename(urlparse(url).path)
            if not fname.lower().endswith('.pdf'):
                fname = "document.pdf" # Fallback
                
            path = os.path.join(PDF_DIR, fname)
            # Avoid overwriting or complex naming for now, just save
            with open(path, "wb") as f:
                f.write(r.content)
            print(f"Saved PDF: {fname}")
    except Exception as e:
        print(f"Failed to download PDF {url}: {e}")

def crawl(url):
    # Defragment to avoid duplicates like #navigation
    url, _ = urldefrag(url)

    if url in visited:
        return
    visited.add(url)

    # Check if this URL is itself a PDF (in case we crawled it directly)
    if url.lower().endswith(".pdf"):
        download_pdf(url)
        return

    print("Crawling:", url)
    try:
        r = requests.get(url, timeout=10)
        
        # Check content type just in case
        if "application/pdf" in r.headers.get("Content-Type", "").lower():
            download_pdf(url)
            return

        soup = BeautifulSoup(r.text, "html.parser")

        text = "\n".join(p.get_text() for p in soup.find_all("p"))
        fname = url.replace("https://", "").replace("http://", "").replace("/", "_") + ".txt"
        fname = "".join(x for x in fname if x.isalnum() or x in "._-") # Sanitize

        with open(f"{OUTPUT_DIR}/{fname}", "w", encoding="utf-8") as f:
            f.write(text)

        for a in soup.find_all("a", href=True):
            link = urljoin(url, a["href"])
            link, _ = urldefrag(link)

            if link in visited:
                continue

            if is_internal(link):
                # If it's a PDF, download it even if it's not strictly under /amlcft
                # (Assuming we want linked documents)
                if link.lower().endswith(".pdf"):
                    download_pdf(link)
                    visited.add(link)
                # If it's a page, enforce the folder constraint
                elif link.startswith(BASE_URL):
                    crawl(link)

    except Exception as e:
        print(f"Failed to crawl {url}: {e}")

if __name__ == "__main__":
    crawl(BASE_URL)
