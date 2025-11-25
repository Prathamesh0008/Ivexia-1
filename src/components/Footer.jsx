import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo/ivexiaa-logoo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  const quickLinks = t("footer.quickLinks", { returnObjects: true });
  const contact = t("footer.contact", { returnObjects: true });

  return (
    <footer className="relative bg-[#0d2d47] text-white overflow-hidden">
      {/* === Top Accent Line === */}
      <div className="w-full h-1 bg-gradient-to-r from-[#FF7A00] via-[#E2004F] to-[#19a6b5]" />

      {/* === Radial Glow Behind Logo === */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#19a6b5]/10 via-[#E2004F]/5 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center md:text-left items-start">
          
          {/* === Column 1: Logo + Brand === */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#19a6b5]/40 to-[#FF7A00]/30 blur-lg rounded-full" />
              <img
                src={logo}
                alt={t("footer.logoAlt")}
                className="relative w-[12vh] md:w-[22vh] h-auto object-contain mx-auto md:mx-0 drop-shadow-lg"
              />
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
              <span className="font-semibold text-white">{t("footer.companyName")}</span>
              <br />
              {t("footer.tagline")}
              <br />
              {t("footer.description")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href={contact.social[i] || "#"}
                  className="bg-white/10 p-2.5 rounded-full hover:bg-gradient-to-r hover:from-[#19a6b5] hover:to-[#E2004F] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#19a6b5] via-[#E2004F] to-[#FF7A00] rounded-full mt-3" />
          </div>

          {/* === Column 2: Quick Links === */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#FF7A00] uppercase tracking-wide">
              {t("footer.quickLinksTitle")}
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {quickLinks.map((q) => (
                <li
                  key={q.label}
                  onClick={() => navigate(q.path)}
                  className="hover:text-white transform transition-all duration-300 cursor-pointer"
                >
                  {q.label}
                </li>
              ))}
            </ul>
          </div>

          {/* === Column 3: Contact === */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#19a6b5] uppercase tracking-wide">
              {t("footer.contactTitle")}
            </h3>
            <ul className="text-gray-300 text-sm leading-relaxed space-y-2">
              <li>{contact.address}</li>
              <li>
                <span className="font-semibold text-white">{t("footer.emailLabel")}:</span>{" "}
                {contact.email}
              </li>
              <li>
                <span className="font-semibold text-white">{t("footer.phoneLabel")}:</span>{" "}
                {contact.phone}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-white/10 bg-[#0b2338] py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">{t("footer.companyName")}</span> | {t("footer.rights")}
      </div>
    </footer>
  );
}
