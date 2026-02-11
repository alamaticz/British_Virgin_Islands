import fitz
import os

PDF_DIR = "../db/data/raw/pdfs"
OUT_DIR = "../db/data/processed/pdfs"
os.makedirs(OUT_DIR, exist_ok=True)

if not os.path.exists(PDF_DIR):
    os.makedirs(PDF_DIR)
    print(f"Created {PDF_DIR}. Please put PDFs there.")

for pdf in os.listdir(PDF_DIR):
    if not pdf.lower().endswith(".pdf"):
        continue
    try:
        doc = fitz.open(os.path.join(PDF_DIR, pdf))
        text = ""
        for page in doc:
            text += page.get_text()
        with open(f"{OUT_DIR}/{pdf}.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Processed {pdf}")
    except Exception as e:
        print(f"Failed to process {pdf}: {e}")
