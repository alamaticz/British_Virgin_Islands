import os
from chromadb.utils import embedding_functions

# Use OpenAI Embeddings (Lightweight, API-based)
# This prevents OOM errors on Render Free Tier (512MB RAM)
# Requires OPENAI_API_KEY env var
MODEL_NAME = "text-embedding-3-small"

# Caching the embedding function to avoid reloading the model on every request
_embedding_function = None

def get_embedding_function():
    global _embedding_function
    if _embedding_function is None:
        api_key = os.environ.get("OPENAI_API_KEY")
        if not api_key:
             # Fallback or error if key is missing, though app should have it
             raise ValueError("OPENAI_API_KEY is required for embeddings.")
        _embedding_function = embedding_functions.OpenAIEmbeddingFunction(
            api_key=api_key,
            model_name=MODEL_NAME
        )
    return _embedding_function
