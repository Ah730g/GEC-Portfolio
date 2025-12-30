import { ServiceType } from "@/lib/utils";
import { P } from "node_modules/framer-motion/dist/types.d-BJcRxCew";
import React from "react";
type DescriptionProps = {
  description: ServiceType["Description"];
  title: String;
};
import { motion } from "motion/react";
import { Link } from "wouter";

function Description({ description, title }: DescriptionProps) {
  return (
    <div className="my-6 md:px-8 py-8 bg-white dark:bg-[#050710]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        exit={{ opacity: 0, y: 40 }}
        className="title text-center p-5 text-[45px] max-md:text-[30px] font-extrabold rounded-b-[80px] h-[150px] dark:bg-[#111a33]
             bg-[#f3f5ff] flex justify-center items-center mb-10"
      >
        <h1 className="text-[#2f45ff] w-fit dark:text-white">{title}</h1>
      </motion.div>
      <div className="container px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="description space-y-10 max-md:text-center"
        >
          <div className="border-b border-[#444] pb-10">
            {description.texts.map((text, index) => {
              return (
                <p
                  className={`xl:text-[25px] text-justify max-xl:text-center md:text-[20px] max-md:text-[18px] ${description.texts.length > 1 && index != description.texts.length - 1 ? "mb-8" : ""} 
                       font-semibold leading-[1.3] text-[#777777] dark:text-white lg:p-4`}
                >
                  {text}
                </p>
              );
            })}
          </div>
          <a
            href="/contact"
            className="text-2xl max-md:text-xl max-md:mx-auto font-bold bg-[#2f45ff] px-5 py-3 cursor-pointer text-white rounded-sm
        hover:bg-[#091a9b] hover:scale-105 transition"
          >
            {description.button.name}{" "}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="img w-full lg:w-3/4 mx-auto"
        >
          <img
            src={description.img}
            alt=""
            className="w-full max-h-[900px] object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Description;
