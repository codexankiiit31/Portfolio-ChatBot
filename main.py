# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm_services import get_chat_response

app = FastAPI(title="Ankit's Portfolio Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str
    session_id: str = "default"   # ← frontend sends a unique ID per user/tab


class ChatResponse(BaseModel):
    reply: str


@app.get("/")
def root():
    return {"status": "Backend is running!"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    if not req.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    reply = await get_chat_response(req.message, req.session_id)
    return ChatResponse(reply=reply)