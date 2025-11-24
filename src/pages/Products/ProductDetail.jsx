// src/pages/Products/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import INGREDIENTS from "../../data/ingredients";
import capsuleImg from "../../assets/logo/capsuleimage.jpg";

export default function ProductDetail() {
  const { t } = useTranslation("common");
  const { slug } = useParams();

  const product = INGREDIENTS.find((p) => p.slug === slug);

  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // If product not found
  if (!product) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-[#0d2d47]">
          {t("productDetail.notFoundTitle")}
        </h1>

        <p className="mt-2 text-gray-600">
          {t("productDetail.notFoundText")}
        </p>

        <Link
          to="/products/ingredient"
          className="mt-6 inline-block px-4 py-2 rounded-lg border border-[#0d2d47] text-[#0d2d47] hover:bg-[#0d2d47] hover:text-white transition"
        >
          {t("productDetail.backToApis")}
        </Link>
      </section>
    );
  }

  const imgSrc = product.image || capsuleImg;

  // Suggested products
  const others = INGREDIENTS.filter((p) => p.slug !== product.slug);
  const diffCategory = others.filter((p) => p.categoryKey !== product.categoryKey);

  let suggested = diffCategory.slice(0, 4);

  if (suggested.length < 4) {
    const remaining = others.filter(
      (p) => !suggested.some((sug) => sug.slug === p.slug)
    );
    suggested = [...suggested, ...remaining].slice(0, 4);
  }

  const normalizedSpecs =
    product.specs?.map((s) =>
      typeof s === "string"
        ? {
            label: s.split(":")[0] || "Spec",
            value: s.split(":").slice(1).join(":").trim(),
          }
        : s
    ) || [];

  return (
    <>
      {/* MAIN PRODUCT SECTION */}
      <section className="bg-white pt-12 md:pt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <div className="bg-[#FFF8F5] shadow-sm border border-gray-100 px-5 md:px-8 py-8 md:py-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
              
              {/* PRODUCT IMAGE */}
              <div className="flex items-center justify-center">
                <img
                  src={imgSrc}
                  alt={t(product.nameKey)}
                  className="w-full max-h-[260px] object-contain"
                />
              </div>

              {/* PRODUCT INFO */}
              <div>
                {/* PRODUCT NAME (translated) */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2d47]">
                  {t(product.nameKey)}
                </h1>

                {/* CAS */}
                {product.cas && (
                  <p className="mt-2 text-xs md:text-sm text-gray-500">
                    {t("productDetail.cas")}: {product.cas}
                  </p>
                )}

                {/* CATEGORY (translated) & badges */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-[#0d2d47] text-white">
                    {t(product.categoryKey)}
                  </span>

                  {product.badges?.length
                    ? product.badges.map((b) => (
                        <span
                          key={b}
                          className="text-[10px] uppercase tracking-wide font-semibold px-2 py-1 rounded bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white"
                        >
                          {b}
                        </span>
                      ))
                    : null}
                </div>

                {/* DESCRIPTION */}
                <div className="mt-5 space-y-3 text-sm md:text-[15px] text-gray-700">

                  {product.descKey && (
                    <p>{t(product.descKey)}</p>
                  )}

                  <p>{t("productDetail.descriptionLine1")}</p>

                  <p>
                    {t("productDetail.descriptionLine2", {
                      category: t(product.categoryKey),
                    })}
                  </p>
                </div>

                {/* SYNONYMS */}
                {product.synonyms?.length > 0 && (
                  <>
                    <h3 className="mt-4 text-sm font-semibold text-[#0d2d47]">
                      {t("productDetail.synonyms")}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {product.synonyms.join(", ")}
                    </p>
                  </>
                )}

                {/* DOSAGE FORMS */}
                <h3 className="mt-4 text-sm font-semibold text-[#0d2d47]">
                  {t("productDetail.dosageForms")}
                </h3>

                <div className="mt-1 flex flex-wrap gap-2">
                  {product.dosageKeys?.map((key) => (
                    <span
                      key={key}
                      className="text-xs px-2 py-1 rounded-full border border-gray-200 bg-white"
                    >
                      {t(key)}
                    </span>
                  ))}
                </div>

                {/* REQUEST QUOTE BUTTON */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(true)}
                    className="
                      inline-flex items-center justify-center 
                      px-5 py-2.5 
                      rounded-lg text-white text-sm 
                      bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
                      shadow-md hover:opacity-90 transition
                    "
                  >
                    {t("productDetail.requestQuote")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUGGESTED PRODUCTS */}
      {suggested.length > 0 && (
        <section className="bg-[#FFF8F5] mt-10">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="text-center mb-8">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0d2d47]/70">
                {t("productDetail.suggestedExplore")}
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mt-1">
                {t("productDetail.suggestedTitle")}
              </h2>

              <p className="text-xs md:text-sm text-gray-700 mt-2">
                {t("productDetail.suggestedSubtitle")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              {suggested.map((p) => (
                <Link
                  key={p.id}
                  to={`/portfolio/${p.slug}`}
                  className="
                    w-[210px] md:w-[230px] 
                    min-h-[260px] md:min-h-[280px]
                    flex flex-col items-center
                    rounded-2xl border border-[#0d2d47]/10 bg-white
                    shadow-sm hover:shadow-md hover:-translate-y-1
                    transition
                  "
                >
                  <div className="w-full px-5 pt-5 pb-4 flex justify-center">
                    <img
                      src={p.image || capsuleImg}
                      alt={t(p.nameKey)}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-center text-center flex-1 px-4 pb-4">
                    <h3 className="text-sm font-semibold text-[#0d2d47] leading-snug">
                      {t(p.nameKey)}
                    </h3>

                    {p.cas && (
                      <p className="text-[11px] text-gray-500 mt-1">
                        {t("productDetail.cas")}: {p.cas}
                      </p>
                    )}

                    <span className="inline-flex mt-2 items-center rounded-full px-3 py-0.5 text-[11px] font-medium bg-[#0d2d47]/6 text-[#0d2d47]">
                      {t(p.categoryKey)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUOTE REQUEST MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">

            {/* MODAL HEADER */}
            <div className="bg-gradient-to-r from-[#0d2d47] to-[#19a6b5] px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg">
                  {t("productDetail.modalTitle")}
                </h3>
                <p className="text-xs text-white/80 mt-0.5">
                  {t(product.nameKey)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowQuoteModal(false)}
                className="text-white text-xl leading-none px-2 hover:text-gray-200"
              >
                ×
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="px-6 py-5 space-y-4 bg-[#FFF8F5]">
              <p className="text-xs md:text-sm text-gray-700">
                {t("productDetail.modalInfo")}
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Quote request submitted!");
                  setShowQuoteModal(false);
                }}
              >
                {/* PRODUCT NAME */}
                <div>
                  <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                    {t("productDetail.modalSubtitle")}
                  </label>
                  <input
                    type="text"
                    value={t(product.nameKey)}
                    readOnly
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700"
                  />
                </div>

                {/* Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      {t("productDetail.fullName")}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      {t("productDetail.company")}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                {/* Email + Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      {t("productDetail.email")}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      {t("productDetail.country")}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                    {t("productDetail.message")}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm resize-none"
                    placeholder={t("productDetail.messagePlaceholder")}
                  />
                </div>

                {/* BUTTONS */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(false)}
                    className="px-4 py-2 rounded-full text-xs md:text-sm border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    {t("productDetail.cancel")}
                  </button>

                  <button
                    type="submit"
                    className="
                      px-5 py-2 rounded-full text-xs md:text-sm font-semibold
                      bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
                      text-white shadow-md hover:opacity-90
                    "
                  >
                    {t("productDetail.submit")}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
