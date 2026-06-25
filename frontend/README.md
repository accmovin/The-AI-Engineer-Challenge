# 🦕 Jungle Coach — Frontend

A Next.js chat UI for your supportive mental coach, styled with deep jungle greens and lagoon blues — like a calm prehistoric sanctuary.

## Prerequisites

- **Node.js 18+** and **npm**
- The **FastAPI backend** running locally (see below)

## Run locally

You need **two terminals** — one for the backend, one for the frontend.

### 1. Start the backend

From the **repository root**:

```bash
# Install Python deps (first time only)
uv sync

# Set your OpenAI key
export OPENAI_API_KEY=sk-your-key-here

# Start FastAPI on port 8000
uv run uvicorn api.index:app --reload
```

The API will be available at `http://localhost:8000`. See `api/README.md` for more details.

### 2. Start the frontend

From the **`frontend/`** directory:

```bash
cd frontend
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

In development, Next.js proxies `/api/chat` to `http://localhost:8000/api/chat`, so the UI talks to your local FastAPI server automatically.

## Production build

```bash
cd frontend
npm run build
npm start
```

## Deploy on Vercel

From the **repository root**:

```bash
npm install -g vercel   # first time only
vercel
```

The root `vercel.json` routes:

- `/api/*` → Python FastAPI (`api/index.py`)
- everything else → Next.js (`frontend/`)

Set `OPENAI_API_KEY` in your Vercel project environment variables before deploying.

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS** — jungle / lagoon color palette
- **TypeScript**

## Project structure

```
frontend/
├── app/              # Pages and global layout
├── components/       # Chat UI components
├── lib/              # API client for /api/chat
└── public/           # Static assets
```

Happy coaching! 🌿
