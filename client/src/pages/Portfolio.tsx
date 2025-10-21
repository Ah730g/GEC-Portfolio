import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, MapPin, Calendar } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "مشروع سكني متكامل",
      category: "التصميم المعماري",
      location: "الرياض",
      year: 2024,
      description: "مشروع سكني يضم 150 وحدة سكنية مع مرافق متكاملة",
    },
    {
      id: 2,
      title: "مركز تجاري حديث",
      category: "التصميم المعماري",
      location: "جدة",
      year: 2024,
      description: "مركز تجاري بمساحة 50,000 متر مربع",
    },
    {
      id: 3,
      title: "مشروع إداري",
      category: "التصميم الداخلي",
      location: "الدمام",
      year: 2023,
      description: "مبنى إداري بتصاميم داخلية عصرية",
    },
    {
      id: 4,
      title: "مستشفى متخصص",
      category: "الدراسات الهندسية",
      location: "الرياض",
      year: 2023,
      description: "دراسات هندسية شاملة لمستشفى متخصص",
    },
    {
      id: 5,
      title: "مشروع فندقي",
      category: "التصميم المعماري",
      location: "جدة",
      year: 2023,
      description: "فندق 5 نجوم بتصاميم فاخرة",
    },
    {
      id: 6,
      title: "مشروع سياحي",
      category: "التصميم المعماري",
      location: "الطائف",
      year: 2022,
      description: "منتجع سياحي متكامل",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">أعمالنا</h1>
            <p className="text-xl text-gray-300 mt-4">
              مجموعة من أفضل المشاريع التي قمنا بتنفيذها
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 px-3 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-gray-300">مشروع منفذ</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <p className="text-gray-300">عميل راضي</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-gray-300">سنة خبرة</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <p className="text-gray-300">متخصص</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 text-center">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              هل تريد مشروعك القادم معنا؟
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition">
              احصل على عرض سعر
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

