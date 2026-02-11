import os
from chromadb.utils import embedding_functions

# Use a specific HF model for embeddings
# BAAI/bge-base-en-v1.5 is excellent for retrieval
MODEL_NAME = "BAAI/bge-base-en-v1.5"

# Caching the embedding function to avoid reloading the model on every request
_embedding_function = None

def get_embedding_function():
    global _embedding_function
    if _embedding_function is None:
        _embedding_function = embedding_functions.SentenceTransformerEmbeddingFunction(model_name=MODEL_NAME)
    return _embedding_function
