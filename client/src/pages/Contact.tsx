import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import OfficeMap, { type OfficeLocation } from "@/components/OfficeMap";
import {
  PHONE_CONTACTS,
  CONTACT_LANDLINE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_2,
  CONTACT_EMAIL_3,
  CONTACT_EMAIL_FORM,
  CONTACT_HOURS,
} from "@/const";
import { BsTelephoneFill, BsEnvelopeFill, BsClockFill } from "react-icons/bs";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import {
  User,
  Mail as MailIcon,
  Phone as PhoneIcon,
  FileText,
  MessageSquare,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import BranchContactCard from "@/components/ui/LucidCard";
import { Phone, Mail } from "lucide-react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

type ContactHighlight = {
  title: string;
  details: string;
  icon: ReactNode;
  highlight: string;
  href?: string;
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type FormFieldProps = {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

function FormField({ icon, children, className = "" }: FormFieldProps) {
  return (
    <div
      className={`relative rounded-xl border border-gray-300 bg-white shadow-sm transition-all duration-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-3">
        <div className="text-gray-500 dark:text-gray-400">{icon}</div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const FAQS: FAQ[] = [
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

const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    title: "مكتب غازي محمد عباس للاستشارات الهندسية – جازان",
    mapUrl:
      "https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%BA%D8%A7%D8%B2%D9%8A+%D9%85%D8%AD%D9%85%D8%AF+%D8%B9%D8%A8%D8%A7%D8%B3+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+.+%D8%AC%D8%A7%D8%B2%D8%A7%D9%86%E2%80%AD/@16.8905702,42.5631806,17z/data=!4m14!1m7!3m6!1s0x1607e297d798fecf:0xf18996bb06820ca5!2z2YXZg9iq2Kgg2LrYp9iy2Yog2YXYrdmF2K8g2LnYqNin2LMg2YTZhNin2LPYqti02KfYsdin2Kog2KfZhNmH2YbYr9iz2YrYqSAuINis2KfYstin2YY!8m2!3d16.8905702!4d42.5631806!16s%2Fg%2F11hchx81_0!3m5!1s0x1607e297d798fecf:0xf18996bb06820ca5!8m2!3d16.8905702!4d42.5631806!16s%2Fg%2F11hchx81_0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 16.890672860062637, lng: 42.56303039629772 },
    description: undefined,
  },
  {
    title: "مكتب غازي محمد عباس للاستشارات الهندسية - العارضة",
    mapUrl:
      "https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%BA%D8%A7%D8%B2%D9%8A+%D9%85%D8%AD%D9%85%D8%AF+%D8%B9%D8%A8%D8%A7%D8%B3+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%B9%D8%A7%D8%B1%D8%B6%D9%87%E2%80%AD/@17.03381,43.0574654,17z/data=!3m1!4b1!4m6!3m5!1s0x15fd7b957e0ad7c9:0x108b09af8952d06e!8m2!3d17.03381!4d43.0574654!16s%2Fg%2F11ny2rd43f?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 17.03405619625267, lng: 43.057486857671755 },
    description: undefined,
  },
  {
    title: "مكتب غازي محمد عباس للاستشارات الهندسية – الدمام ",
    mapUrl:
      "https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%BA%D8%A7%D8%B2%D9%8A+%D9%85%D8%AD%D9%85%D8%AF+%D8%B9%D8%A8%D8%A7%D8%B3+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%7C+GEC%E2%80%AD/@26.3627601,50.1974268,17z/data=!3m1!4b1!4m6!3m5!1s0x3e49ef51565077af:0x4c5b36630dd1fe0e!8m2!3d26.3627601!4d50.1974268!16s%2Fg%2F11mm77hk0w?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 26.36293, lng: 50.19744 },
    description: undefined,
  },
  {
    title: "مكتب غازي محمد عباس للاستشارات الهندسية – خميس مشيط ",
    mapUrl:
      "https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%BA%D8%A7%D8%B2%D9%8A+%D9%85%D8%AD%D9%85%D8%AF+%D8%B9%D8%A8%D8%A7%D8%B3+%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%E2%80%AD/@18.3009375,42.7314375,17z/data=!3m1!4b1!4m6!3m5!1s0x15fb5a20b7437477:0xeb76dc2234bc3baa!8m2!3d18.3009375!4d42.7314375!16s%2Fg%2F11f_j93wjq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 18.30116, lng: 42.73141 },
    description: undefined,
  },
];

const CONTACT_HIGHLIGHTS: ContactHighlight[] = [
  ...PHONE_CONTACTS.map(contact => ({
    title: contact.name,
    details: contact.phone,
    href: `tel:${contact.phone}`,
    icon: <MdPhone className="h-6 w-6 text-primary" />,
    highlight: "اتصال مباشر",
  })),
  {
    title: "التلفون الثابت",
    details: CONTACT_LANDLINE,
    href: `tel:${CONTACT_LANDLINE}`,
    icon: <BsTelephoneFill className="h-6 w-6 text-primary" />,
    highlight: "المكتب الرئيسي",
  },
  {
    title: "البريد الرئيسي",
    details: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: <BsEnvelopeFill className="h-6 w-6 text-primary" />,
    highlight: "رد خلال 24 ساعة",
  },
  {
    title: "البريد الثانوي",
    details: CONTACT_EMAIL_2,
    href: `mailto:${CONTACT_EMAIL_2}`,
    icon: <MdEmail className="h-6 w-6 text-primary" />,
    highlight: "بديل موثوق",
  },
  {
    title: "البريد المساند",
    details: CONTACT_EMAIL_3,
    href: `mailto:${CONTACT_EMAIL_3}`,
    icon: <MdEmail className="h-6 w-6 text-primary" />,
    highlight: "متابعة فنية",
  },
  {
    title: "نموذج التواصل",
    details: CONTACT_EMAIL_FORM,
    href: `mailto:${CONTACT_EMAIL_FORM}`,
    icon: <IoMdSend className="h-6 w-6 text-primary" />,
    highlight: "يتلقى الإشعارات الفورية",
  },
  {
    title: "ساعات العمل",
    details: CONTACT_HOURS,
    icon: <BsClockFill className="h-6 w-6 text-primary" />,
    highlight: "نرحب بك طوال الأسبوع",
  },
];

// Branch Contact Info
export const branchDemoData = [
  {
    branchName: "فرع جازان",
    phone: "+966 55 572 0166",
    email: "ahm32336@gmail.com",
    workingHours: "8:00 - 20:00",
  },
  {
    branchName: "فرع العارضة",
    phone: "+966 55 572 0166",
    email: "ahm32336@gmail.com",
    workingHours: "8:00 - 20:00",
  },
  {
    branchName: "فرع الدمام",
    phone: "+966 53 006 3867",
    email: "Trkbis72@gmail.com",
    workingHours: "8:00 - 20:00",
  },
  {
    branchName: "فرع خميس مشيط",
    phone: "+966 54 123 2193",
    email: "ghazia119@gmail.com",
    workingHours: "8:00 - 20:00",
  },
];
export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    ...INITIAL_FORM_DATA,
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const resetTimeoutRef = useRef<number | null>(null);

  const resetFormData = () => setFormData({ ...INITIAL_FORM_DATA });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      const response = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      resetFormData();
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

  return (
    <PageLayout
      hero={
        <HeroSection
          title="تواصل معنا"
          description="نحن هنا للإجابة على استفساراتكم وتقديم الدعم الكامل لمشاريعكم الهندسية"
          eyebrow="تواصل فوري"
          className="bg-gradient-to-br from-primary/15 via-background to-secondary/20"
        >
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <div className="rounded-3xl border border-primary/20 bg-background/80 p-6 shadow-xl backdrop-blur">
              <p className="text-lg text-foreground/80 leading-relaxed">
                سواء كنت تبحث عن استشارة سريعة أو ترغب في بدء مشروع متكامل،
                فريقنا متواجد لخدمتك عبر القنوات الرقمية والهاتفية، مع التزام
                كامل بالاستجابة السريعة.
              </p>
            </div>
            <div className="relative hidden overflow-hidden rounded-3xl border border-primary/20 bg-primary/10 shadow-2xl lg:block">
              <img
                src="/photoApp/architectural-plan.jpg"
                alt="مخططات هندسية لشركة GEC"
                loading="lazy"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-primary/30" />
            </div>
          </div>
        </HeroSection>
      }
    >
      <section className="section-modern relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
        <div className="container relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-card/95 p-8 text-foreground shadow-[0_35px_70px_rgba(15,23,61,0.15)] transition-colors dark:border-primary/25 dark:bg-[#050615] dark:text-white dark:shadow-[0_40px_90px_rgba(3,5,15,0.9)] lg:p-10">
            <div className="absolute inset-y-0 -left-16 hidden w-72 -skew-x-6 overflow-hidden rounded-r-[120px] bg-primary/20 lg:block">
              <img
                src="/photoApp/interior-design.jpg"
                alt="زاوية تصميم داخلي"
                loading="lazy"
                className="h-full w-full object-cover opacity-70 mix-blend-overlay"
              />
            </div>
            <div className="relative lg:ml-56">
              <SectionHeading
                alignment="start"
                title="أرسل لنا رسالة"
                subtitle="املأ النموذج وسنعاود الاتصال بك خلال 24 ساعة عمل"
                className="mb-8"
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="_subject"
                  value="رسالة جديدة من موقع GEC"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="شكراً لتواصلك مع مكتب غازي محمد عباس للاستشارات الهندسية. سنتواصل معك قريباً."
                />
                <input type="hidden" name="_template" value="box" />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="contact-name"
                    >
                      الاسم *
                    </label>
                    <FormField icon={<User className="h-5 w-5" />}>
                      <input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="اترك لنا اسمك"
                        className="w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400"
                      />
                    </FormField>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="contact-email"
                    >
                      البريد الإلكتروني *
                    </label>
                    <FormField icon={<MailIcon className="h-5 w-5" />}>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="بريدك الإلكتروني"
                        className="w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400"
                      />
                    </FormField>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="contact-email"
                    >
                      رقم الهاتف *
                    </label>
                    <FormField icon={<PhoneIcon className="h-5 w-5" />}>
                      <input
                        id="contact-email"
                        type="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="phone"
                        placeholder="رقم الهاتف"
                        className="w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400"
                      />
                    </FormField>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="contact-subject"
                    >
                      الموضوع *
                    </label>
                    <FormField icon={<FileText className="h-5 w-5" />}>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="selection w-full border-0 bg-transparent py-3 px-0 text-foreground focus:outline-none focus:ring-0 dark:text-white"
                      >
                        <option value="">اختر الخدمة</option>
                        <option value="الأنشطة الهندسية">
                          الأنشطة الهندسية
                        </option>
                        <option value="الأعمال المساحية">
                          الأعمال المساحية
                        </option>
                        <option value="التصميم المعماري الخارجي">
                          التصميم المعماري الخارجي
                        </option>
                        <option value="التصميم المعماري الداخلي">
                          التصميم المعماري الداخلي
                        </option>
                        <option value="الإشراف على المشاريع">
                          الإشراف على المشاريع
                        </option>
                        <option value="الدراسات الهندسية">
                          الدراسات الهندسية
                        </option>
                        <option value="الدراسات الجيولوجية والهيدرولوجية">
                          الدراسات الجيولوجية والهيدرولوجية
                        </option>
                        <option value="التقارير الهندسية">
                          التقارير الهندسية
                        </option>
                        <option value="التصاميم الكهروميكانيكية">
                          التصاميم الكهروميكانيكية
                        </option>
                        <option value="تصاميم الكهرباء">تصاميم الكهرباء</option>
                        <option value="تصاميم السلامة">تصاميم السلامة</option>
                        <option value="استفسار عام">استفسار عام</option>
                      </select>
                    </FormField>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-semibold text-foreground dark:text-white"
                    htmlFor="contact-message"
                  >
                    الرسالة *
                  </label>
                  <FormField
                    icon={<MessageSquare className="h-5 w-5 mt-3" />}
                    className="min-h-[150px]"
                  >
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 resize-none dark:text-white dark:placeholder:text-gray-400"
                    />
                  </FormField>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-modern flex w-full items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 py-4 rounded-xl font-bold text-lg"
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
          </div>

          <div className="space-y-8">
            <SectionHeading
              alignment="start"
              title="الأسئلة الشائعة"
              subtitle="أجوبة سريعة عن أكثر الأسئلة التي نستقبلها"
              className="mb-4"
            />

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div
                  key={faq.question}
                  className="card-modern border border-border/70 bg-secondary/40 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 rounded-2xl"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.12}s both`,
                  }}
                >
                  <h3 className="mb-2 text-lg font-bold text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-modern bg-gradient-to-br from-primary/8 via-background to-secondary/15">
        <div className="container space-y-12">
          <SectionHeading
            title="وسائل التواصل"
            subtitle="اختر الطريقة الأنسب لك للتواصل مع فريقنا"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {branchDemoData.map((item, index) => (
              <BranchContactCard
                key={index}
                branchName={item.branchName}
                phone={item.phone}
                email={item.email}
                workingHours={item.workingHours}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern bg-gradient-to-br from-primary/6 via-background to-secondary/25">
        <div className="container space-y-8">
          <SectionHeading
            title="مواقع الشركة على الخريطة"
            subtitle="شاهد مواقع مكاتبنا على خريطة واحدة، واضغط على أي موقع لفتح التفاصيل في خرائط Google"
          />
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl">
            <OfficeMap offices={OFFICE_LOCATIONS} />
            <div className="flex flex-col gap-3 border-t border-border/70 bg-secondary/40 px-6 py-6 md:flex-row md:flex-wrap">
              {OFFICE_LOCATIONS.map(office => (
                <a
                  key={office.title}
                  href={office.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-transparent bg-background/60 px-4 py-2 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  <span>{office.title}</span>
                  <span className="text-xs text-primary/70 group-hover:text-primary">
                    (فتح ↗)
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
