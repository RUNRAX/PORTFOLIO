import { motion } from "framer-motion";

const stack = [
  { name: "React", glyph: "⚛" },
  { name: "Next.js", glyph: "▲" },
  { name: "Node.js", glyph: "⬢" },
  { name: "Python", glyph: "🐍" },
  { name: "Flask", glyph: "🧪" },
  { name: "Supabase", glyph: "⚡" },
  { name: "Tailwind", glyph: "🌊" },
  { name: "Kali Linux", glyph: "🐉" },
  { name: "Metasploit", glyph: "🎯" },
];

export function TechArsenal() {
  return (
    <section className="relative px-6 pb-24">
      <div className="mx-auto flex max-w-4xl justify-center">
        <div className="liquid-glass flex flex-wrap items-center justify-center gap-2 rounded-full px-4 py-3">
          {stack.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ scale: 1.15, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-foreground/85 hover:bg-foreground/10 cursor-pointer"
            >
              <span className="text-base leading-none grayscale transition-all duration-300 group-hover:grayscale-0">{t.glyph}</span>
              <span className="hidden sm:inline">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
