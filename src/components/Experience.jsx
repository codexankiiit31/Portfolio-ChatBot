import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi'

const experiences = [
    {
        role: 'AI/ML Intern',
        company: 'Excellup',
        location: 'Remote',
        duration: 'June 2025 – August 2025',
        description: [
            'Developed a multilingual AI chatbot using advanced LLM orchestration and prompt chaining techniques',
            'Built production-grade RAG pipelines for domain-specific knowledge retrieval and contextual response generation',
            'Designed and implemented complex LLM workflows with prompt chaining for multi-step reasoning tasks',
            'Optimized system performance through iterative prompt engineering and pipeline architecture refinements',
        ],
        technologies: ['LLMs', 'RAG', 'Prompt Chaining', 'LangChain', 'Python', 'FastAPI'],
    },
]

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="experience" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-accent-400 font-mono text-sm mb-3 tracking-wider uppercase">
                        Experience
                    </p>
                    <h2 className="section-title text-white">
                        Where I've <span className="gradient-text">worked</span>
                    </h2>
                    <p className="section-subtitle">
                        Professional experience building AI systems in production environments.
                    </p>
                </motion.div>

                <div className="relative pl-12">
                    {/* Timeline Line */}
                    <div className="timeline-line" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative mb-8"
                        >
                            {/* Timeline Dot */}
                            <div className="timeline-dot top-6" />

                            <div className="glass-card p-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <HiBriefcase className="text-accent-400" />
                                            {exp.role}
                                        </h3>
                                        <p className="text-accent-400 font-semibold mt-1">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                                        <span className="flex items-center gap-1.5 text-white/40 text-sm">
                                            <HiCalendar className="text-xs" />
                                            {exp.duration}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-white/40 text-sm">
                                            <HiLocationMarker className="text-xs" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-5">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-white/55 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-400/60 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="tag-chip">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
