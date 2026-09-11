import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiN8N,
  SiMongodb,
} from "react-icons/si";

const EASE = [0.16, 1, 0.3, 1] as const;

const tools = [
  { name: "HTML", Icon: SiHtml5, color: "E34F26" },
  { name: "CSS", Icon: SiCss, color: "1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "3178C6" },
  { name: "React", Icon: SiReact, color: "61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "06B6D4" },
  { name: "Git", Icon: SiGit, color: "F05032" },
  { name: "GitHub", Icon: SiGithub, color: "181717" },
  { name: "Figma", Icon: SiFigma, color: "F24E1E" },
  { name: "n8n", Icon: SiN8N, color: "EA4B71" },
  { name: "MongoDB", Icon: SiMongodb, color: "47A248" },
];

// duplicated once so the track can loop seamlessly at -50%
const loopTools = [...tools, ...tools];

export default function Tools() {
  const { t } = useTranslation();

  return (
    <section id="tools" className="relative w-full overflow-hidden">
      {/* <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-12 flex flex-col items-center gap-3 text-center px-6"
      >
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
          {t("tools.title")}
        </h2>
        <p className="max-w-xl font-body text-foreground/70">
          {t("tools.subtitle")}
        </p>
      </motion.div> */}
      <div className="mb-10 h-1 w-full bg-secondary "></div>
      <div
        className="tools-marquee relative w-full mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        style={{ direction: "ltr" }}
      >
        <div className="tools-track flex w-max items-center">
          {loopTools.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="mx-3 flex shrink-0 flex-col items-center gap-3 rounded-tl-2xl rounded-br-2xl border border-foreground/10 bg-foreground/5 px-8 py-6 backdrop-blur-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background p-3 shadow-sm">
                <tool.Icon className="h-full w-full object-contain text-foreground" />
              </div>
              <span className="font-body text-sm font-medium text-foreground/70">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 h-1 w-full bg-secondary "></div>

      <style>{`
        @keyframes toolsScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tools-track {
          animation: toolsScroll 28s linear infinite;
        }
        .tools-marquee:hover .tools-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
