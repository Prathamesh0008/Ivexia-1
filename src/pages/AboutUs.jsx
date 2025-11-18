// src/pages/AboutUs.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LazyImage from "../components/LazyImage";
import factoryImg from "../assets/logo/ivexia-factory1.jpg"; // 🔹 NEW: Ivexia factory image

// =========================
// AUTO SCROLL COMPONENT
// =========================
function AutoScrollLabs() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 1; // scroll speed
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0; // loop back
        }
      }, 15);
    };

    if (!isHovered) startScroll();

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        flex 
        items-start
        gap-6 
        overflow-x-auto 
        pb-4 
        snap-x 
        snap-mandatory 
        scrollbar-hide 
        scroll-smooth
      "
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="
            min-w-[260px] 
            md:min-w-[350px] 
            snap-start 
            rounded-2xl 
            overflow-hidden
            shadow-lg 
            bg-white
            flex-shrink-0
          "
        >
          <LazyImage
            src={`https://source.unsplash.com/600x400/?laboratory,science,${i}`}
            className="w-full h-[180px] md:h-[230px] object-cover"
          />

          <div className="p-4 bg-white">
            <h3 className="font-semibold text-[#0d2d47]">Advanced Lab {i}</h3>
            <p className="text-gray-600 text-sm mt-1">
              Equipped with next-gen analytical instruments.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// =========================
