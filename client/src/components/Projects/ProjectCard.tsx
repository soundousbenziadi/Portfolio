import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Project } from "../../types/project";
import { truncateText } from "../../utils/truncate";

export default function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  return (
    <Link to={`/projects/${project.id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex h-full flex-col overflow-hidden rounded-md border border-foreground/10 bg-foreground/5 backdrop-blur-md"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title[lang]}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-3 top-3 flex flex-wrap gap-2">
            {project.types.map((type) => (
              <span
                key={type}
                className="rounded-full border border-foreground/10 bg-accent/80 px-3 py-1 font-body text-xs font-medium text-foreground backdrop-blur-md"
              >
                {t(`projectTypes.${type}`)}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-heading text-lg font-semibold sm:text-xl">
            {project.title[lang]}
          </h3>
          <p className="flex-1 font-body text-sm text-foreground/70">
            {truncateText(project.description[lang], 110)}
          </p>

          <Link
            to={`/projects/${project.id}`}
            className=" mt-2  w-full text-center text-md text-foreground font-body transition-colors bg-primary/90 hover:bg-primary/80   rounded-2xl border border-foreground/10 py-1 "
          >
            {t("projects.viewMore")}
          </Link>
        </div>
      </motion.div>
    </Link>
  );
}
