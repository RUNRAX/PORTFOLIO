import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Nav() {
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

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="relative flex items-center gap-1 rounded-full px-2 py-1.5 bg-foreground/10 backdrop-blur-md backdrop-saturate-[200%] backdrop-contrast-125 border border-foreground/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_12px_rgba(255,255,255,0.3)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-4px_12px_rgba(0,0,0,0.8)]">
        
        {/* SPHERICAL REFRACTION LIGHTING ILLUSION */}
        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(200,200,200,0.5),inset_0_0_12px_rgba(255,255,255,0.6)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] dark:shadow-[inset_0_0_16px_rgba(0,0,0,0.9)] pointer-events-none rounded-full"></div>

        {/* HIGH EDGE REFRACTION / SPHERICAL PRISM DISTORTION */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none backdrop-blur-lg backdrop-saturate-[300%] shadow-[inset_2px_0_8px_rgba(255,0,0,0.1),inset_-2px_0_8px_rgba(0,255,255,0.1)]"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 65%, black 100%)',
            maskImage: 'radial-gradient(ellipse at center, transparent 65%, black 100%)'
          }}
        ></div>

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
