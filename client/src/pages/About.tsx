import ButtonLink from "@/components/ButtonLink";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "الاحترافية",
      description: "نلتزم بالمعايير المهنية العالية في كل ما نقوم به",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "الشفافية",
      description: "نعمل بنزاهة ووضوح تام في جميع تعاملاتنا",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "الابتكار",
      description: "نبحث باستمرار عن حلول جديدة ومبدعة",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "الالتزام",
      description: "نحترم الوقت والميزانية والتوقعات",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "الدقة",
      description: "نولي اهتمامًا عاليًا لكل عنصر تصميم",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "الاستدامة",
      description: "نلتزم بمعايير التصميم المستدام والصديق للبيئة",
    },
  ];

  const whyChooseUs = [
    {
      number: "01",
      title: "فريق متخصص",
      description: "مهندسون واستشاريون ذوو خبرات عميقة في مختلف المجالات الهندسية",
    },
    {
      number: "02",
      title: "معايير عالية",
      description: "نلتزم بأعلى معايير الجودة والاحترافية في كل مشروع",
    },
    {
      number: "03",
      title: "حلول متكاملة",
      description: "نقدم حلولاً هندسية شاملة من التصميم إلى الإشراف",
    },
    {
      number: "04",
      title: "التزام بالمواعيد",
      description: "نضمن تسليم المشاريع في الوقت المحدد بالجودة المطلوبة",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroSection
          title="من نحن"
          description="تعرف على شركة درر النفائس للاستشارات الهندسية"
          eyebrow="قصتنا"
        />
      }
    >
        <section className="section-modern">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    درر النفائس للاستشارات الهندسية
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    شركة هندسية سعودية معتمدة، متخصصة في تقديم حلول تصميم واستشارات هندسية شاملة ومتطورة.
                  </p>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  نمتلك فريقًا مؤهلاً بخبرات طويلة في مختلف التخصصات الهندسية، ونلتزم بأحدث معايير التصميم والاستدامة، لنكون الشريك المثالي للعملاء الباحثين عن الجودة والدقة والموثوقية.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 text-primary">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">رؤيتنا</h3>
                      <p className="text-foreground/70">
                        أن نكون من الرواد في مجال الاستشارات الهندسية في المملكة العربية السعودية
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 text-primary">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">رسالتنا</h3>
                      <p className="text-foreground/70">
                        نصنع الفارق عبر تقديم خدمات هندسية متقدمة وحلول مبتكرة
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <img
                  src="/hero-building.jpg"
                  alt="مبنى معماري عصري"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-modern bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container space-y-16">
            <SectionHeading
              title="قيمنا الأساسية"
              subtitle="نبني عملنا على أساس قيم راسخة تعكس التزامنا تجاه عملائنا"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card-modern p-8 text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-modern">
          <div className="container">
            <SectionHeading
              title="لماذا تختار درر النفائس؟"
              subtitle="نقدم مزايا تنافسية تجعلنا الخيار الأفضل لمشاريعك"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="card-modern p-8">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {item.number}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="section-modern bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-white/90">مشروع منفذ</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-white/90">عميل راضي</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <p className="text-white/90">سنة خبرة</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20+</div>
                <p className="text-white/90">متخصص</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-modern">
          <div className="container text-center">
            <SectionHeading
              alignment="center"
              title="هل تريد العمل معنا؟"
              subtitle="تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص"
            />
            <div className="mt-6 flex justify-center">
              <ButtonLink href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90">
                تواصل معنا
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </ButtonLink>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
