import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);
  const topBarRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={topBarRef}
      id="topbar"
      className={`bg-gradient-to-r from-[#0d2d47] to-[#19a6b5] text-white text-sm flex justify-between items-center mb-0 px-6 py-2 transition-all duration-500 fixed top-0 left-0 right-0 z-40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <p className="italic font-light text-xs sm:text-sm">
        “Precision. Purity. Progress.” — Ivexia Pharmaceuticals
      </p>

      <div className="flex gap-3 sm:gap-4 text-white text-base sm:text-lg">
        <a href="#" className="hover:text-[#b2f5ea] transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-[#b2f5ea] transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-[#b2f5ea] transition">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}
