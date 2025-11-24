import { useTranslation } from "react-i18next";
import globe from '../assets/globe/globe.png'

export default function AccordSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-[#0d2d47] h-180 py-20 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#eee7e7] leading-snug mb-5">
            {t("accord.title_line1")}
            <br />
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] bg-clip-text text-transparent">
              {t("accord.title_highlight")}
            </span>
          </h2>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
            {t("accord.paragraph")}
          </p>

          <a
            href="/about"
            onClick={(e) => {
              if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                window.open("/about", "_blank", "noopener,noreferrer");
              }
            }}
            className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            {t("accord.cta")}
          </a>
        </div>

        {/* RIGHT - GLOBE */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <div className="relative w-full flex justify-center">
            <div className="mx-auto w-[20vw] sm:w-[30vw] md:w-[500px] lg:w-[600px] xl:w-[750px] flex justify-center">

              <img
                src={globe}
                alt="globe"
                className="w-full h-full object-contain max-w-[600px] drop-shadow-2xl"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
