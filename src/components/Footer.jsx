import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiHeart } from 'react-icons/hi'

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-dark-950">
            <div className="max-w-[1200px] mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <span className="text-lg font-bold">
                            <span className="gradient-text">AM</span>
                            <span className="text-white/40 ml-1 font-light">.</span>
                        </span>
                        <p className="text-white/30 text-sm mt-1">
                            Designed & built by Ankit Mahule
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/ankit-mahule"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ankit-mahule-11xybl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="mailto:ankitmahule@gmail.com"
                            className="p-2.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
                        >
                            <HiMail size={18} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-white/20 text-xs flex items-center justify-center gap-1">
                        Built with <HiHeart className="text-accent-400 text-sm" /> using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}
