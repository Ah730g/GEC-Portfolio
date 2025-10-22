import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Award, Users, Target, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [stats, setStats] = useState({ projects: 0, years: 0, clients: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation للأرقام
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        projects: prev.projects < 50 ? prev.projects + 1 : 50,
        years: prev.years < 15 ? prev.years + 1 : 15,
        clients: prev.clients < 100 ? prev.clients + 1 : 100,
      }));
    }, 20);

    return () => clearInterval(interval);
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 sm:pt-32 sm:pb-32">
          <div className="absolute inset-0">
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-transform duration-300"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            />
            <div
              className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl transition-transform duration-300"
              style={{ transform: `translateY(${scrollY * -0.3}px)` }}
            />
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="heading-modern text-gradient mb-4">
                    الهندسة تبدأ من هنا
                  </h1>
                  <div className="divider-accent w-20 h-1 mb-6" />
                </div>

                <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                  نقدم حلولاً هندسية متكاملة وحديثة تسهم في تطوير البيئة العمرانية والصناعية بشكل مستدام
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="btn-modern bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg font-bold">
                      احصل على استشارة
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="btn-modern border-2 border-primary text-primary hover:bg-primary/10 font-bold">
                      اعرف الخدمات
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-building.jpg"
                  alt="مشروع معماري"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="section-modern bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: "مشروع منجز", value: stats.projects, suffix: "+" },
                { label: "سنة خبرة", value: stats.years, suffix: "" },
                { label: "عميل راضي", value: stats.clients, suffix: "+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card-modern p-8 text-center group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="text-5xl sm:text-6xl font-black text-gradient mb-3">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <p className="text-lg text-foreground/70 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-modern">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">خدماتنا الهندسية</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                مجموعة شاملة من الخدمات المتخصصة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="card-modern p-8 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 cursor-pointer hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <button className="btn-modern bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg font-bold">
                  عرض جميع الخدمات
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-modern bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">قيمنا الأساسية</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="card-modern p-8 text-center group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-125 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-foreground/70 font-medium text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-modern">
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
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-foreground/70 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/interior-design.jpg"
                  alt="تصميم داخلي"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
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
            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              هل تريد استشارة هندسية؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
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
