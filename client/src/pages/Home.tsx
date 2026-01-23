import ButtonLink from "@/components/ButtonLink";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Award,
  Users,
  Target,
  ShieldAlert,
  HardHat,
  DraftingCompass,
  Building2,
  Sofa,
  ClipboardList,
  Globe,
  FileCog,
  Lightbulb,
  PhoneCall,
  Sparkles,
  ClipboardCheck,
  SearchCheck,
  FileCheck2,
  Wrench,
  Projector,
} from "lucide-react";
import { useEffect, useRef, useState, useMemo, useCallback, lazy, Suspense } from "react";
import { Link } from "wouter";
import EngineeringServices from "./EngineeringServices";
import OurWorksCard from "@/components/ui/OurWorkCard";

const PdfFlipbook = lazy(() => import("@/components/PdfFlipbook"));

const engineeringServices = [
  {
    title: "الأنشطة الهندسية",
    slug: "الأنشطة-الهندسية",
    description:
      "نقدم باقة متكاملة من الأنشطة الهندسية التي تغطي مختلف مراحل المشروع، من الفكرة إلى التنفيذ، بما يضمن تحقيق أعلى معايير الجودة والكفاءة.مع الالتزام بتطبيق الكود السعودي للبناء",
    image: "/photoApp/building-construction-new-skyscrapers.jpg",
    icon: <HardHat className="h-6 w-6 text-primary" />,
  },
  {
    title: "الأعمال المساحية",
    slug: "الأعمال-المساحية",
    description:
      "نقدّم خدمات رفع مساحي دقيقة باستخدام أحدث تقنيات GPS ونظم GIS، لإعداد الكروكيات وإصدار القرارات المساحية لأغراض الرخص والتخطيط العمراني وتحديث الصكوك عبر منصات بلدي وسكني وإحكام.",
    image: "/photoApp/architectural-plan.jpg",
    icon: <DraftingCompass className="h-6 w-6 text-primary" />,
  },
  {
    title: "التصميم المعماري الخارجي",
    slug: "التصميم-المعماري-الخارجي",
    description:
      "نبتكر واجهات معمارية متميزة تعكس هوية المشروع وتتناغم مع البيئة المحيطة، مع مراعاة الجمال والوظيفة ومعايير الاستدامة والعمران.",
    image: "/photoApp/architect-working-with-computer-front-windows-office.jpg",
    icon: <Building2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "التصميم المعماري الداخلي",
    slug: "التصميم-المعماري-الداخلي",
    description:
      "نوفر تصاميم داخلية متكاملة تركز على استغلال المساحات، وتنسيق الألوان والإضاءة والمواد، بما يعكس الراحة والذوق الرفيع.",
    image: "/photoApp/interior-design.jpg",
    icon: <Sofa className="h-6 w-6 text-primary" />,
  },
  {
    title: "الإشراف على المشاريع",
    slug: "الإشراف-على-المشاريع",
    description:
      "نقدم خدمات إشراف هندسي شامل، نتابع من خلالها تنفيذ مراحل المشاريع خطوة بخطوة لضمان الالتزام بالمخططات والمواصفات، وتحقيق أعلى مستويات الجودة في الوقت المحدد.",
    image: "/photoApp/close-up-man-with-helmet-back-view.jpg",
    icon: <HardHat className="h-6 w-6 text-primary" />,
  },
  {
    title: "الدراسات الهندسية",
    slug: "الدراسات-الهندسية",
    description:
      "نُعد دراسات فنية وهندسية متخصصة تدعم اتخاذ القرارات وتساعد على التخطيط الأمثل للمشاريع، وفق المعايير المعتمدة والاشتراطات التنظيمية.",
    image:
      "/photoApp/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg",
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
  },
  {
    title: "الدراسات الجيولوجية والهيدرولوجية",
    slug: "الدراسات-الجيولوجية-والهيدرولوجية",
    description:
      "نجري تحليلات علمية للتربة والخصائص الجيولوجية والهيدرولوجية للمواقع، لتحديد صلاحيتها للإنشاء وضمان سلامة البنية التحتية المستقبلية.",
    image: "/photoApp/scene-construction-site-with-equipment.jpg",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    title: "التقارير الهندسية",
    slug: "التقارير-الهندسية",
    description:
      "نعد تقارير تفصيلية وموثقة عن الحالة الفنية للمنشآت أو المشاريع، تشمل التحاليل الفنية والملاحظات والتوصيات اللازمة للإصلاح أو التطوير أو التقييم.",
    image: "/photoApp/building-new-concrete-houses.jpg",
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
  },
  {
    title: "التصاميم الكهروميكانيكية",
    slug: "التصاميم-الكهروميكانيكية",
    description:
      "نوفر حلولًا متكاملة لأنظمة الكهرباء والميكانيكا، تشمل التكييف، التهوية، التغذية بالمياه، الصرف الصحي، والأنظمة التقنية، بما يضمن تشغيلًا آمنًا وفعالًا للمباني والمنشآت.",
    image: "/photoApp/construction-high-rise-building-sunset.jpg",
    icon: <FileCog className="h-6 w-6 text-primary" />,
  },
  {
    title: "تصاميم الكهرباء",
    slug: "تصاميم-الكهرباء",
    description:
      "نصمم شبكات توزيع الطاقة، الإضاءة، أنظمة الإنذار، الحماية، والمراقبة، بطريقة تضمن الكفاءة والسلامة وتلبي احتياجات المنشآت على اختلاف أنواعها.",
    image: "/photoApp/beautiful-view-construction-site-city-sunset.jpg",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
  },
  {
    title: "تصاميم السلامة",
    slug: "تصاميم-السلامة",
    description:
      "نخطط ونصمم أنظمة السلامة والحماية من الحريق، بما يشمل مخارج الطوارئ، أنظمة الإنذار والإطفاء، وتجهيزات الطوارئ، وفق المعايير المعتمدة واللوائح التنظيمية.",
    image:
      "/photoApp/portrait-man-practicing-his-profession-celebrate-international-labour-day.jpg",
    icon: <ShieldAlert className="h-6 w-6 text-primary" />,
  },
  {
    title: "الخدمات الإنشائية",
    slug: "الخدمات-الانشائية",
    description:
      "نقدم خدمات إنشائية متكاملة تشمل التصميم الإنشائي والتحليل الهندسي للمباني والمنشآت بمختلف أنواعها، مع ضمان السلامة الإنشائية والكفاءة الاقتصادية، والالتزام الكامل بالكود السعودي للبناء والمعايير العالمية.",
    image: "/photoApp/structural-services.jpg",
    icon: <Building2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "الإشراف الهندسي",
    slug: "الاشراف-الهندسي",
    description:
      "نوفر خدمات الإشراف الهندسي لمتابعة تنفيذ المشاريع في جميع مراحلها، وضمان مطابقة الأعمال للمخططات والمواصفات الفنية، وتحقيق أعلى مستويات الجودة مع الالتزام بالجدول الزمني والتكلفة المعتمدة.",
    image: "/photoApp/engineering-supervision.jpg",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "الفحص والتقييم الإنشائي",
    slug: "الفحص-والتقييم-الانشائي",
    description:
      "نقوم بأعمال الفحص والتقييم الإنشائي للمباني القائمة لتحديد حالتها الإنشائية، واكتشاف العيوب والمخاطر المحتملة، وتقديم تقارير فنية دقيقة مع الحلول والتوصيات اللازمة لضمان السلامة والاستدامة.",
    image: "/photoApp/structural-assessment.jpg",
    icon: <SearchCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "التراخيص والاعتمادات",
    slug: "التراخيص-والاعتمادات",
    description:
      "نساعد عملاءنا في استخراج التراخيص والاعتمادات اللازمة للمشاريع الهندسية، وتجهيز المخططات والمستندات المطلوبة، ومتابعة الإجراءات مع الجهات المختصة لضمان سرعة الإنجاز والالتزام النظامي.",
    image: "/photoApp/engineering-licenses.jpg",
    icon: <FileCheck2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "إدارة المشاريع الإنشائية",
    slug: "ادارة-المشاريع-الانشائية",
    description:
      "نقدم خدمات إدارة المشاريع الإنشائية بدءًا من التخطيط وحتى التسليم، مع التحكم في الوقت والتكلفة والجودة، والتنسيق بين جميع الأطراف لضمان تنفيذ المشروع بكفاءة واحترافية عالية.",
    image: "/photoApp/construction-management.jpg",
    icon: <Projector className="h-6 w-6 text-primary" />,
  },
  {
    title: "أعمال الترميم والتدعيم",
    slug: "اعمال-الترميم-والتدعيم",
    description:
      "نقدم حلولًا هندسية متخصصة لأعمال الترميم والتدعيم الإنشائي للمباني المتضررة أو القديمة، باستخدام أحدث التقنيات والمواد لضمان رفع كفاءة المنشأ وإطالة عمره الافتراضي.",
    image: "/photoApp/structural-retrofitting.jpg",
    icon: <Wrench className="h-6 w-6 text-primary" />,
  },
];

