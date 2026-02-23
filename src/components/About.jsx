import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiLightningBolt, HiCode } from 'react-icons/hi'
import { RiRobot2Fill } from 'react-icons/ri'

const highlights = [
    {
        icon: <HiAcademicCap className="text-2xl text-accent-400" />,
        title: 'B.Tech in AI & ML',
        desc: 'MITS Gwalior',
    },
    {
        icon: <HiLightningBolt className="text-2xl text-cyan-400" />,
        title: 'Applied AI Focus',
        desc: 'LLMs, RAG & Agents',
    },
    {
        icon: <HiCode className="text-2xl text-violet-400" />,
        title: 'Builder Mindset',
        desc: 'Project-Driven Learning',
    },
    {
        icon: <RiRobot2Fill className="text-2xl text-emerald-400" />,
        title: 'AI Chat Assistant',
        desc: 'Ask me anything — bottom right ↘',
    },
]

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-accent-400 font-mono text-sm mb-3 tracking-wider uppercase">
                        About Me
                    </p>
                    <h2 className="section-title text-white">
                        Crafting <span className="gradient-text">intelligent systems</span> that matter
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 mt-8">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="md:col-span-3 space-y-5"
                    >
                        <p className="text-white/60 text-lg leading-relaxed">
                            I'm a final-year B.Tech student specializing in{' '}
                            <span className="text-white/90">Artificial Intelligence and Machine Learning</span> at
                            MITS Gwalior. I love building systems that go beyond demos — real products that solve
                            real problems.
                        </p>
                        <p className="text-white/60 text-lg leading-relaxed">
                            My work revolves around{' '}
                            <span className="text-white/90">Large Language Models, RAG architectures, and
                                Agentic AI</span>. From fine-tuning LLaMA models with QLoRA to designing end-to-end
                            AI pipelines with LangChain and FastAPI, I thrive at the intersection of research and
                            product engineering.
                        </p>
                        <p className="text-white/60 text-lg leading-relaxed">
                            Every project I take on is driven by curiosity and a hands-on mindset — I believe the
                            best way to learn AI is to build with it.
                        </p>
                        <div className="flex items-start gap-3 p-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 mt-2">
                            <RiRobot2Fill className="text-emerald-400 text-xl shrink-0 mt-0.5" />
                            <p className="text-white/60 text-sm leading-relaxed">
                                <span className="text-emerald-400 font-semibold">Want to know more?</span> There's a live{' '}
                                <span className="text-white/85 font-medium">AI chat assistant</span> on this page (bottom-right corner){' '}
                                trained on Ankit's resume. Ask it anything — his skills, projects, experience, or how to reach him!
                            </p>
                        </div>
                    </motion.div>

                    {/* Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="md:col-span-2 space-y-4"
                    >
                        {highlights.map((item, i) => (
                            <div
                                key={i}
                                className="glass-card p-5 flex items-center gap-4"
                            >
                                <div className="p-3 rounded-xl bg-white/5">{item.icon}</div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                    <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
