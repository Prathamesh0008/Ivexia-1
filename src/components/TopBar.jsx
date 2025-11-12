import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        // hide when scrolling down past 100px
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        // show again when scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#0d2d47] text-white text-sm flex justify-between items-center px-6 py-2 transition-all duration-500 fixed top-0 left-0 right-0 z-40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <p className="italic">“Precision. Purity. Progress.”</p>

      <div className="flex gap-4 text-white">
        <a href="#" className="hover:text-blue-300">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-blue-300">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-300">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}
