import type { Project } from "../types/project";
import rawijliImage from "../assets/projects/rawijli.png";
import synclyImage from "../assets/projects/syncly.png";
import tendinImage from "../assets/projects/tendin.png";
import graImage from "../assets/projects/gra.png";
import hackitSetifImage from "../assets/projects/hackitSetif.png";
import playboxImage from "../assets/projects/playBox.png";
import weddingInvitationImage from "../assets/projects/weddingWebsite.png";

export const projectsMock: Project[] = [
  {
    id: "global-robotics-arena",
    image: graImage,
    types: ["fullstack"],
    title: {
      en: "Global Robotics Arena",
      ar: "Global Robotics Arena",
    },
    description: {
      en: "A bilingual registration platform for an international robotics competition, featuring competition paths, academy information, a Turkey tourism page, agenda, and dedicated registration flows for schools and individuals. It also includes a dashboard for managing registered teams and members, with light and dark mode support.",
      ar: "منصة تسجيل ثنائية اللغة لمسابقة دولية في الروبوتات، تتضمن مسارات المنافسة، معلومات عن الأكاديمية، صفحة سياحية حول الرحلة إلى تركيا، وجدول الفعاليات، إلى جانب مسارات تسجيل مخصصة للمدارس والأفراد. كما تتضمن لوحة تحكم لإدارة الفرق والأعضاء المسجلين، مع دعم الوضع الفاتح والداكن.",
    },
    tools: ["react", "ts", "node", "express", "mongodb", "tailwind"],
    links: {
      live: "https://www.global-robotics-arena.com/",
    },
  },
  {
    id: "tendin",
    image: tendinImage,
    types: ["fullstack", "automation"],
    title: {
      en: "TendIn",
      ar: "TendIn",
    },
    description: {
      en: "A MERN-based event management and discovery platform connecting event organizers with users. It provides event browsing and filtering, registration, organization, user, and admin dashboards, along with an AI-powered chatbot built with n8n to help users discover and explore events. The project is currently in development and not yet fully completed; the available demo link showcases the current progress.",
      ar: "منصة لإدارة واكتشاف الفعاليات مبنية باستخدام MERN، تربط بين منظمي الفعاليات والمستخدمين. توفر تصفح الفعاليات وتصفيتها والتسجيل فيها، إلى جانب لوحات تحكم للمستخدمين والمنظمات والإدارة، بالإضافة إلى روبوت محادثة مدعوم بالذكاء الاصطناعي تم تطويره باستخدام n8n لمساعدة المستخدمين على اكتشاف واستكشاف الفعاليات. المشروع لا يزال قيد التطوير ولم يكتمل بشكل نهائي بعد، والرابط المتاح يعرض فيديو توضيحيًا للتقدم الحالي في المشروع.",
    },
    tools: [
      "react",
      "ts",
      "tailwind",
      "framer",
      "axios",
      "vite",
      "node",
      "express",
      "mongodb",
      "n8n",
    ],
    links: {
      live: "https://drive.google.com/drive/folders/1B7cvujzfPlq8LA103MRaXUujrny9hGEP?usp=sharing",
    },
  },
  {
    id: "rawijli",
    image: rawijliImage,
    types: ["uiux"],
    title: {
      en: "Rawijli",
      ar: "Rawijli",
    },
    description: {
      en: "A UX/UI design project for an Arabic influencer marketing platform that centralizes influencer and campaign management. Designed collaboratively as part of a team for the UXAWY Champions League, where the project earned second place.",
      ar: "مشروع لتصميم تجربة وواجهة المستخدم لمنصة عربية للتسويق عبر المؤثرين، تهدف إلى توحيد وإدارة الحملات والمؤثرين في مكان واحد. تم تصميم المشروع بشكل جماعي ضمن فريق للمشاركة في مسابقة UXAWY Champions League، حيث حصل المشروع على المركز الثاني.",
    },
    tools: ["figma"],
    links: {
      behance:
        "https://www.behance.net/gallery/240234587/UI-UX-Case-Study-Rojli_",
    },
  },
  {
    id: "syncly",
    image: synclyImage,
    types: ["uiux"],
    title: {
      en: "Syncly",
      ar: "Syncly",
    },
    description: {
      en: "A UX/UI design project for an AI-powered social media management mobile app. Syncly brings content creation, social media management, analytics, and customer communication into one unified platform, helping businesses and content creators manage their digital presence more efficiently.",
      ar: "مشروع لتصميم تجربة وواجهة المستخدم لتطبيق جوال مدعوم بالذكاء الاصطناعي لإدارة وسائل التواصل الاجتماعي. يجمع Syncly بين إنشاء المحتوى، وإدارة الحسابات، والتحليلات، والتواصل مع العملاء في منصة موحدة، لمساعدة الشركات وصناع المحتوى على إدارة حضورهم الرقمي بكفاءة أكبر.",
    },
    tools: ["figma"],
    links: {
      behance: "https://www.behance.net/gallery/241291319/Syncly",
    },
  },
  {
    id: "hackit-setif",
    image: hackitSetifImage,
    types: ["frontend", "automation"],
    title: {
      en: "Hack’it Setif",
      ar: "Hack’it Setif",
    },
    description: {
      en: "The official registration website for the Setifian Programming Competition, built with React and Tailwind CSS. The registration form is connected to an n8n workflow that automates the collection and organization of participant data in Excel.",
      ar: "الموقع الرسمي للتسجيل في مسابقة البرمجة السطايفية، تم تطويره باستخدام React وTailwind CSS. يرتبط نموذج التسجيل بسير عمل باستخدام n8n لأتمتة جمع بيانات المشاركين وتنظيمها في ملف Excel.",
    },
    tools: ["react", "tailwind", "n8n"],
    links: {
      // repo: "https://github.com/yourusername/hackit-setif",
      live: "https://code-set-4odn.vercel.app/",
    },
  },
  {
    id: "playbox",
    image: playboxImage,
    types: ["fullstack"],
    title: {
      en: "PlayBox",
      ar: "PlayBox",
    },
    description: {
      en: "A desktop-oriented e-commerce simulation website featuring product pages, user authentication, and order management. The project was developed using HTML, CSS, JavaScript, PHP, and SQL, with a focus on implementing the core functionality of an online shopping experience.",
      ar: "موقع يحاكي تجربة متجر إلكتروني مخصص لسطح المكتب، يتضمن صفحات المنتجات، مصادقة المستخدمين، وإدارة الطلبات. تم تطوير المشروع باستخدام HTML وCSS وJavaScript وPHP وSQL، مع التركيز على تنفيذ الوظائف الأساسية لتجربة التسوق عبر الإنترنت.",
    },
    tools: ["html", "css", "js", "php", "sql"],
    links: {
      repo: "https://github.com/soundousbenziadi/PlayBox-E-commerce-Website-for-Board-Games",
    },
  },
  {
    id: "wedding-invitation",
    image: weddingInvitationImage,
    types: ["frontend"],
    title: {
      en: "Wedding Invitation Website",
      ar: "موقع إلكتروني لدعوة زفاف",
    },
    description: {
      en: "A simple and elegant wedding invitation website featuring a welcoming page and a beautifully organized home page containing all the essential information about the wedding celebration.",
      ar: "موقع إلكتروني بسيط وأنيق لدعوة زفاف، يتضمن صفحة ترحيبية وصفحة رئيسية تجمع جميع المعلومات الأساسية الخاصة بحفل الزفاف ضمن تصميم منظم وأنيق.",
    },
    tools: ["react", "tailwind", "framer"],
    links: {
      live: "https://wedding-website-rj7a.vercel.app/",
    },
  },
];

export function getProjectById(id: string) {
  return projectsMock.find((project) => project.id === id);
}
