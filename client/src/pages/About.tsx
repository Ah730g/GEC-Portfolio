import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Award, Users, Lightbulb, Target } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const team = [
    { name: "محمد الدرعاني", role: "المدير التنفيذي", expertise: "الهندسة المعمارية" },
    { name: "فاطمة السالم", role: "مهندسة رئيسية", expertise: "التصميم الداخلي" },
    { name: "أحمد العتيبي", role: "مهندس مشاريع", expertise: "الإشراف الهندسي" },
    { name: "سارة الشمري", role: "مهندسة دراسات", expertise: "الدراسات الهندسية" },
  ];

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "الاحترافية",
      description: "نلتزم بأعلى معايير الجودة والاحترافية في كل مشروع",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "الدقة",
      description: "اهتمام دقيق بكل التفاصيل لضمان النتائج المثالية",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "الابتكار",
      description: "حلول إبداعية وحديثة تتجاوز التوقعات",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "التعاون",
      description: "شراكة حقيقية مع عملائنا لتحقيق أحلامهم",
    },
  ];

  const milestones = [
    { year: "2008", title: "التأسيس", description: "بدء رحلتنا في الاستشارات الهندسية" },
    { year: "2012", title: "التوسع", description: "افتتاح فروع جديدة وتوسيع الخدمات" },
    { year: "2018", title: "الاعتماد", description: "الحصول على الشهادات العالمية" },
    { year: "2024", title: "الريادة", description: "أصبحنا من أفضل الشركات في المنطقة" },
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
            <h1 className="heading-modern text-gradient mb-4">من نحن</h1>
            <div className="divider-accent w-20 h-1 mb-6" />
            <p className="text-2xl text-foreground/70 max-w-2xl font-medium">
              شركة رائدة في الاستشارات الهندسية بخبرة تزيد عن 15 سنة
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-modern bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-modern text-primary mb-4">رسالتنا</h2>
                  <div className="divider-accent w-20 h-1 mb-6" />
                  <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                    تقديم حلول هندسية متكاملة وابتكارية تسهم في تطوير البيئة العمرانية والصناعية بشكل مستدام، مع الالتزام بأعلى معايير الجودة والاحترافية.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "تقديم استشارات هندسية متخصصة",
                    "الالتزام بالجودة والدقة",
                    "الابتكار المستمر",
                    "رضا العملاء أولويتنا",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground/70 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="heading-modern text-primary mb-4">رؤيتنا</h2>
                  <div className="divider-accent w-20 h-1 mb-6" />
                  <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                    أن نكون الشركة الأولى والموثوقة في تقديم الحلول الهندسية المبتكرة والمستدامة في المنطقة، مع بناء علاقات طويلة الأمد مع عملائنا.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "التميز في الخدمات الهندسية",
                    "البناء على أساس متين",
                    "التطور المستمر",
                    "الاستدامة والمسؤولية",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <p className="text-foreground/70 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-modern">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">قيمنا الأساسية</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                المبادئ التي تحكم عملنا وتوجه قراراتنا
              </p>
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
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70 font-medium leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-modern bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">رحلتنا عبر الزمن</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent hidden lg:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden lg:flex w-1/2 justify-end pr-12">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background absolute left-1/2 transform -translate-x-1/2" />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 card-modern p-8 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift">
                      <div className="text-3xl font-black text-gradient mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                      <p className="text-foreground/70 font-medium">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-modern">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">فريقنا المتخصص</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                مجموعة من أفضل المهندسين والمتخصصين
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="card-modern p-8 text-center group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-bold mb-2">{member.role}</p>
                  <p className="text-foreground/70 font-medium text-sm">{member.expertise}</p>
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
              هل تريد العمل معنا؟
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              تواصل معنا اليوم لنبدأ رحلة النجاح معاً
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
