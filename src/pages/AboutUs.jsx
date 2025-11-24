// src/pages/AboutUs.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LazyImage from "../components/LazyImage";
import factoryImg from "../assets/logo/ivexia-factory1.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// =========================
// AUTO SCROLL COMPONENT
// =========================
function AutoScrollLabs() {
  const { t } = useTranslation();
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
            <h3 className="font-semibold text-[#0d2d47]">
              {t("aboutPage.labs.cardTitle", { index: i })}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {t("aboutPage.labs.cardText")}
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
  const { t } = useTranslation();

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
            {t("aboutPage.hero.title")}
          </h1>
          <p className="mt-2 md:mt-4 text-gray-100 text-sm md:text-xl">
            {t("aboutPage.hero.subtitle")}
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
            <LazyImage
              src={factoryImg}
              className="rounded-3xl shadow-2xl object-cover w-full h-[300px] md:h-[550px]"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] mb-6">
              {t("aboutPage.brand.heading")}
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              {t("aboutPage.brand.p1")}
            </p>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              {t("aboutPage.brand.p2")}
            </p>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {t("aboutPage.brand.p3")}
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
              {t("aboutPage.vision.banner")}
            </h3>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 mt-20 md:mt-28">
          <motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF7A00]">
              {t("aboutPage.vision.visionTitle")}
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {t("aboutPage.vision.visionText")}
            </p>
          </motion.div>

          <motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#19a6b5]">
              {t("aboutPage.vision.missionTitle")}
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {t("aboutPage.vision.missionText")}
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
            {t("aboutPage.global.title")}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg mt-3">
            {t("aboutPage.global.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[{
            place: t("aboutPage.global.indiaTitle"),
            detail: t("aboutPage.global.indiaText"),
          },{
            place: t("aboutPage.global.macedoniaTitle"),
            detail: t("aboutPage.global.macedoniaText"),
          },{
            place: t("aboutPage.global.dohaTitle"),
            detail: t("aboutPage.global.dohaText"),
          }].map((loc, i) => (
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
          {t("aboutPage.expertise.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[{ key: "card1Title", img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=900" },
            { key: "card2Title", img: "https://images.unsplash.com/photo-1581091012184-7c54c3c50c82?q=80&w=900" },
            { key: "card3Title", img: "https://images.unsplash.com/photo-1576765607935-3a83dfb1f3a2?q=80&w=900" }].map((card, i) => (
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
                  {t(`aboutPage.expertise.${card.key}`)}
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
          {t("aboutPage.leadership.title")}
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
                {t("aboutPage.leadership.cardName", { index: i + 1 })}
              </h4>
              <p className="text-xs text-gray-500">
                {t("aboutPage.leadership.cardDept")}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          7. TIMELINE
      ======================= */}
      <section className="py-20 md:py-32 bg-white px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-16">
          {t("aboutPage.timeline.title")}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF7A00] via-[#E2004F] to-[#19a6b5] h-full"></div>

          {["2018", "2020", "2023", "2025", "2030"].map((year, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative mb-12 md:mb-20 p-6 md:w-1/2 ${
                i % 2 === 0 ? "md:ml-auto md:pr-10" : "md:mr-auto md:pl-10"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E2004F]">
                <h3 className="text-2xl font-bold text-[#0d2d47]">
                  {year}
                </h3>
                <p className="text-gray-600 mt-2">
                  {t(`aboutPage.timeline.items.${year}`)}
                </p>
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
          {t("aboutPage.certifications.title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {t("aboutPage.certifications.items", { returnObjects: true }).map(
            (text, idx) => (
              <div
                key={idx}
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
          {t("aboutPage.statement.quote")}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
          {t("aboutPage.statement.text")}
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
            {t("aboutPage.facilities.title")}
          </h2>
          <p className="text-gray-300 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            {t("aboutPage.facilities.text")}
          </p>
        </div>
      </section>

      {/* =======================
          11. R&D LABS — AUTO SCROLL
      ======================= */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-10">
          {t("aboutPage.labs.title")}
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
              {t("aboutPage.sustainability.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
              {t("aboutPage.sustainability.p1")}
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {t("aboutPage.sustainability.p2")}
            </p>
          </motion.div>

          <LazyImage
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200"
            className="shadow-xl object-cover h-[260px] md:h-full"
          />
        </div>
      </section>

      {/* =======================
          13. GLOBAL PRESENCE
      ======================= */}
      <section className="py-32 md:py-44 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] mb-12">
          {t("aboutPage.globalPresence.title")}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center">
            <div className="relative w-[60%] md:w-[50%] flex justify-center items-center">
              <LazyImage
                src="https://i.pinimg.com/736x/ce/bf/12/cebf123f0fa46097918c4cf297e96a20.jpg"
                className="w-full h-auto object-contain opacity-90 mx-auto"
              />

              <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                w-3 h-3 bg-[#E2004F] rounded-full animate-pulse"></div>

              <div className="absolute top-[42%] left-[47%] transform -translate-x-1/2 -translate-y-1/2
                w-3 h-3 bg-[#19a6b5] rounded-full animate-pulse"></div>

              <div className="absolute top-[55%] left-[52%] transform -translate-x-1/2 -translate-y-1/2
                w-3 h-3 bg-[#FF7A00] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          14. AWARDS
      ======================= */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-12">
          {t("aboutPage.awards.title")}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white shadow-lg p-6 text-center">
              <LazyImage
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                className="w-14 mx-auto mb-4"
              />
              <h4 className="font-semibold text-[#0d2d47]">
                {t("aboutPage.awards.cardTitle", { index: i })}
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                {t("aboutPage.awards.cardText")}
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
          {t("aboutPage.cta.title")}
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          {t("aboutPage.cta.text")}
        </p>

        <Link
          to="/contact"
          onClick={(e) => {
            if (e.ctrlKey || e.metaKey) {
              e.preventDefault();
              window.open("/contact", "_blank", "noopener,noreferrer");
              return;
            }
          }}
          className="inline-block mt-8 bg-white text-[#0d2d47] px-8 py-3 font-semibold hover:bg-gray-200 transition"
        >
          {t("aboutPage.cta.button")}
        </Link>
      </section>
    </div>
  );
}
