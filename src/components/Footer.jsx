import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-[#0a0a0a] via-[#141414] to-[#0a0a0a] border-t border-[#C9A227]/40 shadow-lg shadow-black/50 mt-auto flex justify-between items-center">
            <div className="px-6 py-4 flex items-center">
                <p className="text-sm font-jp text-white/70 ml-4 py-2 sm:mt-0 tracking-wide">
                    © 2026 - Kiroku Ticks <span className="max-md:hidden">— Made with <span className="text-[#B33A3A]">❤️</span> using React & Tailwind CSS.</span>
                </p>
            </div>
            <div className="px-6 py-4 flex items-center flex-row gap-5 text-2xl">
                <a
                    href="https://github.com/syedinjamulhaque"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-all duration-300 hover:scale-125 hover:text-[#C9A227]"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/syedinjamulhaque/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-all duration-300 hover:scale-125 hover:text-[#C9A227]"
                >
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer