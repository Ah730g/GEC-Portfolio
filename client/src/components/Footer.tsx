import { SERVICES, COMPANY_INFO, CONTACT_EMAIL } from "@/const";
import { FaSnapchatGhost, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "wouter";
import ButtonLink from "@/components/ButtonLink";

export default function Footer() {
  const socialIcons = [
    {
      icon: FaSnapchatGhost,
      url: "https://www.snapchat.com/@ghazi_gec",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/GHAZI_GEC/",
    },
    {
      icon: FaXTwitter,
      url: "https://x.com/GHAZI_GEC",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@GHAZI_GEC",
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      {/* Brand Section */}
      <div className="container py-16 text-center md:text-right">
        <div className="flex gap-3">
          <span className="w-[40px] h-[40px]  font-bold flex justify-center items-center rounded-full bg-primary text-white">
            GEC
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-4">
            {COMPANY_INFO.name}
          </h2>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {COMPANY_INFO.description}
        </p>
      </div>

      {/* Main Grid */}
      <div className="container pb-16 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* Services Column */}
        <div>
          <h3 className="text-xl font-semibold mb-6 tracking-wide border-b border-border pb-2">
            خدماتنا الهندسية
          </h3>

          <ul className="space-y-3 leading-relaxed">
            {SERVICES.slice(0, 6).map(service => (
              <li key={service.id} className="transition-colors duration-200">
                <Link
                  to={`/${service.slug}`}
                  className="text-muted-foreground text-base hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Simplified Contact Column */}
        <div>
          <h3 className="text-xl font-semibold mb-6 tracking-wide border-b border-border pb-2">
            تواصل معنا
          </h3>

          <div className="space-y-6 text-base leading-relaxed">
            <div>
              <p className="font-semibold mb-3 text-foreground">
                الهاتف الرئيسي{" "}
              </p>
              <div className="space-y-3">
                <a
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  dir="ltr"
                >
                  +966 555720166
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-3 text-foreground">
                البريد الإلكتروني
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <ButtonLink
                href="/contact"
                className="bg-gradient-to-r from-primary to-primary/80 text-white hover:bg-gradient-to-r hover:from-primary/90 hover:to-primary/70 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                المزيد من وسائل التواصل{" "}
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Social Column */}
        <div>
          <h3 className="text-xl font-semibold mb-6 tracking-wide border-b border-border pb-2">
            تابعنا
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            كن على اطلاع بآخر الأخبار والمشاريع من خلال متابعتنا على وسائل
            التواصل.
          </p>

          <div className="flex gap-4">
            {socialIcons.map((Icon, idx) => (
              <a
                key={idx}
                href={Icon.url}
                target="_blank"
                className="h-11 w-11 flex items-center justify-center rounded-full border border-border 
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Icon.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-border bg-muted/40 backdrop-blur-sm py-7">
        <p className="text-center text-[15px] font-semibold tracking-wide text-foreground/90">
          © 2025 {COMPANY_INFO.name} — جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
