import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = "11cc61a3-d98f-46c2-a37c-a8dc428dbf67";

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      {/* Honeypot field — invisible to real users, bots often fill every input */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground/80"
        >
          {t("contact.form.name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t("contact.form.namePlaceholder")}
          className="rounded-tl-xl rounded-br-xl border border-foreground/15 bg-foreground/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary/50 focus:bg-background"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-foreground/80"
        >
          {t("contact.form.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t("contact.form.emailPlaceholder")}
          className="rounded-tl-xl rounded-br-xl border border-foreground/15 bg-foreground/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary/50 focus:bg-background"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground/80"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("contact.form.messagePlaceholder")}
          className="resize-none rounded-tl-xl rounded-br-xl border border-foreground/15 bg-foreground/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary/50 focus:bg-background"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
        className="mt-2 flex items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl bg-accent/75 px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-70"
      >
        {status === "loading" ?
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("contact.form.sending")}
          </>
        : <>{t("contact.form.send")}</>}
      </motion.button>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg border border-green-500/25 bg-green-500/10 px-4 py-2.5 text-sm text-green-600 dark:text-green-400"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {t("contact.form.successMessage")}
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-sm text-red-600 dark:text-red-400"
        >
          <XCircle className="h-4 w-4 shrink-0" />
          {t("contact.form.errorMessage")}
        </motion.div>
      )}
    </form>
  );
}
