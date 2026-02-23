import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    SiPython, SiCplusplus, SiFastapi, SiFlask, SiStreamlit,
    SiMysql, SiGit, SiGithub, SiGooglecloud
} from 'react-icons/si'
import { HiChip, HiCode, HiDatabase, HiCog } from 'react-icons/hi'

const skillCategories = [
    {
        title: 'Languages',
        icon: <HiCode className="text-xl text-accent-400" />,
        color: 'from-indigo-500/10 to-violet-500/10',
        borderColor: 'border-indigo-500/20',
        skills: [
            { name: 'Python', icon: <SiPython /> },
            { name: 'C', icon: null },
            { name: 'C++', icon: <SiCplusplus /> },
        ],
    },
    {
        title: 'AI & Machine Learning',
        icon: <HiChip className="text-xl text-cyan-400" />,
        color: 'from-cyan-500/10 to-blue-500/10',
        borderColor: 'border-cyan-500/20',
        skills: [
            { name: 'Machine Learning', icon: null },
            { name: 'Deep Learning', icon: null },
            { name: 'NLP', icon: null },
            { name: 'LLMs', icon: null },
            { name: 'RAG', icon: null },
            { name: 'Prompt Engineering', icon: null },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        icon: <HiCog className="text-xl text-violet-400" />,
        color: 'from-violet-500/10 to-purple-500/10',
        borderColor: 'border-violet-500/20',
        skills: [
            { name: 'FastAPI', icon: <SiFastapi /> },
            { name: 'Flask', icon: <SiFlask /> },
            { name: 'LangChain', icon: null },
            { name: 'LangGraph', icon: null },
            { name: 'Streamlit', icon: <SiStreamlit /> },
        ],
    },
    {
        title: 'Databases & Vector Stores',
        icon: <HiDatabase className="text-xl text-emerald-400" />,
        color: 'from-emerald-500/10 to-teal-500/10',
        borderColor: 'border-emerald-500/20',
        skills: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'FAISS', icon: null },
            { name: 'ChromaDB', icon: null },
        ],
    },
    {
        title: 'Tools & Platforms',
        icon: <HiCog className="text-xl text-amber-400" />,
        color: 'from-amber-500/10 to-orange-500/10',
        borderColor: 'border-amber-500/20',
        skills: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'VS Code', icon: null },
            { name: 'GCP', icon: <SiGooglecloud /> },
            { name: 'PyCharm', icon: null },
        ],
    },
]

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-accent-400 font-mono text-sm mb-3 tracking-wider uppercase">
                        Skills & Technologies
                    </p>
                    <h2 className="section-title text-white">
                        My <span className="gradient-text">tech stack</span>
                    </h2>
                    <p className="section-subtitle">
                        Tools and technologies I work with to build intelligent systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className={`glass-card p-6 border ${cat.borderColor}`}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color}`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-white font-semibold">{cat.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span key={skill.name} className="tag-chip flex items-center gap-1.5">
                                        {skill.icon && <span className="text-xs opacity-70">{skill.icon}</span>}
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
