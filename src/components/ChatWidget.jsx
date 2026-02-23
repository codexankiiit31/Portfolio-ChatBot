import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiPaperAirplane, HiSparkles } from 'react-icons/hi'
import { RiRobot2Fill } from 'react-icons/ri'

const SUGGESTIONS = [
    'What projects has Ankit built?',
    'What are his top skills?',
    'Tell me about his experience',
]

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi there! 👋 I'm Ankit's AI assistant. Ask me anything about his skills, projects, experience, or education!",
        },
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(true)
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(() => {
        if (isOpen) inputRef.current?.focus()
    }, [isOpen])

    async function sendMessage(text) {
        const trimmed = text.trim()
        if (!trimmed || isLoading) return

        setInput('')
        setShowSuggestions(false)
        setMessages((prev) => [...prev, { role: 'user', content: trimmed }])
        setIsLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: trimmed }),
            })

            if (!res.ok) throw new Error(`Server error: ${res.status}`)

            const data = await res.json()
            setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: "Sorry, I couldn't connect to the server right now. Please try again later.",
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    function handleSubmit(e) {
        e?.preventDefault()
        sendMessage(input)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage(input)
        }
    }

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setIsOpen(true)}
                        className="chat-fab"
                        id="chat-open-button"
                        aria-label="Open AI Chat"
                    >
                        <RiRobot2Fill size={26} />
                        <span className="chat-fab-pulse" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.88 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        className="chat-panel"
                        id="chat-panel"
                    >
                        {/* Header */}
                        <div className="chat-header">
                            <div className="flex items-center gap-3">
                                <div className="chat-avatar-ring">
                                    <div className="chat-avatar">
                                        <RiRobot2Fill size={18} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
                                        Ask Ankit's AI
                                        <HiSparkles className="text-accent-400 text-xs" />
                                    </h3>
                                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Online · Powered by LLM
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/8 transition-all"
                                aria-label="Close chat"
                            >
                                <HiX size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="chat-messages">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    {/* Avatar */}
                                    {msg.role === 'assistant' && (
                                        <div className="chat-msg-avatar shrink-0">
                                            <RiRobot2Fill size={13} />
                                        </div>
                                    )}

                                    <div className={`chat-bubble ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing indicator */}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-end gap-2"
                                >
                                    <div className="chat-msg-avatar shrink-0">
                                        <RiRobot2Fill size={13} />
                                    </div>
                                    <div className="chat-bubble chat-bubble-ai">
                                        <div className="chat-typing">
                                            <span /><span /><span />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Quick suggestions */}
                            {showSuggestions && messages.length === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col gap-2 mt-1"
                                >
                                    <p className="text-white/30 text-xs px-1">Try asking:</p>
                                    {SUGGESTIONS.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => sendMessage(s)}
                                            className="suggestion-chip"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="chat-input-area">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about skills, projects..."
                                className="chat-input"
                                disabled={isLoading}
                                id="chat-input"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="chat-send-btn"
                                aria-label="Send message"
                            >
                                <HiPaperAirplane size={16} className="rotate-90" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
