# app/services/llm_service.py
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory
from resume_data import RESUME_TEXT

load_dotenv()

# ── OpenRouter config ──────────────────────────────────────────────────────────
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"
MODEL = "google/gemma-3-27b-it:free"


# ── LLM ───────────────────────────────────────────────────────────────────────
_llm = ChatOpenAI(
    model=MODEL,
    openai_api_key=OPENROUTER_API_KEY,
    openai_api_base=OPENROUTER_BASE_URL,
    temperature=0.3,
)

# ── Prompt with history placeholder ───────────────────────────────────────────
_prompt = ChatPromptTemplate.from_messages([
    ("system", """You are a helpful AI assistant on Ankit's portfolio website.
Answer questions ONLY using the resume data below.
If the answer is not in the resume, say: "I don't have that information in Ankit's resume."
Keep answers concise, friendly, and professional.

RESUME:
{resume}"""),
    MessagesPlaceholder(variable_name="history"),  # ← previous messages slot
    ("human", "{question}"),
])

# ── In-memory store: session_id → ChatMessageHistory ──────────────────────────
_store: dict[str, ChatMessageHistory] = {}

def _get_session_history(session_id: str) -> ChatMessageHistory:
    if session_id not in _store:
        _store[session_id] = ChatMessageHistory()
    return _store[session_id]

# ── Chain wrapped with history ────────────────────────────────────────────────
_chain_with_history = RunnableWithMessageHistory(
    _prompt | _llm | StrOutputParser(),
    _get_session_history,
    input_messages_key="question",
    history_messages_key="history",
)

# ── Public function called by main.py ─────────────────────────────────────────
async def get_chat_response(user_message: str, session_id: str = "default") -> str:
    response = await _chain_with_history.ainvoke(
        {
            "resume": RESUME_TEXT,
            "question": user_message,
        },
        config={"configurable": {"session_id": session_id}},
    )
    return response