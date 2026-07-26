import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { GraduationCap, ShieldCheck, Palette, Music, Utensils, Scissors } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">About</p>
          <h2 className="text-shadow-soft mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Engineer by craft, human by design.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-3">
                <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Education & Credentials</h3>
              </div>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-white/60">Final-year B.E.</p>
                  <p className="text-base font-medium text-white">
                    Information Science & Engineering
                  </p>
                  <p className="mt-1 text-sm text-white/70">CGPA · 8.55</p>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div>
                  <p className="text-sm text-white/60">Certifications (In Progress)</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/85">
                      <ShieldCheck className="h-4 w-4 text-white/60" />
                      Oracle Cloud Infrastructure — Foundations Associate
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/85">
                      <ShieldCheck className="h-4 w-4 text-white/60" />
                      Oracle Cloud Infrastructure — AI Associate
                    </li>
                  </ul>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div>
                  <p className="text-sm text-white/60">Security focus</p>
                  <p className="mt-1 text-sm text-white/85">
                    Penetration Testing · Vulnerability Analysis · Network Security
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-3">
                <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Beyond the terminal</h3>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/75">
                When I step away from the keyboard, I explore color and texture through{" "}
                <span className="text-white">spot painting</span> and{" "}
                <span className="text-white">paper crafting</span>, and I{" "}
                <span className="text-white">sing</span> whenever the room lets me. I&apos;m also a
                curious eater — collecting recipes and flavors from cuisines I&apos;ve never cooked
                before.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: Palette, label: "Spot Painting" },
                  { icon: Scissors, label: "Paper Craft" },
                  { icon: Music, label: "Singing" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="liquid-glass flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4"
                  >
                    <Icon className="h-5 w-5 text-white/85" />
                    <span className="text-[11px] text-white/70">{label}</span>
                  </div>
                ))}
              </div>
              <div className="liquid-glass-light mt-4 flex items-center gap-2 rounded-2xl px-4 py-3 text-xs text-white/80">
                <Utensils className="h-4 w-4" />
                Currently obsessed with regional Indian & East-Asian kitchens.
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
