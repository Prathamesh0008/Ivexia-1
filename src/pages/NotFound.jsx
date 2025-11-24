// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import errorImg from "../assets/logo/404error1.png"; // Ivexia 404 PNG illustration

export default function NotFound() {
  return (
    // === Page Container ===
    // Compact height, flex layout, centered vertically & horizontally
    // Soft peach background (#FFF8F5) to match Ivexia theme
    <div className="flex flex-col items-center justify-center bg-[#FFF8F5] px-6 py-12 min-h-[calc(100vh-64px)]">
      
      {/* === 404 Illustration Image === */}
      <img
        src={errorImg}                 
        alt="404 Error"                
        className="w-full max-w-[180px] mb-4 animate-fadeIn" // smaller image & reduced margin
      />

      {/* === Main Heading === */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#0d2d47] text-center mb-2">
        Oops! Page Not Found
      </h1>

      {/* === Description === */}
      <p className="text-base md:text-lg text-[#0d2d47] text-center mb-4 max-w-sm">
        The page you are looking for doesn’t exist or has been moved. Let’s get you back on track!
      </p>

      {/* === Back Home Button === */}
      <Link
        to="/"                         
        className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#FF7A00] to-[#E2004F] hover:opacity-90 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}
