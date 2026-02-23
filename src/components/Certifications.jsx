import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiBadgeCheck, HiStar, HiUserGroup } from 'react-icons/hi'

const certifications = [
    {
        title: 'Big Data Computing',
        issuer: 'NPTEL',
        icon: <HiAcademicCap className="text-2xl text-cyan-400" />,
        color: 'border-cyan-500/20',
    },
    {
        title: 'Machine Learning Specialization',
        issuer: 'Andrew Ng (Coursera)',
        icon: <HiBadgeCheck className="text-2xl text-accent-400" />,
        color: 'border-accent-500/20',
    },
    {
        title: 'LLM Engineering',
        issuer: 'Udemy',
        icon: <HiBadgeCheck className="text-2xl text-violet-400" />,
        color: 'border-violet-500/20',
    },
]

const achievements = [
    {
        title: '3× National Champion',
        description: 'Leader at Rashtraay — a leading cultural and competitive team',
        icon: <HiStar className="text-2xl text-amber-400" />,
        color: 'border-amber-500/20',
    },
    {
        title: 'Event Lead',
        description: 'Led events at college technical fest, managing teams and operations',
        icon: <HiUserGroup className="text-2xl text-emerald-400" />,
        color: 'border-emerald-500/20',
    },
]

export default function Certifications() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="certifications" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-accent-400 font-mono text-sm mb-3 tracking-wider uppercase">
                        Certifications & Achievements
                    </p>
                    <h2 className="section-title text-white">
                        Recognition & <span className="gradient-text">growth</span>
                    </h2>
                    <p className="section-subtitle">
                        Continuous learning and leadership beyond the code.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="mb-12">
                    <h3 className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-6">
                        Certifications
                    </h3>
                    <div className="grid md:grid-cols-3 gap-5">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`glass-card p-6 border ${cert.color}`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-white/5">{cert.icon}</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm leading-tight">{cert.title}</h4>
                                        <p className="text-white/40 text-xs mt-0.5">{cert.issuer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements Grid */}
                <div>
                    <h3 className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-6">
                        Achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                        {achievements.map((ach, i) => (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                className={`glass-card p-6 border ${ach.color}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-xl bg-white/5">{ach.icon}</div>
                                    <div>
                                        <h4 className="text-white font-semibold">{ach.title}</h4>
                                        <p className="text-white/40 text-sm mt-1">{ach.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
