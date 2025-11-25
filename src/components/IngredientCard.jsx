// src/components/IngredientCard.jsx
import capsuleBg from "../assets/logo/capsule1.jpg";
import { useTranslation } from "react-i18next";

export default function IngredientCard({ item }) {
  const { t } = useTranslation();

  return (
    <article
      className="
        group relative rounded-none overflow-hidden
        border border-gray-200 shadow-sm
        transition p-0 
        min-h-[260px] h-full
      "
      style={{
        backgroundImage: `url(${capsuleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* FIXED OVERLAY - NO HOVER CHANGE */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] transition"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full p-6">

        <div className="flex-1">
          <header className="border-b border-gray-300 pb-3 mb-3">
            {/* ✅ PRODUCT NAME (Translated) */}
            <h3 className="text-lg md:text-xl font-semibold text-[#0d2d47] leading-snug">
              {t(item.nameKey)}
            </h3>

            {/* ✅ CATEGORY (Translated) */}
            {item.categoryKey && (
              <p className="mt-1 text-sm font-medium text-[#0d1b2a]">
                {t(item.categoryKey)}
              </p>
            )}
          </header>

          {/* CAS */}
          {item.cas && (
            <p className="text-sm text-[#333]">
              <span className="font-semibold">{t("ingredientCard.cas")}:</span> {item.cas}
            </p>
          )}

          {/* Synonyms */}
          {item.synonyms?.length > 0 && (
            <p className="mt-2 text-sm text-[#2b2b2b] line-clamp-2">
              <span className="font-semibold">{t("ingredientCard.synonyms")}:</span>{" "}
              {item.synonyms.join(", ")}
            </p>
          )}

          {/* ✅ DOSAGE FORMS (Translated) */}
          <div className="mt-3 flex flex-wrap gap-2">
            {item.dosageKeys?.map((key) => (
              <span
                key={key}
                className="text-xs px-2 py-1 border border-gray-300 bg-white/70 text-[#111]"
              >
                {t(key)}
              </span>
            ))}
          </div>
        </div>

        {/* VIEW DETAILS */}
        <div className="mt-4 flex justify-end">
          <a
            href={`/portfolio/${item.slug}`}
            onClick={(e) => {
              if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                window.open(`/portfolio/${item.slug}`, "_blank", "noopener,noreferrer");
                return;
              }
            }}
            className="
              inline-flex items-center gap-1
              text-white text-sm font-semibold px-4 py-2
              bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
              shadow-md hover:opacity-90 transition
            "
          >
            {t("ingredientCard.viewDetails")}
          </a>
        </div>

      </div>
    </article>
  );
}
