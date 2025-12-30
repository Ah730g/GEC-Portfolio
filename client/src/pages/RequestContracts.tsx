import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function RequestContracts() {
  const [, setLocation] = useLocation();

  const handleContractTypeClick = (contractType: string) => {
    setLocation(`/contract-request?type=${encodeURIComponent(contractType)}`);
  };

  return (
    <PageLayout
      hero={
        <HeroSection
          title="طلب التعاقدات"
          description="اختر نوع التعاقد المناسب لمشروعك واحصل على أفضل الخدمات الاستشارية الهندسية"
          eyebrow="نظام التعاقدات"
          alignment="center"
        />
      }
    >
      <section className="section-modern py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-4">
                طلب التعاقدات
              </h2>
              <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto px-4">
                نوفر لك خيارات متعددة للتعاقد معنا. اختر النوع الذي يناسب
                احتياجاتك ومتطلبات مشروعك الهندسي.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            >
              {/* Button 1: Primary - طلب تعاقد رسمي */}
              <Button
                size="lg"
                className="w-full sm:w-auto min-w-[200px] sm:min-w-[240px] rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-6 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleContractTypeClick("طلب تعاقد رسمي")}
              >
                طلب تعاقد رسمي
              </Button>

              {/* Button 2: Secondary - طلب تضامن */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[200px] sm:min-w-[240px] rounded-lg border-2 border-primary bg-transparent px-8 py-6 text-base sm:text-lg font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg"
                onClick={() => handleContractTypeClick("طلب تضامن")}
              >
                طلب تضامن
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
