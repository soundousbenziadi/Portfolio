import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/coloredBf.png";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const NAV_LINKS = [
  { href: "#home", key: "nav.home" },
  { href: "#projects", key: "nav.projects" },
  { href: "#experiences", key: "nav.experiences" },
  { href: "#contact", key: "nav.contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed w-dvw top-0 z-50 border-b md:border-none border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt={t("nav.logoAlt")} className="h-10 w-auto" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 md:flex border border-foreground/10 bg-foreground/5 py-2.5 px-4 rounded-tl-2xl rounded-br-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Toggles + mobile trigger — always visible, never inside the collapsible menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            className="ms-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/70 transition-colors hover:text-foreground md:hidden"
          >
            {open ?
              <X className="h-5 w-5" />
            : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — nav links only */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-foreground/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 font-body text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
