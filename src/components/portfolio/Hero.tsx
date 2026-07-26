import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide text-white/80"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Full-Stack Developer · Security Enthusiast
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="text-shadow-soft bg-gradient-to-b from-white to-white/60 bg-clip-text text-6xl font-semibold leading-[0.95] tracking-tight text-transparent md:text-8xl"
      >
        Rakshit Awati
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-shadow-soft mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
      >
        Building high-performance web applications and secure systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <motion.a
          href="#work"
          whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.12)" }}
          whileTap={{ scale: 0.98 }}
          className="liquid-glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
        >
          Explore Work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="liquid-glass-light inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white/85 hover:text-white"
        >
          About Me
        </motion.a>
      </motion.div>
    </section>
  );
}
