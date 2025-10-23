import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Award, Users, Target, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      icon: <Award className="w-10 h-10" />,
      title: "الاحترافية",
      description: "معايير عالية في كل عمل",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "الدقة",
      description: "اهتمام بكل التفاصيل",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "الابتكار",
      description: "حلول جديدة ومبدعة",
    },
    {
      icon: <Users className="w-10 h-10" />,
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

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section - مع Parallax Effect */}
        <section className="relative overflow-hidden pt-20 pb-32 sm:pt-40 sm:pb-48">
          {/* خلفيات متعددة الطبقات مع Parallax */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-transform duration-300"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            />
            <div
              className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl transition-transform duration-300"
              style={{ transform: `translateY(${scrollY * -0.3}px)` }}
            />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-up">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="px-5 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-bold text-sm border border-primary/30 hover:border-primary/60 transition-colors">
                      ✨ حلول هندسية عصرية
                    </span>
                  </div>
                  <h1 className="heading-modern text-gradient">
                    الهندسة تبدأ من هنا
                  </h1>
                  <p className="text-xl text-foreground/70 leading-relaxed max-w-lg font-medium">
                    نقدم حلولًا هندسية متكاملة وحديثة تسهم في تطوير بيئة عمرانية مستدامة
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact">
                    <button className="btn-modern bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-2xl hover:scale-105 w-full sm:w-auto transition-all duration-300">
                      احصل على استشارة
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="btn-modern border-2 border-primary text-primary hover:bg-primary/5 w-full sm:w-auto font-bold transition-all duration-300">
                      اعرف الخدمات
                    </button>
                  </Link>
                </div>

                {/* إحصائيات سريعة */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-black text-gradient">50+</div>
                    <p className="text-sm text-foreground/60 font-medium">مشروع منفذ</p>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-black text-gradient">15+</div>
                    <p className="text-sm text-foreground/60 font-medium">سنة خبرة</p>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-black text-gradient">100+</div>
                    <p className="text-sm text-foreground/60 font-medium">عميل راضي</p>
                  </div>
                </div>
              </div>

              {/* الصورة مع Hover Effect */}
              <div className="relative animate-slide-in-down group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
                <img
                  src="/interior-design.jpg"
                  alt="تصميم داخلي عصري"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-modern bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="heading-modern text-primary mb-4">خدماتنا الهندسية</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                مجموعة شاملة من الخدمات الهندسية المتكاملة والمتخصصة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="card-modern p-8 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 cursor-pointer"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
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

        {/* Benefits Section */}
        <section className="section-modern bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-modern text-primary mb-4">لماذا تختارنا؟</h2>
                  <div className="divider-accent w-20 h-1 mb-6" />
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-foreground/70 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                <Link href="/about">
                  <button className="btn-modern bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-2xl">
                    اعرف أكثر عننا
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </Link>
              </div>

              {/* القيم */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="card-modern p-6 text-center group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex justify-center mb-4 text-primary group-hover:scale-125 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-foreground/70 font-medium">{value.description}</p>
                  </div>
                ))}
              </div>
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
              هل تريد استشارة هندسية؟
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            <Link href="/contact">
              <button className="btn-modern bg-white text-primary hover:bg-white/90 hover:shadow-2xl font-black hover:scale-105 transition-all duration-300">
                تواصل معنا الآن
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
