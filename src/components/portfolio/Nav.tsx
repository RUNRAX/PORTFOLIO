import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Nav() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme from document class
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
      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="relative flex items-center gap-1 rounded-full px-2 py-1.5 bg-foreground/5 backdrop-blur-3xl backdrop-saturate-[250%] backdrop-contrast-125 border border-foreground/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.3)]">
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
