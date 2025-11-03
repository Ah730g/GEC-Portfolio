import type { ReactNode } from "react";
import { Link } from "wouter";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
};

export default function ButtonLink({
  href,
  children,
  className,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    </Link>
  );
}
