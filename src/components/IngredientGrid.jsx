// src/components/IngredientGrid.jsx
import { useTranslation } from "react-i18next";

export default function IngredientGrid({ items }) {
  const { t } = useTranslation();

  return (
    <div className="w-full">

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white border border-gray-300 shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-[#0d2d47] text-white sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 font-semibold border-r border-gray-500 text-left">
                {t("ingredientGrid.name")}
              </th>
              <th className="px-4 py-3 font-semibold border-r border-gray-500 text-left">
                {t("ingredientGrid.category")}
              </th>
              <th className="px-4 py-3 font-semibold text-left">
                {t("ingredientGrid.dosageForms")}
              </th>
            </tr>
          </thead>

          <tbody>
            {items.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="text-center py-10 text-gray-600 border border-gray-300"
                >
                  {t("ingredientGrid.noResults")}
                </td>
              </tr>
            ) : (
              items.map((i, index) => (
                <tr
                  key={i.id}
                  onClick={() =>
                    (window.location.href = `/portfolio/${i.slug}`)
                  }
                  className={`cursor-pointer transition hover:bg-[#FFF8F5] ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-3 border border-gray-300 font-semibold text-[#0d2d47]">
                    {t(i.nameKey)}
                  </td>

                  <td className="px-4 py-3 border border-gray-300">
                    {t(i.categoryKey)}
                  </td>

                  <td className="px-4 py-3 border border-gray-300">
                    <div className="flex flex-wrap gap-2">
                      {i.dosageKeys.map((d) => (
                        <span
                          key={d}
                          className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                        >
                          {t(d)}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden flex flex-col gap-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-600">
            {t("ingredientGrid.noResults")}
          </p>
        ) : (
          items.map((i) => (
            <div
              key={i.id}
              onClick={() => (window.location.href = `/portfolio/${i.slug}`)}
              className="bg-white border border-gray-300 p-4 shadow-sm active:scale-[0.98] transition"
            >
              <p className="font-bold text-[#0d2d47] mb-2">
                {t(i.nameKey)}
              </p>

              <p className="text-sm text-gray-700">
                <strong>{t("ingredientGrid.category")}:</strong>{" "}
                {t(i.categoryKey)}
              </p>

              <p className="text-sm text-gray-700 mt-1">
                <strong>{t("ingredientGrid.dosageForms")}:</strong>
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {i.dosageKeys.map((d) => (
                  <span
                    key={d}
                    className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                  >
                    {t(d)}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
