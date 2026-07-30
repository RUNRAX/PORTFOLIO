import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

type LensCardProps = import("framer-motion").HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  interactive?: boolean;
};

export function LensCard({ children, className, interactive = true, ...rest }: LensCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [clonedHtml, setClonedHtml] = useState<string>("");
  const [rect, setRect] = useState({ top: 0, left: 0 });
  const { scrollY } = useScroll();

  const yOffset = useTransform(scrollY, (y) => -rect.top + y);
  const transformOriginY = useTransform(scrollY, (y) => rect.top - y + 150);
  const centerOrigin = useMotionTemplate`${rect.left + 150}px ${transformOriginY}px`;

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

    const updateRect = () => {
      if (cardRef.current) {
        const element = cardRef.current;
        const box = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        setRect({
          top: box.top + scrollTop,
          left: box.left + scrollLeft,
        });
      }
    };

    updateRect();
    window.addEventListener("resize", updateRect);
    const observer = new ResizeObserver(updateRect);
    if (cardRef.current) observer.observe(document.body);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateRect);
      observer.disconnect();
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
      className={cn("liquid-glass p-6 rounded-3xl relative overflow-hidden group", className)}
      {...rest}
    >
      {/* MAGNIFIED BACKGROUND CLONE */}
      {clonedHtml && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit] z-[-1] opacity-70">
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: 0,
              left: -rect.left,
              width: "100vw",
              height: "100vh",
              y: yOffset,
              transformOrigin: "50vw 50vh",
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
