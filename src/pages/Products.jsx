// src/pages/Products.jsx
import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";

// 🌍 IMPORT LANG FILES
import EN from "../data/finishedProducts.js";
import AR from "../data/finishedProducts_ar.js";
import DE from "../data/finishedProducts_de.js";
import ES from "../data/finishedProducts_es.js";
import FR from "../data/finishedProducts_fr.js";
import JA from "../data/finishedProducts_ja.js";
import NL from "../data/finishedProducts_nl.js";
import PT from "../data/finishedProducts_pt.js";
import ZH from "../data/finishedProducts_zh.js";

// MAP LANG
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
  const { t, i18n } = useTranslation("common");

  const currentLang = i18n.language?.split("-")[0] || "en";
  const PRODUCTS = LANGUAGE_MAP[currentLang] || EN;

  // ---------------------------
  // FILTER OPTIONS
  // ---------------------------
  const categoryOptions = useMemo(
    () => ["", ...new Set(PRODUCTS.map((p) => p.category))].filter(Boolean),
    [PRODUCTS]
  );
  const formOptions = useMemo(
    () => ["", ...new Set(PRODUCTS.map((p) => p.form))].filter(Boolean),
    [PRODUCTS]
  );
  const dosageOptions = useMemo(
    () => ["", ...new Set(PRODUCTS.map((p) => p.dosage))].filter(Boolean),
    [PRODUCTS]
  );

  // ---------------------------
  // FILTER STATES
  // ---------------------------
  const [category, setCategory] = useState("");
  const [form, setForm] = useState("");
  const [dosage, setDosage] = useState("");

  const [pendingSearch, setPendingSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Autofill category from URL
  useEffect(() => {
    const catFromUrl = searchParams.get("category");
    if (catFromUrl) setCategory(catFromUrl);
  }, [searchParams]);

  // ---------------------------
  // FILTER + SEARCH LOGIC
  // ---------------------------
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    return PRODUCTS.filter((p) => {
      const matchCategory = !category || p.category === category;
      const matchForm = !form || p.form === form;
      const matchDosage = !dosage || p.dosage === dosage;

      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.form.toLowerCase().includes(q) ||
        p.dosage.toLowerCase().includes(q) ||
        String(p["CAS-ID"]).toLowerCase().includes(q);

      return matchCategory && matchForm && matchDosage && matchSearch;
    });
  }, [category, form, dosage, searchTerm, PRODUCTS]);

  // ---------------------------
  // CLEAR FILTERS
  // ---------------------------
  const handleClear = () => {
    setCategory("");
    setForm("");
    setDosage("");
    setPendingSearch("");
    setSearchTerm("");
  };

  // ---------------------------
  // APPLY SEARCH (button + Enter)
  // ---------------------------
  const applySearch = () => {
    setSearchTerm(pendingSearch);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applySearch();
    }
  };

  return (
    <div className="pt-16 bg-[#FFF8F5] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        {/* HEADER */}
        <header className="text-center mt-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0d2d47] tracking-tight">
            {t("productsPage.title")}
          </h1>
          <p className="text-gray-700 mt-2">
            {t("productsPage.subtitle")}
          </p>
        </header>

        {/* PDF DOWNLOAD */}
        <div
          className="bg-white border border-gray-200 rounded-2xl px-4 md:px-6 py-4 
        flex flex-col md:flex-row items-center justify-between gap-3 shadow-sm"
        >
          <p className="text-sm md:text-base text-[#0d2d47] font-semibold">
            {t("productsPage.pdfTitle")}
          </p>

       <a
  href="/LarksoisPharmaproduct.json"
  download="Larksois Pharma Product List.json"
  className="px-5 py-2 rounded-full text-white font-semibold text-sm
  bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
  shadow-md hover:opacity-90 transition"
>
  {t("productsPage.pdfButton")}
</a>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="mt-8">
          {/* SEARCH BAR */}
          <div className="relative max-w-4xl mx-auto">
            <input
              value={pendingSearch}
              onChange={(e) => setPendingSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder={t("productsPage.searchPlaceholder")}
              className="w-full rounded-full border border-gray-300 bg-white px-6 py-3 pr-16 
              text-sm shadow-sm focus:outline-none"
            />

            <button
              type="button"
              onClick={applySearch}
              className="absolute right-2 top-1/2 -translate-y-1/2
                w-11 h-11 rounded-full flex items-center justify-center
                text-black 
                shadow-md"
            >
              <FaSearch className="text-sm" />
            </button>
          </div>

          {/* FILTER ROW */}
          <div
            className="flex flex-wrap md:flex-nowrap justify-center gap-3 mt-5 
          bg-white/80 border border-gray-200 rounded-2xl px-4 py-3 shadow-sm"
          >
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-full border border-gray-200 px-5 py-2 text-sm min-w-[180px] bg-white"
            >
              <option value="">{t("productsPage.filterCategory")}</option>
              {categoryOptions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={form}
              onChange={(e) => setForm(e.target.value)}
              className="rounded-full border border-gray-200 px-5 py-2 text-sm min-w-[180px] bg-white"
            >
              <option value="">{t("productsPage.filterForm")}</option>
              {formOptions.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>

            <select
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="rounded-full border border-gray-200 px-5 py-2 text-sm min-w-[180px] bg-white"
            >
              <option value="">{t("productsPage.filterDosage")}</option>
              {dosageOptions.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <button
              type="button"
              onClick={applySearch}
              className="px-6 py-2 rounded-full text-white font-semibold text-sm 
              bg-gradient-to-r from-[#FF7A00] to-[#E2004F]"
            >
              {t("productsPage.filterSearch")}
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 rounded-full bg-[#0d2d47] text-white font-semibold text-sm"
            >
              {t("productsPage.filterClear")}
            </button>
          </div>
        </div>

        {/* RESULTS COUNT */}
        <p className="text-center text-gray-600 mt-3">
          {t("products.count_label", {
            visible: filtered.length,
            total: PRODUCTS.length,
          })}
        </p>

       
        {/* ---------------------- RESPONSIVE TABLE + MOBILE CARDS ---------------------- */}

<div className="mt-6">

  {/* DESKTOP TABLE */}
  <div className="hidden md:block overflow-x-auto border border-gray-300  shadow-sm bg-white">
    <table className="min-w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#0d2d47] text-white">
          {[
            t("productsPage.table.name"),
            t("productsPage.table.form"),
            t("productsPage.table.category"),
            t("productsPage.table.dosage"),
            t("productsPage.table.packSize"),
            t("productsPage.table.formulationType"),
            t("productsPage.table.casId"),
            t("productsPage.table.pharmSpec"),
          ].map((head) => (
            <th
              key={head}
              className="px-4 py-3 font-semibold border-r border-gray-500 last:border-r-0"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {filtered.length === 0 ? (
          <tr>
            <td colSpan={8} className="px-4 py-6 text-center text-gray-500">
              {t("productsPage.noResults")}
            </td>
          </tr>
        ) : (
          filtered.map((p, i) => (
            <tr
              key={p.id}
              onClick={() => navigate(`/products/${p.slug}`)}
              className={`cursor-pointer transition hover:bg-[#FFF8F5]
                ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <td className="px-4 py-3 border border-gray-300 font-semibold text-[#0d2d47]">
                {p.name}
              </td>
              <td className="px-4 py-3 border border-gray-300">{p.form}</td>
              <td className="px-4 py-3 border border-gray-300">{p.category}</td>
              <td className="px-4 py-3 border border-gray-300">{p.dosage}</td>
              <td className="px-4 py-3 border border-gray-300">{p["PACK SIZE"]}</td>
              <td className="px-4 py-3 border border-gray-300">{p["TYPE OF FORMLN"]}</td>
              <td className="px-4 py-3 border border-gray-300">{p["CAS-ID"]}</td>
              <td className="px-4 py-3 border border-gray-300">{p["PHARM SPECN"]}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>

  {/* MOBILE CARDS */}
  <div className="md:hidden flex flex-col gap-4">
    {filtered.length === 0 ? (
      <p className="text-center text-gray-600">{t("productsPage.noResults")}</p>
    ) : (
      filtered.map((p) => (
        <div
          key={p.id}
          onClick={() => navigate(`/products/${p.slug}`)}
          className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm active:scale-[0.98] transition"
        >
          <p className="font-bold text-[#0d2d47] mb-1">{p.name}</p>

          <div className="text-sm text-gray-700">
            <p><strong>{t("productsPage.table.form")}:</strong> {p.form}</p>
            <p><strong>{t("productsPage.table.category")}:</strong> {p.category}</p>
            <p><strong>{t("productsPage.table.dosage")}:</strong> {p.dosage}</p>
            <p><strong>{t("productsPage.table.packSize")}:</strong> {p["PACK SIZE"]}</p>
            <p><strong>{t("productsPage.table.formulationType")}:</strong> {p["TYPE OF FORMLN"]}</p>
            <p><strong>{t("productsPage.table.casId")}:</strong> {p["CAS-ID"]}</p>
            <p><strong>{t("productsPage.table.pharmSpec")}:</strong> {p["PHARM SPECN"]}</p>
          </div>
        </div>
      ))
    )}
  </div>

</div>

      </section>
    </div>
  );
}
