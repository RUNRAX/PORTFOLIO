import { motion } from "framer-motion";
import { LensCard } from "./LensCard";
import { skills } from "@/lib/data";

const skillGlyphs: Record<string, string> = {
  "React.js": "⚛",
  "Next.js 14": "▲",
  "Node.js": "⬢",
  "Python": "🐍",
  "Flask": "🧪",
  "Supabase": "⚡",
  "PostgreSQL": "🐘",
  "Docker": "🐳",
  "Git": "🐙",
  "TypeScript": "📘",
  "JavaScript": "💛",
  "Java": "☕",
  "C/C++": "⚙",
  "FastAPI": "⚡",
};

const allSkills = [
  ...skills.Languages,
  ...skills["Web & Backend"],
  ...skills["Databases & Cloud"],
  ...skills["Engineering Practices"],
];

export function TechArsenal() {
  // Duplicate array for seamless marquee
  const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 z-20 w-16 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-20 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
        {marqueeItems.map((skill, idx) => (
          <LensCard
            key={idx}
            interactive={true}
            className="flex flex-none items-center gap-2 rounded-full px-5 py-2.5 transition-colors hover:bg-foreground/10 cursor-pointer"
          >
            <span className="text-lg leading-none">{skillGlyphs[skill] || "✦"}</span>
            <span className="text-sm font-medium tracking-wide text-foreground/90 whitespace-nowrap">
              {skill}
            </span>
          </LensCard>
        ))}
      </div>
    </section>
  );
}
