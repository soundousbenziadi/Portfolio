import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroBackground from "../../assets/heroImg.png";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-contain bg-bottom bg-no-repeat md:bg-center md:bg-cover before:absolute before:inset-0 before:bg-background/20 before:content-['']"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.8,
          ease: EASE,
          delay: 0.3,
        }}
        className="absolute left-6 bottom-20 md:bottom-15 
  "
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center gap-3  rounded-tl-2xl rounded-br-2xl border border-foreground/10 bg-foreground/5 px-5 py-3 backdrop-blur-md"
        >
          <span className="font-body text-sm text-foreground/70">
            {t("hero.title")}
          </span>
        </motion.div>
      </motion.div>

      <div className="z-10 flex flex-col items-center justify-center gap-10 md:gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {t("hero.greeting")}
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
          className="font-heading text-4xl font-bold text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("hero.name")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.34 }}
          className="max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.46 }}
          className="flex flex-col gap-8 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-primary px-6 py-2 text-[#f4f7fa] hover:bg-primary/90 cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 inline-flex items-center justify-center rounded-br-md rounded-tl-md text-md font-bold transition-colors focus-visible:outline-none "
          >
            {t("hero.articlesButton")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-secondary px-6 py-2 text-[#f4f7fa] hover:bg-secondary/90 cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 inline-flex items-center justify-center rounded-br-md rounded-tl-md text-md font-bold transition-colors focus-visible:outline-none "
          >
            {t("hero.contactButton")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
