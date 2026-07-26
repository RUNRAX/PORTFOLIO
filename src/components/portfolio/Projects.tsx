import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { ExternalLink, Sparkles, Building2, Leaf } from "lucide-react";

const projects = [
  {
    icon: Sparkles,
    title: "Synaptic Cinema",
    tag: "Research",
    description:
      "Emotion-driven screening research. Accepted for presentation at ICMLDE-2025 and ICAIES-2025.",
    meta: ["ML", "Affective Computing", "Publication"],
  },
  {
    icon: Building2,
    title: "TCS iON Manpower Portal",
    tag: "Production",
    description:
      "Production-grade operational tracking system engineered with Next.js 14 and Supabase.",
    meta: ["Next.js 14", "Supabase", "Enterprise"],
  },
  {
    icon: Leaf,
    title: "Grama-Sanjeevini",
    tag: "In Development",
    description:
      "Rural pharmacy network application improving medicine accessibility in remote areas.",
    meta: ["React", "Node.js", "Healthcare"],
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Selected Work</p>
            <h2 className="text-shadow-soft mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Projects
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-foreground/60 md:block">
            Research, production systems, and social-impact applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ transform: i === 1 ? "translateY(24px)" : undefined }}
              >
                <GlassCard className="flex h-full min-h-[280px] flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="liquid-glass-light rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/80">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.description}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {p.meta.map((m) => (
                        <span
                          key={m}
                          className="liquid-glass-light rounded-full px-2 py-0.5 text-[10px] text-foreground/80"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="h-4 w-4 text-foreground/40" />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
