import { useEffect, useState } from "react";

// Ant Design: floating quick actions (RTL aware)
// Note: Avoid importing Ant Design global reset to prevent style conflicts
// import "antd/dist/reset.css"; // intentionally not used to keep Tailwind styles intact
import { ConfigProvider as AntdProvider, FloatButton } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

// Lucide React: Back-to-top icon
import { ChevronUp } from "lucide-react";

// Chakra: toast on CTA click
// Remove Chakra dependency to avoid global CSS conflicts

// Mantine: scroll progress indicator
import { MantineProvider, Progress } from "@mantine/core";

function BackToTopFab() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed left-4 bottom-4 z-[60]">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="أعلى الصفحة"
        title="أعلى الصفحة"
        className="
          flex items-center justify-center
          w-12 h-12
          bg-[#2f45ff] hover:bg-[#1e35e6]
          text-white
          rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300
          hover:scale-110
          active:scale-95
        "
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}

function QuickActions() {
  return (
    <AntdProvider direction="rtl">
      <FloatButton.Group shape="circle" style={{ left: 24, bottom: 96, zIndex: 60 }}>
        <FloatButton
          icon={<PhoneOutlined />}
          tooltip="اتصل بنا"
          href="tel:0555720166"
        />
        <FloatButton
          icon={<MailOutlined />}
          tooltip="راسلنا"
          href="mailto:ghazia119@gmail.com"
        />
        <FloatButton
          icon={<ArrowUpOutlined />}
          tooltip="أعلى الصفحة"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </FloatButton.Group>
    </AntdProvider>
  );
}

function StickyHint() {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setSeen(true), 800);
    return () => clearTimeout(id);
  }, []);
  if (!seen) return null;
  return (
    <div
      className="fixed bottom-4 right-4 z-[60] hidden cursor-pointer select-none rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-2xl sm:block"
      onClick={() => setSeen(false)}
      title="انقر للإخفاء"
    >
      تلميح: بطاقات "نظرة سريعة" تقودك للتفاصيل
    </div>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <MantineProvider theme={{ respectReducedMotion: true }}>
      <div className="fixed top-[64px] left-0 right-0 z-[55]">
        <Progress value={progress} color="#2f45ff" size="xs" radius="xs" />
      </div>
    </MantineProvider>
  );
}

export default function ServicesEnhancements() {
  return (
    <>
      <StickyHint />
      <QuickActions />
      <BackToTopFab />
      <ScrollProgressBar />
    </>
  );
}
