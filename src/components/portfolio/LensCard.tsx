import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useAnimationFrame } from "framer-motion";
import { cn } from "@/lib/utils";

type LensCardProps = import("framer-motion").HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  interactive?: boolean;
};

export function LensCard({ children, className, interactive = true, ...rest }: LensCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [clonedHtml, setClonedHtml] = useState<string>("");
  const [vpSize, setVpSize] = useState({ width: "100vw", height: "100vh" });
  const cloneX = useMotionValue(0);
  const cloneY = useMotionValue(0);

  useAnimationFrame(() => {
    if (cardRef.current) {
      const box = cardRef.current.getBoundingClientRect();
      cloneX.set(-box.left);
      cloneY.set(-box.top);
    }
  });

  useEffect(() => {
    let rafId: number;
    const checkBg = () => {
      const bgElement = document.getElementById("lens-background");
      if (bgElement && bgElement.innerHTML) {
        setClonedHtml(bgElement.innerHTML);
      } else {
        rafId = requestAnimationFrame(checkBg);
      }
    };
    checkBg();

    const updateSize = () => {
      setVpSize({
        width: `${document.documentElement.clientWidth}px`,
        height: `${window.innerHeight}px`,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

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
      className={cn("liquid-glass relative overflow-hidden group", className)}
      {...rest}
    >
      {/* MAGNIFIED BACKGROUND CLONE */}
      {clonedHtml && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit] z-[-1] opacity-70">
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: 0,
              left: 0,
              width: vpSize.width,
              height: vpSize.height,
              x: cloneX,
              y: cloneY,
              transformOrigin: "50% 50%",
              scale: 1.5, // Magnification scale
              filter: "blur(24px) saturate(200%) contrast(120%) brightness(1.15)",
              willChange: "transform, filter",
              backfaceVisibility: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: clonedHtml }}
          />
        </div>
      )}

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
