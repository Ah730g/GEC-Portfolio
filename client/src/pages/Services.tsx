import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/const";
import {
  Building2,
  Map,
  Building,
  Sofa,
  ClipboardList,
  FileText,
  Layers,
  FileCheck,
  Zap,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-8 h-8" />,
  map: <Map className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  sofa: <Sofa className="w-8 h-8" />,
  "clipboard-list": <ClipboardList className="w-8 h-8" />,
  "file-text": <FileText className="w-8 h-8" />,
  layers: <Layers className="w-8 h-8" />,
  "file-check": <FileCheck className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  lightbulb: <Lightbulb className="w-8 h-8" />,
  "shield-alert": <ShieldAlert className="w-8 h-8" />,
};

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">خدماتنا</h1>
            <p className="text-xl text-gray-300 mt-4">
              مجموعة شاملة من الخدمات الهندسية المتكاملة
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transition hover:border-gray-300"
                >
                  <div className="text-gray-900 mb-4 p-3 bg-gray-100 rounded-lg w-fit">
                    {iconMap[service.icon] || <Building2 className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-gray-900 font-semibold hover:text-gray-700 transition inline-flex items-center gap-2">
                    اعرف أكثر →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              عملية الخدمة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "الاستشارة", desc: "نستمع إلى احتياجاتك ومتطلبات مشروعك" },
                { step: 2, title: "التخطيط", desc: "نضع خطة شاملة لتنفيذ المشروع" },
                { step: 3, title: "التنفيذ", desc: "نقوم بتنفيذ المشروع بأعلى معايير الجودة" },
                { step: 4, title: "التسليم", desc: "نسلم المشروع مكتملاً وفقاً للمواصفات" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Services */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              لماذا خدماتنا؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الخبرة والكفاءة</h3>
                <p className="text-gray-600 leading-relaxed">
                  فريقنا يتمتع بخبرات طويلة في مختلف التخصصات الهندسية، مما يضمن تقديم خدمات متميزة وحلول مبتكرة
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الجودة والدقة</h3>
                <p className="text-gray-600 leading-relaxed">
                  نلتزم بأعلى معايير الجودة والدقة في كل مشروع، مع الاهتمام بأدق التفاصيل
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الالتزام بالمواعيد</h3>
                <p className="text-gray-600 leading-relaxed">
                  نضمن تسليم المشاريع في الوقت المحدد، مع الحفاظ على جودة العمل
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الدعم المستمر</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقدم دعماً مستمراً بعد تسليم المشروع، مع ضمان رضاك الكامل
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container">
            <h2 className="text-4xl font-bold mb-6">اختر الخدمة المناسبة لك</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على عرض سعر مخصص لمشروعك
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition">
              احصل على عرض سعر
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

