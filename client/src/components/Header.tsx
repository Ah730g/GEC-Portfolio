import {
  NAV_MENU,
  APP_TITLE,
  APP_LOGO,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_FORM,
} from "@/const";
import { Link } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { motion as mot } from "motion/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, switchable } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => toggleTheme?.();

  return (
    <mot.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background border-b border-border/50"
      }`}
    >
      {/* Main Navigation */}
      <nav className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-black text-primary transition-colors hover:text-primary/80"
        >
          <img
            src={APP_LOGO}
            alt={APP_TITLE}
            className="h-11 w-auto rounded-lg bg-white/70 p-1 shadow-sm dark:bg-white"
          />
          <span className="hidden text-lg sm:inline">شركة غازي محمد عباس</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={(isActive: boolean) =>
                `group relative font-bold transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              {item.label}
              <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          {switchable ? (
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
          ) : null}

          {/* Request Contracts Button - Desktop */}
          <Link
            href="/contracts"
            className="hidden rounded-lg border-2 border-primary bg-transparent px-5 py-2 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg md:block"
          >
            طلب التعاقدات
          </Link>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-2 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:block"
          >
            احصل على استشارة
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="تبديل القائمة"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden border-t border-border bg-background py-4"
            id="mobile-menu"
          >
            <div className="container flex flex-col gap-3">
              {NAV_MENU.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={(isActive: boolean) =>
                    `rounded-lg px-4 py-3 font-bold transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contracts"
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-center font-bold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg"
              >
                طلب التعقدات
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-center font-bold text-white transition-all hover:shadow-lg"
              >
                احصل على استشارة
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </mot.header>
  );
}
