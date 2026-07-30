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
  const [rect, setRect] = useState({ top: 0, left: 0 });
  const { scrollY } = useScroll();

  const yOffset = useTransform(scrollY, (y) => -rect.top + y);

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

    const updateSizeAndRect = () => {
      setVpSize({
        width: `${document.documentElement.clientWidth}px`,
        height: `${window.innerHeight}px`,
      });
      if (cardRef.current) {
        const box = cardRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        setRect({
          top: box.top + scrollTop,
          left: box.left + scrollLeft,
        });
      }
    };
    
    updateSizeAndRect();
    window.addEventListener("resize", updateSizeAndRect);
    
    // Framer motion entrance animations cause the card to start at y: 24.
    // Wait for the animation to finish (usually 0.6s) before capturing the final absolute position.
    const timeoutId = setTimeout(updateSizeAndRect, 800);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateSizeAndRect);
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
              x: -rect.left,
              y: yOffset,
              transformOrigin: "50% 50%",
              scale: 1.8, // Good visible magnification
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
