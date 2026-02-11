import os
import json
from langchain_text_splitters import RecursiveCharacterTextSplitter

IN_DIRS = [
    "../db/data/raw/pages",
    "../db/data/processed/pdfs"
]

OUT = "../db/data/processed/chunks.jsonl"

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150
)

chunks_with_meta = []

for d in IN_DIRS:
    if not os.path.exists(d):
        print(f"Directory {d} does not exist, skipping.")
        continue
        
    for f in os.listdir(d):
        if not f.endswith(".txt"):
            continue
            
        file_path = os.path.join(d, f)
        try:
            with open(file_path, encoding="utf-8") as file:
                text = file.read()
                
            # Basic source name cleaning
            # If it looks like a crawled URL file, try to make it look nicer? 
            # E.g. www.bvifsc.vg_amlcft.txt -> www.bvifsc.vg/amlcft
            # For now, just use the filename as the source ID.
            source_name = f 
            
            for chunk in splitter.split_text(text):
                chunks_with_meta.append({
                    "text": chunk,
                    "source": source_name
                })
        except Exception as e:
            print(f"Error processing {f}: {e}")

with open(OUT, "w", encoding="utf-8") as f:
    for item in chunks_with_meta:
        f.write(json.dumps(item) + "\n")

print(f"Created {len(chunks_with_meta)} chunks in {OUT}")
