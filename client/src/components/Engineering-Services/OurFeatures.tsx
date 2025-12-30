import React from "react";
import { ServiceType } from "@/lib/utils";
type OurFeatureProps = {
  ourFeatures: ServiceType["OurFeatures"];
};
import { motion } from "motion/react";

function OurFeatures({ ourFeatures }: OurFeatureProps) {
  return (
    <div className="px-8 py-8 my-16 bg-white dark:bg-[#050710]">
      <div className="container px-8 flex max-lg:flex-col justify-between gap-5 items-center">
        <div className="flex flex-col gap-5 flex-1/2">
          <h1 className="text-[45px] max-md:text-3xl max-md:text-center font-extrabold text-[#2f45ff]">
            {ourFeatures.title}
            <span className="w-1/4 mt-px bg-[#d5b26e] h-px block max-md:mx-auto"></span>
          </h1>
          {ourFeatures.Features.map((f, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                key={i}
                className="box p-4 rounded-xl flex gap-3 max-sm:flex-col
          items-center bg-[#e3e8ff] dark:bg-[#0c1225] shadow-lg dark:shadow-white/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-check size-10 text-[#1e266d] dark:text-white flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <p className="text-2xl max-md:text-xl font-bold text-[#1e266d] dark:text-white max-sm:text-center">
                  {" "}
                  {f}{" "}
                </p>
              </motion.div>
            );
          })}

          <a
            className="text-2xl max-md:text-xl font-bold bg-[#2f45ff] px-5 py-3 cursor-pointer text-white rounded-sm
        hover:bg-[#091a9b] hover:scale-105 transition w-fit max-md:mx-auto"
            href="/contact"
          >
            تواصل معنا
          </a>
        </div>
        <div className="flex-1/2">
          <img src="/photoApp/scrapes.jpg" alt="" className="w-full h-auto" />
        </div>
      </div>
      <p className="text-[#777777] text-2xl max-md:text-xl font-normal max-w-[800px] mx-auto text-center dark:text-white">
        {ourFeatures.footer}{" "}
      </p>
    </div>
  );
}

export default OurFeatures;
