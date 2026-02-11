import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

URL = "https://www.bvifsc.vg/"

def inspect_menu():
    print(f"Fetching {URL}...")
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    try:
        r = requests.get(URL, headers=headers, timeout=15)
        soup = BeautifulSoup(r.text, "html.parser")
        
        # Look for navigation menu
        # This is heuristic, looking for "AML/CFT" text in links
        aml_link = soup.find("a", string=lambda s: s and "AML/CFT" in s)
        
        if aml_link:
            print(f"Found AML/CFT link: {aml_link.get('href')}")
            
            # Try to find the dropdown container. 
            # Usually it's a sibling <ul> or a child <ul> of the parent <li>
            parent = aml_link.find_parent("li")
            if parent:
                dropdown = parent.find("ul")
                if dropdown:
                    print("Found Dropdown Menu:")
                    for li in dropdown.find_all("li"):
                        a = li.find("a")
                        if a:
                            link = urljoin(URL, a.get("href"))
                            text = a.get_text(strip=True)
                            print(f" - {text}: {link}")
                else:
                    print("No dropdown <ul> found under the parent <li>.")
            else:
                print("Could not find parent <li>.")
        else:
            print("Could not find 'AML/CFT' link on homepage.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    inspect_menu()
