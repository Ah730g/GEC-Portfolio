export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE =
  import.meta.env.VITE_APP_TITLE || "شركة غازي محمد عباس للاستشارات الهندسية";

export const APP_LOGO = import.meta.env.VITE_APP_LOGO || "/logo.png";

// Contact Information
export const CONTACT_PHONE = "0555720166";
export const CONTACT_PHONE_2 = "0555877142";
export const CONTACT_PHONE_3 = "0530063867";
export const CONTACT_LANDLINE = "0173236401";
export const CONTACT_EMAIL = "info@ghazico.com";
export const CONTACT_EMAIL_2 = "alabbasi13@hotmail.com";
export const CONTACT_EMAIL_3 = "Ahm32336@gmail.com";
export const CONTACT_EMAIL_FORM = "ghazia119@gmail.com";
export const CONTACT_HOURS = "السبت - الخميس: 9:00 - 17:00";

// Phone contacts with names
export const PHONE_CONTACTS = [
  { name: "م/ أحمد عباس", phone: "0555720166" },
  { name: "م/ محمد عباس", phone: "0555877142" },
  { name: "م/ تركي عباس", phone: "0530063867" },
];

// Navigation Menu
export const NAV_MENU = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "الخدمات", href: "/services" },
  { label: "أعمالنا", href: "/portfolio" },
  { label: "تواصل معنا", href: "/contact" },
];

// Services
export const SERVICES = [
  {
    id: 1,
    title: "الأنشطة الهندسية",
    slug: "الأنشطة-الهندسية",
    description:
      "نقدم باقة متكاملة من الأنشطة الهندسية التي تغطي مختلف مراحل المشروع، من الفكرة إلى التنفيذ",
    icon: "building2",
  },
  {
    id: 2,
    title: "الأعمال المساحية",
    slug: "الأعمال-المساحية",
    description:
      "نقدّم خدمات رفع مساحي دقيقة باستخدام أحدث تقنيات GPS ونظم GIS",
    icon: "map",
  },
  {
    id: 3,
    title: "التصميم المعماري الخارجي",
    slug: "التصميم-المعماري-الخارجي",
    description:
      "نبتكر واجهات معمارية متميزة تعكس هوية المشروع وتتناغم مع البيئة المحيطة",
    icon: "building",
  },
  {
    id: 4,
    title: "التصميم المعماري الداخلي",
    slug: "التصميم-المعماري-الداخلي",
    description: "نوفر تصاميم داخلية متكاملة تركز على استغلال المساحات",
    icon: "sofa",
  },
  {
    id: 5,
    title: "الإشراف على المشاريع",
    slug: "الإشراف-على-المشاريع",
    description:
      "نقدم خدمات إشراف هندسي شامل لضمان الالتزام بالمخططات والمواصفات",
    icon: "clipboard-list",
  },
  {
    id: 6,
    title: "الدراسات الهندسية",
    slug: "الدراسات-الهندسية",
    description: "نُعد دراسات فنية وهندسية متخصصة تدعم اتخاذ القرارات",
    icon: "file-text",
  },
  {
    id: 7,
    title: "الدراسات الجيولوجية والهيدرولوجية",
    description: "نجري تحليلات علمية للتربة والخصائص الجيولوجية",
    icon: "layers",
  },
  {
    id: 8,
    title: "التقارير الهندسية",
    description: "نعد تقارير تفصيلية وموثقة عن الحالة الفنية للمنشآت",
    icon: "file-check",
  },
  {
    id: 9,
    title: "التصاميم الكهروميكانيكية",
    description: "نوفر حلولًا متكاملة لأنظمة الكهرباء والميكانيكا",
    icon: "zap",
  },
  {
    id: 10,
    title: "تصاميم الكهرباء",
    description: "نصمم شبكات توزيع الطاقة والإضاءة وأنظمة الإنذار",
    icon: "lightbulb",
  },
  {
    id: 11,
    title: "تصاميم السلامة",
    description: "نخطط ونصمم أنظمة السلامة والحماية من الحريق",
    icon: "shield-alert",
  },
];

// Company Values
export const COMPANY_VALUES = [
  {
    title: "الاحترافية",
    description: "نلتزم بالمعايير المهنية في كل ما نقوم به",
  },
  {
    title: "الشفافية",
    description: "نعمل بنزاهة ووضوح في جميع تعاملاتنا",
  },
  {
    title: "الدقة",
    description: "نولي اهتمامًا عاليًا لكل عنصر تصميم أو تنفيذ",
  },
  {
    title: "الابتكار",
    description: "نبحث باستمرار عن حلول جديدة ومبدعة",
  },
  {
    title: "الالتزام",
    description: "نحترم الوقت والميزانية والتوقعات",
  },
];

// Company Info
export const COMPANY_INFO = {
  name: "مكتب غازي محمد عباس للاستشارات الهندسية",
  shortName: "GEC",
  description:
    "مكتب هندسي سعودي معتمد، متخصص في تقديم حلول تصميم واستشارات هندسية شاملة ومتطورة",
  vision:
    "أن نكون من الرواد في مجال الاستشارات الهندسية في المملكة العربية السعودية",
  mission: "نصنع الفارق عبر تقديم خدمات هندسية متقدمة",
  yearsOfExperience: "25+",
};

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
