import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LensCardProps = import("framer-motion").HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  interactive?: boolean;
};

export function LensCard({ children, className, interactive = true, ...rest }: LensCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      whileHover={
        interactive
          ? {
              scale: 1.02,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }
          : undefined
      }
      className={cn("liquid-glass p-6 rounded-3xl relative overflow-hidden group", className)}
      {...rest}
    >
      {/* Specular highlight sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-60"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.05) 100%)",
        }}
      />
      
      {/* Full-card hover highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
