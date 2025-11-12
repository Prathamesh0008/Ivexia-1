import { useState, useEffect, useRef } from "react";

export default function Hero() {
  // Temporary slides with gradient backgrounds
  const banners = [
    { id: 1, color: "from-[#FF7A00] to-[#E2004F]", title: "Precision. Purity. Progress.", text: "Delivering world-class pharmaceutical solutions." },
    { id: 2, color: "from-[#0d2d47] to-[#19a6b5]", title: "Innovation in Every Dose", text: "Committed to healthcare excellence and innovation." },
    { id: 3, color: "from-[#E2004F] to-[#FF7A00]", title: "Global Standards, Local Trust", text: "Ensuring quality, compliance, and care worldwide." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide every 4s
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, banners.length]);

  // Swipe for mobile
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50)
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    if (touchEndX.current - touchStartX.current > 50)
      setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section
      className="relative w-full h-[70vh] md:h-[55vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {banners.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Gradient Background */}
          <div
            className={`w-full h-full bg-gradient-to-r ${slide.color} flex flex-col justify-center items-start px-6 sm:px-10 md:px-20`}
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-gray-100 max-w-xl text-sm sm:text-base md:text-lg mb-6">
              {slide.text}
            </p>
            <button className="bg-white text-[#E2004F] px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
              Explore Ivexia
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
        }
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-black rounded-full w-10 h-10 items-center justify-center backdrop-blur-sm text-2xl font-bold"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-black rounded-full w-10 h-10 items-center justify-center backdrop-blur-sm text-2xl font-bold"
      >
        ›
      </button>
    </section>
  );
}
