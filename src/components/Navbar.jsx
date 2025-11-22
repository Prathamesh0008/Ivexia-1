// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo/ivexiaa-logoo.png";
import FINISHED_PRODUCTS from "../data/finishedProducts"; // ✅ import products

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const [showLanguages, setShowLanguages] = useState(false);

  // search text
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");

  const [language, setLanguage] = useState("English");

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "nl", label: "Dutch", flag: "🇳🇱" },
    { code: "es", label: "Spanish", flag: "🇪🇸" },
    { code: "de", label: "German", flag: "🇩🇪" },
    { code: "pt", label: "Portuguese", flag: "🇵🇹" },
    { code: "fr", label: "French", flag: "🇫🇷" },
    { code: "zh", label: "Chinese", flag: "🇨🇳" },
    { code: "ja", label: "Japanese", flag: "🇯🇵" },
    { code: "ar", label: "Arabic", flag: "🇸🇦" },
  ];

  // ✅ Unique categories from FINISHED_PRODUCTS
  const productCategories = Array.from(
    new Set(FINISHED_PRODUCTS.map((p) => p.category).filter(Boolean))
  );

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

  const selectLanguage = (langCode, label) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("lang", langCode);
    setLanguage(label);
    setShowLanguages(false);
  };

  // 🔎 SEARCH HANDLER – goes to /search?q=...
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    if (!q) return;

    navigate(`/search?q=${encodeURIComponent(q)}`);
    setShowSearch(false);
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed left-0 right-0 bg-white/95 backdrop-blur-md shadow-md border-t border-gray-200 z-30 transition-all duration-500 ease-in-out"
      style={{ top: isTopBarVisible ? `${topBarHeight}px` : "0px" }}
    >
      <div className="flex justify-between items-center px-4 md:px-8 h-16">
        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => goTo("/")}
        >
          <img
            src={logo}
            alt="Ivexia Logo"
            className="w-auto h-[70px] md:h-[80px] object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="italic hidden lg:flex gap-8 font-bold text-gray-800 items-center">

          <li
            onClick={() => goTo("/")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.home")}
          </li>

          <li
            onClick={() => goTo("/products/ingredient")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.api")}
          </li>

          {/* PHARMACEUTICAL PRODUCTS DROPDOWN */}
          <li className="relative group hover:text-[#0d2d47] cursor-pointer">
            {/* Button / label */}
            <span
              onClick={() => goTo("/products")}
              className="inline-flex items-center gap-1"
            >
              {t("nav.products")} ▾
            </span>

            {/* Dropdown menu – REAL categories + FORCED vertical scroll */}
            <ul
              className="
                absolute right-0 mt-2 
                bg-white shadow-md rounded-md w-64 font-normal z-40
                opacity-0 translate-y-1 pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-150
              "
              style={{
                maxHeight: "250px",    // limit height
                overflowY: "scroll",   // force vertical scrollbar
                overflowX: "hidden",
              }}
            >
              <li
                onClick={() => goTo("/products")}
                className="px-4 py-2 hover:bg-gray-100 text-sm"
              >
                All Products
              </li>

              {productCategories.map((cat) => (
                <li
                  key={cat}
                  onClick={() =>
                    goTo(`/products?category=${encodeURIComponent(cat)}`)
                  }
                  className="px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </li>

          <li
            onClick={() => goTo("/about")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.about")}
          </li>

          {/* IVEXIA MAGAZINE DROPDOWN */}
          <li className="relative group hover:text-[#0d2d47] cursor-pointer">
            <span
              onClick={() => goTo("/ivexia-mag")}
              className="inline-flex items-center gap-1"
            >
              {t("nav.mag")} ▾
            </span>

            <ul
              className="
                absolute right-0 mt-2 
                bg-white shadow-md rounded-md w-56 font-normal z-40
                opacity-0 translate-y-1 pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-150
              "
            >
              <li
                onClick={() => goTo("/ivexia-mag?category=news")}
                className="px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {t("nav.mag_news")}
              </li>
              <li
                onClick={() => goTo("/ivexia-mag?category=health")}
                className="px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {t("nav.mag_health")}
              </li>
            </ul>
          </li>

          <li
            onClick={() => goTo("/contact")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.contact")}
          </li>
        </ul>

        {/* RIGHT SIDE: SEARCH + LANGUAGE + MOBILE TOGGLE */}
        <div className="flex items-center gap-4 relative">
          <FaSearch
            className="cursor-pointer text-gray-600 hover:text-[#0d2d47]"
            onClick={() => setShowSearch((s) => !s)}
          />

          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-[#0d2d47]"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <FaGlobe />
              <span className="text-sm">{language}</span>
            </div>
            {showLanguages && (
              <ul className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-md text-sm font-medium z-50">
                {languages.map((lng) => (
                  <li
                    key={lng.code}
                    onClick={() => selectLanguage(lng.code, lng.label)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <span>{lng.flag}</span>
                    <span>{lng.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* MOBILE MENU ICON */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FaTimes
                className="text-gray-700 text-xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-gray-700 text-xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* SEARCH BAR (WORKING) */}
      {showSearch && (
        <div className="px-4 md:px-8 py-2 bg-gray-50 border-t border-gray-200">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t("search.placeholder")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#0d2d47]"
            />
          </form>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-4 bg-white shadow-md border-t border-gray-100 px-6 py-4 font-medium text-gray-800">
          <li
            onClick={() => goTo("/")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.home")}
          </li>
          <li
            onClick={() => goTo("/products/ingredient")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.api")}
          </li>
          <li
            onClick={() => goTo("/products")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.products")}
          </li>
          <li
            onClick={() => goTo("/about")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.about")}
          </li>
          <li
            onClick={() => goTo("/ivexia-mag")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.mag")}
          </li>
          <li
            onClick={() => goTo("/contact")}
            className="hover:text-[#0d2d47] cursor-pointer"
          >
            {t("nav.contact")}
          </li>
        </ul>
      )}
    </nav>
  );
}
