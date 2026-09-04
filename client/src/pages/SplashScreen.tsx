// SplashScreen.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coloredBf from "../assets/coloredBf.png";

const STAGGER = 0.035;
const START_DELAY = 0.3;
const LETTER_DURATION = 0.35;

const FULL_TEXT = "Hi, I'm Soundous UI/UX Designer & Web Developer";
const TYPING_DURATION = (FULL_TEXT.length - 1) * STAGGER + LETTER_DURATION;

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: LETTER_DURATION } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER, delayChildren: START_DELAY },
  },
};

// Reusable: splits any string into animated per-letter spans.
function Letters({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

export default function SplashScreen() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
    setTimeout(() => navigate("/home"), 500);
  };

  useEffect(() => {
    let startY: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (startY === null) return;
      const deltaY = startY - e.changedTouches[0].clientY;
      if (deltaY > 60) dismiss();
      startY = null;
    };
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 20) dismiss();
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") dismiss();
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 overflow-hidden bg-background px-6 text-center"
        >
          {/* Ambient glow, top-left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-60 w-60 rounded-full bg-primary/30 blur-3xl"
          />

          <motion.h1
            variants={containerVariants}
            dir="ltr"
            initial="hidden"
            animate="visible"
            aria-label={FULL_TEXT}
            className="font-heading text-3xl font-semibold leading-15 text-foreground sm:text-3xl md:text-5xl "
          >
            <span aria-hidden="true">
              <Letters text="Hi, I'm " />
              <span className="text-primary">
                <Letters text="Soundous " />
              </span>
              <br />
              <span className="text-accent">
                <Letters text="UI/UX" />
              </span>
              <Letters text=" Designer & " />
              <br className="block sm:hidden" />
              <span className="text-secondary">
                <Letters text="Web Developer" />
              </span>
            </span>

            <motion.img
              src={coloredBf}
              alt=""
              className=" ml-3 inline-block h-20 w-20 align-middle sm:h-22 sm:w-22 md:h-25 md:w-25"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
                rotate: [0, 6, -6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.5,
                  delay: START_DELAY + TYPING_DURATION,
                },
                scale: { duration: 0.5, delay: START_DELAY + TYPING_DURATION },
                y: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: START_DELAY + TYPING_DURATION + 0.5,
                },
                rotate: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: START_DELAY + TYPING_DURATION + 0.5,
                },
              }}
            />
          </motion.h1>

          <motion.button
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: START_DELAY + TYPING_DURATION + 0.4,
            }}
            className=" flex flex-col items-center gap-1 font-body text-sm text-foreground/60 transition-colors hover:text-primary focus:outline-none"
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronUp className="h-5 w-5" />
            </motion.span>
            Swipe up to enter the portfolio
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
