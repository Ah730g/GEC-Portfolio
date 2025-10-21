import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_PHONE, CONTACT_EMAIL, SERVICES } from "@/const";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("شكراً لتواصلك معنا! سنرد عليك قريباً");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">تواصل معنا</h1>
            <p className="text-xl text-gray-300 mt-4">
              نحن هنا للإجابة على أسئلتك والمساعدة في مشاريعك
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Phone className="w-12 h-12 text-gray-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">الهاتف</h3>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  {CONTACT_PHONE}
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Mail className="w-12 h-12 text-gray-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <MapPin className="w-12 h-12 text-gray-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">الموقع</h3>
                <p className="text-gray-600">المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                اترك بياناتك وسنتواصل معك
              </h2>

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      الاسم الأول *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                      placeholder="أدخل اسمك الأول"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      الاسم الأخير *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                      placeholder="أدخل اسمك الأخير"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                      placeholder="بريدك الإلكتروني"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                      placeholder="رقم هاتفك"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-900 font-semibold mb-2">
                    اختر الخدمة *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                  >
                    <option value="">اختر الخدمة</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-900 font-semibold mb-2">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                    placeholder="أخبرنا عن مشروعك..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded font-bold hover:bg-gray-800 transition"
                >
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              الأسئلة الشائعة
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  q: "كم يستغرق تقديم عرض السعر؟",
                  a: "عادة ما نقدم عرض السعر خلال 2-3 أيام عمل من استقبال تفاصيل المشروع",
                },
                {
                  q: "هل تقدمون استشارات مجانية؟",
                  a: "نعم، نقدم استشارة مجانية أولية لفهم احتياجاتك ومتطلبات مشروعك",
                },
                {
                  q: "ما هي طرق الدفع المتاحة؟",
                  a: "نقبل التحويل البنكي والدفع الإلكتروني والشيكات",
                },
                {
                  q: "هل تقدمون ضمانات على الخدمات؟",
                  a: "نعم، نقدم ضمانات على جودة الخدمات والالتزام بالمواصفات المتفق عليها",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container">
            <h2 className="text-4xl font-bold mb-6">
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            <a href={`tel:${CONTACT_PHONE}`}>
              <button className="bg-white text-gray-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition">
                اتصل بنا الآن
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