const engineeringTools = [
  { title: "Autodesk 3ds Max", icon: "/iconApp/3ds-Max-logo-01.png" },
  { title: "Autodesk", icon: "/iconApp/autodesk2.png" },
  { title: "Microsoft 365", icon: "/iconApp/microsoft-365.png" },
  { title: "Primavera", icon: "/iconApp/primavera-4.svg" },
  { title: "Autocad", icon: "/iconApp/autocad2.png" },
  { title: "D5 render", icon: "/iconApp/d5_render.png" },
  { title: "Revit", icon: "/iconApp/revit2.png" },
  { title: "Civil 3D", icon: "/iconApp/civil3d2.png" },
  { title: "ETABS", icon: "/iconApp/etabs.jpg" },
  { title: "SketchUp", icon: "/iconApp/sketchup.png" },
  { title: "Lumion", icon: "/iconApp/lumion.png" },
];

const values = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "الاحترافية",
    description: "معايير عالية في كل عمل",
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "الدقة",
    description: "اهتمام بكل التفاصيل",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "الابتكار",
    description: "حلول جديدة ومبدعة",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "الالتزام",
    description: "احترام الوقت والميزانية",
  },
];
const servicesSections = [
  {
    id: "operation-maintenance",
    title: "التشغيل والصيانة المتكاملة للمشاريع العامة والخاصة",
    description:
      "نقدّم حلول تشغيل وصيانة شاملة تهدف إلى ضمان استدامة المباني والمرافق، ورفع كفاءتها التشغيلية، والحفاظ على سلامتها الفنية، وذلك وفق أعلى المعايير الهندسية والفنية المعتمدة.",
    image: "/photoApp/operation&maintenance.jpg",
    note: "التشغيل والصيانة الاحترافية تساهم في خفض التكاليف التشغيلية على المدى الطويل، وإطالة العمر الافتراضي للمباني والمرافق، والحد من الأعطال المفاجئة وتحسين مستوى الاعتمادية.",
    services: [
      {
        id: "building-works",
        title: "أعمال المباني",
        description:
          "صيانة وإدارة المباني السكنية والتجارية، وتشمل الأعمال الإنشائية، معالجة التشققات، أعمال العزل، وصيانة الأسطح، بما يضمن السلامة والاستمرارية وجودة الأداء.",
      },
      {
        id: "road-works",
        title: "أعمال الطرق",
        description:
          "تنفيذ وصيانة أعمال الأسفلت، التخطيط الأرضي، وأعمال الدهان باستخدام مادة الثرموبلاستيك، وفق المواصفات المعتمدة ومعايير السلامة المرورية.",
      },
      {
        id: "infrastructure-maintenance",
        title: "صيانة المرافق والبنية التحتية",
        description:
          "تشغيل وصيانة شبكات المياه، الصرف الصحي، الكهرباء، والطرق، مع ضمان كفاءة التشغيل وتقليل الأعطال المفاجئة.",
      },
      {
        id: "facility-management",
        title: "إدارة وتشغيل المنشآت",
        description:
          "الإشراف الكامل على تشغيل المنشآت، إعداد وتنفيذ جداول الصيانة الدورية والوقائية، وتحسين استهلاك الموارد والطاقة لتحقيق أعلى كفاءة تشغيلية.",
      },
    ],
  },
  {
    id: "contracting",
    title: "المقاولات العامة وتنفيذ المشاريع الهندسية",
    description:
      "تتولى الشركة تنفيذ مشاريع المقاولات العامة وفق خطط تنفيذ معتمدة ومنهجيات هندسية مدروسة، مع الالتزام الكامل بالمواصفات الفنية، والكودات الهندسية المعتمدة، ومتطلبات السلامة والصحة المهنية، وبما يضمن جودة التنفيذ وتحقيق مستهدفات الجهات المالكة ضمن الإطار الزمني والمالي المعتمد.",
    image: "/photoApp/Design.jpg",
    note: "يعتمد نجاح مشاريع المقاولات على الالتزام بالمنهجيات المعتمدة، ودقة التخطيط، وجودة التنفيذ، والمتابعة المستمرة في جميع مراحل المشروع، بما يضمن تحقيق متطلبات الجهات الحكومية والرقابية.",
    services: [
      {
        id: "finishing-works",
        title: "أعمال التشطيبات المعمارية",
        description:
          "تنفيذ أعمال التشطيبات الداخلية والخارجية للمباني، بما يشمل الأرضيات، الدهانات، الأسقف، الواجهات المعمارية، وأعمال العزل، وفق المواصفات الفنية المعتمدة وبما يحقق متطلبات الجودة والاعتماد.",
        image: "",
      },
      {
        id: "structural-contracting",
        title: "المقاولات الإنشائية (عظم)",
        description:
          "تنفيذ المباني السكنية والتجارية والحكومية، ابتداءً من أعمال الحفر والأساسات وحتى تنفيذ الهياكل الخرسانية، مع الالتزام التام بالكودات الهندسية السعودية والاشتراطات النظامية ذات العلاقة.",
        image: "",
      },
      {
        id: "rehabilitation-restoration",
        title: "أعمال الترميم وإعادة التأهيل",
        description:
          "تنفيذ أعمال ترميم وتأهيل المباني القائمة، معالجة العيوب الإنشائية، تدعيم العناصر الإنشائية عند الحاجة، وتحسين الكفاءة الوظيفية للمباني بما يتوافق مع متطلبات الاستخدام والمعايير المعتمدة.",
        image: "",
      },
      {
        id: "project-management",
        title: "إدارة وتنفيذ المشاريع",
        description:
          "التخطيط والتنفيذ والإشراف على المشاريع الهندسية، إعداد البرامج الزمنية، تنسيق الأعمال بين الجهات ذات العلاقة، متابعة سير العمل، وضمان الالتزام بالجدول الزمني، المواصفات الفنية، والتكاليف المعتمدة حتى مرحلة التسليم الابتدائي والنهائي.",
        image: "",
      },
    ],
  },
];
const benefits = [
  "فريق متخصص وذو خبرة عالية",
  "تقنيات حديثة وأدوات متطورة",
  "التزام بالجودة والدقة",
  "دعم شامل بعد المشروع",
];

