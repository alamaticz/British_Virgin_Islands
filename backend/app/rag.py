

from openai import OpenAI
import chromadb
from app.prompt import SYSTEM_PROMPT
from app.embeddings import get_embedding_function
import os

# Check API Key
if not os.environ.get("OPENAI_API_KEY"):
    from dotenv import load_dotenv
    load_dotenv()

client = OpenAI()

CHROMA_PATH = "../db/chroma_db"
chroma = chromadb.PersistentClient(path=CHROMA_PATH)

def get_collection():
    ef = get_embedding_function()
    return chroma.get_or_create_collection(name="bvifsc", embedding_function=ef)

def reset_db():
    try:
        chroma.delete_collection("bvifsc")
    except Exception:
        pass # Ignore if not exists
    return get_collection()

def ask(question):
    try:
        collection = get_collection()
        
        # Chroma handles embedding of the query text automatically using the ef
        results = collection.query(
            query_texts=[question],
            n_results=5
        )

        if not results["documents"] or not results["documents"][0]:
            return {"answer": "No relevant documents found.", "sources": []}

        documents = results["documents"][0]
        metadatas = results["metadatas"][0] if results["metadatas"] else []
        
        # Construct context with sources
        context_parts = []
        sources = set()
        pdf_links = []
        
        for doc, meta in zip(documents, metadatas):
            source = meta.get("source", "Unknown") if meta else "Unknown"
            sources.add(source)
            context_parts.append(f"Source: {source}\n{doc}")
            
            # Check for PDF source (handling .pdf.txt suffix from ingestion)
            # ingest/extract_pdfs.py saves files as <filename.pdf>.txt
            clean_source = source
            if source.lower().endswith('.pdf.txt'):
                 clean_source = source[:-4] # Remove .txt
            
            if clean_source.lower().endswith('.pdf'):
                 filename = os.path.basename(clean_source)
                 backend_url = os.getenv("BACKEND_URL", "http://localhost:8000")
                 # Ensure no trailing slash
                 if backend_url.endswith("/"):
                     backend_url = backend_url[:-1]
                 link = f"{backend_url}/pdfs/{filename}"
                 # Avoid duplicates in pdf_links
                 if not any(d['url'] == link for d in pdf_links):
                     pdf_links.append({"name": filename, "url": link})
            
        context = "\n\n---\n\n".join(context_parts)

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT + "\n\nIf the answer is found in the context, explain it clearly and cite the source filename. If the user asks for a document, point them to the 'Related Documents' section."},
                {"role": "user", "content": f"Context:\n{context}\n\nQuestion:\n{question}"}
            ]
        )
        
        return {
            "answer": response.choices[0].message.content,
            "sources": list(sources),
            "pdf_links": pdf_links
        }
    except Exception as e:
        return {"answer": f"Error: {e}", "sources": []}
