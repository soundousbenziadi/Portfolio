import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SiBehance } from "react-icons/si";
import { getProjectById } from "../data/projectsMock";
import { toolIcons } from "../data/toolIcons";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <section className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
        <p className=" text-foreground/70">{t("projects.notFound")}</p>
        <Link
          to="/home"
          className="font-body font-bold text-primary hover:underline"
        >
          {t("projects.backHome")}
        </Link>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col gap-10 pb-20 md:pb-28">
      {/* <Link
        to="/home"
        className="inline-flex w-fit items-center gap-2 font-body text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} className="rtl:rotate-180" />
        {t("projects.backHome")}
      </Link> */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative overflow-hidden w-full border border-foreground/10"
      >
        <img
          src={project.image}
          alt={project.title[lang]}
          className="max-h-120 w-full object-cover"
        />

        <Link
          to="/home"
          className="absolute top-4 inset-s-4 inline-flex items-center gap-2 rounded-full
               bg-background/80 backdrop-blur-sm border border-foreground/10
               px-4 py-2 font-body text-sm font-medium text-foreground/80
               transition-colors hover:text-accent hover:bg-background/95"
        >
          <ArrowLeft size={16} className="rtl:rotate-180" />
          {t("projects.backHome")}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="flex flex-col gap-6 px-6 md:px-15 lg:px-25"
      >
        <div className="flex flex-wrap gap-2">
          {project.types.map((type) => (
            <span
              key={type}
              className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {t(`projectTypes.${type}`)}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          {project.title[lang]}
        </h1>

        <p className="whitespace-pre-line font-body text-base leading-relaxed text-foreground/70 sm:text-lg">
          {project.description[lang]}
        </p>

        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
          {t("projects.toolsUsed")}
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.tools.map((toolKey) => {
            const tool = toolIcons[toolKey];
            if (!tool) return null;
            const { Icon, label, color } = tool;
            return (
              <span
                key={toolKey}
                className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-2 font-body text-xs font-medium text-foreground/80"
              >
                <Icon size={16} color={color} />
                {label}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          {project.links.repo && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-tl-md rounded-br-md border border-foreground/10 bg-foreground/5 px-5 py-2 font-body text-sm font-bold transition-colors hover:bg-foreground/10"
            >
              <SiGithub size={16} />
              {t("projects.repoLink")}
            </motion.a>
          )}
          {project.links.live && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-tl-md rounded-br-md bg-primary px-5 py-2 font-body text-sm font-bold text-[#f4f7fa] transition-colors hover:bg-primary/90"
            >
              <ExternalLink size={16} />
              {t("projects.liveLink")}
            </motion.a>
          )}
          {project.links.behance && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={project.links.behance}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-tl-md rounded-br-md bg-secondary px-5 py-2 font-body text-sm font-bold text-[#f4f7fa] transition-colors hover:bg-secondary/90"
            >
              <SiBehance size={16} />
              {t("projects.behanceLink")}
            </motion.a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
