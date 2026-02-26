// src/components/IngredientGrid.jsx
import { useTranslation } from "react-i18next";

export default function IngredientGrid({ items = [] }) {
  const { t } = useTranslation();

  const goToItem = (slug) => {
    window.location.href = `/portfolio/${slug}`;
  };

  return (
    <div className="w-full">

      {/* =========================
          DESKTOP / TABLET TABLE
      ========================= */}
      <div className="hidden md:block bg-white border border-gray-300 shadow-sm overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-[#0d2d47] text-white sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 font-semibold border-r border-gray-500 text-left">
                {t("ingredientGrid.name")}
              </th>
              <th className="px-4 py-3 font-semibold text-left">
                {t("ingredientGrid.category")}
              </th>
            </tr>
          </thead>

          <tbody>
            {items.length === 0 ? (
              <tr>
                <td
                  colSpan={2}
                  className="text-center py-10 text-gray-600 border-t"
                >
                  {t("ingredientGrid.noResults")}
                </td>
              </tr>
            ) : (
              items.map((i, index) => (
                <tr
                  key={i.id}
                  onClick={() => goToItem(i.slug)}
                  className={`cursor-pointer transition hover:bg-[#FFF8F5]
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-4 py-3 border-t border-r font-semibold text-[#0d2d47]">
                    {t(i.nameKey)}
                  </td>
                  <td className="px-4 py-3 border-t">
                    {t(i.categoryKey)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* =========================
          MOBILE CARDS
      ========================= */}
      <div className="md:hidden space-y-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-600 py-10">
            {t("ingredientGrid.noResults")}
          </p>
        ) : (
          items.map((i) => (
            <button
              key={i.id}
              onClick={() => goToItem(i.slug)}
              className="
                w-full text-left
                bg-white border border-gray-300 rounded-xl
                p-4 shadow-sm
                active:scale-[0.98]
                transition
              "
            >
              <p className="text-base font-semibold text-[#0d2d47] leading-snug">
                {t(i.nameKey)}
              </p>

              <div className="mt-2 text-sm text-gray-700">
                <span className="font-medium">
                  {t("ingredientGrid.category")}:
                </span>{" "}
                {t(i.categoryKey)}
              </div>
            </button>
          ))
        )}
      </div>

    </div>
  );
}
