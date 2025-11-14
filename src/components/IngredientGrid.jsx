// src/components/IngredientGrid.jsx
import IngredientCard from "./IngredientCard";

export default function IngredientGrid({
  items,
  page,
  totalPages,
  onPageChange,
  onOpen,
}) {
  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <p className="text-gray-700">No results. Try different filters.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {items.map((item) => (
          <div key={item.id} className="h-full">
            <IngredientCard item={item} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="mt-8 flex flex-wrap items-center gap-2 justify-center">
          <button
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm disabled:opacity-50"
          >
            ‹ Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const n = i + 1;
            const active = n === page;
            return (
              <button
                key={n}
                onClick={() => onPageChange(n)}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  active
                    ? "bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white border-transparent"
                    : "bg-white border-gray-200 hover:border-[#19a6b5]"
                }`}
              >
                {n}
              </button>
            );
          })}
          <button
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm disabled:opacity-50"
          >
            Next ›
          </button>
        </nav>
      )}
    </>
  );
}
