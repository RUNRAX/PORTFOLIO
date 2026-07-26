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
        
        {/* MAGNIFYING GLASS DOM HACK WITH SVG NON-LINEAR DISPLACEMENT */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-[-1]">
          
          {/* SVG Filter Definition for Cylindrical Warping */}
          <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
            <filter id="cylindrical-warp" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
              {/* Data-URI of a custom linear gradient: 
                  Green channel controls Y displacement. 
                  Top (0%) = Green 0 (pull up max)
                  Center (50%) = Green 128 (no displacement)
                  Bottom (100%) = Green 255 (pull down max)
              */}
              <feImage 
                href="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27100%27%20height%3D%27100%27%3E%3Cdefs%3E%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%270%27%20y2%3D%271%27%3E%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27rgb%280%2C0%2C0%29%27%2F%3E%3Cstop%20offset%3D%2715%25%27%20stop-color%3D%27rgb%280%2C100%2C0%29%27%2F%3E%3Cstop%20offset%3D%2740%25%27%20stop-color%3D%27rgb%280%2C128%2C0%29%27%2F%3E%3Cstop%20offset%3D%2760%25%27%20stop-color%3D%27rgb%280%2C128%2C0%29%27%2F%3E%3Cstop%20offset%3D%2785%25%27%20stop-color%3D%27rgb%280%2C155%2C0%29%27%2F%3E%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27rgb%280%2C255%2C0%29%27%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%27100%27%20height%3D%27100%27%20fill%3D%27url%28%23g%29%27%2F%3E%3C%2Fsvg%3E" 
                result="map" 
                preserveAspectRatio="none"
                x="0" y="0" width="100%" height="100%"
              />
              <feDisplacementMap in="SourceGraphic" in2="map" scale="25" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>

          {/* Map to physical screen coordinates and apply the SVG warp filter */}
          <div className="absolute w-[100vw] h-[100vh]" style={{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }}>
            <div className="w-full h-full origin-[50%_46px] scale-[1.1] opacity-90" style={{ filter: 'url(#cylindrical-warp)' }}>
              {/* Sync with page scroll */}
              <motion.div style={{ y: yOffset }}>
                <div dangerouslySetInnerHTML={{ __html: clonedContent }} />
              </motion.div>
            </div>
          </div>

          {/* CYLINDRICAL REFRACTION LIGHTING ILLUSION */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-transparent to-[rgba(0,0,0,0.6)] shadow-[inset_0_8px_16px_rgba(255,255,255,0.1),inset_0_-12px_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>

          {/* HIGH EDGE REFRACTION / DISTORTION */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none backdrop-blur-2xl backdrop-saturate-[300%]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%), linear-gradient(to right, black 0%, transparent 15%, transparent 85%, black 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%), linear-gradient(to right, black 0%, transparent 15%, transparent 85%, black 100%)'
            }}
          ></div>
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
