import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeroSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  alignment?: "start" | "center";
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  containerClassName?: string;
};

export default function HeroSection({
  title,
  description,
  eyebrow,
  alignment = "start",
  children,
  className,
  overlayClassName,
  containerClassName,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 sm:py-28",
        "bg-gradient-to-br from-primary/10 via-accent/5 to-transparent",
        className
      )}
    >
      <div className={cn("absolute inset-0 pointer-events-none", overlayClassName)}>
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className={cn("container relative z-10", containerClassName)}>
        <div
          className={cn(
            "space-y-6 max-w-3xl",
            alignment === "center"
              ? "mx-auto text-center"
              : "ml-auto text-right"
          )}
        >
          {eyebrow ? (
            <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="heading-modern text-gradient">{title}</h1>
          {description ? (
            <p className="text-xl text-foreground/70 leading-relaxed font-medium">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
