import ButtonLink from "@/components/ButtonLink";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import ProjectModal from "@/components/ProjectModal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      category: "residential",
      title: "مشروع سكني حديث",
      description: "مجمع سكني متكامل بتصاميم عصرية",
      image: "/photoApp/modern-residential-project.jpeg",
      year: "2023",

      // POPUP INFO
      location: "الرياض، السعودية",
      status: "مكتمل",
      area: "18,500 م²",
      services: ["تصميم معماري", "تصميم إنشائي", "MEP"],
      scope:
        "تطوير مجمع سكني متكامل يركز على جودة الحياة وكفاءة استخدام المساحات",
      highlights: [
        "تصاميم عصرية",
        "تهوية وإضاءة طبيعية",
        "مرافق خدمية متكاملة",
      ],
    },

    {
      id: 2,
      category: "commercial",
      title: "مركز تجاري",
      description: "مركز تجاري بمساحة 50,000 متر مربع",
      image: "/photoApp/center.jpeg",
      year: "2023",

      location: "جدة، السعودية",
      status: "تحت التنفيذ",
      area: "50,000 م²",
      services: ["تصميم معماري", "تخطيط عام"],
      scope: "تصميم مركز تجاري حديث يخدم مختلف الأنشطة التجارية والترفيهية",
      highlights: ["تخطيط حركة الزوار", "مداخل ذكية", "مرونة تشغيلية عالية"],
    },

    {
      id: 3,
      category: "residential",
      title: "فيلا فاخرة",
      description: "تصميم داخلي فاخر وحديث",
      image: "/photoApp/luxury-villa.jpeg",
      year: "2022",

      location: "الخبر، السعودية",
      status: "مكتمل",
      area: "1,200 م²",
      services: ["تصميم معماري", "تصميم داخلي"],
      scope: "تصميم فيلا سكنية فاخرة تجمع بين الخصوصية والفخامة",
      highlights: ["تصميم داخلي مخصص", "تشطيبات فاخرة", "توزيع ذكي للمساحات"],
    },

    {
      id: 4,
      category: "commercial",
      title: "مكتب شركة",
      description: "تصميم مكتب حديث وذكي",
      image: "/photoApp/company-office.jpeg",
      year: "2022",

      location: "الرياض، السعودية",
      status: "مكتمل",
      area: "3,500 م²",
      services: ["تصميم معماري", "تصميم داخلي"],
      scope: "تصميم مقر إداري يعزز بيئة العمل والإنتاجية",
      highlights: ["مساحات عمل مرنة", "تصميم ذكي", "هوية بصرية حديثة"],
    },

    {
      id: 5,
      category: "industrial",
      title: "مصنع حديث",
      description: "تصميم مصنع بأحدث التقنيات",
      image: "/photoApp/modern-factory.jpeg",
      year: "2023",

      location: "الدمام، السعودية",
      status: "تحت التنفيذ",
      area: "22,000 م²",
      services: ["تصميم صناعي", "تصميم إنشائي"],
      scope: "تصميم منشأة صناعية متوافقة مع أعلى معايير السلامة والكفاءة",
      highlights: [
        "تخطيط خطوط الإنتاج",
        "كفاءة تشغيلية عالية",
        "معايير سلامة صناعية",
      ],
    },

    {
      id: 6,
      category: "industrial",
      title: "مستودع ذكي",
      description: "مستودع بنظام إدارة ذكي",
      image: "/photoApp/smart-warehouse.jpeg",
      year: "2022",

      location: "الرياض، السعودية",
      status: "مكتمل",
      area: "12,000 م²",
      services: ["تصميم صناعي", "تخطيط لوجستي"],
      scope: "تصميم مستودع حديث يدعم أنظمة التخزين والإدارة الذكية",
      highlights: [
        "سهولة الحركة والتخزين",
        "تكامل مع الأنظمة الذكية",
        "مرونة مستقبلية",
      ],
    },
  ];
  const projects2 = [
    {
      id: 1,
      category: "residential",
      title: "المشاريع السكنية",
      description: "حلول هندسية متكاملة للمشاريع السكنية الحديثة",
      image: "/photoApp/modern-residential-project.jpeg",

      // POPUP INFO (Capabilities)
      capabilityScope:
        "نقدم حلول تصميم هندسي متكاملة للمباني السكنية بمختلف أنواعها، مع التركيز على جودة الحياة وكفاءة استغلال المساحات.",
      services: [
        "التصميم المعماري",
        "التصميم الإنشائي",
        "التصميم الداخلي",
        "MEP",
      ],
      typicalUseCases: ["مجمعات سكنية", "فلل خاصة", "مباني متعددة الوحدات"],
      typicalScale: "من 500 م² إلى 25,000 م²",
      valuePoints: [
        "تصاميم عصرية وعملية",
        "تحقيق التوازن بين الجمال والوظيفة",
        "الالتزام بالمعايير الهندسية",
      ],
    },

    {
      id: 2,
      category: "commercial",
      title: "المشاريع التجارية",
      description: "تصميم وتطوير المشاريع التجارية بمعايير احترافية",
      image: "/photoApp/center.jpeg",

      capabilityScope:
        "نقوم بتقديم حلول هندسية متكاملة للمشاريع التجارية بما يحقق الكفاءة التشغيلية وتجربة مستخدم متميزة.",
      services: ["التصميم المعماري", "التخطيط العام", "دراسات الحركة"],
      typicalUseCases: [
        "مراكز تجارية",
        "مكاتب إدارية",
        "مبانٍ متعددة الاستخدام",
      ],
      typicalScale: "من 2,000 م² إلى 60,000 م²",
      valuePoints: [
        "تحسين حركة الزوار",
        "تصاميم مرنة قابلة للتوسع",
        "رفع كفاءة التشغيل",
      ],
    },

    {
      id: 3,
      category: "residential",
      title: "الفلل السكنية",
      description: "تصميم معماري وداخلي يجمع بين الفخامة والخصوصية",
      image: "/photoApp/luxury-villa.jpeg",

      capabilityScope:
        "نقدم تصاميم فلل سكنية مخصصة تعكس هوية العميل وتحقق أعلى درجات الراحة والخصوصية.",
      services: ["التصميم المعماري", "التصميم الداخلي", "تنسيق الموقع العام"],
      typicalUseCases: ["فلل خاصة", "قصور سكنية", "مساكن فاخرة"],
      typicalScale: "من 400 م² إلى 2,000 م²",
      valuePoints: [
        "تصاميم مخصصة حسب الاحتياج",
        "تشطيبات عالية الجودة",
        "توزيع ذكي للمساحات",
      ],
    },

    {
      id: 4,
      category: "commercial",
      title: "المكاتب الإدارية",
      description: "حلول تصميم حديثة لبيئات العمل الذكية",
      image: "/photoApp/company-office.jpeg",

      capabilityScope:
        "تصميم مقرات إدارية تعزز الإنتاجية وتوفر بيئة عمل مرنة وعصرية.",
      services: ["تصميم معماري", "تصميم داخلي", "تخطيط المساحات الوظيفية"],
      typicalUseCases: ["مقار شركات", "مكاتب إدارية", "مراكز أعمال"],
      typicalScale: "من 1,000 م² إلى 10,000 م²",
      valuePoints: [
        "تحسين تجربة الموظفين",
        "مرونة التوزيع الداخلي",
        "هوية معمارية واضحة",
      ],
    },

    {
      id: 5,
      category: "industrial",
      title: "المنشآت الصناعية",
      description: "حلول هندسية متقدمة للمنشآت الصناعية",
      image: "/photoApp/modern-factory.jpeg",

      capabilityScope:
        "نصمم منشآت صناعية تركز على الكفاءة التشغيلية والسلامة وتكامل العمليات.",
      services: ["التصميم الصناعي", "التصميم الإنشائي", "تخطيط خطوط الإنتاج"],
      typicalUseCases: ["مصانع", "ورش إنتاج", "منشآت صناعية متخصصة"],
      typicalScale: "من 5,000 م² إلى 100,000 م²",
      valuePoints: [
        "رفع كفاءة التشغيل",
        "الالتزام بمعايير السلامة",
        "مرونة التوسعة المستقبلية",
      ],
    },

    {
      id: 6,
      category: "industrial",
      title: "المستودعات والمراكز اللوجستية",
      description: "تصميم مستودعات ذكية تدعم الأنظمة الحديثة",
      image: "/photoApp/smart-warehouse.jpeg",

      capabilityScope:
        "تقديم حلول تصميم متكاملة للمستودعات والمراكز اللوجستية بما يدعم كفاءة التخزين والتوزيع.",
      services: ["تصميم صناعي", "تخطيط لوجستي", "تكامل الأنظمة الذكية"],
      typicalUseCases: ["مستودعات تخزين", "مراكز توزيع", "مرافق لوجستية"],
      typicalScale: "من 3,000 م² إلى 80,000 م²",
      valuePoints: [
        "سهولة الحركة والتخزين",
        "تكامل مع أنظمة الإدارة",
        "تصاميم قابلة للتطوير",
      ],
    },
  ];

  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects2)[0] | null
  >(null);

  const categories = [
    { id: "all", label: "جميع المشاريع" },
    { id: "residential", label: "سكني" },
    { id: "commercial", label: "تجاري" },
    { id: "industrial", label: "صناعي" },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <PageLayout
      hero={
        <HeroSection
          title="أعمالنا"
          description="مشاريع متنوعة تعكس خبرتنا وكفاءتنا في المجال الهندسي"
          eyebrow="معرض المشاريع"
        />
      }
    >
      {/* Filter Buttons */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-105"
                    : "bg-background border-2 border-primary/20 text-primary hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-modern">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => {
              // Find matching project in projects2 by id
              const matchingProject2 = projects2.find(
                p2 => p2.id === project.id
              );

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(matchingProject2 || null)}
                  className="card-modern overflow-hidden group cursor-pointer hover:border-primary/50"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 font-medium">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      اعرف المزيد
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-foreground/70 font-medium">
                لا توجد مشاريع في هذه الفئة
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-modern bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container space-y-16">
          <SectionHeading
            title="إحصائيات أعمالنا"
            subtitle="نتائج ملهمة تلخّص رحلتنا الهندسية"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2687+", label: "مشروع منفذ" },
              { number: "32+", label: "سنة خبرة" },
              { number: "4000+", label: "عميل راضي" },
              { number: "98%", label: "نسبة الرضا" },
            ].map((stat, index) => (
              <div
                key={index}
                className="card-modern p-8 text-center group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="text-5xl font-black text-gradient mb-3">
                  {stat.number}
                </div>
                <p className="text-lg text-foreground/70 font-medium">
                  {stat.label}
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
            هل تريد مشروعاً مشابهاً؟
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
          </p>
          <div className="flex justify-center">
            <ButtonLink
              href="/contact"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl font-black hover:scale-105 transition-all duration-300"
            >
              تواصل معنا الآن
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageLayout>
  );
}
