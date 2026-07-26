import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="relative flex items-center gap-1 rounded-full px-2 py-1.5 bg-white/5 backdrop-blur-[4px] backdrop-saturate-[250%] backdrop-contrast-125 border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.3)]">
        <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-125 hover:bg-white/10 hover:shadow-lg origin-bottom">
          RA
        </a>
        <a
          href="#work"
          className="rounded-full px-4 py-2 text-sm text-white/70 hover:bg-white/15 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg origin-bottom"
        >
          Work
        </a>
        <a
          href="#about"
          className="rounded-full px-4 py-2 text-sm text-white/70 hover:bg-white/15 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg origin-bottom"
        >
          About
        </a>
        <a
          href="mailto:rakshit@example.com"
          className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 origin-bottom"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
