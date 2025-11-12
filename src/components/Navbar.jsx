import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/ivexiaa-logoo.png";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const [showLanguages, setShowLanguages] = useState(false);
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  // === Detect TopBar height dynamically ===
  useEffect(() => {
    const topBar = document.getElementById("topbar");
    if (topBar) {
      const updateHeight = () => setTopBarHeight(topBar.offsetHeight);
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  // === Track TopBar visibility ===
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        setIsTopBarVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsTopBarVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguages(false);
  };

  return (
    <nav
      className="fixed left-0 right-0 bg-white/95 backdrop-blur-md shadow-md border-t border-gray-200 z-30 transition-all duration-500 ease-in-out"
      style={{
        top: isTopBarVisible ? `${topBarHeight}px` : "0px",
        transition: "top 0.4s ease-in-out",
      }}
    >
      <div className="flex justify-between items-center px-4 md:px-8 h-16">
        {/* === Logo === */}
        <div className="flex items-center cursor-pointer" onClick={() => goTo("/")}>
          <img
            src={logo}
            alt="Ivexia Logo"
            className="w-auto h-[70px] md:h-[80px] object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* === Desktop Menu === */}
        <ul className=" italic hidden lg:flex gap-8 font-medium text-gray-800 items-center">
          <li onClick={() => goTo("/")} className="hover:text-[#0d2d47] cursor-pointer">Home</li>
          <li onClick={() => goTo("/api")} className="hover:text-[#0d2d47] cursor-pointer">Active Pharmaceutical Ingredients</li>
          <li className="relative group hover:text-[#0d2d47] cursor-pointer">
            <span>Pharmaceutical Products ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-56 font-normal">
              <li onClick={() => goTo("/products/cardiology")} className="px-4 py-2 hover:bg-gray-100">Cardiology</li>
              <li onClick={() => goTo("/products/oncology")} className="px-4 py-2 hover:bg-gray-100">Oncology</li>
              <li onClick={() => goTo("/products/diabetes")} className="px-4 py-2 hover:bg-gray-100">Diabetes</li>
              <li onClick={() => goTo("/products/neurology")} className="px-4 py-2 hover:bg-gray-100">Neurology</li>
            </ul>
          </li>
          <li onClick={() => goTo("/about")} className="hover:text-[#0d2d47] cursor-pointer">About Us</li>
          <li className="relative group hover:text-[#0d2d47] cursor-pointer">
            <span>Ivexia Magazine ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 font-normal">
              <li onClick={() => goTo("/magazine/news")} className="px-4 py-2 hover:bg-gray-100">News</li>
              <li onClick={() => goTo("/magazine/health")} className="px-4 py-2 hover:bg-gray-100">Health Magazine</li>
            </ul>
          </li>
          <li onClick={() => goTo("/contact")} className="hover:text-[#0d2d47] cursor-pointer">Contact Us</li>
        </ul>

        {/* === Right Side Icons === */}
        <div className="flex items-center gap-4 relative">
          <FaSearch
            className="cursor-pointer text-gray-600 hover:text-[#0d2d47] transition-transform duration-300 hover:scale-110"
            onClick={() => setShowSearch(!showSearch)}
          />

          {/* Language Selector */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-[#0d2d47]"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <FaGlobe className="transition-transform hover:scale-110" />
              <span className="text-sm">{language}</span>
            </div>

            {showLanguages && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md text-sm font-medium z-50">
                <li onClick={() => selectLanguage("English")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇬🇧 English</li>
                <li onClick={() => selectLanguage("हिन्दी")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇮🇳 हिन्दी</li>
                <li onClick={() => selectLanguage("Македонски")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇲🇰 Македонски</li>
                <li onClick={() => selectLanguage("Español")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇪🇸 Español</li>
              </ul>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FaTimes className="text-gray-700 text-xl cursor-pointer" onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars className="text-gray-700 text-xl cursor-pointer" onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* === Search Bar === */}
      {showSearch && (
        <div className="px-4 md:px-8 py-2 bg-gray-50 border-t border-gray-200 transition-all duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#0d2d47]"
          />
        </div>
      )}

      {/* === Mobile Menu === */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-4 bg-white shadow-md border-t border-gray-100 px-6 py-4 font-medium text-gray-800">
          <li onClick={() => goTo("/")} className="hover:text-[#0d2d47] cursor-pointer">Home</li>
          <li onClick={() => goTo("/api")} className="hover:text-[#0d2d47] cursor-pointer">Active Pharmaceutical Ingredients</li>
          <li onClick={() => goTo("/products")} className="hover:text-[#0d2d47] cursor-pointer">Pharmaceutical Products</li>
          <li onClick={() => goTo("/about")} className="hover:text-[#0d2d47] cursor-pointer">About Us</li>
          <li onClick={() => goTo("/magazine")} className="hover:text-[#0d2d47] cursor-pointer">Ivexia Magazine</li>
          <li onClick={() => goTo("/contact")} className="hover:text-[#0d2d47] cursor-pointer">Contact Us</li>
        </ul>
      )}
    </nav>
  );
}
