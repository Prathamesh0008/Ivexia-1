//Ivexia-1\src\components\AboutVideo.jsx
import { useTranslation } from "react-i18next";
import aboutVideo from "../assets/logo/aboutvideo.mp4";
import { Link } from "react-router-dom";
export default function AboutVideo() {
  const { t } = useTranslation("common");

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
      <source src={aboutVideo} type="video/mp4" />
        {t("about.video.fallback")}
      </video>

      {/* === Transparent Color Overlay (Soft Gradient Tint) === */}
      <div className="absolute inset-0 bg-blue-800/60 mix-blend-overlay"></div>

      {/* === Text Overlay === */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white backdrop-blur-[1px]">
        <div className="bg-white/20 p-4 border-none rounded-2xl max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            {t("about.video.title")}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-[#FF7A00] to-[#E2004F] bg-clip-text text-transparent drop-shadow">
            {t("about.video.subtitle")}
          </h2>

          <p className="max-w-xl text-sm md:text-lg mb-6 text-black font-bold leading-relaxed">
            {t("about.video.paragraph")}
          </p>

     <Link
  to="/ivexia-mag"
  className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all shadow-lg inline-block"
>
  {t("about.video.cta")}
</Link>
        </div>
      </div>
    </section>
  );
}
