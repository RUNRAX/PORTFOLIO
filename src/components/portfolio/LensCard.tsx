import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

type LensCardProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  interactive?: boolean;
};

export const LensCard = React.forwardRef<HTMLDivElement, LensCardProps>(
  ({ children, className, interactive = true, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          interactive
            ? {
                scale: 1.02,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }
            : undefined
        }
        className={cn(
          "liquid-glass relative overflow-hidden group rounded-3xl p-6",
          className
        )}
        {...rest}
      >
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);
LensCard.displayName = "LensCard";

