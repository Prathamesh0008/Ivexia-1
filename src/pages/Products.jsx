// src/pages/Products.jsx
import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import capsuleImage from "../assets/logo/medicineproduct.jpg";
import { useTranslation } from "react-i18next";

// 🌍 IMPORT ALL LANGUAGE WISE PRODUCT FILES
import EN from "../data/finishedProducts.js";
import AR from "../data/finishedProducts_ar.js";
import DE from "../data/finishedProducts_de.js";
import ES from "../data/finishedProducts_es.js";
import FR from "../data/finishedProducts_fr.js";
import JA from "../data/finishedProducts_ja.js";
import NL from "../data/finishedProducts_nl.js";
import PT from "../data/finishedProducts_pt.js";
import ZH from "../data/finishedProducts_zh.js";

// 🌍 MAP LANG → FILE
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

export default function Products() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // 🌍 Detect language, fallback to English
  const currentLang = i18n.language?.split("-")[0] || "en";

  // 🌍 Select correct product list based on language
  const PRODUCTS = LANGUAGE_MAP[currentLang] || EN;

  // ==========================
  //      FILTER STATES
  // ==========================
  // Use empty string "" as the 'All' sentinel value (safer across languages)
  const categoryOptions = useMemo(
    () => ["", ...Array.from(new Set(PRODUCTS.map((p) => p.category))).filter(Boolean)],
    [PRODUCTS]
  );
  const formOptions = useMemo(
    () => ["", ...Array.from(new Set(PRODUCTS.map((p) => p.form))).filter(Boolean)],
    [PRODUCTS]
  );
  const dosageOptions = useMemo(
    () => ["", ...Array.from(new Set(PRODUCTS.map((p) => p.dosage))).filter(Boolean)],
    [PRODUCTS]
  );

  const [category, setCategory] = useState("");
  const [form, setForm] = useState("");
  const [dosage, setDosage] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Apply category from URL (?category=) — allow both localized or raw value
  useEffect(() => {
    const catFromUrl = searchParams.get("category");
    if (!catFromUrl) return;

    // If the URL value exactly matches one of options, use it.
    if (categoryOptions.includes(catFromUrl)) {
      setCategory(catFromUrl);
      setForm("");
      setDosage("");
      setVisibleCount(6);
      return;
    }

    // Otherwise attempt to match using english fallback values (in case URL uses english term)
    const englishMatch = (LANGUAGE_MAP["en"] || EN).find((p) => p.category === catFromUrl);
    if (englishMatch) {
      // find localized equivalent category value by matching slug of any product with same category
      const localizedCategory = PRODUCTS.find((p) => p.slug === englishMatch.slug)?.category;
      if (localizedCategory) {
        setCategory(localizedCategory);
        setForm("");
        setDosage("");
        setVisibleCount(6);
      }
    }
  }, [searchParams, categoryOptions, PRODUCTS]);

  // ==========================
  //       FILTER LOGIC
  // ==========================
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = category === "" || p.category === category;
      const matchForm = form === "" || p.form === form;
      const matchDosage = dosage === "" || p.dosage === dosage;
      return matchCategory && matchForm && matchDosage;
    });
  }, [category, form, dosage, PRODUCTS]);

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  const handleViewMore = () => {
    if (!canLoadMore || loadingMore) return;
    setLoadingMore(true);

    setTimeout(() => {
      setVisibleCount((c) => Math.min(c + 6, filtered.length));
      setLoadingMore(false);
    }, 800);
  };

  const handleReset = () => {
    setCategory("");
    setForm("");
    setDosage("");
    setVisibleCount(6);
  };

  // ==========================
  //    FILTER SECTION UI
  // ==========================
  const Filters = () => (
    <div className="space-y-4">
      {/* single-column stack so each select is one below another */}
      <div className="grid grid-cols-1 gap-4">
        {/* Category */}
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1.5 block">
            {t("products.filters.category", "Category")}
          </label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setVisibleCount(6);
            }}
            className="w-full max-w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            {categoryOptions.map((c) => (
              <option key={String(c)} value={c}>
                {c === "" ? t("products.filters.all", "All") : c}
              </option>
            ))}
          </select>
        </div>

        {/* Product Type */}
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1.5 block">
            {t("products.filters.productType", "Product type")}
          </label>
          <select
            value={form}
            onChange={(e) => {
              setForm(e.target.value);
              setVisibleCount(6);
            }}
            className="w-full max-w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            {formOptions.map((f) => (
              <option key={String(f)} value={f}>
                {f === "" ? t("products.filters.allProductTypes", "All product types") : f}
              </option>
            ))}
          </select>
        </div>

        {/* Dosage */}
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1.5 block">
            {t("products.filters.dosage", "Dosage")}
          </label>
          <select
            value={dosage}
            onChange={(e) => {
              setDosage(e.target.value);
              setVisibleCount(6);
            }}
            className="w-full max-w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            {dosageOptions.map((d) => (
              <option key={String(d)} value={d}>
                {d === "" ? t("products.filters.allDosages", "All dosages") : d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset */}
      <button onClick={handleReset} className="text-xs text-[#0d2d47] underline underline-offset-2">
        {t("products.filters.reset", "Reset all filters")}
      </button>
    </div>
  );

  // ==========================
  //          RENDER
  // ==========================
  return (
    <div className="pt-16 md:pt-20 bg-[#FFF8F5] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        {/* Heading */}
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47]">{t("products.page_title")}</h1>
          <p className="mt-2 text-sm md:text-base text-gray-700 max-w-2xl">{t("products.page_subtitle")}</p>
        </header>

        {/* Mobile Filters + Count */}
        <div className="flex items-center justify-between mb-4">
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[#0d2d47] bg-white shadow-sm"
            >
              <span className="text-base">☰</span>
              <span>{t("products.filterButton", "Filter")}</span>
            </button>
          </div>

          <p className="text-sm text-gray-600 ml-auto">
            {t("products.count_label", { visible: visible.length, total: filtered.length }) ||
              `Showing ${visible.length} of ${filtered.length} products`}
          </p>
        </div>

        {showMobileFilters && (
          <div className="md:hidden mb-6 bg-white border shadow-sm p-4 rounded-xl">
            <Filters />
          </div>
        )}

        {/* Layout */}
        <div className="grid gap-8 md:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="hidden md:block bg-white border shadow-sm p-5 h-fit">
            <h2 className="text-lg font-semibold text-[#0d2d47] mb-4">{t("products.filterHeading", "Filter")}</h2>
            <Filters />
          </aside>

          {/* GRID */}
          <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <article
                  key={p.id}
                  onClick={() => navigate(`/products/${p.slug}`)}
                  className="bg-white border shadow-sm flex flex-col cursor-pointer"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden group">
                    <img src={capsuleImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-center text-[#0d2d47]">{p.name}</h3>
                    <p className="text-sm text-gray-600 text-center mt-1">
                      {p.category} • {p.form}
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-0.5">{p.dosage}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* View More */}
            {canLoadMore && (
              <div className="mt-10 flex justify-center">
                <button onClick={handleViewMore} disabled={loadingMore} className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white shadow-md">
                  {loadingMore ? t("products.loading", "Loading…") : t("products.viewMore", "View more")}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}