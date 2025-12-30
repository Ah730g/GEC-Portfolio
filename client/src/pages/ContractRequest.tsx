import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Building2,
  Briefcase,
  Calendar,
  Phone,
  Mail,
  User,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT_EMAIL } from "@/const";

type ContractFormData = {
  contractType: string;
  projectName: string;
  workScope: string;
  projectDuration: string;
  phone: string;
  companyName: string;
  email: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const INITIAL_FORM_DATA: ContractFormData = {
  contractType: "",
  projectName: "",
  workScope: "",
  projectDuration: "",
  phone: "",
  companyName: "",
  email: "",
};

const CONTRACT_EMAIL = CONTACT_EMAIL;
const WHATSAPP_NUMBER = "966555720166";

type FormFieldProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
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

export default function ContractRequest() {
  const [location, setLocation] = useLocation();
  const [formData, setFormData] = useState<ContractFormData>({
    ...INITIAL_FORM_DATA,
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContractFormData, string>>
  >({});
  const resetTimeoutRef = useRef<number | null>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);
  const [preservedContractType, setPreservedContractType] =
    useState<string>("");

  // Read contract type from URL query params
  // Only run this logic when we're actually on the /contract-request route
  useEffect(() => {
    // Check if we're still on the contract-request route
    // location from wouter is the pathname (e.g., "/contract-request")
    // If user navigated away, location will be different, so don't interfere
    if (location !== "/contract-request") {
      return; // Don't interfere with navigation to other routes
    }

    const searchParams = new URLSearchParams(window.location.search);
    const contractType = searchParams.get("type");

    if (!contractType) {
      // Redirect back if no contract type (only when on contract-request route)
      setLocation("/contracts");
      return;
    }

    const decodedType = decodeURIComponent(contractType);
    setFormData(prev => ({
      ...prev,
      contractType: decodedType,
    }));
    setPreservedContractType(decodedType);
  }, [location, setLocation]);

  const resetFormData = () => setFormData({ ...INITIAL_FORM_DATA });

  // Map Arabic field names to English state keys
  const fieldNameMap: Record<string, keyof ContractFormData> = {
    "نوع التعاقد": "contractType",
    "اسم المشروع": "projectName",
    "نطاق العمل": "workScope",
    "مدة المشروع": "projectDuration",
    "رقم الجوال": "phone",
    "اسم الشركة": "companyName",
    "البريد الإلكتروني": "email",
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const stateKey = fieldNameMap[name] || name;
    setFormData(prev => ({ ...prev, [stateKey]: value }));
    // Clear error when user starts typing
    if (errors[stateKey as keyof ContractFormData]) {
      setErrors(prev => ({ ...prev, [stateKey]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContractFormData, string>> = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = "اسم المشروع مطلوب";
    }

    if (!formData.workScope.trim()) {
      newErrors.workScope = "نطاق العمل مطلوب";
    }

    if (!formData.projectDuration.trim()) {
      newErrors.projectDuration = "مدة المشروع مطلوبة";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الجوال مطلوب";
    } else {
      // Validate phone number (Saudi format: starts with 05 or +966)
      const phoneRegex = /^(\+966|0)?5\d{8}$/;
      const cleanPhone = formData.phone.replace(/\s|-/g, "");
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = "يرجى إدخال رقم جوال صحيح (مثال: 0501234567)";
      }
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "اسم الشركة مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    e.stopPropagation();
    console.log("Form submit handler called");
    console.log("Current status:", status);

    if (status === "sending") {
      console.log("Already sending, ignoring");
      return false;
    }

    // Validate form
    console.log("Validating form...");
    if (!validateForm()) {
      console.log("Form validation failed:", errors);
      return;
    }
    console.log("Form validation passed");

    setStatus("sending");

    try {
      // Create FormData manually to ensure all fields are included
      const formDataToSend = new FormData();

      // Add hidden fields
      formDataToSend.append(
        "_subject",
        `طلب تعاقد جديد - ${formData.contractType}`
      );
      formDataToSend.append("_template", "box");
      formDataToSend.append(
        "_autoresponse",
        "شكراً لتواصلك مع مكتب غازي محمد عباس للاستشارات الهندسية. سنتواصل معك قريباً بخصوص طلب التعاقد."
      );

      // Add all form fields with Arabic names
      formDataToSend.append("نوع التعاقد", formData.contractType);
      formDataToSend.append("اسم المشروع", formData.projectName);
      formDataToSend.append("نطاق العمل", formData.workScope);
      formDataToSend.append("مدة المشروع", formData.projectDuration);
      formDataToSend.append("رقم الجوال", formData.phone);
      formDataToSend.append("اسم الشركة", formData.companyName);
      formDataToSend.append("البريد الإلكتروني", formData.email);

      console.log("Submitting form to:", CONTRACT_EMAIL);
      console.log("Form data:", {
        contractType: formData.contractType,
        projectName: formData.projectName,
        workScope: formData.workScope,
        projectDuration: formData.projectDuration,
        phone: formData.phone,
        companyName: formData.companyName,
        email: formData.email,
      });

      // Use AJAX endpoint to prevent page redirect
      // FormSubmit AJAX endpoint accepts FormData
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTRACT_EMAIL}`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      // AJAX endpoint returns JSON
      let responseData;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
        console.log("Response data (JSON):", responseData);
      } else {
        // Try to parse as JSON anyway
        const text = await response.text();
        console.log("Response text:", text);
        try {
          responseData = JSON.parse(text);
        } catch {
          // If not JSON, check if it's an error
          if (!response.ok) {
            throw new Error(
              `Form submission failed: ${response.status} - ${text.substring(0, 100)}`
            );
          }
          // If response is OK but not JSON, assume success
          responseData = { success: true };
        }
      }

      // Check for errors in response
      if (responseData && responseData.success === false) {
        throw new Error(responseData.message || "Form submission failed");
      }

      // If we get here and no error, it's successful
      if (!response.ok && !responseData) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      // If we get here, submission was successful
      console.log("Form submitted successfully!");
      setStatus("success");
      // Don't reset form data on success - we'll show success state instead
      // Don't call scheduleReset() for success - let it stay until user clicks a button
      return false; // Prevent any default form behavior
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      setStatus("error");
      // Don't reset form on error so user can try again
      scheduleReset(); // Only schedule reset for errors
      return false; // Prevent any default form behavior
    }
  };

  // Focus on success message when status changes to success
  useEffect(() => {
    if (status === "success" && successMessageRef.current) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        successMessageRef.current?.focus();
        successMessageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [status]);

  // Screen reader announcement
  useEffect(() => {
    if (status === "success") {
      // Announce to screen readers
      const announcement = document.createElement("div");
      announcement.setAttribute("role", "status");
      announcement.setAttribute("aria-live", "polite");
      announcement.setAttribute("aria-atomic", "true");
      announcement.className = "sr-only";
      announcement.textContent = "تم إرسال طلب التعاقد بنجاح";
      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [status]);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  // Handle form reset while preserving contract type
  const handleResetForm = () => {
    setFormData({
      ...INITIAL_FORM_DATA,
      contractType: preservedContractType,
    });
    setErrors({});
    setStatus("idle");
  };

  // Handle navigation back to contracts page
  const handleGoBack = () => {
    setLocation("/contracts");
  };

  // Build WhatsApp message from form data
  const buildWhatsAppMessage = (formData: ContractFormData): string => {
    const message = `طلب تعاقد جديد

نوع التعاقد: ${formData.contractType}
اسم المشروع: ${formData.projectName}
نطاق العمل: ${formData.workScope}
مدة المشروع: ${formData.projectDuration}
رقم الجوال: ${formData.phone}
اسم الشركة: ${formData.companyName}
البريد الإلكتروني: ${formData.email}`;

    return message;
  };

  // Open WhatsApp with form data
  const openWhatsApp = () => {
    const message = buildWhatsAppMessage(formData);
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Only show loading/redirect state if we're still on the contract-request route
  // If user navigated away, don't interfere
  if (location === "/contract-request" && !formData.contractType) {
    return null; // Will redirect via useEffect
  }

  // If we're not on contract-request route, don't render anything
  // (component should unmount, but this is a safety check)
  if (location !== "/contract-request") {
    return null;
  }

  return (
    <PageLayout
      hero={
        <HeroSection
          title="طلب تعاقد"
          description="املأ النموذج أدناه لإرسال طلب التعاقد وسنتواصل معك في أقرب وقت ممكن"
          eyebrow="نموذج التعاقد"
          alignment="center"
        />
      }
    >
      <section className="section-modern py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {status === "success" ? (
              // Success State - Replace form with confirmation
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[32px] border border-green-500/50 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 p-8 text-foreground shadow-[0_35px_70px_rgba(15,23,61,0.15)] transition-colors dark:border-green-500/30 dark:text-white lg:p-12"
              >
                <div
                  ref={successMessageRef}
                  tabIndex={-1}
                  className="text-center space-y-6"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                      <CheckCircle2 className="relative h-20 w-20 text-green-600 dark:text-green-400" />
                    </div>
                  </motion.div>

                  {/* Success Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <h2 className="text-3xl sm:text-4xl font-black text-green-700 dark:text-green-400">
                      تم إرسال طلب التعاقد بنجاح!
                    </h2>
                    <div className="h-1 w-24 bg-green-500 rounded-full mx-auto" />
                    <p className="text-lg text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                      شكراً لتواصلك مع مكتب غازي محمد عباس للاستشارات الهندسية.
                      <br />
                      تم استلام طلبك بنجاح وسنتواصل معك في أقرب وقت ممكن.
                    </p>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                  >
                    <Button
                      onClick={handleGoBack}
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto min-w-[200px] rounded-lg border-2 border-primary bg-transparent px-8 py-6 text-base sm:text-lg font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg"
                    >
                      <ArrowRight className="h-5 w-5 ml-2" />
                      العودة للصفحة السابقة
                    </Button>

                    <Button
                      onClick={openWhatsApp}
                      size="lg"
                      className="w-full sm:w-auto min-w-[200px] rounded-lg bg-gradient-to-r from-[#25D366] to-[#20BA5A] px-8 py-6 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-[#20BA5A] hover:to-[#1DA851]"
                    >
                      <svg
                        className="h-5 w-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      إرسال عبر واتساب
                    </Button>

                    <Button
                      onClick={handleResetForm}
                      size="lg"
                      className="w-full sm:w-auto min-w-[200px] rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-6 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <RotateCcw className="h-5 w-5 ml-2" />
                      إرسال طلب جديد
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              // Form State
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[32px] border border-border/70 bg-card/95 p-8 text-foreground shadow-[0_35px_70px_rgba(15,23,61,0.15)] transition-colors dark:border-primary/25 dark:bg-[#050615] dark:text-white dark:shadow-[0_40px_90px_rgba(3,5,15,0.9)] lg:p-10"
              >
                <SectionHeading
                  alignment="start"
                  title="نموذج طلب التعاقد"
                  subtitle="يرجى ملء جميع الحقول المطلوبة أدناه"
                  className="mb-8"
                />

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  action="#"
                  method="post"
                  noValidate
                >
                  {/* Hidden fields for FormSubmit */}
                  <input
                    type="hidden"
                    name="_subject"
                    value={`طلب تعاقد جديد - ${formData.contractType}`}
                  />
                  <input type="hidden" name="_template" value="box" />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="شكراً لتواصلك مع مكتب غازي محمد عباس للاستشارات الهندسية. سنتواصل معك قريباً بخصوص طلب التعاقد."
                  />

                  {/* Contract Type - Read Only */}
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="contract-type"
                    >
                      نوع التعاقد *
                    </label>
                    <FormField icon={<FileText className="h-5 w-5" />}>
                      <input
                        id="contract-type"
                        name="نوع التعاقد"
                        type="text"
                        value={formData.contractType}
                        readOnly
                        className="w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 cursor-not-allowed opacity-70 dark:text-white dark:placeholder:text-gray-400"
                      />
                    </FormField>
                  </div>

                  {/* Project Name */}
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="project-name"
                    >
                      اسم المشروع *
                    </label>
                    <FormField icon={<Briefcase className="h-5 w-5" />}>
                      <input
                        id="project-name"
                        name="اسم المشروع"
                        type="text"
                        value={formData.projectName}
                        onChange={handleChange}
                        required
                        placeholder="أدخل اسم المشروع"
                        className={`w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400 ${
                          errors.projectName
                            ? "text-red-600 dark:text-red-400"
                            : ""
                        }`}
                      />
                    </FormField>
                    {errors.projectName && (
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        {errors.projectName}
                      </p>
                    )}
                  </div>

                  {/* Work Scope */}
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="work-scope"
                    >
                      نطاق العمل *
                    </label>
                    <FormField
                      icon={<Building2 className="h-5 w-5 mt-3" />}
                      className="min-h-[100px]"
                    >
                      <textarea
                        id="work-scope"
                        name="نطاق العمل"
                        value={formData.workScope}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="وصف نطاق العمل المطلوب..."
                        className={`w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 resize-none dark:text-white dark:placeholder:text-gray-400 ${
                          errors.workScope
                            ? "text-red-600 dark:text-red-400"
                            : ""
                        }`}
                      />
                    </FormField>
                    {errors.workScope && (
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        {errors.workScope}
                      </p>
                    )}
                  </div>

                  {/* Project Duration */}
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="project-duration"
                    >
                      مدة المشروع *
                    </label>
                    <FormField icon={<Calendar className="h-5 w-5" />}>
                      <input
                        id="project-duration"
                        name="مدة المشروع"
                        type="text"
                        value={formData.projectDuration}
                        onChange={handleChange}
                        required
                        placeholder="مثال: 6 أشهر، سنة واحدة، إلخ"
                        className={`w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400 ${
                          errors.projectDuration
                            ? "text-red-600 dark:text-red-400"
                            : ""
                        }`}
                      />
                    </FormField>
                    {errors.projectDuration && (
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        {errors.projectDuration}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="phone"
                    >
                      رقم الجوال *
                    </label>
                    <FormField icon={<Phone className="h-5 w-5" />}>
                      <input
                        id="phone"
                        name="رقم الجوال"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="05XXXXXXXX"
                        className={`w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400 ${
                          errors.phone ? "text-red-600 dark:text-red-400" : ""
                        }`}
                      />
                    </FormField>
                    {errors.phone && (
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="company-name"
                    >
                      اسم الشركة *
                    </label>
                    <FormField icon={<Building2 className="h-5 w-5" />}>
                      <input
                        id="company-name"
                        name="اسم الشركة"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="اسم الشركة أو المؤسسة"
                        className={`w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400 ${
                          errors.companyName
                            ? "text-red-600 dark:text-red-400"
                            : ""
                        }`}
                      />
                    </FormField>
                    {errors.companyName && (
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className="block font-semibold text-foreground dark:text-white"
                      htmlFor="email"
                    >
                      البريد الإلكتروني *
                    </label>
                    <FormField icon={<Mail className="h-5 w-5" />}>
                      <input
                        id="email"
                        name="البريد الإلكتروني"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="example@email.com"
                        className={`w-full border-0 bg-transparent py-3 px-0 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-400 ${
                          errors.email ? "text-red-600 dark:text-red-400" : ""
                        }`}
                      />
                    </FormField>
                    {errors.email && (
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-modern flex w-full items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 py-4 rounded-xl font-bold text-lg"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Mail className="h-5 w-5" />
                          إرسال طلب التعاقد
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div
                      className="rounded-xl border border-red-500 bg-red-100 px-4 py-3 text-center font-bold text-red-700 dark:border-red-600 dark:bg-red-900/30 dark:text-red-200 space-y-2"
                      role="status"
                      aria-live="polite"
                    >
                      <p>
                        ✗ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.
                      </p>
                      <p className="text-sm font-normal mt-2">
                        ملاحظة: إذا كانت هذه المرة الأولى، يرجى التحقق من بريد{" "}
                        <strong>{CONTRACT_EMAIL}</strong> وتفعيل الرابط من
                        FormSubmit
                      </p>
                    </div>
                  )}
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
