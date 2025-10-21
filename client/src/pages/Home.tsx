import { SERVICES, COMPANY_VALUES, COMPANY_INFO } from "@/const";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  ArrowRight,
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                الهندسة تبدأ من هنا
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                نقدم حلولًا هندسية متكاملة، حديثة، ومعتمدة، تسهم في تطوير بيئة عمرانية مستدامة
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition inline-flex items-center gap-2">
                احصل على استشارة <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا الهندسية</h2>
              <p className="text-lg text-gray-600">
                نقدم لكم مجموعة من أهم الخدمات الهندسية المتكاملة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="text-gray-900 mb-4">
                    {iconMap[service.icon] || <Building2 className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">من نحن؟</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {COMPANY_INFO.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  نمتلك فريقًا مؤهلاً بخبرات طويلة في مختلف التخصصات الهندسية، ونلتزم بأحدث معايير التصميم والاستدامة، لنكون الشريك المثالي للعملاء الباحثين عن الجودة والدقة والموثوقية.
                </p>
                <Link href="/about">
                  <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition inline-flex items-center gap-2">
                    اعرف أكثر <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
              <div className="bg-gray-100 h-96 rounded-lg overflow-hidden">
                <img
                  src="/interior-design.jpg"
                  alt="تصميم داخلي"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {COMPANY_VALUES.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900 text-white p-12 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-gray-300 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="bg-gray-100 p-12 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container">
            <h2 className="text-4xl font-bold mb-6">هل تريد استشارة هندسية؟</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            <Link href="/contact">
              <button className="bg-white text-gray-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition inline-flex items-center gap-2">
                تواصل معنا <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

