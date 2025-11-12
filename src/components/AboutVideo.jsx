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
          src="https://cdn.coverr.co/videos/coverr-lab-research-in-a-modern-laboratory-8562/1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* === Dark Overlay === */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* === Text Overlay === */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Your Health is Our Future
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-[#FF7A00] to-[#E2004F] bg-clip-text text-transparent">
          Ivexia Pharmaceuticals Pvt. Ltd.
        </h2>
        <p className="max-w-xl text-sm md:text-lg mb-6 text-gray-200 leading-relaxed">
          At Ivexia, we are driven by a singular mission — to deliver precision,
          purity, and progress in every product. Our commitment to healthcare
          innovation ensures a brighter, healthier tomorrow for communities
          worldwide.
        </p>
        <button className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
          Read More
        </button>
      </div>
    </section>
  );
}
