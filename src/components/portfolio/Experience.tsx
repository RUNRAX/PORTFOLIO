import { motion } from "framer-motion";
import { LensCard } from "./LensCard";
import { experience } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { Building2, ArrowRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Experience</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Where I've Worked
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ transform: i === 1 ? "translateY(24px)" : undefined }}
            >
              <Link to={"/experience/" + exp.id} className="block h-full">
                <LensCard className="p-6 rounded-3xl flex h-full min-h-[280px] flex-col group cursor-pointer">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl">
                      <Building2 className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="liquid-glass-light rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/80">
                      {exp.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{exp.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                    {exp.bullets[0]}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-xs font-medium text-foreground/60 transition-colors group-hover:text-foreground">
                      View details
                    </span>
                    <ArrowRight className="h-4 w-4 text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                </LensCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
