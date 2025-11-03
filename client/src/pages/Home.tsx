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
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: "🏗️",
    title: "الأنشطة الهندسية",
    description: "حلول هندسية متكاملة من الفكرة إلى التنفيذ",
  },
  {
    icon: "📐",
    title: "الأعمال المساحية",
    description: "تقنيات GPS وGIS الحديثة لأعمال مساحية دقيقة",
  },
  {
    icon: "🎨",
    title: "التصميم المعماري",
    description: "تصاميم خارجية وداخلية احترافية وعصرية",
  },
  {
    icon: "👷",
    title: "الإشراف على المشاريع",
    description: "إشراف هندسي شامل وفعال على جميع المراحل",
  },
  {
    icon: "📊",
    title: "الدراسات الهندسية",
    description: "دراسات فنية متخصصة تدعم قراراتك",
  },
  {
    icon: "⚡",
    title: "التصاميم الكهروميكانيكية",
    description: "حلول متكاملة للأنظمة الكهربائية والميكانيكية",
  },
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

const benefits = [
  "فريق متخصص وذو خبرة عالية",
  "تقنيات حديثة وأدوات متطورة",
  "التزام بالجودة والدقة",
  "دعم شامل بعد المشروع",
];

type HomeHeroProps = {
  scrollY: number;
};

function HomeHero({ scrollY }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden pb-32 pt-20 sm:pb-48 sm:pt-40">
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-accent/20 px-5 py-3 text-sm font-bold text-primary transition-colors">
                ✨ حلول هندسية عصرية
              </span>
              <h1 className="heading-modern text-gradient">الهندسة تبدأ من هنا</h1>
              <p className="max-w-lg text-xl font-medium leading-relaxed text-foreground/70">
                نقدم حلولًا هندسية متكاملة وحديثة تسهم في تطوير بيئة عمرانية
                مستدامة
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <ButtonLink
                href="/contact"
                className="btn-modern bg-gradient-to-r from-primary to-primary/80 text-white hover:scale-105 hover:shadow-2xl"
              >
                احصل على استشارة
                <ArrowRight className="inline-block h-5 w-5" />
              </ButtonLink>
              <ButtonLink
                href="/services"
                className="btn-modern border-2 border-primary bg-transparent text-primary hover:bg-primary/5"
              >
                اعرف الخدمات
              </ButtonLink>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { label: "مشروع منفذ", value: "50+" },
                { label: "سنة خبرة", value: "15+" },
                { label: "عميل راضي", value: "100+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group text-center transition-transform duration-300 hover:scale-110"
                >
                  <div className="text-3xl font-black text-gradient">
                    {stat.value}
                  </div>
                  <p className="text-sm font-medium text-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative animate-slide-in-down">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl transition-all duration-300 group-hover:blur-3xl" />
            <img
              src="/interior-design.jpg"
              alt="تصميم داخلي عصري"
              className="relative h-auto w-full rounded-3xl border-2 border-primary/20 object-cover shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageLayout hero={<HomeHero scrollY={scrollY} />}>
      <section className="section-modern bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container space-y-16">
          <SectionHeading
            title="خدماتنا الهندسية"
            subtitle="مجموعة شاملة من الخدمات الهندسية المتكاملة والمتخصصة"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-modern group cursor-pointer p-8 transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mb-6 font-medium leading-relaxed text-foreground/70">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary transition-all duration-300 group-hover:gap-3">
                  اعرف أكثر
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
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

      <section className="section-modern relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="heading-modern mb-6 text-white">
            هل تريد استشارة هندسية؟
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
