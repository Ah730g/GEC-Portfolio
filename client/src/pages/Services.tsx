import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: "🏗️",
      title: "الأنشطة الهندسية",
      description: "حلول هندسية متكاملة من الفكرة إلى التنفيذ",
      features: [
        "التصميم الهندسي المتقدم",
        "الدراسات الجدوى الشاملة",
        "الإشراف على التنفيذ",
        "ضمان الجودة والسلامة",
      ],
    },
    {
      id: 2,
      icon: "📐",
      title: "الأعمال المساحية",
      description: "تقنيات GPS وGIS الحديثة لأعمال مساحية دقيقة",
      features: [
        "المسح الطبوغرافي الدقيق",
        "تحديد الحدود والمساحات",
        "الخرائط الرقمية",
        "تقارير مفصلة وشاملة",
      ],
    },
    {
      id: 3,
      icon: "🎨",
      title: "التصميم المعماري",
      description: "تصاميم خارجية وداخلية احترافية وعصرية",
      features: [
        "تصاميم عصرية وجميلة",
        "الاستدامة البيئية",
        "الراحة والوظيفية",
        "الرؤية ثلاثية الأبعاد",
      ],
    },
    {
      id: 4,
      icon: "👷",
      title: "الإشراف على المشاريع",
      description: "إشراف هندسي شامل وفعال على جميع المراحل",
      features: [
        "المتابعة اليومية",
        "ضمان الجودة",
        "إدارة الجدول الزمني",
        "التقارير الدورية",
      ],
    },
    {
      id: 5,
      icon: "📊",
      title: "الدراسات الهندسية",
      description: "دراسات فنية متخصصة تدعم قراراتك",
      features: [
        "دراسات الجدوى الاقتصادية",
        "التحليل الهندسي المتقدم",
        "التقييم البيئي",
        "الاستشارات التخصصية",
      ],
    },
    {
      id: 6,
      icon: "⚡",
      title: "التصاميم الكهروميكانيكية",
      description: "حلول متكاملة للأنظمة الكهربائية والميكانيكية",
      features: [
        "الأنظمة الكهربائية الحديثة",
        "الأنظمة الميكانيكية المتقدمة",
        "الأتمتة والتحكم الذكي",
        "كفاءة الطاقة",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "الاستشارة الأولية",
      description: "نستمع إلى احتياجاتك ونفهم متطلبات مشروعك بشكل عميق",
    },
    {
      number: "02",
      title: "الدراسة والتحليل",
      description: "نقوم بدراسة شاملة وتحليل دقيق لجميع جوانب المشروع",
    },
    {
      number: "03",
      title: "التصميم والتطوير",
      description: "نطور حلولاً مبتكرة وتصاميم احترافية تلبي احتياجاتك",
    },
    {
      number: "04",
      title: "التنفيذ والإشراف",
      description: "نشرف على التنفيذ بدقة لضمان تحقيق الأهداف",
    },
    {
      number: "05",
      title: "التقييم والتحسين",
      description: "نقيم النتائج ونقدم التحسينات اللازمة",
    },
    {
      number: "06",
      title: "الدعم المستمر",
      description: "نوفر دعماً مستمراً وصيانة دورية بعد المشروع",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 sm:pt-40 sm:pb-24">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <h1 className="heading-modern text-gradient mb-4">خدماتنا</h1>
            <div className="divider-accent w-20 h-1 mb-6" />
            <p className="text-2xl text-foreground/70 max-w-2xl font-medium">
              مجموعة شاملة من الخدمات الهندسية المتكاملة والمتخصصة
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-modern bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="card-modern p-8 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 cursor-pointer hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6 border-t border-border pt-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

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
        <section className="section-modern">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">عملية العمل</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                نتبع منهجية احترافية وشاملة في كل مشروع
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="card-modern p-8 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift relative"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Step Number */}
                  <div className="absolute top-4 left-4 text-5xl font-black text-gradient opacity-20">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="text-4xl font-black text-gradient mb-3">{step.number}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-foreground/70 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-primary rotate-180" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-modern bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">لماذا تختارنا؟</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "خبرة عميقة",
                  description: "أكثر من 15 سنة من الخبرة في المجال الهندسي",
                },
                {
                  title: "فريق متخصص",
                  description: "مهندسون متخصصون وذوو كفاءة عالية",
                },
                {
                  title: "تقنيات حديثة",
                  description: "استخدام أحدث التقنيات والأدوات الهندسية",
                },
                {
                  title: "جودة عالية",
                  description: "التزام كامل بمعايير الجودة العالمية",
                },
                {
                  title: "أسعار تنافسية",
                  description: "عروض مالية مناسبة وشفافة",
                },
                {
                  title: "دعم شامل",
                  description: "دعم مستمر قبل وأثناء وبعد المشروع",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-modern p-8 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 font-medium leading-relaxed">
                    {item.description}
                  </p>
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
              هل تحتاج إلى خدماتنا؟
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              تواصل معنا اليوم واحصل على استشارة مجانية
            </p>
            <Link href="/contact">
              <button className="btn-modern bg-white text-primary hover:bg-white/90 hover:shadow-2xl font-black hover:scale-105 transition-all duration-300">
                احجز استشارة الآن
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
