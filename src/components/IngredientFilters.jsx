//src\components\IngredientFilters.jsx
import { useTranslation } from "react-i18next";

export default function IngredientFilters({
  query, setQuery,
  categories, category, setCategory,
  dosages, dosage, setDosage,
  sortBy, setSortBy,
  total, onReset
}) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="w-full md:w-1/2">
          <label className="sr-only">{t("ingredientFilters.searchPlaceholder")}</label>
          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder={t("ingredientFilters.searchPlaceholder")}
            className="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 outline-none focus:ring-2 focus:ring-[#19a6b5] shadow-sm"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-1/2">
                    <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#19a6b5]"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All" : t(c)}
              </option>
            ))}
          </select>

                    <select
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#19a6b5]"
          >
            {dosages.map((d) => (
              <option key={d} value={d}>
                {d === "All" ? "All" : t(d)}
              </option>
            ))}
          </select>

          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#19a6b5]">
            <option value="name-asc">{t("ingredientFilters.sortOptions.nameAsc")}</option>
            <option value="name-desc">{t("ingredientFilters.sortOptions.nameDesc")}</option>
            <option value="category">{t("ingredientFilters.sortOptions.category")}</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
        <span>{t("ingredientFilters.results", { total })}</span>
        <button onClick={onReset} className="text-[#0d2d47] hover:text-[#19a6b5] underline underline-offset-2">
          {t("ingredientFilters.resetFilters")}
        </button>
      </div>
    </div>
  );
}
