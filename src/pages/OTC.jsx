import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import heroImage from "../assets/logo/otchero.jpg";
import cardBG from "../assets/logo/otcimage.jpg";

export default function OTC() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  const sidebarItems = [
    { label: t("otcPage.sidebar.products"), link: "/products" },
    { label: t("otcPage.sidebar.overview"), link: "/offerings-overview" },
    { label: t("otcPage.sidebar.api"), link: "/products/ingredient" },
    { label: t("otcPage.sidebar.otc"), link: "/otc" },
  ];

  const otcCategories = [
    { title: t("otcPage.categories.pain"), desc: t("otcPage.categories.painDesc") },
    { title: t("otcPage.categories.allergy"), desc: t("otcPage.categories.allergyDesc") },
    { title: t("otcPage.categories.digestive"), desc: t("otcPage.categories.digestiveDesc") },
    { title: t("otcPage.categories.cold"), desc: t("otcPage.categories.coldDesc") },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative w-full h-[32vh] md:h-[60vh] overflow-hidden">
        <img src={heroImage} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">{t("otcPage.title")}</h1>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-3xl mx-auto">
              {t("otcPage.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">

        <div>
          <p className="text-gray-700 mb-6">{t("otcPage.desc1")}</p>
          <p className="text-gray-700 mb-10">{t("otcPage.desc2")}</p>

          {/* Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0d2d47] mb-3">{t("otcPage.features.science")}</h3>
              <p className="text-gray-600 text-sm">{t("otcPage.features.scienceDesc")}</p>
            </div>

            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0d2d47] mb-3">{t("otcPage.features.quality")}</h3>
              <p className="text-gray-600 text-sm">{t("otcPage.features.qualityDesc")}</p>
            </div>

            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0d2d47] mb-3">{t("otcPage.features.wellness")}</h3>
              <p className="text-gray-600 text-sm">{t("otcPage.features.wellnessDesc")}</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            {t("otcPage.categoriesTitle")}
          </h2>

          <div className="grid gap-10 sm:grid-cols-2">
            {otcCategories.map((cat, index) => (
              <div key={index} className="relative rounded-2xl h-64 overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-cover bg-center blur-[2px] brightness-75" style={{ backgroundImage: `url(${cardBG})` }} />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="font-semibold text-xl">{cat.title}</h3>
                  <p className="text-sm opacity-95 mt-1">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="relative">
          <div className="sticky top-24">

            <h3 className="text-xl font-semibold text-[#0d2d47] mb-3">
              {t("otcPage.sidebarTitle")}
            </h3>

            <div className="flex flex-col gap-3">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.link)}
                  className="text-left w-full px-4 py-3 rounded-md bg-[#0097b8] text-white hover:bg-[#0d2d47]"
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}
