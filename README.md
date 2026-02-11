# BVIFSC RAG Chatbot

This project contains a RAG-based chatbot for the BVIFSC website, organized into frontend, backend, and database components.

## Project Structure

- **frontend/**: React application (Vite)
- **backend/**: Python FastAPI server and ingestion scripts
    - **app/**: The main API application
    - **ingest/**: Data scraping and processing scripts
- **db/**: ChromaDB vector database and raw/processed data

## Setup & Running

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)

### 1. Database & Ingestion (Optional)
If you need to refresh the data:

```bash
cd backend
# Install dependencies
pip install -r requirements.txt

# Scrape data
python -m ingest.scrape_aml

# Process PDFs
python -m ingest.extract_pdfs

# Chunk text
python -m ingest.chunk

# Embed into ChromaDB
python -m ingest.embed_store
```

### 2. Backend Server
Start the API server:

```bash
cd backend
# Create .env file if missing (see .env.example or ask dev)
python -m app.main
```
The server will start at `http://localhost:8000`.

### 3. Frontend Application
Start the we application:

```bash
cd frontend
npm install
npm run dev
```
The application will be available at `http://localhost:5173`.

## Features
- **RAG Chatbot**: Ask questions about BVIFSC AML/CFT regulations.
- **AML/CFT Section**: Browse policies, guidance, and legislation.
