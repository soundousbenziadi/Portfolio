import { SiGithub, SiLinkerd, SiBehance } from "react-icons/si";
import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import type { ComponentType } from "react";

export interface SocialLink {
  id: string;
  name: string;
  Icon: IconType | ComponentType<{ className?: string }>;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    Icon: SiGithub,
    url: "https://github.com/soundousbenziadi",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    Icon: SiLinkerd,
    url: "https://www.linkedin.com/in/soundous-benziadi-73339b284/",
  },
  {
    id: "behance",
    name: "Behance",
    Icon: SiBehance,
    url: "https://www.behance.net/soundousBND",
  },
  {
    id: "email",
    name: "Email",
    Icon: Mail,
    url: "mailto:benziadisoundous@gmail.com",
  },
];
