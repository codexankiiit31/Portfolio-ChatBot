import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
    return (
        <section id="hero" className="hero-bg min-h-screen flex items-center justify-center relative">
            <div className="section-container text-center relative z-10">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm text-accent-400 font-medium">Open to opportunities</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
                >
                    <span className="text-white">Ankit </span>
                    <span className="gradient-text">Mahule</span>
                </motion.h1>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6"
                >
                    <span className="text-lg md:text-xl font-mono text-accent-400/80 tracking-wide">
                        AI & Machine Learning Engineer
                    </span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Building intelligent systems with{' '}
                    <span className="text-white/80 font-medium">LLMs</span>,{' '}
                    <span className="text-white/80 font-medium">RAG pipelines</span>, and{' '}
                    <span className="text-white/80 font-medium">Agentic AI</span> — turning research into
                    real-world AI products.
                </motion.p>



                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex justify-center gap-4"
                >
                    <a
                        href="https://github.com/ankit-mahule"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ankit-mahule-11xybl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
            >
                <Link to="about" smooth={true} duration={600} className="cursor-pointer">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-accent-400"
                        />
                    </div>
                </Link>
            </motion.div>
        </section>
    )
}
