import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Images
import heroImg from "../assets/logo/overview-hero.jpg";
import apiImg from "../assets/logo/overview-api.jpg";
import productsImg from "../assets/logo/overview-products.jpg";
import otcImg from "../assets/logo/overview-otc.jpg";
import magImg from "../assets/logo/overview-mag.jpg";
import companyImg from "../assets/logo/overview-company.jpg";

export default function OfferingsOverview() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  const sections = [
    {
      title: t("offerings.apiTitle"),
      desc: t("offerings.apiDesc"),
      img: apiImg,
      btn: t("offerings.apiBtn"),
      link: "/products/ingredient",
    },
    {
      title: t("offerings.productsTitle"),
      desc: t("offerings.productsDesc"),
      img: productsImg,
      btn: t("offerings.productsBtn"),
      link: "/products",
    },
    {
      title: t("offerings.otcTitle"),
      desc: t("offerings.otcDesc"),
      img: otcImg,
      btn: t("offerings.otcBtn"),
      link: "/otc",
    },
    {
      title: t("offerings.magTitle"),
      desc: t("offerings.magDesc"),
      img: magImg,
      btn: t("offerings.magBtn"),
      link: "/ivexia-mag",
    },
    {
      title: t("offerings.companyTitle"),
      desc: t("offerings.companyDesc"),
      img: companyImg,
      btn: t("offerings.companyBtn"),
      link: "/about",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative w-full h-[28vh] md:h-[55vh] overflow-hidden">
        <img src={heroImg} alt="Overview Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight drop-shadow-lg">
            {t("offerings.heroTitle")}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        <p className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-16">
          {t("offerings.intro")}
        </p>

        <div className="grid gap-16">
          {sections.map((s, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={s.img} alt={s.title} className="w-full h-72 md:h-80 object-cover hover:scale-105 transition duration-500" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d2d47]">{s.title}</h2>
                <p className="text-gray-600 text-base md:text-lg">{s.desc}</p>

                <button
                  onClick={() => navigate(s.link)}
                  className="mt-3 inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#FF7A00] to-[#E2004F] shadow-md"
                >
                  {s.btn}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
