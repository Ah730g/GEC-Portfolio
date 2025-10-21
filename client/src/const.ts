export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "درر النفائس للاستشارات الهندسية";

export const APP_LOGO =
  import.meta.env.VITE_APP_LOGO ||
  "https://placehold.co/128x128/E1E7EF/1F2937?text=Logo";

// Contact Information
export const CONTACT_PHONE = "+966560655587";
export const CONTACT_EMAIL = "info@duralnafis.com";
export const CONTACT_HOURS = "متاح 24/7";

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
    description: "نقدم باقة متكاملة من الأنشطة الهندسية التي تغطي مختلف مراحل المشروع، من الفكرة إلى التنفيذ",
    icon: "building2",
  },
  {
    id: 2,
    title: "الأعمال المساحية",
    description: "نقدّم خدمات رفع مساحي دقيقة باستخدام أحدث تقنيات GPS ونظم GIS",
    icon: "map",
  },
  {
    id: 3,
    title: "التصميم المعماري الخارجي",
    description: "نبتكر واجهات معمارية متميزة تعكس هوية المشروع وتتناغم مع البيئة المحيطة",
    icon: "building",
  },
  {
    id: 4,
    title: "التصميم المعماري الداخلي",
    description: "نوفر تصاميم داخلية متكاملة تركز على استغلال المساحات",
    icon: "sofa",
  },
  {
    id: 5,
    title: "الإشراف على المشاريع",
    description: "نقدم خدمات إشراف هندسي شامل لضمان الالتزام بالمخططات والمواصفات",
    icon: "clipboard-list",
  },
  {
    id: 6,
    title: "الدراسات الهندسية",
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
  name: "الدر النفيس للاستشارات الهندسية",
  description: "شركة هندسية سعودية معتمده، متخصصه في تقديم حلول تصميم واستشارات هندسية شاملة",
  vision: "أن نكون من الرواد في مجال الاستشارات الهندسية في المملكة العربية السعودية",
  mission: "نصنع الفارق عبر تقديم خدمات هندسية متقدمة",
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
