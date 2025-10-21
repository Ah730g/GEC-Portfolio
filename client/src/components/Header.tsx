import { NAV_MENU, APP_TITLE, CONTACT_PHONE, CONTACT_EMAIL } from "@/const";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex gap-4">
            <a href={`tel:${CONTACT_PHONE}`} className="hover:text-gray-300">
              {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-300">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          {APP_TITLE}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAV_MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          احصل على استشارة
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition w-full">
              احصل على استشارة
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

