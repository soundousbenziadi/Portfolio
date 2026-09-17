import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
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

const LOOP_DURATION_SECONDS = 28; // same pace as the old 28s CSS animation

export default function Tools() {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const isHovering = useRef(false);

  // Auto-scroll loop, paused while dragging or hovering
  useAnimationFrame((_, delta) => {
    if (isDragging.current || isHovering.current) return;
    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = track.scrollWidth / 2;
    if (singleSetWidth <= 0) return;

    const speed = singleSetWidth / LOOP_DURATION_SECONDS; // px per second
    let next = x.get() - (delta / 1000) * speed;

    // wrap seamlessly once a full set has scrolled past
    if (next <= -singleSetWidth) next += singleSetWidth;
    x.set(next);
  });

  const wrapPosition = () => {
    const track = trackRef.current;
    if (!track) return;
    const singleSetWidth = track.scrollWidth / 2;
    if (singleSetWidth <= 0) return;

    let val = x.get();
    while (val <= -singleSetWidth) val += singleSetWidth;
    while (val > 0) val -= singleSetWidth;
    x.set(val);
  };

  return (
    <section id="tools" className="relative w-full overflow-hidden">
      <div className="mb-10 h-1 w-full bg-secondary "></div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute z-20 right-6 bottom-6 md:bottom-15 flex items-center rounded-sm border border-foreground/10 bg-accent/80 px-5 py-2 opacity-90"
      >
        <span className=" text-md text-foreground">{t("tools.title")}</span>
      </motion.div>
      <div
        className="tools-marquee relative w-full mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        style={{ direction: "ltr" }}
        onMouseEnter={() => {
          isHovering.current = true;
        }}
        onMouseLeave={() => {
          isHovering.current = false;
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          ref={trackRef}
          className="tools-track flex w-max items-center cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -1e6, right: 1e6 }}
          dragElastic={0.05}
          dragMomentum={false}
          onDragStart={() => {
            isDragging.current = true;
          }}
          onDragEnd={() => {
            isDragging.current = false;
            wrapPosition();
          }}
        >
          {loopTools.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="mx-3 flex shrink-0 flex-col items-center gap-3 rounded-tl-2xl rounded-br-2xl border border-foreground/10 bg-foreground/5 px-8 py-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background p-3 shadow-sm">
                <tool.Icon className="h-full w-full object-contain text-foreground" />
              </div>
              <span className=" text-sm font-medium text-foreground/70">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mt-10 h-1 w-full bg-secondary "></div>
    </section>
  );
}
