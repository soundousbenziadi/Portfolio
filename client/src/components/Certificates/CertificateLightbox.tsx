import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import type { Certificate } from "../../types/certificate";

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateLightbox({
  certificate,
  onClose,
}: CertificateLightboxProps) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  // close on Escape, lock body scroll while open
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full max-w-3xl flex-col overflow-hidden rounded-md border border-foreground/10 bg-background shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t("certificates.close")}
              className="absolute end-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/80 text-foreground/80 backdrop-blur-md transition-colors hover:bg-foreground/10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-h-[75vh] overflow-auto bg-black/5">
              <img
                src={certificate.image}
                alt={certificate.title[lang]}
                className="mx-auto max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="px-5 py-4 text-center">
              <span className="text-sm font-medium text-foreground sm:text-base">
                {certificate.title[lang]}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
