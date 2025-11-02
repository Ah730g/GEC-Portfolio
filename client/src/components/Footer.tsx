import { NAV_MENU, SERVICES, COMPANY_INFO, PHONE_CONTACTS, CONTACT_LANDLINE, CONTACT_EMAIL, CONTACT_EMAIL_2, CONTACT_EMAIL_3, CONTACT_HOURS } from "@/const";
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
                  <Link href={item.href}>
                    <a className="hover:text-white transition">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-gray-300">
              {/* Mobile Numbers */}
              <div>
                <p className="font-semibold text-white mb-2">أرقام الجوالات</p>
                <div className="space-y-1">
                  {PHONE_CONTACTS.map((contact, index) => (
                    <div key={index}>
                      <a href={`tel:${contact.phone}`} className="hover:text-white transition block">
                        {contact.name}: {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Landline */}
              <div>
                <p className="font-semibold text-white mb-1">التلفون الثابت</p>
                <a href={`tel:${CONTACT_LANDLINE}`} className="hover:text-white transition">
                  {CONTACT_LANDLINE}
                </a>
              </div>
              
              {/* Emails */}
              <div>
                <p className="font-semibold text-white mb-2">البريد الإلكتروني</p>
                <div className="space-y-1">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition block">
                    {CONTACT_EMAIL}
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL_2}`} className="hover:text-white transition block">
                    {CONTACT_EMAIL_2}
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL_3}`} className="hover:text-white transition block">
                    {CONTACT_EMAIL_3}
                  </a>
                </div>
              </div>
              
              {/* Working Hours */}
              <div>
                <p className="font-semibold text-white mb-1">ساعات العمل</p>
                <p>{CONTACT_HOURS}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        <p>© 2025 {COMPANY_INFO.name}. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

