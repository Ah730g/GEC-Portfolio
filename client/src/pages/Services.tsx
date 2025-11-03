import ButtonLink from "@/components/ButtonLink";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: "🏗️",
      title: "الأنشطة الهندسية",
      description: "حلول هندسية متكاملة من الفكرة إلى التنفيذ",
    },
    {
      id: 2,
      icon: "📐",
      title: "الأعمال المساحية",
      description: "تقنيات GPS وGIS الحديثة لأعمال مساحية دقيقة",
    },
    {
      id: 3,
      icon: "🎨",
      title: "التصميم المعماري الخارجي",
      description: "واجهات معمارية متميزة تعكس هوية المشروع",
    },
    {
      id: 4,
      icon: "🛋️",
      title: "التصميم المعماري الداخلي",
      description: "تصاميم داخلية متكاملة وعصرية",
    },
    {
      id: 5,
      icon: "👷",
      title: "الإشراف على المشاريع",
      description: "إشراف هندسي شامل على جميع المراحل",
    },
    {
      id: 6,
      icon: "📊",
      title: "الدراسات الهندسية",
      description: "دراسات فنية متخصصة تدعم قراراتك",
    },
    {
      id: 7,
      icon: "🌍",
      title: "الدراسات الجيولوجية والهيدرولوجية",
      description: "تحليلات علمية للتربة والخصائص الجيولوجية",
    },
    {
      id: 8,
      icon: "📋",
      title: "التقارير الهندسية",
      description: "تقارير تفصيلية وموثقة عن المنشآت",
    },
    {
      id: 9,
      icon: "⚡",
      title: "التصاميم الكهروميكانيكية",
      description: "حلول متكاملة للأنظمة الكهربائية والميكانيكية",
    },
    {
      id: 10,
      icon: "💡",
      title: "تصاميم الكهرباء",
      description: "شبكات توزيع الطاقة والإضاءة الحديثة",
    },
    {
      id: 11,
      icon: "🔒",
      title: "تصاميم السلامة",
      description: "أنظمة السلامة والحماية من الحريق",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "الاستشارة",
      description: "نستمع إلى احتياجاتك بعناية",
    },
    {
      number: "02",
      title: "التخطيط",
      description: "خطة شاملة وتفصيلية",
    },
    {
      number: "03",
      title: "التنفيذ",
      description: "تنفيذ بأعلى المعايير",
    },
    {
      number: "04",
      title: "التسليم",
      description: "تسليم مكتمل وموثق",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroSection
          title="خدماتنا الهندسية"
          description="مجموعة شاملة من الخدمات الهندسية المتكاملة والمتخصصة"
          eyebrow="خدمات متكاملة"
        />
      }
    >
        <section className="section-modern">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="card-modern p-8 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 cursor-pointer"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
                  }}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 font-medium">{service.description}</p>
                  <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    اعرف أكثر
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-modern bg-gradient-to-b from-primary/5 via-accent/5 to-primary/5">
          <div className="container space-y-16">
            <SectionHeading
              title="عملية الخدمة"
              subtitle="نتبع منهجية واضحة وفعالة في تقديم خدماتنا"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="card-modern p-8 text-center group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="text-6xl font-black text-gradient mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-foreground/70 font-medium">{step.description}</p>
                </div>
              ))}
            </div>
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
              اختر الخدمة المناسبة لك
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              تواصل معنا اليوم واحصل على عرض سعر مخصص لمشروعك
            </p>
            <div className="flex justify-center">
              <ButtonLink
                href="/contact"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl font-black"
              >
                احصل على عرض سعر
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </ButtonLink>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
