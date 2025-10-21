import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_HOURS, SERVICES, NAV_MENU, COMPANY_INFO } from "@/const";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#" className="hover:text-white transition">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {NAV_MENU.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white mb-1">الهاتف</p>
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white transition">
                  {CONTACT_PHONE}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">البريد الإلكتروني</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">ساعات العمل</p>
                <p>{CONTACT_HOURS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="font-bold mb-4">اشترك في قائمتنا البريدية</h4>
          <p className="text-gray-300 text-sm mb-4">
            اشترك الآن في قائمتنا البريدية لمعرفة كل ما هو جديد في عالم الاستشارات الهندسية
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-4 py-2 rounded text-gray-900"
            />
            <button className="bg-white text-gray-900 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
              اشترك
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        <p>© 2025 درر النفائس للاستشارات الهندسية. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

