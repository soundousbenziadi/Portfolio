import type { IconType } from "react-icons";
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
  SiNodedotjs,
  SiExpress,
  SiFramer,
  SiPhp,
  SiMysql,
} from "react-icons/si";

export const toolIcons: Record<
  string,
  { label: string; Icon: IconType; color: string }
> = {
  html: { label: "HTML", Icon: SiHtml5, color: "#E34F26" },
  css: { label: "CSS", Icon: SiCss, color: "#1572B6" },
  js: { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  ts: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  react: { label: "React", Icon: SiReact, color: "#61DAFB" },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  git: { label: "Git", Icon: SiGit, color: "#F05032" },
  github: { label: "GitHub", Icon: SiGithub, color: "#181717" },
  figma: { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
  n8n: { label: "n8n", Icon: SiN8N, color: "#EA4B71" },
  mongodb: { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  node: { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  express: { label: "Express", Icon: SiExpress, color: "#000000" },
  framer: { label: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  php: { label: "PHP", Icon: SiPhp, color: "#777BB4" },
  sql: { label: "SQL", Icon: SiMysql, color: "#4479A1" },
};
