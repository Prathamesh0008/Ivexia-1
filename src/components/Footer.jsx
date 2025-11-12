import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo/ivexia-logoooo.png";

export default function Footer() {
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
            {/* Logo with subtle glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#19a6b5]/40 to-[#FF7A00]/30 blur-lg rounded-full" />
              <img
                src={logo}
                alt="Ivexia Logo"
                className="relative w-[12vh] md:w-[22vh] h-auto object-contain mx-auto md:mx-0 drop-shadow-lg"
              />
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
              <span className="font-semibold text-white">
                Ivexia Pharmaceuticals Pvt. Ltd.
              </span>
              <br />
              Precision. Purity. Progress.
              <br />
              Advancing global healthcare through innovation, quality, and integrity.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-gradient-to-r hover:from-[#19a6b5] hover:to-[#E2004F] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Decorative mini line */}
            <div className="w-20 h-[2px] bg-gradient-to-r from-[#19a6b5] via-[#E2004F] to-[#FF7A00] rounded-full mt-3" />
          </div>

          {/* === Column 2: Quick Links === */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#FF7A00] uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {["Home", "About Us", "Pharmaceutical Products", "Ivexia Magazine", "Contact Us"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white hover:translate-x-1 transform transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* === Column 3: Contact === */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#19a6b5] uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="text-gray-300 text-sm leading-relaxed space-y-2">
              <li>
                Office No. 2, 1st Floor, Palm Beach Arcade,<br />
                Sector 4, Nerul West, Navi Mumbai – 400706
              </li>
              <li>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@ivexiapharma.com
              </li>
              <li>
                <span className="font-semibold text-white">Phone:</span>{" "}
                +91 87674 65480
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-white/10 bg-[#0b2338] py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">Ivexia Pharmaceuticals Pvt. Ltd.</span> | All Rights Reserved
      </div>
    </footer>
  );
}
