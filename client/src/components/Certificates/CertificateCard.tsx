import { useTranslation } from "react-i18next";
import type { Certificate } from "../../types/certificate";

interface CertificateCardProps {
  certificate: Certificate;
  isActive: boolean;
  onOpen: () => void;
}

export default function CertificateCard({
  certificate,
  isActive,
  onOpen,
}: CertificateCardProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`flex w-full flex-col overflow-hidden rounded-md border-2 bg-background/80 text-start transition-colors duration-300 ${
        isActive ?
          "border-primary/70 cursor-zoom-in"
        : "border-foreground/10 cursor-pointer"
      }`}
    >
      <div className="aspect-4/3 w-full overflow-hidden bg-background">
        <img
          src={certificate.image}
          alt={certificate.title[lang]}
          draggable={false}
          className="h-full w-full select-none object-cover"
        />
      </div>
      <div className="flex flex-1 items-center justify-center px-4 py-3 text-center">
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            isActive ? "text-foreground" : "text-foreground/60"
          }`}
        >
          {certificate.title[lang]}
        </span>
      </div>
    </button>
  );
}
