import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "الهاتف",
      details: "+966560655587",
      link: "tel:+966560655587",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "البريد الإلكتروني",
      details: "info@duralnafis.com",
      link: "mailto:info@duralnafis.com",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "العنوان",
      details: "الرياض، المملكة العربية السعودية",
      link: "#",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "ساعات العمل",
      details: "السبت - الخميس: 9:00 - 17:00",
      link: "#",
    },
  ];

  const faqs = [
    {
      question: "كم تستغرق مدة المشروع؟",
      answer: "تختلف مدة المشروع حسب حجمه وتعقيده، لكننا نضمن التسليم في الوقت المحدد.",
    },
    {
      question: "هل تقدمون استشارات مجانية؟",
      answer: "نعم، نقدم استشارة مجانية أولية لفهم احتياجاتك بشكل أفضل.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل التحويل البنكي والدفع الإلكتروني والشيكات.",
    },
    {
      question: "هل تقدمون دعماً بعد المشروع؟",
      answer: "نعم، نقدم دعماً شاملاً وصيانة دورية بعد انتهاء المشروع.",
    },
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
            <h1 className="heading-modern text-gradient mb-4">تواصل معنا</h1>
            <div className="divider-accent w-20 h-1 mb-6" />
            <p className="text-2xl text-foreground/70 max-w-2xl font-medium">
              نحن هنا للإجابة على جميع استفساراتك والمساعدة في تحقيق مشروعك
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-modern bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card-modern p-8 text-center group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift cursor-pointer"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-125 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
                  <p className="text-foreground/70 font-medium hover:text-primary transition-colors">
                    {info.details}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-modern">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="heading-modern text-primary mb-4">أرسل لنا رسالة</h2>
                  <div className="divider-accent w-20 h-1 mb-6" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-foreground font-bold">الاسم</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background"
                      placeholder="أدخل اسمك"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-foreground font-bold">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background"
                        placeholder="بريدك الإلكتروني"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-foreground font-bold">الهاتف</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background"
                        placeholder="رقم هاتفك"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-foreground font-bold">الموضوع</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استشارة">استشارة هندسية</option>
                      <option value="تصميم">طلب تصميم</option>
                      <option value="إشراف">إشراف على مشروع</option>
                      <option value="دراسة">دراسة هندسية</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-foreground font-bold">الرسالة</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-modern bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-2xl w-full hover:scale-105 transition-all duration-300"
                  >
                    إرسال الرسالة
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>

                  {submitted && (
                    <div className="p-4 rounded-xl bg-green-100 text-green-700 font-bold text-center animate-slide-in-down">
                      ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    </div>
                  )}
                </form>
              </div>

              {/* FAQ */}
              <div className="space-y-8">
                <div>
                  <h2 className="heading-modern text-primary mb-4">الأسئلة الشائعة</h2>
                  <div className="divider-accent w-20 h-1 mb-6" />
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="card-modern p-6 group hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 cursor-pointer transition-all duration-300"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-foreground/70 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
              شكراً لاهتمامك بنا
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              نتطلع للعمل معك وتحقيق أحلامك الهندسية
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
