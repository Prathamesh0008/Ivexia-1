// src/pages/Products/FinishedProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import fallbackImage from "../../assets/logo/medicineproduct.jpg";
import capsuleIcon from "../../assets/logo/capsule.svg";

// 🌍 IMPORT ALL LANGUAGE WISE PRODUCT FILES (same files as Products.jsx)
import EN from "../../data/finishedProducts.js";
import AR from "../../data/finishedProducts_ar.js";
import DE from "../../data/finishedProducts_de.js";
import ES from "../../data/finishedProducts_es.js";
import FR from "../../data/finishedProducts_fr.js";
import JA from "../../data/finishedProducts_ja.js";
import NL from "../../data/finishedProducts_nl.js";
import PT from "../../data/finishedProducts_pt.js";
import ZH from "../../data/finishedProducts_zh.js";

const LANGUAGE_MAP = {
  en: EN,
  ar: AR,
  de: DE,
  es: ES,
  fr: FR,
  ja: JA,
  nl: NL,
  pt: PT,
  zh: ZH,
};

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-md overflow-hidden border border-transparent bg-[#edf4ff] transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-4 md:px-5 py-3 text-left text-[#0d2d47] font-semibold transition-all duration-300 hover:bg-[#0d2d47] hover:text-white`}
      >
        <span className="text-sm md:text-base flex-1">{item.q}</span>
        <span className="ml-3 text-lg leading-none">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`px-4 md:px-5 text-sm md:text-[15px] text-gray-800 bg-white overflow-hidden transition-[max-height,opacity,padding] duration-400 ease-in-out ${
          isOpen ? "max-h-40 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FinishedProductDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();

  // detect language and pick appropriate product list (only for name/category/form/slug)
  const currentLang = i18n.language?.split("-")[0] || "en";
  const FINISHED_PRODUCTS = LANGUAGE_MAP[currentLang] || EN;

  // product info (localized list may only contain name/category/form)
  const productLocalized = FINISHED_PRODUCTS.find((p) => p.slug === slug);
  const productEn = EN.find((p) => p.slug === slug) || {};
  // Keep English as fallback for product-specific short fields
  const product = { ...productEn, ...(productLocalized || {}) };

  const [activeTab, setActiveTab] = useState("introduction");
  const [openImportant, setOpenImportant] = useState(null);
  const [openPrecaution, setOpenPrecaution] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // if product not found (slug unknown)
  if (!product || !product.slug) {
    return (
      <section className="bg-[#FFF8F5] min-h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47]">
            {t("products.notFoundTitle", "We couldn't find this product")}
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-700">
            {t(
              "products.notFoundText",
              "The product you're trying to open is not available in our finished pharmaceuticals yet."
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link
              to="/products"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#0d2d47] to-[#19a6b5] text-white hover:opacity-90 transition"
            >
              ← {t("products.backToProducts", "Back to Pharmaceutical Products")}
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold border border-[#0d2d47] text-[#0d2d47] hover:bg-[#0d2d47] hover:text-white transition"
            >
              {t("products.contact", "Contact Ivexia")}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // ---- IMPORTANT: get shared (same-for-all-products) text from i18n keys ----
  // these keys must be added to each locale (see sample JSON below)
  const introText = t(`productsCommon.introduction`, product.introduction || "");
  const indicationsText = t(`productsCommon.indications`, product.indications || "");
  const maintenanceText = t(`productsCommon.maintenance`, product.maintenance || "");
  const importantInfo = t(`productsCommon.importantInfo`, { returnObjects: true }) || product.importantInfo || [];
  const precautions = t(`productsCommon.precautions`, { returnObjects: true }) || product.precautions || [];
  const pharmacies = t(`productsCommon.pharmacies`, { returnObjects: true }) || product.pharmacies || [];

  const imgSrc = product.image || fallbackImage;

  return (
    <>
      {/* TOP HERO + TABS */}
      <section className="bg-[#FFF8F5] pt-12 md:pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-10 pb-12 md:pb-14">
          <div className="bg-white border border-gray-100 shadow-sm px-5 md:px-10 py-8 md:py-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
              <div className="flex justify-center">
                <img src={imgSrc} alt={product.name} className="w-full max-w-sm max-h-[320px] object-contain" />
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2d47]">{product.name}</h1>

                {product.shortTagline && <p className="mt-2 text-sm md:text-base text-gray-700">{product.shortTagline}</p>}

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.category && <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-[#0d2d47] text-white">{product.category}</span>}
                  {product.dosageForm && <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-[#19a6b5]/10 text-[#0d2d47] border border-[#19a6b5]/30">{product.dosageForm}</span>}
                  {product.strength && <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-[#FF7A00]/10 text-[#0d2d47] border border-[#FF7A00]/40">{product.strength}</span>}
                </div>

                <div className="mt-6 border-b border-gray-200 flex gap-6 text-sm md:text-base">
                  {[
                    { id: "introduction", label: t("productTabs.introduction", "Introduction") },
                    { id: "indications", label: t("productTabs.indications", "Indications") },
                    { id: "maintenance", label: t("productTabs.maintenance", "Maintenance") },
                  ].map((tab) => {
                    const active = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-2 -mb-px border-b-2 cursor-pointer ${
                          active ? "border-[#19a6b5] text-[#0d2d47] font-semibold" : "border-transparent text-gray-500 hover:text-[#0d2d47]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 text-sm md:text-[15px] text-gray-700 space-y-3">
                  {activeTab === "introduction" && <p>{introText}</p>}
                  {activeTab === "indications" && <p>{indicationsText}</p>}
                  {activeTab === "maintenance" && <p>{maintenanceText}</p>}
                </div>

                {product.dosageForm && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-[#0d2d47] mb-1">{t("productDetail.dosageForm", "Dosage Form")}</h3>
                    <p className="text-sm text-gray-700">{product.dosageForm}</p>
                  </div>
                )}

                <div className="mt-6">
                  <Link to="/contact" target="_blank" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white shadow-md hover:opacity-90">
                    {t("productDetail.requestQuote", "Request quote")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT INFORMATION */}
      <section className="bg-[#FFF8F5] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mb-6">{t("productDetail.importantInformation", "Important Information")}</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {(Array.isArray(importantInfo) ? importantInfo : []).map((item, idx) => (
              <AccordionItem key={idx} item={item} isOpen={openImportant === idx} onToggle={() => setOpenImportant(openImportant === idx ? null : idx)} />
            ))}
          </div>
        </div>
      </section>

      {/* PRECAUTIONS */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mb-6">{t("productDetail.precautionsHeading", "Precautions and Side Effects")}</h2>

            <div className="space-y-4">
              {(Array.isArray(precautions) ? precautions : []).map((item, idx) => (
                <AccordionItem key={idx} item={item} isOpen={openPrecaution === idx} onToggle={() => setOpenPrecaution(openPrecaution === idx ? null : idx)} />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img src={imgSrc} alt={product.name} className="w-full max-w-xs max-h-[260px] object-contain" />
          </div>
        </div>
      </section>

      {/* PHARMACIES */}
<section className="bg-[#FFF8F5] py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-6 md:px-16">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0d2d47] text-center mb-8">
      {t("productDetail.pharmaciesTitle", "List of Pharmacies")}
    </h2>

    {(() => {
      // real pharmacies list
      let list = Array.isArray(pharmacies) ? pharmacies : [];

      // ❗ if less than 6 → repeat items so always 6 visible
      while (list.length < 6 && list.length > 0) {
        list = [...list, ...list];
      }

      // now take only first 6
      const sixItems = list.slice(0, 6);

      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sixItems.map((ph, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 shadow-sm p-5 md:p-6 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <img src={capsuleIcon} alt="Capsule Icon" className="w-10 h-10 object-contain" />
              </div>

              <p className="font-semibold text-[#0d2d47] mb-2 text-sm md:text-base">
                {typeof ph === "string" ? ph : ph.name}
              </p>

              <button
                type="button"
                className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full border border-[#19a6b5] text-[#19a6b5] hover:bg-[#19a6b5] hover:text-white transition"
              >
                {t("productDetail.onlineShopping", "Online Shopping")}
              </button>
            </div>
          ))}
        </div>
      );
    })()}
  </div>
</section>


    </>
  );
}