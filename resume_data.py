# resume_data.py
from langchain_core.prompts import ChatPromptTemplate

# ── Resume content ─────────────────────────────────────────────────────────────
RESUME_TEXT = """
===== ANKIT MAHULE - RESUME =====

--- PERSONAL INFO ---
Name: Ankit Mahule
Title: AI & Machine Learning Engineer
Phone: +91 6266778384
Email: AnkitMahule88@gmail.com
Location: India
GitHub: https://github.com/ankit-mahule
LinkedIn: https://www.linkedin.com/in/ankit-mahule-11xybl/
Status: Final-year B.Tech student | Open to opportunities

--- ABOUT ---
I am a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at MITS Gwalior.
I enjoy building real-world AI systems that move beyond demos and focus on practical impact.
My work primarily revolves around Large Language Models, Retrieval-Augmented Generation (RAG), and Agentic AI systems.
I have hands-on experience in designing end-to-end AI pipelines using LangChain, FastAPI, and modern LLM workflows.
I believe the best way to learn AI is by building complete products and continuously iterating on them.

--- EDUCATION ---
Degree: Bachelor of Technology (B.Tech) in Artificial Intelligence and Machine Learning
Institution: Madhav Institute of Technology and Science (MITS), Gwalior
Duration: November 2022 - July 2026
CGPA- 7.23
Relevant Coursework:
- Machine Learning
- Deep Learning
- Natural Language Processing
- Data Structures & Algorithms
- Statistics for Data Science
- Database Management Systems (DBMS)


--- SKILLS ---
Languages: Python, C, C++
AI & ML: Machine Learning, Deep Learning, NLP, Large Language Models (LLMs), RAG, Prompt Engineering
Frameworks & Libraries: FastAPI, Flask, LangChain, LangGraph, Streamlit
Databases & Vector Stores: MySQL, FAISS, ChromaDB
Developer Tools & Platforms: Git, GitHub, VS Code, Google Cloud Platform (GCP), PyCharm

--- EXPERIENCE ---
Role: AI/ML Intern
Company: Excellup
Location: Remote
Duration: June 2025 - August 2025
Responsibilities:
- Developed a multilingual AI chatbot supporting English, Hindi, and Telugu to improve learner engagement and query resolution
- Gained hands-on experience with Retrieval-Augmented Generation (RAG) pipelines and prompt chaining
- Assisted in building and refining LLM-based conversational workflows
- Contributed to improving response accuracy and contextual understanding in chatbot systems
Technologies Used: Python, LLMs, RAG, Prompt Chaining, LangChain, FastAPI

--- PROJECTS ---

1. AI Deal Analyzer (Featured Project)
   Description:
   An agentic AI system that scans and evaluates real-time online deals using a multi-agent architecture
   combining LLMs, RAG, and XGBoost for intelligent price prediction and deal validation.
   Key Highlights:
   - Fine-tuned LLaMA 3.1 (8B) using QLoRA on 400k curated product samples
   - Integrated ChromaDB with an LLM-based retriever for contextual deal analysis
   - Trained an XGBoost model on embedding features to improve price prediction accuracy
   - Built a FastAPI backend with a React-based UI showing deal summaries and real-time logs
   Performance Metrics:
   - R² Score: 0.92
   - RMSE: $55
   Tech Stack: Python, FastAPI, LLaMA 3.1, QLoRA, RAG, XGBoost, ChromaDB, React
   project link-https://github.com/codexankiiit31/DealPrice-Analyser

2. Career Advisor & Analyzer
   Description:
   A chat-driven AI career assistant that performs resume analysis, ATS scoring,
   job market insights, and personalized career roadmap generation.
   Key Features:
   - LangChain-based intent routing for different career-related queries
   - ATS-optimized resume evaluation
   - Web scraping for live job market intelligence
   - RAG-based personalized career recommendations
   Tech Stack: Python, FastAPI, LangChain, RAG, Web Scraping, React
   project link - https://github.com/codexankiiit31/Student-Career-Analyser-Agent

3. ChronoMind – Smart Scheduler
   Description:
   A conversational AI scheduling assistant that enables meeting booking through
   multi-turn conversations with Google Calendar integration.
   Key Features:
   - Voice-based interaction using Whisper for speech recognition
   - Natural voice synthesis using ElevenLabs
   - Low-latency end-to-end conversational scheduling
   Tech Stack: Flask, Gemini API, Whisper, ElevenLabs, Google Calendar API, LangChain
   project link - https://github.com/codexankiiit31/ChronoMind--Smart-Scheduler

--- CERTIFICATIONS ---
1. Big Data Computing — NPTEL (2025)
2. Machine Learning Specialization — Andrew Ng (Coursera, 2024)
3. LLM Engineering: Master AI, Large Language Models and Agents — Udemy (2025)

--- EXTRACURRICULAR & ACHIEVEMENTS ---
- Leader, Rashtraay (Street Play Society) — 3× National Champion
- Event Lead, Annual College Technical Fest — Managed logistics and event coordination

===== END OF RESUME =====
"""

# ── LangChain prompt template (imported by llm_services.py) ───────────────────
_prompt = ChatPromptTemplate.from_messages([
    ("system", """You are a helpful AI assistant on Ankit's portfolio website.
Answer questions ONLY using the resume data below.
If the answer is not in the resume, say: "I don't have that information in Ankit's resume."
Keep answers concise, friendly, and professional.

RESUME:
{resume}"""),
    ("human", "{question}"),
])
