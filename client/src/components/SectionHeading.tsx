import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  alignment?: "start" | "center";
  eyebrow?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        alignment === "center" ? "text-center mx-auto" : "text-right",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="heading-modern text-primary">{title}</h2>
      {subtitle ? (
        <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
      <div
        className={cn(
          "divider-accent h-1 w-16 rounded-full",
          alignment === "center" ? "mx-auto" : "ml-0 mr-auto"
        )}
      />
    </div>
  );
}
