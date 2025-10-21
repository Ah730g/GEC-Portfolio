import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_INFO, COMPANY_VALUES } from "@/const";
import { Building2, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">من نحن</h1>
            <p className="text-xl text-gray-300 mt-4">
              تعرف على شركة درر النفائس للاستشارات الهندسية
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نمتلك فريقًا مؤهلاً بخبرات طويلة في مختلف التخصصات الهندسية، ونلتزم بأحدث معايير التصميم والاستدامة، لنكون الشريك المثالي للعملاء الباحثين عن الجودة والدقة والموثوقية.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-10 h-10 text-gray-900" />
                  <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>

              <div className="bg-white p-12 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-10 h-10 text-gray-900" />
                  <h3 className="text-2xl font-bold text-gray-900">رسالتنا</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              قيمنا الأساسية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {COMPANY_VALUES.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
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

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              لماذا تختار درر النفائس؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-12 h-12 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    فريق متخصص
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    فريق من المهندسين والاستشاريين ذوي الخبرات العميقة في مختلف المجالات الهندسية
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Award className="w-12 h-12 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    معايير عالية
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    نلتزم بأعلى معايير الجودة والاحترافية في كل مشروع نقوم به
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Building2 className="w-12 h-12 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    حلول متكاملة
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    نقدم حلولاً هندسية شاملة من التصميم إلى الإشراف على التنفيذ
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Target className="w-12 h-12 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    التزام بالمواعيد
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    نضمن تسليم المشاريع في الوقت المحدد وبالجودة المطلوبة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container">
            <h2 className="text-4xl font-bold mb-6">
              هل تريد العمل معنا؟
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition">
              تواصل معنا
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

