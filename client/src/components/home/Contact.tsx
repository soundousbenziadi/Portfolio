import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../../data/socialLinks";
import ContactForm from "../Contact/ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full px-6 py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 text-center"
      >
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
          {t("contact.title")}
        </h2>
        <p className="text-foreground/70">{t("contact.subtitle")}</p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        {/* intro + social links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <p className="text-foreground/70 hidden md:block">
            {t("contact.description")}
          </p>

          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 rounded-tl-2xl rounded-br-2xl border border-foreground/10 bg-foreground/5 px-5 py-3.5  transition-colors hover:bg-foreground/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-110 text-primary">
                  <link.Icon className="h-full w-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {link.name}
                  </span>
                  <span className="text-xs text-foreground/50">
                    {link.id === "email" ?
                      link.url.replace("mailto:", "")
                    : link.url.replace(/^https?:\/\//, "")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-tl-2xl rounded-br-2xl border border-foreground/10 bg-foreground/5 p-6 sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
