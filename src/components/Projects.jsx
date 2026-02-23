import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiChartBar } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
    {
        title: 'AI Deal Analyzer',
        tagline: 'Agentic AI for validating online deals',
        description:
            'An end-to-end Agentic AI system that validates and analyzes online deals using a hybrid LLM + RAG + XGBoost architecture. Fine-tuned LLaMA 3.1 (8B) with QLoRA for domain-specific price prediction.',
        stack: ['LLaMA 3.1', 'QLoRA', 'RAG', 'XGBoost', 'FastAPI', 'React', 'FAISS'],
        metrics: [
            { label: 'R² Score', value: '0.92' },
            { label: 'RMSE', value: '$55' },
        ],
        color: 'from-indigo-500 to-violet-500',
        featured: true,
    },
    {
        title: 'Career Advisor & Analyzer',
        tagline: 'AI-powered career guidance assistant',
        description:
            'An intelligent career guidance assistant that performs resume analysis, ATS scoring, and generates personalized job insights. Built with LangChain-based routing and RAG for contextual recommendations.',
        stack: ['LangChain', 'RAG', 'Python', 'Streamlit', 'ChromaDB'],
        metrics: [],
        color: 'from-cyan-500 to-blue-500',
        featured: false,
    },
    {
        title: 'ChronoMind – Smart Scheduler',
        tagline: 'Conversational AI scheduler',
        description:
            'A conversational AI scheduler with Google Calendar integration and voice-based interaction. Uses Whisper for speech recognition and ElevenLabs for natural voice synthesis, enabling hands-free scheduling.',
        stack: ['Whisper', 'ElevenLabs', 'Google Calendar API', 'LangChain', 'Python'],
        metrics: [],
        color: 'from-violet-500 to-purple-500',
        featured: false,
    },
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="projects" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-accent-400 font-mono text-sm mb-3 tracking-wider uppercase">
                        Projects
                    </p>
                    <h2 className="section-title text-white">
                        What I've <span className="gradient-text">built</span>
                    </h2>
                    <p className="section-subtitle">
                        Real-world AI systems — not just demos. Each project tackles genuine problems with
                        production-grade architecture.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <div className="glass-card overflow-hidden group">
                                {/* Gradient Top Bar */}
                                <div className={`h-1 bg-gradient-to-r ${project.color}`} />

                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            {project.featured && (
                                                <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent-500/15 text-accent-400 rounded-full mb-3 border border-accent-500/20">
                                                    ★ Featured Project
                                                </span>
                                            )}
                                            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                            <p className="text-accent-400/80 font-medium text-sm">{project.tagline}</p>
                                        </div>

                                        {/* Metrics */}
                                        {project.metrics.length > 0 && (
                                            <div className="flex gap-4">
                                                {project.metrics.map((m) => (
                                                    <div
                                                        key={m.label}
                                                        className="text-center px-4 py-3 rounded-xl bg-white/5 border border-white/5"
                                                    >
                                                        <div className="text-xl font-bold text-white flex items-center gap-1">
                                                            <HiChartBar className="text-emerald-400 text-sm" />
                                                            {m.value}
                                                        </div>
                                                        <div className="text-xs text-white/40 mt-1">{m.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-white/50 leading-relaxed mb-6 max-w-3xl">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="tag-chip">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
