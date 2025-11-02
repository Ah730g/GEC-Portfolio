import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { PHONE_CONTACTS, CONTACT_LANDLINE, CONTACT_EMAIL, CONTACT_EMAIL_2, CONTACT_EMAIL_FORM, CONTACT_HOURS } from "@/const";
import { BsTelephoneFill, BsEnvelopeFill, BsClockFill } from "react-icons/bs";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch("https://formsubmit.co/" + CONTACT_EMAIL_FORM, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: "كم تستغرق مدة تنفيذ المشروع؟",
      answer: "تختلف المدة حسب حجم ونوع المشروع، لكننا نلتزم بالجداول الزمنية المتفق عليها.",
    },
    {
      question: "هل تقدمون استشارات مجانية؟",
      answer: "نعم، نقدم استشارة أولية مجانية لتقييم احتياجات مشروعك.",
    },
    {
      question: "ما هي المناطق التي تغطونها؟",
      answer: "نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية.",
    },
    {
      question: "كيف يمكنني الحصول على عرض سعر؟",
      answer: "يمكنك التواصل معنا عبر النموذج أو الهاتف، وسنقوم بإعداد عرض سعر مفصل.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              تواصل معنا
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن هنا للإجابة على استفساراتكم وتقديم الدعم الكامل لمشاريعكم الهندسية
            </p>
          </div>
        </section>

        {/* Contact Form and FAQ */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <IoMdSend className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">أرسل لنا رسالة</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields for FormSubmit */}
                  <input type="hidden" name="_subject" value="رسالة جديدة من موقع GEC" />
                  <input type="hidden" name="_autoresponse" value="شكراً لتواصلك مع مكتب غازي محمد عباس للاستشارات الهندسية. سنتواصل معك قريباً." />
                  <input type="hidden" name="_template" value="box" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">الاسم *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="اترك لنا اسمك"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="اترك لنا بريدك الإلكتروني"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="اترك لنا رقم هاتفك"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">الموضوع *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">اختر الخدمة</option>
                      <option value="الأنشطة الهندسية">الأنشطة الهندسية</option>
                      <option value="الأعمال المساحية">الأعمال المساحية</option>
                      <option value="التصميم المعماري الخارجي">التصميم المعماري الخارجي</option>
                      <option value="التصميم المعماري الداخلي">التصميم المعماري الداخلي</option>
                      <option value="الإشراف على المشاريع">الإشراف على المشاريع</option>
                      <option value="الدراسات الهندسية">الدراسات الهندسية</option>
                      <option value="الدراسات الجيولوجية والهيدرولوجية">الدراسات الجيولوجية والهيدرولوجية</option>
                      <option value="التقارير الهندسية">التقارير الهندسية</option>
                      <option value="التصاميم الكهروميكانيكية">التصاميم الكهروميكانيكية</option>
                      <option value="تصاميم الكهرباء">تصاميم الكهرباء</option>
                      <option value="تصاميم السلامة">تصاميم السلامة</option>
                      <option value="استفسار عام">استفسار عام</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">الرسالة *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <IoMdSend className="w-5 h-5" />
                    {status === "sending" ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </button>

                  {status === "success" && (
                    <div className="bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
                      ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="bg-red-100 dark:bg-red-900/30 border border-red-500 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
                      ✗ حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                    </div>
                  )}
                </form>
              </div>

              {/* FAQ */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <span className="text-2xl">❓</span>
                  </div>
                  <h2 className="text-3xl font-bold">الأسئلة الشائعة</h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">معلومات الاتصال</h2>
              <p className="text-muted-foreground">تواصل معنا عبر أي من الوسائل التالية</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mobile Numbers */}
              {PHONE_CONTACTS.map((contact, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full">
                      <MdPhone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{contact.name}</h3>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-primary hover:underline text-lg font-semibold"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Landline */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-full">
                    <BsTelephoneFill className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">التلفون الثابت</h3>
                    <a
                      href={`tel:${CONTACT_LANDLINE}`}
                      className="text-primary hover:underline text-lg font-semibold"
                    >
                      {CONTACT_LANDLINE}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email 1 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full">
                    <BsEnvelopeFill className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">البريد الرئيسي</h3>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-primary hover:underline text-sm break-all"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email 2 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full">
                    <MdEmail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">البريد الثانوي</h3>
                    <a
                      href={`mailto:${CONTACT_EMAIL_2}`}
                      className="text-primary hover:underline text-sm break-all"
                    >
                      {CONTACT_EMAIL_2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-full">
                    <BsClockFill className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                    <p className="text-muted-foreground">{CONTACT_HOURS}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

