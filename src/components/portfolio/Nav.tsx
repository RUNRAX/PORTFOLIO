import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="liquid-glass-light flex items-center gap-1 rounded-full px-2 py-1.5">
        <a href="#" className="rounded-full px-3 py-1.5 text-sm font-medium text-white">
          RA
        </a>
        <a
          href="#work"
          className="rounded-full px-3 py-1.5 text-sm text-white/70 hover:bg-white/10 hover:text-white"
        >
          Work
        </a>
        <a
          href="#about"
          className="rounded-full px-3 py-1.5 text-sm text-white/70 hover:bg-white/10 hover:text-white"
        >
          About
        </a>
        <a
          href="mailto:rakshit@example.com"
          className="ml-1 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-black hover:bg-white/90"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
