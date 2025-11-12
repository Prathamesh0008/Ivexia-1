import { useState } from "react";
import { FaSearch, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/ivexia-logo.png";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-t border-gray-200 w-full fixed top-[40px] z-30 transition-all">
      <div className="flex justify-between items-center px-4 md:px-8 h-16">
  {/* === Logo Section === */}
  <div className="flex items-center h-full">
    <img
      src={logo}
      alt="Ivexia Logo"
      className="w-[250px] h-auto"

    />
  </div>

  {/* === Desktop Menu === */}
  <ul className="hidden lg:flex gap-8 font-medium text-gray-800 items-center h-full">
    <li className="hover:text-[#0d2d47] cursor-pointer">Home</li>
    <li className="hover:text-[#0d2d47] cursor-pointer">Active Pharmaceutical Ingredients</li>

    <li className="hover:text-[#0d2d47] cursor-pointer relative group">
      <span>Pharmaceutical Products ▾</span>
      <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-56">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cardiology</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Oncology</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Diabetes</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Neurology</li>
      </ul>
    </li>

    <li className="hover:text-[#0d2d47] cursor-pointer">About Us</li>

    <li className="hover:text-[#0d2d47] cursor-pointer relative group">
      <span>Ivexia Magazine ▾</span>
      <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">News</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Health Magazine</li>
      </ul>
    </li>

    <li className="hover:text-[#0d2d47] cursor-pointer">Contact Us</li>
  </ul>

  {/* === Right Side Icons === */}
  <div className="flex items-center gap-4">
    <FaSearch
      className="cursor-pointer text-gray-600 hover:text-[#0d2d47]"
      onClick={() => setShowSearch(!showSearch)}
    />
    <FaGlobe className="cursor-pointer text-gray-600 hover:text-[#0d2d47]" />

    {/* Mobile Menu Icon */}
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

      {/* === Search Bar === */}
      {showSearch && (
        <div className="px-4 md:px-8 py-2 bg-gray-50 border-t border-gray-200">
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
          <li className="hover:text-[#0d2d47] cursor-pointer">Home</li>
          <li className="hover:text-[#0d2d47] cursor-pointer">Active Pharmaceutical Ingredients</li>
          <li className="hover:text-[#0d2d47] cursor-pointer">Pharmaceutical Products</li>
          <li className="hover:text-[#0d2d47] cursor-pointer">About Us</li>
          <li className="hover:text-[#0d2d47] cursor-pointer">Ivexia Magazine</li>
          <li className="hover:text-[#0d2d47] cursor-pointer">Contact Us</li>
        </ul>
      )}
    </nav>
  );
}
