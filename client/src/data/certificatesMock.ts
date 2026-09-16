import type { Certificate } from "../types/certificate";

import ESPImage from "../assets/certificates/ESP.png";
import GUVIImage from "../assets/certificates/GUVI.png";
import HuggingFaceAgentsImage from "../assets/certificates/huggingFaceAgents.jpg";
import huggingFaceMCPImage from "../assets/certificates/huggingFaceMCP.jpg";
import companyProgramImage from "../assets/certificates/companyProgram.jpg";
import bunianLeadershipImage from "../assets/certificates/bunianLeadership.jpg";
import IctOverviewOfAiImage from "../assets/certificates/IctOverviewOfAi.png";
import courseraBackendImage from "../assets/certificates/courseraBackend.jpg";

export const certificatesMock: Certificate[] = [
  {
    id: "huggingface-mcp",
    image: huggingFaceMCPImage,
    title: {
      en: "Hugging Face – Fundamentals of MCP",
      ar: "Hugging Face – أساسيات MCP",
    },
  },
  {
    id: "huggingface-agents",
    image: HuggingFaceAgentsImage,
    title: {
      en: "Hugging Face – Foundations of Agents",
      ar: "Hugging Face – أساسيات وكلاء الذكاء الاصطناعي",
    },
  },
  {
    id: "guvi-fullstack-webinar",
    image: GUVIImage,
    title: {
      en: "GUVI – Become a Full-Stack Developer",
      ar: "GUVI – كن مطور Full-Stack",
    },
  },
  {
    id: "ja-company-program-2024",
    image: companyProgramImage,
    title: {
      en: "JA Company Program – 2024",
      ar: "برنامج JA للشركات – 2024",
    },
  },
  {
    id: "coursera-backend",
    image: courseraBackendImage,
    title: {
      en: "Introduction to Back-End Development",
      ar: "مقدمة في تطوير Back-End",
    },
  },
  {
    id: "esp-2025",
    image: ESPImage,
    title: {
      en: "Entrepreneurial Skills Pass (ESP) – 2025",
      ar: "جواز المهارات الريادية (ESP) – 2025",
    },
  },
  {
    id: "bunian-atm-subleader",
    image: bunianLeadershipImage,
    title: {
      en: "Bunian – ATM Team Subleader",
      ar: "بنيان – نائبة قائدة فريق ATM",
    },
  },
  {
    id: "huawei-overview-ai",
    image: IctOverviewOfAiImage,
    title: {
      en: "Huawei ICT Academy – Overview of AI",
      ar: "أكاديمية Huawei ICT – نظرة عامة على الذكاء الاصطناعي",
    },
  },
];

export function getCertificateById(id: string) {
  return certificatesMock.find((certificate) => certificate.id === id);
}
