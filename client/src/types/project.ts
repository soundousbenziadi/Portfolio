export type ProjectType =
  | "fullstack"
  | "frontend"
  | "uiux"
  | "automation"
  | "graphicDesign";

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ProjectLinks {
  repo?: string;
  live?: string;
  behance?: string;
}

export interface Project {
  id: string;
  image: string;
  types: ProjectType[];
  title: LocalizedText;
  description: LocalizedText;
  tools: string[];
  links: ProjectLinks;
}
