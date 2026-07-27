import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlassCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function GlassCard({ children, className, interactive = true, ...rest }: GlassCardProps) {
  return (
    <motion.div
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
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -m-6 bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {children}
      </div>
    </motion.div>
  );
}
