import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import bgF1 from "@/assets/bg-f1.png";

type LensCardProps = import("framer-motion").HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  interactive?: boolean;
};

export function LensCard({ children, className, interactive = true, ...rest }: LensCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [rect, setRect] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    const updateRect = () => {
      if (cardRef.current) {
        setRect(cardRef.current.getBoundingClientRect());
      }
    };
    updateRect();
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, { passive: true });
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  // Correct calculation for parallax/magnification offset
  const yOffset = useTransform(scrollY, (y) => -rect.top + y);

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
      className={cn("relative group", className)}
      {...rest}
    >
      {/* MAGNIFIED BACKGROUND CLONE */}
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute flex items-center justify-center bg-black"
          style={{
            width: "100vw",
            height: "100vh",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: yOffset,
            scale: 1.8,
            marginTop: "-50vh",
          }}
        >
          <img
            src={bgF1}
            alt=""
            className="w-full h-full object-cover opacity-80 brightness-150 contrast-125"
          />
        </motion.div>
      </div>

      {/* GLASS BLUR LAYER (Blurs the clone) */}
      <div className="liquid-glass absolute inset-0 rounded-[inherit] pointer-events-none z-10" />

      {/* OVERFLOW HIDDEN LAYER (For highlights) */}
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-10">
        {/* Full-card hover highlight */}
        <div className="absolute inset-0 bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
