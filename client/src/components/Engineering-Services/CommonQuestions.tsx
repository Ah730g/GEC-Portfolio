import React from "react";
import Question from "./Question";
import { ServiceType } from "@/lib/utils";
type CommonQuestionsProps = {
  commonQ: ServiceType["CommonQuestions"];
};
import { motion } from "motion/react";

function CommonQuestions({ commonQ }: CommonQuestionsProps) {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Heading */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
              {commonQ.title}
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          </div>

          {/* Questions List */}
          <div className="flex flex-col gap-4">
            {commonQ.boxes.map((b, i) => {
              return (
                <Question key={i} question={b.question} answer={b.answer} />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CommonQuestions;
