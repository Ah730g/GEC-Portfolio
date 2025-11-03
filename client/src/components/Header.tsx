import { NAV_MENU, APP_TITLE, APP_LOGO, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_EMAIL_FORM } from "@/const";
import { Link } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(saved ? saved === "dark" : prefersDark);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || typeof document === "undefined") {
      return;
    }
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [hydrated, isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background border-b border-border/50"
      }`}
    >
      {/* Top Bar - معلومات التواصل */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground py-3 px-4 text-sm border-b border-border/50">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="hover:text-primary transition-colors font-medium flex items-center gap-2"
            >
              <span>📞</span>
              {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-primary transition-colors font-medium flex items-center gap-2"
            >
              <span>✉️</span>
              {CONTACT_EMAIL}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL_FORM}`}
              className="hover:text-primary transition-colors font-medium flex items-center gap-2 hidden md:flex"
            >
              <span>📧</span>
              {CONTACT_EMAIL_FORM}
            </a>
          </div>
          <div className="hidden sm:flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-black text-primary hover:text-primary/80 transition-colors flex items-center gap-3">
            <img 
              src="/gec-logo.png" 
              alt="GEC Logo" 
              className="h-12 w-auto dark:bg-white dark:p-2 dark:rounded-lg"
            />
            <span className="hidden sm:inline text-lg">{APP_TITLE}</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {NAV_MENU.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="font-bold text-foreground hover:text-primary transition-colors relative group">
                {item.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </a>
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 text-primary hover:scale-110"
            aria-label="تبديل الوضع المظلم"
            title={isDark ? "الوضع الفاتح" : "الوضع المظلم"}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* CTA Button - Desktop */}
          <Link href="/contact">
            <a className="hidden md:block bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
              احصل على استشارة
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="تبديل القائمة"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border py-4 animate-slide-in-down">
          <div className="container flex flex-col gap-3">
            {NAV_MENU.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all w-full text-center"
              >
                احصل على استشارة
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
