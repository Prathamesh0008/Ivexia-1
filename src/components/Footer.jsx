import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo/ivexia-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0d2d47] text-white pt-10">
      {/* === Top Accent Line === */}
      <div className="w-full h-1 bg-gradient-to-r from-[#FF7A00] via-[#E2004F] to-[#19a6b5]" />

      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* === Column 1: Logo & Socials === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Ivexia Logo"
              className="w-[220px] sm:w-[280px] md:w-[320px] h-auto object-contain mb-5"
              style={{ maxHeight: "120px" }}
            />
          </div>

          <p className="text-gray-300 text-sm mb-5 max-w-sm leading-relaxed">
            Precision. Purity. Progress.<br />
            Advancing global healthcare with innovation, quality, and integrity.
          </p>

          <div className="flex gap-4 justify-center md:justify-start text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-[#19a6b5] transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#19a6b5] transition">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#19a6b5] transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#19a6b5] transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* === Column 2: Quick Links === */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF7A00]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Home", "About Us", "Pharmaceutical Products", "Ivexia Magazine", "Contact Us"].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* === Column 3: Our Divisions === */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#E2004F]">Our Divisions</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Active Pharmaceutical Ingredients",
              "Pharmaceuticals",
              "Nutraceuticals",
              "Biotech"
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* === Column 4: Contact === */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#19a6b5]">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            <li>
              Office No. 2, 1st Floor, Palm Beach Arcade,<br />
              Sector 4, Nerul West, Navi Mumbai – 400706
            </li>
            <li>
              <span className="font-semibold">Email:</span> info@ivexiapharma.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +91 87674 65480
            </li>
          </ul>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm bg-[#0b2338]">
        © {new Date().getFullYear()} Ivexia Pharmaceuticals Pvt. Ltd. | All Rights Reserved.
      </div>
    </footer>
  );
}
