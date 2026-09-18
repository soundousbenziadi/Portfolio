import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <section
      id="footer"
      className="relative flex h-15 w-full items-center justify-center overflow-hidden bg-foreground/5"
    >
      <span className="relative z-10 text-sm font-medium text-foreground/70">
        © {new Date().getFullYear()} {t("footer.copyright")}
      </span>
    </section>
  );
}