// MAIN ABOUT US PAGE
// =========================
export default function AboutUs() {
  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* =======================
          1. HERO SECTION
      ======================= */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1479305023/video/closeup-research-and-hands-with-pipette-medical-and-health-with-breakthrough-cure-and.mp4?s=mp4-640x640-is&k=20&c=-K_N_NbZze7i9voLpX-1hBsbsZA_CEZ5vU8RbryyQ3w="
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d47]/70 via-[#E2004F]/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 
            bg-white/20 backdrop-blur-md rounded-2xl
            px-6 py-6 md:px-12 md:py-10 
            w-[90%] md:w-auto text-center shadow-2xl"
        >
          <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight">
            Advancing Global Care With Purpose
          </h1>
          <p className="mt-2 md:mt-4 text-gray-100 text-sm md:text-xl">
            Where scientific innovation meets uncompromised quality.
          </p>
        </motion.div>
      </section>

      {/* =======================
          2. BRAND STORY
      ======================= */}
      <section className="relative py-20 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* 🔹 Replaced with Ivexia factory image */}
            <LazyImage
              src={factoryImg}
              className="rounded-3xl shadow-2xl object-cover w-full h-[300px] md:h-[550px]"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] mb-6">
              A Legacy Built on Precision & Purpose
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              Ivexia Pharmaceuticals is a globally aligned healthcare company.
            </p>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              We transform scientific innovation into world-class therapeutic solutions.
            </p>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Our footprint spans India, Europe, and the MENA region.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          3. VISION + MISSION
      ======================= */}
      <section className="relative py-20 md:py-32 bg-[#0d2d47] text-white">
        <div className="absolute inset-x-0 -top-16 flex justify-center px-6">
          <div className="bg-white shadow-xl rounded-2xl px-6 md:px-12 py-6 md:py-8 text-center w-full md:w-auto">
            <h3 className="text-xl md:text-3xl font-bold text-[#0d2d47]">
              Driven by Science. Strengthened by Purpose.
            </h3>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 mt-20 md:mt-28">
          <motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF7A00]">
              Our Vision
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              To become a trusted global pharmaceutical force.
            </p>
          </motion.div>

          <motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#19a6b5]">
              Our Mission
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              To deliver products aligned with WHO-GMP, EU-GMP, ISO & PIC/S.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =======================
          4. GLOBAL OPERATIONS
      ======================= */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47]">
            Global Operations
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg mt-3">
            Integrated manufacturing, research & distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { place: "India", detail: "HQ & Manufacturing Hub" },
            { place: "North Macedonia", detail: "EU-Aligned Regulatory Operations" },
            { place: "Doha", detail: "MENA Distribution Center" },
          ].map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:-translate-y-3 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#E2004F]">
                {loc.place}
              </h3>
              <p className="mt-3 text-gray-600 text-base md:text-lg">
                {loc.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          5. EXPERTISE
      ======================= */}
      <section className="py-20 md:py-32 bg-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-16">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=900",
              title: "High-Precision Manufacturing",
            },
            {
              img: "https://images.unsplash.com/photo-1581091012184-7c54c3c50c82?q=80&w=900",
              title: "Research & Molecule Development",
            },
            {
              img: "https://images.unsplash.com/photo-1576765607935-3a83dfb1f3a2?q=80&w=900",
              title: "Global Quality Compliance",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="overflow-hidden shadow-xl group relative"
            >
              <LazyImage
                src={card.img}
                className="w-full h-[260px] md:h-[380px] object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-lg md:text-xl text-white font-semibold">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          6. LEADERSHIP
      ======================= */}
      <section className="py-32 bg-gray-50 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center text-[#0d2d47] mb-12">
          Leadership at Ivexia
        </h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
          {[21, 22, 23, 24].map((id, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/60 backdrop-blur-xl border border-gray-200 shadow-lg 
                p-6 w-[220px] text-center hover:shadow-xl transition"
            >
              <LazyImage
                src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                className="w-24 h-24 mx-auto object-cover mb-4 border-4 border-[#19a6b5]"
              />
              <h4 className="font-semibold text-[#0d2d47] text-lg">
                Leader {i + 1}
              </h4>
              <p className="text-xs text-gray-500">Department</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          7. TIMELINE
      ======================= */}
      <section className="py-20 md:py-32 bg-white px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-16">
          Our Journey Forward
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF7A00] via-[#E2004F] to-[#19a6b5] h-full"></div>

          {[
            { year: "2018", text: "Ivexia founded with a mission to elevate healthcare." },
            { year: "2020", text: "First multi-facility manufacturing expansion in India." },
            { year: "2023", text: "Advanced Nutraceutical R&D labs commissioned." },
            { year: "2025", text: "EU-aligned operations begin in North Macedonia." },
            { year: "2030", text: "Entry into global oncology & biotech production." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative mb-12 md:mb-20 p-6 md:w-1/2 ${
                i % 2 === 0 ? "md:ml-auto md:pr-10" : "md:mr-auto md:pl-10"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E2004F]">
                <h3 className="text-2xl font-bold text-[#0d2d47]">
                  {item.year}
                </h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          8. CERTIFICATIONS
      ======================= */}
      <section className="py-20 bg-[#f8fafc] px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-12">
          Certifications & Global Standards
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {["EU-GMP", "WHO-GMP", "ISO 9001", "ISO 14001", "PIC/S", "HACCP"].map(
            (text) => (
              <div
                key={text}
                className="px-6 py-4 bg-white shadow-md border border-gray-200 text-center text-sm md:text-base font-medium text-[#0d2d47]"
              >
                {text}
              </div>
            )
          )}
        </div>
      </section>

      {/* =======================
          9. BIG STATEMENT
      ======================= */}
      <section className="py-20 md:py-32 bg-[#0d2d47] text-white text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          “Innovation. Quality. Integrity.”
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
          Our promise reflects our commitment to ethical and world-class healthcare.
        </p>
      </section>

      {/* =======================
          10. PARALLAX FACILITIES
      ======================= */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581093502863-50b395c221e5?q=80&w=1500')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            State-of-the-Art Facilities
          </h2>
          <p className="text-gray-300 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            Designed to meet global standards of precision & compliance.
          </p>
        </div>
      </section>

      {/* =======================
          11. R&D LABS — AUTO SCROLL
      ======================= */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-10">
          Research & Development Labs
        </h2>

        <AutoScrollLabs />
      </section>

      {/* =======================
          12. SUSTAINABILITY
      ======================= */}
      <section className="py-20 md:py-28 bg-[#f0f9f7] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] mb-4">
              Sustainability at Ivexia
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
              Our facilities operate with ZLD, controlled emissions & renewable
              energy.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              We reduce carbon footprint through green chemistry & energy
              efficiency.
            </p>
          </motion.div>

          <LazyImage
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200"
            className="shadow-xl object-cover h-[260px] md:h-full"
          />
        </div>
      </section>

            {/* =======================
          13. GLOBAL MAP
      ======================= */}
      <section className="py-16 md:py-24 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] mb-8">
          Global Presence
        </h2>

        <div className="relative max-w-xl mx-auto">
          {/* 🔹 Smaller height, image contained */}
          <div className="relative w-full max-w-[420px] mx-auto h-[180px] md:h-[230px]">
            <LazyImage
              src="https://i.pinimg.com/736x/ce/bf/12/cebf123f0fa46097918c4cf297e96a20.jpg"
              className="w-full h-full object-contain opacity-90"
            />

            {/* Pulsing markers – kept but inside same box */}
            <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-[#E2004F] rounded-full animate-pulse"></div>
            <div className="absolute top-[42%] left-[47%] w-3 h-3 bg-[#19a6b5] rounded-full animate-pulse"></div>
            <div className="absolute top-[55%] left-[52%] w-3 h-3 bg-[#FF7A00] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>


      {/* =======================
          14. AWARDS
      ======================= */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-12">
          Awards & Recognition
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white shadow-lg p-6 text-center">
              <LazyImage
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                className="w-14 mx-auto mb-4"
              />
              <h4 className="font-semibold text-[#0d2d47]">
                Excellence Award {i}
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                Recognized for innovation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =======================
          15. CTA
      ======================= */}
      <section className="py-20 md:py-28 bg-[#0d2d47] text-center text-white px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          Join Our Global Mission
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Be part of a future where science, innovation & humanity come together.
        </p>
        <button className="mt-8 bg-white text-[#0d2d47] px-8 py-3 font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
