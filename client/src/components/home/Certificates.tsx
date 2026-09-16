import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, type PanInfo } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { certificatesMock } from "../../data/certificatesMock";
import CertificateCard from "../Certificates/CertificateCard";
import CertificateLightbox from "../Certificates/CertificateLightbox";
import type { Certificate } from "../../types/certificate";

const EASE = [0.16, 1, 0.3, 1] as const;
const VISIBLE_RANGE_DESKTOP = 2; // 5 cards total (±2)
const VISIBLE_RANGE_MOBILE = 1; // 3 cards total (±1)
const STEP_PERCENT = 62;
const DRAG_THRESHOLD = 60;
const MOBILE_QUERY = "(max-width: 639px)"; // matches Tailwind's sm breakpoint

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function useIsMobile(query: string) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [query]);

  return isMobile;
}

export default function Certificates() {
  const { t } = useTranslation();
  const total = certificatesMock.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [openCertificate, setOpenCertificate] = useState<Certificate | null>(
    null,
  );
  const dragX = useMotionValue(0);
  const isMobile = useIsMobile(MOBILE_QUERY);
  const visibleRange = isMobile ? VISIBLE_RANGE_MOBILE : VISIBLE_RANGE_DESKTOP;

  const goTo = (index: number) => setActiveIndex(mod(index, total));
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x <= -DRAG_THRESHOLD) next();
    else if (info.offset.x >= DRAG_THRESHOLD) prev();
  };

  const handleCardClick = (
    certificate: Certificate,
    offset: number,
    index: number,
  ) => {
    if (offset === 0) {
      setOpenCertificate(certificate);
    } else {
      goTo(index);
    }
  };

  const visibleItems = useMemo(() => {
    const items: {
      certificate: (typeof certificatesMock)[number];
      offset: number;
      index: number;
    }[] = [];
    for (let offset = -visibleRange; offset <= visibleRange; offset++) {
      const index = mod(activeIndex + offset, total);
      items.push({ certificate: certificatesMock[index], offset, index });
    }
    return items;
  }, [activeIndex, total, visibleRange]);

  return (
    <section
      id="certificates"
      className="w-full  md:px-6 py-10 md:py-20 bg-section"
    >
      {/* <div className="custom-shape-divider-top-1789584007">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      <motion.div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 text-center">
        <h2 className=" text-2xl font-semibold sm:text-3xl md:text-4xl">
          {t("certificates.title")}
        </h2>
        <p className="text-foreground/70">{t("certificates.subtitle")}</p>
      </motion.div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <div
            className="relative w-full  h-60 sm:h-80 md:h-90 overflow-hidden"
            style={{ direction: "ltr", perspective: "1200px" }}
          >
            <motion.div
              className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
              style={{ x: dragX }}
              drag="x"
              dragElastic={0.15}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {visibleItems.map(({ certificate, offset, index }) => {
                const abs = Math.abs(offset);
                const isActive = offset === 0;
                const scale = isActive ? 1 : Math.max(0.72, 1 - abs * 0.16);
                const opacity = Math.max(0.3, 1 - abs * 0.32);
                const zIndex = 100 - abs;

                return (
                  <motion.div
                    key={certificate.id}
                    className="absolute left-1/2 top-1/2 h-full w-[50%] sm:w-[36%] md:w-[32%]"
                    style={{ zIndex }}
                    initial={false}
                    animate={{
                      x: `calc(-50% + ${offset * STEP_PERCENT}%)`,
                      y: "-50%",
                      scale,
                      opacity,
                    }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <CertificateCard
                      certificate={certificate}
                      isActive={isActive}
                      onOpen={() => handleCardClick(certificate, offset, index)}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.button
            type="button"
            onClick={prev}
            aria-label={t("certificates.prev")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background/80 text-foreground/80 shadow-md backdrop-blur-md transition-colors hover:bg-foreground/5"
            style={{ direction: "ltr" }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          <div className="hidden sm:flex items-center gap-2">
            {certificatesMock.map((certificate, index) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={certificate.title.en}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-6 bg-primary" : (
                    "w-2 bg-foreground/20 hover:bg-foreground/35"
                  )
                }`}
              />
            ))}
          </div>

          <motion.button
            type="button"
            onClick={next}
            aria-label={t("certificates.next")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background/80 text-foreground/80 shadow-md backdrop-blur-md transition-colors hover:bg-foreground/5"
            style={{ direction: "ltr" }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      <CertificateLightbox
        certificate={openCertificate}
        onClose={() => setOpenCertificate(null)}
      />
    </section>
  );
}
