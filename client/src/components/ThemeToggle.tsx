import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // return window.matchMedia("(prefers-color-scheme: dark)").matches;
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-foreground transition-colors hover:bg-secondary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ?
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="h-5 w-5 text-primary" strokeWidth={2} />
          </motion.div>
        : <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="h-5 w-5 text-secondary" strokeWidth={2} />
          </motion.div>
        }
      </AnimatePresence>
    </button>
  );
}
