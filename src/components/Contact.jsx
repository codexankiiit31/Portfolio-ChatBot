import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const contactLinks = [
    {
        icon: <HiMail className="text-xl text-accent-400" />,
        label: 'Email',
        value: 'ankitmahule@gmail.com',
        href: 'mailto:ankitmahule@gmail.com',
    },
    {
        icon: <FaLinkedin className="text-xl text-accent-400" />,
        label: 'LinkedIn',
        value: 'ankit-mahule-11xybl',
        href: 'https://www.linkedin.com/in/ankit-mahule-11xybl/',
    },
    {
        icon: <FaGithub className="text-xl text-accent-400" />,
        label: 'GitHub',
        value: 'ankit-mahule',
        href: 'https://github.com/ankit-mahule',
    },
]

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // For now, just show a success message. Will integrate with a service later.
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-accent-400 font-mono text-sm mb-3 tracking-wider uppercase">
                        Contact
                    </p>
                    <h2 className="section-title text-white">
                        Let's <span className="gradient-text">connect</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project idea, opportunity, or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-2 space-y-5"
                    >
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-5 flex items-center gap-4 block"
                            >
                                <div className="p-3 rounded-xl bg-white/5">{link.icon}</div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-wider">{link.label}</p>
                                    <p className="text-white font-medium text-sm mt-0.5">{link.value}</p>
                                </div>
                            </a>
                        ))}

                        <div className="glass-card p-5 flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-white/5">
                                <HiLocationMarker className="text-xl text-accent-400" />
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-wider">Location</p>
                                <p className="text-white font-medium text-sm mt-0.5">India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                            <div>
                                <label className="text-white/50 text-sm mb-2 block">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div>
                                <label className="text-white/50 text-sm mb-2 block">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div>
                                <label className="text-white/50 text-sm mb-2 block">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or idea..."
                                    rows={5}
                                    required
                                    className="form-input resize-none"
                                />
                            </div>
                            <button type="submit" className="btn-primary w-full justify-center">
                                {submitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>
                            {submitted && (
                                <p className="text-emerald-400 text-sm text-center">
                                    Thanks for reaching out! I'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