type HomeHeroProps = {
  scrollY: number;
};

const heroHighlights = [
  { title: "مواصفات معتمدة", description: "مطابقة للكود السعودي" },
  { title: "فريق متعدد التخصصات", description: "هندسة، تصميم، إشراف" },
  { title: "استشارات فورية", description: "دعم على مدار الساعة" },
];

function HomeHero() {
  const topBlobRef = useRef<HTMLDivElement>(null);
  const bottomBlobRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) return;

      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        const y = window.scrollY;

        topBlobRef.current!.style.transform = `translateY(${y * 0.5}px)`;
        bottomBlobRef.current!.style.transform = `translateY(${y * -0.3}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050723] via-[#080b2c] to-background pb-32 pt-24 text-white sm:pb-48 sm:pt-40">
      <div className="absolute inset-0 opacity-30">
        <div
          ref={topBlobRef}
          className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-primary blur-[150px] transition-transform duration-300"
        />
        <div
          ref={bottomBlobRef}
          className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#8c5dff] blur-[140px] transition-transform duration-300"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-slide-in-up text-right order-2 lg:order-1">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/5 px-5 py-2 text-sm font-bold text-primary/90 shadow-inner shadow-primary/20">
                <Sparkles className="h-4 w-4" />
                حلول هندسية عصرية
              </span>
              <h1 className="text-3xl font-black leading-[1.3] text-white sm:text-4xl lg:text-5xl xl:text-6xl mb-2 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 drop-shadow-[0_4px_12px_rgba(92,124,250,0.3)]">
                <span className="bg-gradient-to-r from-white via-primary/90 to-accent bg-clip-text text-transparent">
                  حلول هندسية متكاملة من الفكرة إلى التنفيذ
                </span>
              </h1>
              <p className="max-w-lg text-lg font-medium leading-relaxed text-white/70">
                نقدم حلولًا هندسية متكاملة وحديثة تسهم في تطوير بيئة عمرانية
                مستدامة، من التخطيط وحتى التشغيل.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
                {heroHighlights.map(item => (
                  <div
                    key={item.title}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
                  >
                    <div>{item.title}</div>
                    <span className="text-xs text-white/60">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-end">
              <ButtonLink
                href="/contact"
                className="btn-modern bg-gradient-to-r from-[#5c7cfa] via-primary to-[#8653ff] text-white hover:scale-105 hover:shadow-[0_20px_50px_rgba(92,124,250,0.5)]"
              >
                احصل على استشارة
                <ArrowRight className="inline-block h-5 w-5" />
              </ButtonLink>
              <ButtonLink
                href="/services"
                className="btn-modern border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                اعرف الخدمات
              </ButtonLink>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "مشروع منفذ", value: "2687+" },
                  { label: "سنة خبرة", value: "32+" },
                  { label: "عميل راضي", value: "4000+" },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black text-primary">
                      {stat.value}
                    </div>
                    <p className="text-xs font-semibold text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative order-1 lg:order-2">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl transition-all duration-300 group-hover:blur-[110px]" />
            <img
              src="/photoApp/interior-design.jpg"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              alt="تصميم داخلي عصري"
              className="relative h-auto w-full rounded-[40px] border border-primary/20 object-cover shadow-[0_35px_90px_rgba(5,6,16,0.7)] transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute right-5 bottom-5 rounded-2xl bg-white/90 px-5 py-4 text-right text-sm text-foreground shadow-2xl">
              <div className="flex items-center gap-2 font-bold text-primary">
                <PhoneCall className="h-4 w-4" />
                تواصل مباشر
              </div>
              <p className="text-xs text-foreground/70">
                خبراؤنا مستعدون لاستقبال مشروعك فوراً
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const EngineeringToolsImages = [
  "/photoApp/arc.png",
  "/photoApp/arc1.png",
  "/photoApp/arc2.jpg",
  "/photoApp/arc3.png",
  "/photoApp/arc4.png",
  "/photoApp/arc5.png",
  "/photoApp/arc6.png",
  "/photoApp/arc7.png",
  "/photoApp/arc8.png",
  "/photoApp/arc9.png",
  "/photoApp/arc10.png",
  "/photoApp/arc11.png",
  "/photoApp/arc12.png",
  "/photoApp/arc13.png",
  "/photoApp/arc14.png",
  "/photoApp/arc15.png",
  "/photoApp/arc16.png",
  "/photoApp/arc18.png",
  "/photoApp/arc19.png",
  "/photoApp/arc20.png",
];

export default function Home() {
  // State for rotating image in أدواتنا الرقمية section
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Function to update container height
  const updateContainerHeight = useCallback(() => {
    const currentImage = imageRefs.current[currentImageIndex];
    if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
      const aspectRatio = currentImage.naturalHeight / currentImage.naturalWidth;
      const containerWidth = currentImage.parentElement?.clientWidth || 0;
      if (containerWidth > 0) {
        setContainerHeight(containerWidth * aspectRatio);
      }
    }
  }, [currentImageIndex]);

  // Update container height when image changes
  useEffect(() => {
    updateContainerHeight();
  }, [updateContainerHeight]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      updateContainerHeight();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateContainerHeight]);

  // Handle image load to update container height
  const handleImageLoad = (index: number) => {
    if (index === currentImageIndex) {
      updateContainerHeight();
    }
  };

  // Rotate images every 30 seconds
  useEffect(() => {
    if (EngineeringToolsImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        prevIndex => (prevIndex + 1) % EngineeringToolsImages.length
      );
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const ourWorksImages = useMemo(
    () => [
      "/photoApp/arc.png",
      "/photoApp/arc1.png",
      "/photoApp/arc2.jpg",
      "/photoApp/arc3.png",
      "/photoApp/arc4.png",
      "/photoApp/arc5.png",
      "/photoApp/arc6.png",
      "/photoApp/arc7.png",
      "/photoApp/arc8.png",
      "/photoApp/arc9.png",
      "/photoApp/arc10.png",
      "/photoApp/arc11.png",
      "/photoApp/arc12.png",
      "/photoApp/arc13.png",
      "/photoApp/arc14.png",
      "/photoApp/arc15.png",
      "/photoApp/arc16.png",
      "/photoApp/arc18.png",
      "/photoApp/arc19.png",
      "/photoApp/arc20.png",
    ],
    []
  );

  return (
    <PageLayout hero={<HomeHero />}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[70vh]">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-400 border-t-transparent" />
          </div>
        }
      >
        <PdfFlipbook pdfUrl="/companyP.pdfx" />
      </Suspense>

      {/* Services Sections */}
      {servicesSections.map((section, sectionIndex) => (
        <section
          key={section.id}
          className={`w-full py-16 lg:py-24 ${
            sectionIndex % 2 === 0
              ? "bg-white dark:bg-[#0a0f1e]"
              : "bg-[#f3f5fe] dark:bg-[#060913]"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header with Image */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image Column - Alternates position */}
                <div
                  className={
                    sectionIndex % 2 === 0
                      ? "order-2 lg:order-1"
                      : "order-2 lg:order-2"
                  }
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      fetchPriority={sectionIndex === 0 ? "high" : "low"}
                    />
                  </div>
                </div>

                {/* Content Column - Alternates position */}
                <div
                  className={
                    sectionIndex % 2 === 0
                      ? "order-1 lg:order-2 text-center lg:text-right"
                      : "order-1 lg:order-1 text-center lg:text-right"
                  }
                >
                  <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <div className="h-1 w-20 bg-primary rounded-full mx-auto lg:mx-0 mb-6" />
                  <p className="text-lg lg:text-xl text-[#4b5567] text-justify dark:text-[#94a3b8] leading-relaxed font-medium">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {section.services.map(service => (
                <div
                  key={service.id}
                  className="
                    bg-white dark:bg-[#0f1629]
                    border border-[#e5e7eb] dark:border-[#1e293b]
                    rounded-xl p-6
                    shadow-sm
                    transition-all duration-300
                    hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50
                    hover:-translate-y-1
                  "
                >
                  <h3 className="text-xl font-bold text-[#0f1629] dark:text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#6b7280] dark:text-[#94a3b8] leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlighted Note Area */}
            <div
              className="
              bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5
              dark:from-primary/10 dark:via-primary/5 dark:to-accent/10
              border-l-4 border-primary
              rounded-lg p-6 lg:p-8
              shadow-sm
            "
            >
              <p className="text-base lg:text-lg text-[#374151] dark:text-[#e5e7eb] leading-relaxed font-medium">
                {section.note}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* أدواتنا الرقمية */}
      <section
        dir="rtl"
        className="w-full py-24 bg-[#f3f5fe] dark:bg-[#060913]"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="space-y-4 max-lg:mb-5 max-lg:text-center">
            <h2 className="text-4xl font-bold text-primary">أدواتنا الرقمية</h2>
            <p className="text-lg text-[#4b5567] dark:text-[#94A3B8] max-w-xl lg:ml-auto max-lg:mx-auto">
              نستخدم أحدث البرمجيات الهندسية لضمان أعلى مستويات الدقة والجودة في
              التصميم والتنفيذ
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* TEXT + TOOLS */}
            <div className="space-y-8 text-center lg:text-right">
              {/* Tools Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {engineeringTools.map(tool => (
                  <div
                    key={tool.title}
                    className="
              flex flex-col items-center gap-4
              p-4 rounded-xl
              bg-white/70 dark:bg-[#0b1220]
              hover:scale-[1.03]
              transition-all duration-300
              shadow-sm
            "
                  >
                    <img
                      src={tool.icon}
                      alt={tool.title}
                      className="h-14 w-14 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-semibold text-[#0f1629] dark:text-[#E5E7EB]">
                      {tool.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE – SOFT ACCENT */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-[#0c21c8]/20 to-transparent z-10"></div>
              <div 
                className="relative w-full rounded-[28px] overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  height: containerHeight ? `${containerHeight}px` : 'auto',
                  minHeight: containerHeight ? undefined : '340px',
                  aspectRatio: containerHeight ? undefined : '16/9'
                }}
              >
                {EngineeringToolsImages.map((imageSrc, index) => (
                  <img
                    key={imageSrc}
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    src={imageSrc}
                    alt="أدواتنا الرقمية"
                    onLoad={() => handleImageLoad(index)}
                    className={`
                      absolute inset-0 w-full h-full object-cover rounded-[28px]
                      shadow-[0_30px_60px_rgba(12,33,200,0.15)]
                      transition-opacity duration-1000 ease-in-out
                      ${index === currentImageIndex ? "opacity-100" : "opacity-0"}
                    `}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* خدماتنا الهندسية */}
      <section className="section-modern bg-linear-to-b from-transparent via-primary/5 to-transparent">
        <div className="container space-y-12">
          <SectionHeading
            title="خدماتنا الهندسية"
            subtitle="نقدم لكم مجموعة من أهم الخدمات"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {engineeringServices.map((service, index) => (
              <Link
                key={index}
                href={`/${service.slug}`}
                className="
                    group relative cursor-pointer
                    rounded-xl p-6
                    overflow-hidden
                    bg-gradient-to-br from-blue-50/80 via-slate-50/60 to-blue-50/40
                    dark:from-slate-900/60 dark:via-slate-800/50 dark:to-slate-900/40
                    border border-blue-100/50 dark:border-slate-700/50
                    shadow-sm
                    transition-all duration-300 ease-in-out
                    hover:bg-gradient-to-br hover:from-blue-100/90 hover:via-slate-100/80 hover:to-blue-100/60
                    dark:hover:from-slate-800/80 dark:hover:via-slate-700/70 dark:hover:to-slate-800/60
                    hover:border-blue-200/70 dark:hover:border-slate-600/70
                    hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20
                    hover:-translate-y-1
                  "
              >
                <div className="relative z-10 space-y-4">
                  {/* IMAGE + TITLE */}
                  <div className="flex items-start gap-4">
                    {/* <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="
                w-20 h-20 object-cover rounded-lg 
                shadow-md dark:shadow-none
              "
                    /> */}

                    <div className="flex-1 space-y-2">
                      <h3
                        className="
                  text-2xl font-bold flex items-center gap-2
                  text-[#0f1629] dark:text-[#F1F5F9] font-bold
                  transition-colors duration-300
                  group-hover:text-primary
                "
                      >
                        <span className="text-[#0c21c8] dark:text-primary transition-transform duration-300 group-hover:scale-110">
                          {service.icon}
                        </span>
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                  text-[#4b5567]
                  text-base leading-relaxed font-bold dark:text-[#dcdcdc] text-justify
                  transition-colors duration-300
                  group-hover:text-[#2d3748] dark:group-hover:text-[#e2e8f0]
                "
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* CLICK INDICATOR */}
                  <div
                    className="
              h-[2px] w-24 origin-left scale-x-[0.6] bg-[#0c21c8] dark:bg-primary
              transition-transform duration-300 ease-in-out
              group-hover:scale-x-100 group-hover:bg-primary
            "
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <SectionHeading
                alignment="start"
                title="لماذا تختارنا؟"
                subtitle="نرافقك في كل خطوة من الاستشارة الأولية وحتى تسليم المشروع بنجاح"
                className="mb-4"
              />

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-primary/5"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <p className="text-lg font-medium text-foreground/70">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <ButtonLink
                href="/about"
                className="btn-modern bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-2xl"
              >
                اعرف أكثر عننا
                <ArrowRight className="inline-block h-5 w-5" />
              </ButtonLink>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-modern group cursor-default p-6 text-center transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="mb-4 flex justify-center text-primary transition-transform duration-300 group-hover:scale-125">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-modern bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container space-y-12">
          <SectionHeading
            title="أعمالنا"
            subtitle="أليكم مجموعة من أعمال شركتنا"
          />
          <OurWorksCard ourWorksImages={ourWorksImages} />
        </div>
      </section>

      <section className="section-modern relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="heading-modern mb-6 text-white">
            ابدأ استشارتك الهندسية الآن{" "}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-2xl font-medium text-white/90">
            تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
          </p>
          <ButtonLink
            href="/contact"
            className="btn-modern bg-white text-primary hover:scale-105 hover:bg-white/90 hover:shadow-2xl"
          >
            تواصل معنا الآن
            <ArrowRight className="inline-block h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </PageLayout>
  );
}
