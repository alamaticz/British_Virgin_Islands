import chromadb
import uuid
import json
import os
import sys
from dotenv import load_dotenv

# Load env vars
load_dotenv()

# Ensure backend module can be imported
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.embeddings import get_embedding_function

# Correct path relative to backend/ingest/ (which is where this script is likely run from as module)
# If running as `python -m ingest.embed_store` from `backend/`, __file__ is `backend/ingest/embed_store.py`
# We want `backend/../db/chroma_db` which is `db/chroma_db`
CHROMA_PATH = "../db/chroma_db"

def main():
    if not os.environ.get("OPENAI_API_KEY"):
        print("Error: OPENAI_API_KEY not found.")
        return

    print(f"Initializing ChromaDB at {CHROMA_PATH}...")
    chroma = chromadb.PersistentClient(path=CHROMA_PATH)

    # Use the centralized embedding function
    ef = get_embedding_function()
    
    # Delete if exists to start fresh (optional, but good for re-ingestion)
    try:
        chroma.delete_collection("bvifsc")
        print("Deleted existing collection 'bvifsc'.")
    except Exception:
        pass

    collection = chroma.create_collection(name="bvifsc", embedding_function=ef)

    # Read chunks
    chunk_path = "../db/data/processed/chunks.jsonl"
    if not os.path.exists(chunk_path):
        print(f"Chunks file {chunk_path} not found. Run chunk.py first.")
        return

    raw_items = []
    with open(chunk_path, encoding="utf-8") as f:
        for line in f:
            if line.strip():
                raw_items.append(json.loads(line))

    print(f"Embedding {len(raw_items)} chunks with {ef.__class__.__name__}...")

    # Batch processing
    batch_size = 100
    for i in range(0, len(raw_items), batch_size):
        batch = raw_items[i:i+batch_size]
        
        texts = [item["text"] for item in batch]
        metadatas = [{"source": item["source"]} for item in batch]
        ids = [str(uuid.uuid4()) for _ in batch]
        
        try:
            collection.add(
                documents=texts,
                metadatas=metadatas,
                ids=ids
            )
            print(f"Processed batch {i} to {i+len(batch)}")
        except Exception as e:
            print(f"Error in batch {i}: {e}")

    print("✅ Embeddings stored in", CHROMA_PATH)

if __name__ == "__main__":
    main()
