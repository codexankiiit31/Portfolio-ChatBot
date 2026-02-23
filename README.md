# 🤖 Ankit Mahule — AI Portfolio

A personal portfolio website with a **live AI chat assistant** trained on my resume. Visitors can ask the bot anything about my skills, projects, experience, and education — and get instant, contextual answers powered by an LLM via OpenRouter.

---

## ✨ Features

- **AI Chat Assistant** — Context-aware multi-turn conversations powered by LangChain + OpenRouter
- **Session Memory** — Each visitor tab gets its own conversation history
- **Portfolio Sections** — Hero, About, Skills, Experience, Projects, Certifications, Contact
- **Modern UI** — React + Vite + Tailwind CSS with glassmorphism, animations (Framer Motion), and dark theme
- **FastAPI Backend** — Async Python API with CORS support

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|---|---|
| React 18 + Vite | UI framework & dev server |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| react-icons | Icon library |

### Backend
| Tech | Purpose |
|---|---|
| FastAPI | REST API |
| LangChain | LLM orchestration & memory |
| LangChain-OpenAI | OpenRouter LLM integration |
| LangChain-Community | Chat message history |
| OpenRouter API | Free LLM access (LLaMA, DeepSeek, Gemma) |
| python-dotenv | Environment variable management |

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- An [OpenRouter](https://openrouter.ai) API key (free tier available)

---

### Backend Setup

```bash
# Navigate to backend
cd backend

# Create and activate virtual environment
python -m venv portvnv
portvnv\Scripts\activate       # Windows
# source portvnv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo OPENROUTER_API_KEY=your_key_here > .env

# Run the server
uvicorn main:app --reload
```

Backend runs at: `http://127.0.0.1:8000`  
API docs at: `http://127.0.0.1:8000/docs`

---

### Frontend Setup

```bash
# Navigate to project root
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend runs at: `http://localhost:5173`

> The Vite dev server proxies `/api/*` requests to `http://127.0.0.1:8000` automatically — no CORS issues.

---

## 📁 Project Structure

```
Portfolio/
├── backend/
│   ├── main.py            # FastAPI app & /api/chat endpoint
│   ├── llm_services.py    # LangChain chain with session memory
│   ├── resume_data.py     # Resume text + prompt template
│   ├── requirements.txt
│   └── .env               # OPENROUTER_API_KEY (not committed)
│
├── src/
│   ├── components/
│   │   ├── ChatWidget.jsx  # AI chat UI (FAB + panel + suggestions)
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js         # Dev proxy: /api → :8000
└── package.json
```

---

## 🔌 API Reference

### `POST /api/chat`

Send a message to the AI assistant.

**Request body:**
```json
{
  "message": "What projects has Ankit built?",
  "session_id": "sess_abc123"
}
```

**Response:**
```json
{
  "reply": "Ankit has built three main projects: ..."
}
```

---

## 🔑 Environment Variables

Create `backend/.env`:

```env
OPENROUTER_API_KEY=sk-or-v1-...
```

Get your free key at [openrouter.ai/keys](https://openrouter.ai/keys)

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.

---

*Built with ❤️ by [Ankit Mahule](https://www.linkedin.com/in/ankit-mahule-11xybl/)*
