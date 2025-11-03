import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import {
  PHONE_CONTACTS,
  CONTACT_LANDLINE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_2,
  CONTACT_EMAIL_FORM,
  CONTACT_HOURS,
} from "@/const";
import { BsTelephoneFill, BsEnvelopeFill, BsClockFill } from "react-icons/bs";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const resetTimeoutRef = useRef<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const scheduleReset = () => {
    if (resetTimeoutRef.current !== null) {
      window.clearTimeout(resetTimeoutRef.current);
    }
    resetTimeoutRef.current = window.setTimeout(() => {
      setStatus("idle");
      resetTimeoutRef.current = null;
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const form = e.currentTarget;
      const response = await fetch(`https://formsubmit.co/${CONTACT_EMAIL_FORM}`, {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      form.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      scheduleReset();
    }
  };

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "كم تستغرق مدة تنفيذ المشروع؟",
      answer:
        "تختلف المدة حسب حجم ونوع المشروع، لكننا نلتزم بالجداول الزمنية المتفق عليها.",
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
      answer:
        "يمكنك التواصل معنا عبر النموذج أو الهاتف، وسنقوم بإعداد عرض سعر مفصل.",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroSection
          title="تواصل معنا"
          description="نحن هنا للإجابة على استفساراتكم وتقديم الدعم الكامل لمشاريعكم الهندسية"
          eyebrow="تواصل فوري"
        />
      }
    >
      <section className="section-modern bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PHONE_CONTACTS.map((contact, index) => (
              <div
                key={contact.phone}
                className="card-modern group cursor-pointer p-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4 flex justify-center text-primary transition-transform duration-300 group-hover:scale-125">
                  <MdPhone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-primary">{contact.name}</h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="font-semibold text-primary/90 transition-colors hover:text-primary"
                >
                  {contact.phone}
                </a>
              </div>
            ))}

            <div className="card-modern p-8">
              <div className="mb-4 flex justify-center">
                <BsTelephoneFill className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">التلفون الثابت</h3>
              <a
                href={`tel:${CONTACT_LANDLINE}`}
                className="font-semibold text-primary/90 transition-colors hover:text-primary"
              >
                {CONTACT_LANDLINE}
              </a>
            </div>

            <div className="card-modern p-8">
              <div className="mb-4 flex justify-center">
                <BsEnvelopeFill className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">البريد الرئيسي</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all font-semibold text-primary/90 transition-colors hover:text-primary"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="card-modern p-8">
              <div className="mb-4 flex justify-center">
                <MdEmail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">البريد الثانوي</h3>
              <a
                href={`mailto:${CONTACT_EMAIL_2}`}
                className="break-all font-semibold text-primary/90 transition-colors hover:text-primary"
              >
                {CONTACT_EMAIL_2}
              </a>
            </div>

            <div className="card-modern p-8">
              <div className="mb-4 flex justify-center">
                <BsClockFill className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">ساعات العمل</h3>
              <p className="text-foreground/70">{CONTACT_HOURS}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-modern">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <SectionHeading
                alignment="start"
                title="أرسل لنا رسالة"
                subtitle="املأ النموذج وسنعاود الاتصال بك خلال 24 ساعة عمل"
                className="mb-6"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="رسالة جديدة من موقع GEC" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="شكراً لتواصلك مع مكتب غازي محمد عباس للاستشارات الهندسية. سنتواصل معك قريباً."
                />
                <input type="hidden" name="_template" value="box" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block font-bold text-foreground" htmlFor="contact-name">
                      الاسم *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="اترك لنا اسمك"
                      className="w-full rounded-xl border border-border bg-background px-6 py-3 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bold text-foreground" htmlFor="contact-email">
                      البريد الإلكتروني *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="اترك لنا بريدك الإلكتروني"
                      className="w-full rounded-xl border border-border bg-background px-6 py-3 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block font-bold text-foreground" htmlFor="contact-phone">
                      رقم الهاتف *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="اترك لنا رقم هاتفك"
                      className="w-full rounded-xl border border-border bg-background px-6 py-3 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bold text-foreground" htmlFor="contact-subject">
                      الموضوع *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border bg-background px-6 py-3 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
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
                </div>

                <div className="space-y-2">
                  <label className="block font-bold text-foreground" htmlFor="contact-message">
                    الرسالة *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full resize-none rounded-xl border border-border bg-background px-6 py-3 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-modern flex w-full items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <IoMdSend className="h-5 w-5" />
                  {status === "sending" ? "جاري الإرسال..." : "إرسال الرسالة"}
                </button>

                {status === "success" && (
                  <div
                    className="rounded-xl border border-green-500 bg-green-100 px-4 py-3 text-center font-bold text-green-700 dark:border-green-600 dark:bg-green-900/30 dark:text-green-200"
                    role="status"
                    aria-live="polite"
                  >
                    ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                  </div>
                )}

                {status === "error" && (
                  <div
                    className="rounded-xl border border-red-500 bg-red-100 px-4 py-3 text-center font-bold text-red-700 dark:border-red-600 dark:bg-red-900/30 dark:text-red-200"
                    role="status"
                    aria-live="polite"
                  >
                    ✗ حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <SectionHeading
                alignment="start"
                title="الأسئلة الشائعة"
                subtitle="أجوبة سريعة عن أكثر الأسئلة التي نستقبلها"
                className="mb-6"
              />

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="card-modern cursor-pointer p-6 transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <h3 className="mb-2 text-lg font-bold text-primary">{faq.question}</h3>
                    <p className="text-foreground/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
