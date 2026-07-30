import { motion } from "framer-motion";
import { LensCard } from "./LensCard";
import { education, certifications } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Academics & Certifications</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Education
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <LensCard className="p-6 rounded-3xl flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl">
                  <GraduationCap className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Degree</h3>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-base font-medium text-foreground">{education.degree}</p>
                <p className="text-sm text-foreground/70">{education.school}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="liquid-glass-light rounded-full px-3 py-1 text-xs text-foreground/80">
                    CGPA: {education.cgpa}
                  </span>
                  <span className="text-sm text-foreground/50">{education.date}</span>
                </div>
              </div>
            </LensCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <LensCard className="p-6 rounded-3xl flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl">
                  <ShieldCheck className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <Link
                      to={"/certifications/" + cert.id}
                      className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-foreground/5"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary">
                          {cert.title}
                        </p>
                        <p className="text-xs text-foreground/60">{cert.issuer} • {cert.year}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </LensCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
