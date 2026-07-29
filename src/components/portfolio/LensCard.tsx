import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
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

  useEffect(() => {
    // Clone the background safely
    const bgElement = document.getElementById("lens-background");
    if (bgElement) {
      setClonedHtml(bgElement.innerHTML);
    }

    const updateRect = () => {
      if (cardRef.current) {
        // Get absolute offset relative to the document
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
    // Use a ResizeObserver in case layout changes
    const observer = new ResizeObserver(updateRect);
    if (cardRef.current) observer.observe(document.body);

    return () => {
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit] z-[-1] opacity-60 dark:opacity-100">
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: -rect.top,
              left: -rect.left,
              width: "100vw",
              height: "100vh",
              y: scrollY,
              transformOrigin: `${rect.left + 150}px ${rect.top + 150}px`, // approximate center
              scale: 2.0, // Magnification scale
              filter: "blur(2px) saturate(140%) contrast(110%)",
            }}
            dangerouslySetInnerHTML={{ __html: clonedHtml }}
          />
        </div>
      )}

      {/* TOP EDGE TIR */}
      {clonedHtml && (
        <div 
          className="absolute inset-0 pointer-events-none z-[-1] opacity-60 dark:opacity-100"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 20%)', maskImage: 'linear-gradient(to bottom, black 0%, transparent 20%)' }}
        >
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: -rect.top,
              left: -rect.left,
              width: "100vw",
              height: "100vh",
              y: scrollY,
              transformOrigin: `${rect.left + 150}px ${rect.top}px`,
              scaleY: -3.2,
              scaleX: 2.2,
              filter: "blur(4px) saturate(180%) contrast(120%) brightness(1.2)",
            }}
            dangerouslySetInnerHTML={{ __html: clonedHtml }}
          />
        </div>
      )}

      {/* BOTTOM EDGE TIR */}
      {clonedHtml && (
        <div 
          className="absolute inset-0 pointer-events-none z-[-1] opacity-60 dark:opacity-100"
          style={{ WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 20%)', maskImage: 'linear-gradient(to top, black 0%, transparent 20%)' }}
        >
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: -rect.top,
              left: -rect.left,
              width: "100vw",
              height: "100vh",
              y: scrollY,
              transformOrigin: `${rect.left + 150}px ${rect.top + 300}px`,
              scaleY: -3.2,
              scaleX: 2.2,
              filter: "blur(4px) saturate(180%) contrast(120%) brightness(1.2)",
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
      
      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 -m-6 bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {children}
      </div>
    </motion.div>
  );
}
