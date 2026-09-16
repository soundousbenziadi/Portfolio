import type { LocalizedText } from "./project";

export interface Certificate {
  id: string;
  image: string;
  title: LocalizedText;
  issuer?: LocalizedText;
  date?: string;
}
