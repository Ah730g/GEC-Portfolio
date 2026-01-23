import CommonQuestions from "@/components/Engineering-Services/CommonQuestions";
import ContactUs from "@/components/Engineering-Services/ContactUs";
import Description from "@/components/Engineering-Services/Description";
import OurFeatures from "@/components/Engineering-Services/OurFeatures";
import OurServices from "@/components/Engineering-Services/OurServices";
import Header from "@/components/Header";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Contact from "./Contact";
import { useParams } from "wouter";
import { Services, ServiceType } from "../lib/utils";
import { motion } from "motion/react";
import PageLayout from "@/components/PageLayout";

function EngineeringServices() {
  const { slug } = useParams();
  const [service, setService] = useState<ServiceType | null>(null);

  useEffect(() => {
    if (slug == undefined) return;
    const s: ServiceType = Services.find(s => s.slug == slug);
    setService(s);
  }, [slug]);
  return (
    <PageLayout>
      <div className="bg-white dark:bg-[#050710]">
        {service && (
          <>
            <Description
              description={service.Description}
              title={service.title}
            />
            <OurServices ourServices={service.OurServices} />
            <OurFeatures ourFeatures={service.OurFeatures} />
            <CommonQuestions commonQ={service.CommonQuestions} />
          </>
        )}
      </div>
    </PageLayout>
  );
}

export default EngineeringServices;
