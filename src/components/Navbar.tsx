import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-sm z-50 border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Eli John Gachago
          </span>
          <div className="hidden sm:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 relative group"
                whileHover={{
                  scale: 1.05,
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
