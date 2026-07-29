import { motion } from "framer-motion";
import bgF1 from "@/assets/bg-f1.png";

export function LiquidBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
    >
      <div id="lens-background" className="absolute inset-0">
        {/* F1 Car Background Image */}
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <img
            src={bgF1}
            alt="F1 Silhouette"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Slow morphing blobs for subtle lighting */}
        <motion.div
          className="absolute top-[-15%] left-[-10%] h-[60vmax] w-[60vmax] rounded-full blur-3xl animate-blob-a opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--color-primary) 25%, transparent), transparent 60%)",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-15%] h-[70vmax] w-[70vmax] rounded-full blur-3xl animate-blob-b opacity-50"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, color-mix(in srgb, var(--color-primary) 25%, transparent), transparent 60%)",
          }}
        />
      </div>
    </div>
  );
}
