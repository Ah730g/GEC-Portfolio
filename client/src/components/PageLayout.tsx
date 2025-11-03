import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: ReactNode;
  hero?: ReactNode;
  className?: string;
  mainClassName?: string;
};

export default function PageLayout({
  hero,
  children,
  className,
  mainClassName,
}: PageLayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background", className)}>
      <a className="skip-link" href="#main-content">
        تخط إلى المحتوى الرئيسي
      </a>
      <Header />
      <main
        id="main-content"
        className={cn("flex-1 focus:outline-none", mainClassName)}
        tabIndex={-1}
      >
        {hero}
        {children}
      </main>
      <Footer />
    </div>
  );
}
