import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "residential",
      title: "مشروع سكني حديث",
      description: "مجمع سكني متكامل بتصاميم عصرية",
      image: "/hero-building.jpg",
      year: "2023",
    },
    {
      id: 2,
      category: "commercial",
      title: "مركز تجاري",
      description: "مركز تجاري بمساحة 50,000 متر مربع",
      image: "/interior-design.jpg",
      year: "2023",
    },
    {
      id: 3,
      category: "residential",
      title: "فيلا فاخرة",
      description: "تصميم داخلي فاخر وحديث",
      image: "/architectural-plan.jpg",
      year: "2022",
    },
    {
      id: 4,
      category: "commercial",
      title: "مكتب شركة",
      description: "تصميم مكتب حديث وذكي",
      image: "/hero-building.jpg",
      year: "2022",
    },
    {
      id: 5,
      category: "industrial",
      title: "مصنع حديث",
      description: "تصميم مصنع بأحدث التقنيات",
      image: "/interior-design.jpg",
      year: "2023",
    },
    {
      id: 6,
      category: "industrial",
      title: "مستودع ذكي",
      description: "مستودع بنظام إدارة ذكي",
      image: "/architectural-plan.jpg",
      year: "2022",
    },
  ];

  const categories = [
    { id: "all", label: "جميع المشاريع" },
    { id: "residential", label: "سكني" },
    { id: "commercial", label: "تجاري" },
    { id: "industrial", label: "صناعي" },
  ];

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

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
            <h1 className="heading-modern text-gradient mb-4">أعمالنا</h1>
            <div className="divider-accent w-20 h-1 mb-6" />
            <p className="text-2xl text-foreground/70 max-w-2xl font-medium">
              مشاريع متنوعة تعكس خبرتنا وكفاءتنا في المجال الهندسي
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
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
              {filtered.map((project, index) => (
                <div
                  key={project.id}
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
                      <p className="text-foreground/70 font-medium">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      اعرف المزيد
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
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
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">إحصائيات أعمالنا</h2>
              <div className="divider-accent w-20 h-1 mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "مشروع منفذ" },
                { number: "15+", label: "سنة خبرة" },
                { number: "100+", label: "عميل راضي" },
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
                  <p className="text-lg text-foreground/70 font-medium">{stat.label}</p>
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
