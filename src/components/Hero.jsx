import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const banners = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/38/d4/10/38d4101d5771836ae8624e463696b4c9.jpg",
      color: "from-[#FF7A00]/70 to-[#E2004F]/70",
      title: "Precision. Purity. Progress.",
      text: "Delivering world-class pharmaceutical solutions."
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/9e/30/12/9e30127d086fd974c7e1b06832d4bb90.jpg",
      color: "from-[#0d2d47]/70 to-[#19a6b5]/70",
      title: "Innovation in Every Dose",
      text: "Committed to healthcare excellence and innovation."
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/2d/2d/85/2d2d85fb196588c54f7a60285511dec6.jpg",
      color: "from-[#E2004F]/70 to-[#FF7A00]/70",
      title: "Global Standards, Local Trust",
      text: "Ensuring quality, compliance, and care worldwide."
    },
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

  // Swipe gestures (mobile)
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
      className="relative w-full h-[70vh] md:h-[50vh] overflow-hidden"
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
          {/* Background Image + Overlay */}
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.color}`}
            ></div>
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-20">
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
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
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

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
        }
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-black rounded-full w-10 h-10 items-center justify-center backdrop-blur-sm text-2xl font-bold z-30"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-black rounded-full w-10 h-10 items-center justify-center backdrop-blur-sm text-2xl font-bold z-30"
      >
        ›
      </button>
    </section>
  );
}
