import ButtonLink from "@/components/ButtonLink";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Wrench,
  Building2,
  Route as RouteIcon,
  Paintbrush,
  KeyRound,
  FileCog,
  Building,
} from "lucide-react";
import { lazy, Suspense } from "react";
const ServicesEnhancements = lazy(
  () => import("@/components/ServicesEnhancements")
);

type ServiceBlock = {
  heading: string;
  items: string[];
};

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

type ServiceSection = {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  intro?: string[];
  image?: string;
  imageAlt?: string;
  blocks: ServiceBlock[];
};

const sections: ServiceSection[] = [
  // {
  //   id: "buildings",
  //   title: "أعمال المباني",
  //   summary:
  //     "تصميم وبناء وصيانة المباني السكنية والتجارية والصناعية والعامة، من الفكرة حتى التسليم والصيانة.",
  //   icon: <Building2 className="w-8 h-8" aria-hidden />,
  //   image: "/photoApp/hero-building.jpg",
  //   imageAlt: "أعمال تصميم وبناء وصيانة المباني",
  //   intro: [
  //     "التصميم المعماري والهندسي",
  //     "البناء والإنشاء",
  //     "التركيبات الكهربائية والميكانيكية",
  //     "التشطيبات الداخلية والخارجية",
  //     "الصيانة والإصلاح",
  //   ],
  //   blocks: [
  //     {
  //       heading: "الأنواع",
  //       items: [
  //         "المباني السكنية: الشقق والفلل",
  //         "المباني التجارية: المكاتب والمراكز والمحلات",
  //         "المباني الصناعية: المصانع والمرافق",
  //         "المباني العامة: المدارس والمستشفيات والمرافق",
  //       ],
  //     },
  //     {
  //       heading: "الأهداف",
  //       items: [
  //         "توفير هياكل آمنة وعملية",
  //         "تلبية احتياجات المستخدمين",
  //         "تحسين جودة الحياة",
  //         "تعزيز الاستدامة والكفاءة",
  //       ],
  //     },
  //     {
  //       heading: "المراحل",
  //       items: [
  //         "مرحلة التصميم",
  //         "مرحلة البناء",
  //         "مرحلة التشطيب",
  //         "مرحلة التسليم",
  //         "مرحلة الصيانة",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "urban-planning",
  //   title: "التخطيط العمراني",
  //   summary:
  //     "دراسة وتنظيم استخدامات الأراضي وتخطيط المدن والمناطق الحضرية لتحقيق تنمية متوازنة ومستدامة تلبي احتياجات السكان الحالية والمستقبلية.",
  //   icon: <Building className="w-8 h-8" aria-hidden />,
  //   image: "/photoApp/urban-planning.jpg",
  //   imageAlt: "خدمات التخطيط العمراني وتخطيط المدن",
  //   intro: [
  //     "إعداد المخططات الهيكلية والعامة",
  //     "تخطيط استخدامات الأراضي",
  //     "تصميم الأحياء والمناطق السكنية",
  //     "دراسات النمو السكاني والتوسع العمراني",
  //     "تحقيق التنمية المستدامة",
  //   ],
  //   blocks: [
  //     {
  //       heading: "الخدمات",
  //       items: [
  //         "إعداد المخططات الهيكلية للمدن",
  //         "تخطيط الأحياء السكنية الجديدة",
  //         "تنظيم استعمالات الأراضي",
  //         "تخطيط المناطق التجارية والصناعية",
  //         "إعداد دراسات الجدوى العمرانية",
  //       ],
  //     },
  //     {
  //       heading: "الأهداف",
  //       items: [
  //         "تحقيق تنمية عمرانية متوازنة",
  //         "تحسين جودة الحياة للسكان",
  //         "الاستغلال الأمثل للأراضي",
  //         "تقليل العشوائيات والمشاكل الحضرية",
  //         "تعزيز الاستدامة البيئية",
  //       ],
  //     },
  //     {
  //       heading: "المراحل",
  //       items: [
  //         "جمع البيانات والدراسات الميدانية",
  //         "تحليل الوضع العمراني القائم",
  //         "إعداد التصاميم والمخططات الأولية",
  //         "مراجعة واعتماد المخططات",
  //         "إعداد المخططات النهائية والتنفيذية",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "finishes",
  //   title: "التشطيبات",
  //   summary:
  //     "المرحلة الأخيرة لتجهيز المبنى للاستخدام، وتشمل الأعمال الداخلية والخارجية لتحسين المظهر والراحة والقيمة.",
  //   icon: <Paintbrush className="w-8 h-8" aria-hidden />,
  //   image: "/photoApp/interior-design.jpg",
  //   imageAlt: "تشطيبات داخلية وخارجية للمباني",
  //   intro: [
  //     "تشطيبات داخلية: الدهان، الأرضيات، المطابخ والحمامات، الإضاءة والكهرباء",
  //     "تشطيبات خارجية: الواجهات، النوافذ والأبواب، الطلاء الخارجي",
  //   ],
  //   blocks: [
  //     {
  //       heading: "الأهداف",
  //       items: [
  //         "تحسين المظهر الجمالي",
  //         "توفير بيئة مريحة وآمنة",
  //         "حماية المبنى من العوامل الجوية",
  //         "تعزيز قيمة المبنى",
  //       ],
  //     },
  //     {
  //       heading: "الأهمية",
  //       items: [
  //         "تعكس شخصية المالك",
  //         "تؤثر على جودة الحياة",
  //         "تزيد من قيمة العقار",
  //         "تعزز السلامة والراحة",
  //       ],
  //     },
  //   ],
  // },
  {
    id: "om",
    title: "أعمال التشغيل والصيانة",
    summary:
      "تشغيل وصيانة المباني والمرافق وإدارة الأنظمة الكهربائية والميكانيكية والمياه والصرف الصحي بخدمات وقائية وتصحيحية وطوارئ.",
    icon: <Wrench className="w-8 h-8" aria-hidden />,
    image: "/photoApp/hero-building.jpg",
    imageAlt: "أعمال تشغيل وصيانة للمباني والمرافق",
    blocks: [
      {
        heading: "نطاق الأعمال",
        items: [
          "تشغيل وصيانة المباني والمرافق العامة والخاصة",
          "إدارة وتشغيل أنظمة الكهرباء والميكانيكا والتبريد والتكييف",
          "صيانة وإصلاح الأنظمة الكهربائية والميكانيكية",
          "تشغيل وصيانة أنظمة المياه والصرف الصحي",
          "إدارة وتشغيل مرافق عامة مثل المدارس والمستشفيات والحدائق",
          "خدمات الصيانة الوقائية والتصحيحية",
          "خدمات الطوارئ والصيانة الفورية",
        ],
      },
      {
        heading: "الأهداف",
        items: [
          "ضمان تشغيل آمن وكفء للمرافق",
          "تحسين كفاءة استخدام الموارد",
          "تقليل التكاليف التشغيلية",
          "تقديم خدمات عالية الجودة",
        ],
      },
      {
        heading: "خدمات إضافية",
        items: ["إدارة المشاريع", "استشارات فنية"],
      },
    ],
  },
  {
    id: "roads",
    title: "صيانة الطرق",
    summary:
      "مجموعة أنشطة للحفاظ على الطرق آمنة وسالكة تشمل الرصف والعلامات والإنارة والصرف والجسور والتنظيف.",
    icon: <RouteIcon className="w-8 h-8" aria-hidden />,
    image: "/photoApp/architectural-plan.jpg",
    imageAlt: "صيانة الطرق والعناصر المرتبطة",
    intro: [
      "صيانة الرصف: إصلاح الشقوق والثقوب وتجديد طبقات الرصف",
      "صيانة العلامات المرورية: تنظيف وتجديد العلامات",
      "صيانة الإنارة: إصلاح وصيانة إنارة الطرق",
      "صيانة الصرف: تنظيف وصيانة أنظمة تصريف مياه الأمطار",
      "صيانة الجسور والأنفاق: فحص وصيانة الهياكل",
      "تنظيف الطرق: إزالة الأوساخ والحصى والحطام",
    ],
    blocks: [
      {
        heading: "الأهداف",
        items: [
          "تحسين السلامة المرورية",
          "تقليل الحوادث المرورية",
          "تحسين جودة الطرق",
          "زيادة عمر الطرق",
          "تقليل تكاليف الصيانة على المدى الطويل",
        ],
      },
      {
        heading: "الأنواع",
        items: [
          "صيانة وقائية: بانتظام لمنع الأضرار",
          "صيانة تصحيحية: لإصلاح الأضرار القائمة",
          "صيانة طارئة: للحوادث والكوارث الطبيعية",
        ],
      },
    ],
  },
  {
    id: "turnkey",
    title: "تسليم مفتاح",
    summary:
      "نتولى المشروع من التصميم إلى التسليم الجاهز للاستخدام، مع جودة مضمونة وتكلفة ومدة محددة مسبقًا.",
    icon: <KeyRound className="w-8 h-8" aria-hidden />,
    image: "/photoApp/architectural-plan.jpg",
    imageAlt: "مشاريع تسليم مفتاح جاهزة للاستخدام",
    blocks: [
      {
        heading: "المميزات",
        items: [
          "توفير الوقت والجهد على المالك",
          "ضمان جودة العمل",
          "تحديد التكاليف مسبقًا",
          "تقليل المخاطر على المالك",
        ],
      },
      {
        heading: "الخدمات",
        items: [
          "تصميم وبناء المباني",
          "تشطيب داخلي وخارجي",
          "تركيب أنظمة الكهرباء والميكانيكا",
          "تركيب الأثاث والمعدات",
          "تسليم جاهز للاستخدام",
        ],
      },
      {
        heading: "الفوائد",
        items: [
          "راحة البال",
          "ضمان الجودة والضمان",
          "توفير الوقت والمال",
          "تقليل النزاعات والمشاكل",
        ],
      },
    ],
  },
  {
    id: "contracts",
    title: "عقود الصيانة والتشغيل",
    summary:
      "اتفاقيات تضمن استدامة وكفاءة المرافق والمعدات مع تقليل الأعطال ووقت التوقف وتحسين الاعتمادية.",
    icon: <FileCog className="w-8 h-8" aria-hidden />,
    image: "/photoApp/architectural-plan.jpg",
    imageAlt: "عقود صيانة وتشغيل للمرافق",
    blocks: [
      {
        heading: "الأهداف",
        items: [
          "تشغيل آمن وكفء للمرافق والأجهزة",
          "تقليل التكاليف على المدى الطويل",
          "زيادة كفاءة المعدات والأنظمة",
          "تقليل وقت التوقف",
          "ضمان السلامة والموثوقية",
        ],
      },
      {
        heading: "الخدمات",
        items: [
          "تشغيل وصيانة المرافق العامة والخاصة",
          "إدارة وتشغيل أنظمة الكهرباء والميكانيكا",
          "صيانة وإصلاح المعدات والآلات",
          "خدمات الطوارئ والصيانة الفورية",
          "تقارير صيانة وتحليلات دورية",
        ],
      },
      {
        heading: "الفوائد",
        items: [
          "راحة البال للمالك",
          "ضمان الجودة",
          "توفير الوقت والمال",
          "زيادة كفاءة العمل",
        ],
      },
    ],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openMap, setOpenMap] = useState<Record<string, string[]>>({});

  const sectionIndex = useMemo(() => {
    const map = new Map<string, ServiceSection>();
    sections.forEach(s => map.set(s.id, s));
    return map;
  }, []);

  const expandAllFor = (id: string) => {
    const s = sectionIndex.get(id);
    if (!s) return [] as string[];
    return s.blocks.map((_, i) => `${id}-block-${i}`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Smooth scroll with offset handled by scroll-mt on the section
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // If URL contains a hash, set it as active (without auto-expanding).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      setActiveId(hash);
    }
  }, []);

  return (
    <PageLayout
      hero={
        <HeroSection
          title="خدمات التشغيل و الصيانة"
          description="نقدم حلولًا شاملة في التشغيل والصيانة، صيانة الطرق، وتسليم المشاريع وفق أعلى المعايير الهندسية."
          eyebrow="خدمات متخصصة"
          alignment="center"
        />
      }
    >
      {/* In-page navigation */}
      <nav
        className="section-modern pt-10 pb-6"
        aria-label="روابط أقسام الخدمات"
      >
        <div className="container">
          <div
            className="flex gap-3 overflow-x-auto pb-2 justify-center items-center"
            role="list"
          >
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                role="listitem"
                className="whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section className="section-modern">
        <div className="container grid grid-cols-1 gap-8">
          {sections.map((s, idx) => (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className={`card-modern p-8 md:p-10 scroll-mt-28 ${
                activeId === s.id ? "ring-2 ring-primary/40" : ""
              }`}
              style={{
                animation: `slideInUp 0.6s ease-out ${idx * 0.06}s both`,
              }}
            >
              <header className="mb-6 flex items-center gap-3">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  aria-hidden
                >
                  {s.icon}
                </span>
                <h2
                  id={`${s.id}-title`}
                  className="text-2xl sm:text-3xl font-extrabold text-primary"
                >
                  {s.title}
                </h2>
              </header>

              <p className="text-foreground/80 leading-relaxed mb-6 font-medium">
                {s.summary}
              </p>

              {s.intro ? (
                <div className="mb-6">
                  <h3 className="text-lg font-extrabold text-foreground mb-3">
                    المفهوم والأنشطة
                  </h3>
                  <ul className="list-disc pr-6 space-y-2 text-foreground/80">
                    {s.intro.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <Accordion
                type="multiple"
                className="border-t"
                value={openMap[s.id] || []}
                onValueChange={(vals: string[]) =>
                  setOpenMap(prev => ({ ...prev, [s.id]: vals }))
                }
              >
                {s.blocks.map((block, i) => (
                  <AccordionItem key={i} value={`${s.id}-block-${i}`}>
                    <AccordionTrigger className="text-base font-bold">
                      {block.heading}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pr-6 space-y-2 text-foreground/80">
                        {block.items.map(it => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href="#main-content"
                  className="text-sm text-foreground/60 hover:text-primary"
                  aria-label="العودة إلى أعلى الصفحة"
                >
                  ↑ أعلى
                </a>
                <a
                  href="/contact"
                  className="text-primary font-bold inline-flex items-center gap-2"
                  data-toast-on-click="quote"
                  aria-label={`تواصل بخصوص ${s.title}`}
                >
                  اطلب عرض لهذه الخدمة
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern bg-gradient-to-r from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            ابدأ الآن{" "}
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            تواصل معنا الآن للحصول على عرض مُفصّل وخطة تشغيل وصيانة تناسب
            احتياجك
          </p>
          <div className="flex justify-center">
            <ButtonLink
              href="/contact"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl font-black"
              data-toast-on-click="contact"
            >
              تواصل معنا
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </ButtonLink>
          </div>
        </div>
      </section>
      {/* 3rd-party UI/UX enhancements: AntD + MUI + Chakra + Mantine */}
      <Suspense fallback={null}>
        <ServicesEnhancements />
      </Suspense>
    </PageLayout>
  );
}
