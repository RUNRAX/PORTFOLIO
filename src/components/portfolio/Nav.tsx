import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Nav() {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, (y) => -y);
  const [clonedContent, setClonedContent] = useState("");

  useEffect(() => {
    // Wait for the DOM to fully render the magnify-content div
    const timer = setTimeout(() => {
      const sourceContent = document.getElementById("magnify-content");
      if (sourceContent) {
        const clone = sourceContent.cloneNode(true) as HTMLElement;
        const elements = clone.querySelectorAll("*");
        elements.forEach((el) => {
          if (el.hasAttribute("id")) {
            el.removeAttribute("id");
          }
          if (el instanceof HTMLElement) {
            // Force visibility in case framer-motion had opacity: 0 during the clone
            el.style.opacity = "1";
            el.style.transform = "none";
          }
        });
        setClonedContent(clone.innerHTML);
      }
    }, 500); // 500ms delay ensures children are mounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="relative flex items-center gap-1 rounded-full px-2 py-1.5 bg-white/5 backdrop-blur-3xl backdrop-saturate-[250%] backdrop-contrast-125 border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.3)]">
        
        {/* MAGNIFYING GLASS DOM HACK */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-[-1]">
          {/* Map to physical screen coordinates */}
          <div className="absolute w-[100vw] h-[100vh]" style={{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }}>
            {/* Scale/Lens effect originating exactly from the center of the nav bar (24px top + ~22px half height = 46px) */}
            <div className="w-full h-full origin-[50%_46px] scale-[2] blur-[4px] opacity-90">
              {/* Sync with page scroll */}
              <motion.div style={{ y: yOffset }}>
                <div dangerouslySetInnerHTML={{ __html: clonedContent }} />
              </motion.div>
            </div>
          </div>
          
          {/* SPHERICAL REFRACTION LIGHTING ILLUSION */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_rgba(0,0,0,0.4)_100%)] mix-blend-hard-light shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"></div>
        </div>

        <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-125 hover:bg-white/10 hover:shadow-lg origin-bottom">
          RA
        </a>
        <a
          href="#work"
          className="rounded-full px-4 py-2 text-sm text-white/70 hover:bg-white/15 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg origin-bottom"
        >
          Work
        </a>
        <a
          href="#about"
          className="rounded-full px-4 py-2 text-sm text-white/70 hover:bg-white/15 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg origin-bottom"
        >
          About
        </a>
        <a
          href="mailto:rakshit@example.com"
          className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 origin-bottom"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
