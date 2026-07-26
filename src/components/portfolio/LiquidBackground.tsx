import { motion } from "framer-motion";
import bgFlame from "@/assets/bg-flame.png.asset.json";

const mantras = [
  "DISCIPLINE",
  "BUILD RELENTLESSLY",
  "STAY HUNGRY",
  "OWN THE CRAFT",
  "NO SHORTCUTS",
  "OUTWORK YESTERDAY",
  "FOCUS · EXECUTE · REPEAT",
  "PROOF OVER PROMISE",
];

export function LiquidBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Flame photo — rotated to landscape orientation, covers viewport */}
      <div className="absolute inset-0">
        <img
          src={bgFlame.url}
          alt=""
          className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-cover"
        />
        {/* Darkening + warmth balance so glass panels stay legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Motivational typography layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-[6%] top-[6%] whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tighter animate-drift-slow"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.01) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          RELENTLESS
        </div>
        <div
          className="absolute -right-[4%] top-[40%] whitespace-nowrap text-[12vw] font-black uppercase leading-none tracking-tighter animate-drift"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
          }}
        >
          NO&nbsp;LIMITS
        </div>
        <div
          className="absolute left-[2%] bottom-[6%] whitespace-nowrap text-[13vw] font-black uppercase leading-none tracking-tighter animate-drift-slow"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
          }}
        >
          BUILT · NOT BORN
        </div>

        {/* Scattered mantra chips */}
        {mantras.map((m, i) => {
          const top = [12, 22, 34, 48, 60, 72, 82, 90][i % 8];
          const left = [72, 8, 55, 20, 82, 40, 15, 62][i % 8];
          return (
            <span
              key={m}
              className="absolute select-none text-[11px] uppercase tracking-[0.35em] text-white/[0.07]"
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              {m}
            </span>
          );
        })}

        {/* Faint horizontal rule lines */}
        <div
          className="absolute inset-x-0 top-1/3 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-2/3 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Slow morphing blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] h-[60vmax] w-[60vmax] rounded-full blur-3xl animate-blob-a"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), rgba(255,255,255,0.02) 60%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-15%] h-[70vmax] w-[70vmax] rounded-full blur-3xl animate-blob-b"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(220,220,220,0.18), rgba(26,26,26,0.05) 55%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute top-[30%] left-[30%] h-[50vmax] w-[50vmax] rounded-full blur-3xl animate-blob-c"
        style={{
          background: "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.14), transparent 65%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.75) 100%)",
        }}
      />
    </div>
  );
}
