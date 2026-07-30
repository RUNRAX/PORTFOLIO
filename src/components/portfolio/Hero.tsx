import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Github, Linkedin } from "lucide-react";
import { bio } from "@/lib/data";
import { LensCard } from "./LensCard";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide text-foreground/80"
      >
        <Sparkles className="h-3.5 w-3.5" />
        {bio.title}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-6xl font-semibold leading-[0.95] tracking-tight text-transparent md:text-8xl"
      >
        {bio.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg"
      >
        {bio.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <LensCard
          onClick={() => window.location.href = "#work"}
          whileHover={{ scale: 1.04, backgroundColor: "color-mix(in srgb, var(--color-foreground) 12%, transparent)" }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer"
        >
          Explore Work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </LensCard>
        <LensCard
          onClick={() => window.open(bio.github, "_blank")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="liquid-glass-light rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 hover:text-foreground cursor-pointer"
        >
          <Github className="h-4 w-4" />
          GitHub
        </LensCard>
        <LensCard
          onClick={() => window.open(bio.linkedin, "_blank")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="liquid-glass-light rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 hover:text-foreground cursor-pointer"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </LensCard>
      </motion.div>
    </section>
  );
}
