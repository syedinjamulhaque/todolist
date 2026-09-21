const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-linear-to-r from-[#0a0a0a] via-[#141414] to-[#0a0a0a] border-b border-[#C9A227]/40 shadow-lg shadow-black/50">
            <ul className="flex justify-between items-center px-6 md:px-12 md:min-h-16 min-h-12">
                <li className="group relative cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B33A3A] group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-xl md:text-4xl tracking-wide font-brand text-white group-hover:text-[#C9A227] transition-colors duration-300">
                        Kiroku Ticks
                    </span>
                    <span className="absolute left-0 -bottom-2 h-px w-0 bg-[#C9A227] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="group relative cursor-pointer">
                    <span className="text-lg md:text-2xl font-extrabold font-brand tracking-[0.3em] text-[#C9A227]/90 group-hover:text-[#C9A227] transition-colors duration-300">
                        記録チックス
                    </span>
                    <span className="absolute right-0 -bottom-2 h-px w-0 bg-[#C9A227] transition-all duration-500 group-hover:w-full"></span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar