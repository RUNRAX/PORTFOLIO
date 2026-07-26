import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Nav() {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, (y) => -y);
  const [clonedContent, setClonedContent] = useState("");
  const [isDark, setIsDark] = useState(true);

  // Read initial theme
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

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
      <div className="relative flex items-center gap-1 rounded-full px-2 py-1.5 bg-foreground/5 backdrop-blur-3xl backdrop-saturate-[250%] backdrop-contrast-125 border border-foreground/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.3)]">
        
        {/* MAGNIFYING GLASS DOM HACK */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-[-1]">
          
          {/* 1. Main Center Magnification */}
          <div className="absolute w-[100vw] h-[100vh]" style={{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }}>
            {/* Scale/Lens effect originating exactly from the center of the nav bar (24px top + ~22px half height = 46px) */}
            <div className="w-full h-full origin-[50%_46px] scale-[2.5] opacity-85 blur-[2px]">
              {/* Sync with page scroll */}
              <motion.div style={{ y: yOffset }}>
                <div dangerouslySetInnerHTML={{ __html: clonedContent }} />
              </motion.div>
            </div>
          </div>

          {/* 2. Top Edge Total Internal Reflection */}
          <div className="absolute inset-0 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 35%)', maskImage: 'linear-gradient(to bottom, black 0%, transparent 35%)' }}>
            <div className="absolute w-[100vw] h-[100vh]" style={{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }}>
              {/* Mathematically flip incoming elements above the nav onto the inside top edge */}
              <div className="w-full h-full origin-[50%_24px] scale-y-[-1.8] scale-x-[1.8] opacity-100 blur-[8px] saturate-[300%] brightness-[1.5]">
                <motion.div style={{ y: yOffset }}>
                  <div dangerouslySetInnerHTML={{ __html: clonedContent }} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* 3. Bottom Edge Total Internal Reflection */}
          <div className="absolute inset-0 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 35%)', maskImage: 'linear-gradient(to top, black 0%, transparent 35%)' }}>
            <div className="absolute w-[100vw] h-[100vh]" style={{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }}>
              {/* Mathematically flip incoming elements below the nav onto the inside bottom edge */}
              <div className="w-full h-full origin-[50%_68px] scale-y-[-1.8] scale-x-[1.8] opacity-100 blur-[8px] saturate-[300%] brightness-[1.5]">
                <motion.div style={{ y: yOffset }}>
                  <div dangerouslySetInnerHTML={{ __html: clonedContent }} />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* SPHERICAL REFRACTION LIGHTING ILLUSION */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.05)_100%)] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>

          {/* HIGH EDGE REFRACTION / SPHERICAL PRISM DISTORTION */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none backdrop-blur-3xl backdrop-saturate-[400%] shadow-[inset_4px_0_12px_rgba(255,0,0,0.15),inset_-4px_0_12px_rgba(0,255,255,0.15)]"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 55%, black 100%)',
              maskImage: 'radial-gradient(ellipse at center, transparent 55%, black 100%)'
            }}
          ></div>
        </div>

        <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:scale-125 hover:bg-foreground/10 hover:shadow-lg origin-bottom">
          RA
        </a>
        <a
          href="#work"
          className="rounded-full px-4 py-2 text-sm text-foreground/70 hover:bg-foreground/15 hover:text-foreground transition-all duration-300 hover:scale-125 hover:shadow-lg origin-bottom"
        >
          Work
        </a>
        <a
          href="#about"
          className="rounded-full px-4 py-2 text-sm text-foreground/70 hover:bg-foreground/15 hover:text-foreground transition-all duration-300 hover:scale-125 hover:shadow-lg origin-bottom"
        >
          About
        </a>
        <a
          href="mailto:rakshit@example.com"
          className="ml-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/80 transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 origin-bottom"
        >
          Contact
        </a>
        <button
          onClick={toggleTheme}
          className="ml-1 flex items-center justify-center rounded-full w-9 h-9 bg-foreground/5 text-foreground hover:bg-foreground/15 transition-all duration-300 hover:scale-110"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </motion.nav>
  );
}
