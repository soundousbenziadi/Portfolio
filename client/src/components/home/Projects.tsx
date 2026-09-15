import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projectsMock } from "../../data/projectsMock";
import ProjectCard from "../Projects/ProjectCard";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="w-full px-6 py-10 md:py-20">
      <motion.div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
          {t("projects.title")}
        </h2>
        <p className=" text-foreground/70">{t("projects.subtitle")}</p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsMock.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
