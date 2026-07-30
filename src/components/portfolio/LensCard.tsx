import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LensCardProps = import("framer-motion").HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  interactive?: boolean;
};

export function LensCard({ children, className, interactive = true, ...rest }: LensCardProps) {
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
      className={cn("liquid-glass relative group", className)}
      {...rest}
    >
      {/* Overflow hidden layer for highlights */}
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
        {/* Specular highlight sweep */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 animate-glass-sweep"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.08) 100%)",
          }}
        />
        
        {/* Full-card hover highlight */}
        <div className="absolute inset-0 bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
      </div>

      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
