import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
      <div className="mb-10 h-1 w-full bg-secondary "></div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute z-20 right-6 bottom-6 md:bottom-15 flex items-center rounded-lg border border-foreground/10 bg-accent/85 px-5 py-2 backdrop-blur-md opacity-90"
      >
        <span className="font-body text-md text-foreground">
          {t("tools.title")}
        </span>
      </motion.div>
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
