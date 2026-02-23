import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="hero" smooth={true} duration={600} className="cursor-pointer">
                    <span className="text-xl font-bold tracking-tight">
                        <span className="gradient-text">AM</span>
                        <span className="text-white/40 ml-1 font-light">.</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={600}
                            offset={-80}
                            spy={true}
                            activeClass="!text-accent-400"
                            className="px-4 py-2 text-sm text-white/50 hover:text-white/90 cursor-pointer transition-colors duration-200 rounded-lg hover:bg-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white/70 hover:text-white p-2"
                >
                    {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="flex flex-col px-6 py-4 gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 cursor-pointer rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
