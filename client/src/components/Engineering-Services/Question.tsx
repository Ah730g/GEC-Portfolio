import React, { useState } from "react";

type QuestionProps = {
  question: string;
  answer: {
    title: string | null;
    body: Array<{
      important: string | null;
      pargraph: string | null;
    }> | null;
  };
};

function Question({ question, answer }: QuestionProps) {
  const [opend, setOpend] = useState(false);
  return (
    <div className="bg-card rounded-xl border border-border shadow-md overflow-hidden transition-all hover:shadow-lg">
      <h2
        className={`text-lg sm:text-xl font-bold relative z-10
        p-4 sm:p-5 cursor-pointer flex justify-between items-center gap-4 transition-all
        ${opend ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"}`}
        onClick={() => {
          setOpend(pre => !pre);
        }}
      >
        <span className="flex-1 text-right">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`shrink-0 transition-transform duration-300
            ${opend ? "rotate-180" : "rotate-0"}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
        </svg>
      </h2>
      <div
        className={`${opend ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="bg-card p-4 sm:p-5 text-foreground/80 leading-relaxed">
          {answer.title !== null && (
            <p className="text-base sm:text-lg font-medium mb-3 text-foreground">
              {answer.title}
            </p>
          )}
          {answer.body !== null && (
            <ul className="space-y-2 pr-4">
              {answer.body.map((b, i) => {
                return (
                  <li key={i} className="text-sm sm:text-base before:content-['•'] before:ml-2 before:text-primary">
                    {b.important && <strong className="text-foreground font-semibold">{b.important}</strong>}{" "}
                    {b.pargraph && <span>{b.pargraph}</span>}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
