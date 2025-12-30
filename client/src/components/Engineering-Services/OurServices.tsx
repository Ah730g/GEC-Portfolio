import React from "react";
import { ServiceType } from "@/lib/utils";
type OurServicesProps = {
  ourServices: ServiceType["OurServices"];
};
import { motion } from "motion/react";

function OurServices({ ourServices }: OurServicesProps) {
  return (
    <div className="px-8 py-8 my-16 bg-[#f3f5ff] dark:bg-[#050710]">
      <div className="container mx-auto">
        <h1 className="text-[45px] max-md:text-3xl font-extrabold text-center mb-8 text-[#2f45ff]">
          {ourServices.title}
        </h1>
        <div className="boxes flex justify-center gap-8 flex-wrap">
          {ourServices.boxes.map((t, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                key={i}
                className="box bg-white dark:bg-[#0c1225] rounded-md p-8 max-md:p-5
                            text-center md:max-w-[calc(50%-30px)] lg:max-w-[calc(33.3%-30px)] shadow-2xl"
              >
                <div>
                  <h2 className="text-[30px] max-md:text-[25px] font-extrabold mb-3">
                    {t.title}{" "}
                  </h2>
                  {t.body.title !== null && (
                    <p className="text-[24px] max-md:text-[20px] font-normal text-[#777777]">
                      {t.body.title}{" "}
                    </p>
                  )}
                  {t.body.info !== null && (
                    <>
                      {t.body.info.map((b, i) => {
                        return (
                          <p
                            key={i}
                            className="text-[24px] font-normal text-[#777777]"
                          >
                            <b>{b.important !== null && b.important}</b>{" "}
                            {b.Paragraph}
                          </p>
                        );
                      })}
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center mt-5 gap-7">
          {ourServices.buttons.map((b, i) => {
            return (
              <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl max-md:text-xl font-bold bg-[#2f45ff] px-5 py-3 cursor-pointer text-white rounded-sm
        hover:bg-[#091a9b] transition"
                href="/contact"
              >
                {b}{" "}
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
