import { useState } from "react";

export default function LazyImage({ src, alt = "", className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">

      {/* === SPINNER LOADER === */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/60">
          <div className="w-10 h-10 border-4 border-[#19a6b5] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* === REAL IMAGE === */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
