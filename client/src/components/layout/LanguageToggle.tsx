import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import { Languages } from "lucide-react";

type Lang = "en" | "ar";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = (i18n.language?.startsWith("ar") ? "ar" : "en") as Lang;

  const switchTo = (lang: Lang) => {
    if (lang === current) return;
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Language"
      className="relative inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/5 p-1"
    >
      {/* <Languages
        className="ms-1 me-0.5 h-4 w-4 text-foreground/50"
        aria-hidden="true"
      /> */}

      {LANGS.map(({ code, label }) => {
        const active = code === current;
        return (
          <button
            key={code}
            role="radio"
            aria-checked={active}
            onClick={() => switchTo(code)}
            className={`relative z-10 rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              active ? "text-white" : "text-foreground/70 hover:text-foreground"
            } ${code === "ar" ? "font-heading" : ""}`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-full bg-primary"
              />
            )}
            {label}
          </button>
        );
      })}
    </div>
  );
}
