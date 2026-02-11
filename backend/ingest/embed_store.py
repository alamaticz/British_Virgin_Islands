import chromadb
import uuid
from openai import OpenAI
import os

# Check API Key
if not os.environ.get("OPENAI_API_KEY"):
    from dotenv import load_dotenv
    load_dotenv()

if not os.environ.get("OPENAI_API_KEY"):
    raise ValueError("OPENAI_API_KEY not found in environment variables")

client = OpenAI()

chroma = chromadb.Client()  # Ephemeral (in-memory) by default? User code implies persistent but Client() is ephemeral usually unless path is given. 
# The user code: chroma = chromadb.Client() which is ephemeral.
# To make it persistent, they might want PersistentClient. 
# However, I will stick to their code but perhaps suggest PersistentClient if they want it to survive restarts. 
# Wait, the user said "You can copy–paste and run this." 
# If I use Client(), the data is lost when script ends? 
# Use PersistentClient to be safe or stick to exact code?
# The user's prompt says "Embeddings stored" then later "RAG Logic" loads it.
# If they use `chromadb.Client()` in two different scripts, they WON'T share data unless it's a server (HttpClient) or PersistentClient with fixed path.
# The user code uses `Client()` in both `embed_store.py` and `rag.py`. 
# Default `Client()` is in-memory and unique per process. This WILL FAIL to work between `embed_store.py` and `rag.py` if run separately.
# I MUST fix this to make it "production-ready" as requested.
# I will change it to `chromadb.PersistentClient(path="./chroma_db")`.

CHROMA_PATH = "./chroma_db"
chroma = chromadb.PersistentClient(path=CHROMA_PATH)
import chromadb
import uuid
import json
import os
import sys

# Ensure backend module can be imported
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.embeddings import get_embedding_function

CHROMA_PATH = "../db/chroma_db"
chroma = chromadb.PersistentClient(path=CHROMA_PATH)

# Use the centralized embedding function
ef = get_embedding_function()
collection = chroma.get_or_create_collection(name="bvifsc", embedding_function=ef)

# Read chunks
# Read chunks
chunk_path = "../db/data/processed/chunks.jsonl"
if not os.path.exists(chunk_path):
    print(f"Chunks file {chunk_path} not found. Run chunk.py first.")
    exit(1)

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
        # Chroma with embedding_function automatically computes embeddings for 'documents'
        collection.add(
            documents=texts,
            metadatas=metadatas,
            ids=ids
        )
        print(f"Processed batch {i} to {i+len(batch)}")
    except Exception as e:
        print(f"Error in batch {i}: {e}")

print("✅ Embeddings stored in", CHROMA_PATH)
