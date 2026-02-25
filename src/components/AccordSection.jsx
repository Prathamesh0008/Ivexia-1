//Ivexia-1\src\components\AccordSection.jsx
import { useTranslation } from "react-i18next";
import globe from "../assets/globe/globe.png";

export default function AccordSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-[#0d2d47] py-5 md:py-7 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
            {t("accord.title_line1")}
            <br />
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] bg-clip-text text-transparent">
              {t("accord.title_highlight")}
            </span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
            {t("accord.paragraph")}
          </p>

          <a
            href="/about"
            className="inline-block bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition"
          >
            {t("accord.cta")}
          </a>
        </div>

        {/* RIGHT GLOBE IMAGE */}
        <div className="flex justify-center">
          <img
            src={globe}
            alt="Ivexia Globe"
            className="w-[280px] sm:w-[350px] md:w-[460px] lg:w-[420px]"
          />
        </div>

      </div>
    </section>
  );
}
