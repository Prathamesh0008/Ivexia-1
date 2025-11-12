export default function AboutVideo() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {/* === Background Video === */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://media.istockphoto.com/id/2177598227/video/young-ethnic-male-scientist-working-in-laboratory.mp4?s=mp4-640x640-is&k=20&c=a5Lcz9T_kwa71NzxltuOllEahyFefYydLbe3uSNaGC0="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* === Transparent Color Overlay (Soft Gradient Tint) === */}
      <div className="absolute inset-0 bg-blue-800/60 mix-blend-overlay"></div>

      {/* === Text Overlay === */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white backdrop-blur-[1px]">
        <div className="bg-white/20 p-4 border-none rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
          Your Health is Our Future
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-[#FF7A00] to-[#E2004F] bg-clip-text text-transparent drop-shadow">
          Ivexia Pharmaceuticals Pvt. Ltd.
        </h2>
        <p className="max-w-xl text-sm md:text-lg mb-6 text-black font-bold leading-relaxed">
          At Ivexia, we are driven by a singular mission — to deliver precision,
          purity, and progress in every product. Our commitment to healthcare
          innovation ensures a brighter, healthier tomorrow for communities
          worldwide.
        </p>
        <button className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all shadow-lg">
          Read More
        </button>
        </div>
      </div>
    </section>
  );
}
