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
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div id="lens-background" className="absolute inset-0">
        {/* Flame photo — rotated to landscape orientation, covers viewport */}
      <div className="absolute inset-0">
        <img
          src={bgFlame.url}
          alt=""
          className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-cover opacity-60 dark:opacity-100"
        />
        {/* Darkening + warmth balance so glass panels stay legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-background) 55%, transparent) 0%, color-mix(in srgb, var(--color-background) 35%, transparent) 40%, color-mix(in srgb, var(--color-background) 65%, transparent) 100%)",
          }}
        />
      </div>

      {/* Slow morphing blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] h-[60vmax] w-[60vmax] rounded-full blur-3xl animate-blob-a"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--color-primary) 22%, transparent), color-mix(in srgb, var(--color-primary) 2%, transparent) 60%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-15%] h-[70vmax] w-[70vmax] rounded-full blur-3xl animate-blob-b"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, color-mix(in srgb, var(--color-primary) 18%, transparent), color-mix(in srgb, var(--color-foreground) 5%, transparent) 55%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute top-[30%] left-[30%] h-[50vmax] w-[50vmax] rounded-full blur-3xl animate-blob-c"
        style={{
          background: "radial-gradient(circle at 40% 60%, color-mix(in srgb, var(--color-primary) 14%, transparent), transparent 65%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, color-mix(in srgb, var(--color-background) 85%, transparent) 100%)",
        }}
      />
      </div>
    </div>
  );
}
