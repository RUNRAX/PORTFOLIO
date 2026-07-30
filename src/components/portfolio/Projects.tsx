import { motion } from "framer-motion";
import { LensCard } from "./LensCard";
import { ExternalLink, Sparkles, Building2, Leaf, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Link } from "@tanstack/react-router";

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Selected Work</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Projects
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-foreground/60 md:block">
            Research, production systems, and social-impact applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.id === "synaptic-cinema" ? Sparkles : p.id === "tcs-ion" ? Building2 : Leaf;
            return (
              <Link key={p.title} to={"/projects/" + p.id} className="block h-full">
                <LensCard 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{ transform: i === 1 ? "translateY(24px)" : undefined }}
                  className="p-6 rounded-3xl w-full flex h-full min-h-[280px] flex-col group cursor-pointer"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="liquid-glass-light rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/80">
                      {p.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                    {p.problemStatement}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 2).map((m) => (
                        <span
                          key={m}
                          className="liquid-glass-light rounded-full px-2 py-0.5 text-[10px] text-foreground/80"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="h-4 w-4 text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                </LensCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
