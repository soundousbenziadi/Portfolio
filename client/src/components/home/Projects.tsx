import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { projectsMock } from "../../data/projectsMock";
import ProjectCard from "../Projects/ProjectCard";

const EASE = [0.16, 1, 0.3, 1] as const;
const INITIAL_COUNT = 3;

export default function Projects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects =
    showAll ? projectsMock : projectsMock.slice(0, INITIAL_COUNT);

  const hasMore = projectsMock.length > INITIAL_COUNT;

  return (
    <section id="projects" className="w-full px-6 py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 text-center"
      >
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
          {t("projects.title")}
        </h2>
        <p className=" text-foreground/70">{t("projects.subtitle")}</p>
      </motion.div>

      {/* This wrapper defines the "bounds" the sticky button lives inside.
          It grows taller when expanded, giving the button room to travel with the scroll,
          and releases naturally once you scroll past it. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="sticky bottom-6 z-20 mt-10 flex justify-center">
            <motion.button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground/90 shadow-lg backdrop-blur-md transition-colors hover:bg-foreground/5"
            >
              {showAll ? t("projects.showLess") : t("projects.showAll")}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
