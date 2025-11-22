// src/pages/SearchResults.jsx
import { useSearchParams, Link } from "react-router-dom";
import INGREDIENTS from "../data/ingredients";
import { FINISHED_PRODUCTS } from "../data/finishedProducts"; // named export
import capsuleImg from "../assets/logo/capsuleimage.jpg";
import productImg from "../assets/logo/medicineproduct.jpg";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim();
  const query = q.toLowerCase();

  // No query
  if (!q) {
    return (
      <section className="pt-24 md:pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47] mb-3">
            Search
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Type a product name, API ingredient, therapeutic area, or strength in the search bar.
          </p>
        </div>
      </section>
    );
  }

  // ===== FILTER APIs (INGREDIENTS) =====
  const apiMatches = INGREDIENTS.filter((item) => {
    const fields = [
      item.name,
      item.category,
      item.cas,
      item.description,
      ...(item.dosageForms || []),
      ...(item.synonyms || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return fields.includes(query);
  });

  // ===== FILTER FINISHED PRODUCTS =====
  const finishedMatches = (FINISHED_PRODUCTS || []).filter((item) => {
    const fields = [
      item.name,
      item.category,
      item.dosageForm,
      item.strength,
      item.shortTagline,
      item.indications,
      item.introduction,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return fields.includes(query);
  });

  const hasResults = apiMatches.length > 0 || finishedMatches.length > 0;

  return (
    <section className="pt-24 md:pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47] mb-3">
          Search results for: <span className="text-[#E2004F]">“{q}”</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          We looked across Active Pharmaceutical Ingredients and Finished Pharmaceutical Products.
        </p>

        {!hasResults && (
          <div className="bg-[#FFF8F5] border border-[#FFE0D0] px-5 py-6 rounded-xl max-w-2xl">
            <h2 className="text-lg font-semibold text-[#0d2d47] mb-2">
              No matching products found.
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              Try searching by molecule name, brand name, therapeutic area, or strength.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white shadow-md hover:opacity-90"
            >
              Contact Ivexia team
            </Link>
          </div>
        )}

        {/* APIs Section */}
        {apiMatches.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mb-4">
              Active Pharmaceutical Ingredients
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {apiMatches.map((item) => (
                <Link
                  key={item.slug}
                  to={`/portfolio/${item.slug}`}
                  className="border border-gray-100 bg-[#FFF8F5] hover:bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={item.image || capsuleImg}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-[#0d2d47]">
                        {item.name}
                      </h3>
                      {item.cas && (
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          CAS: {item.cas}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-700 flex-1 line-clamp-3">
                    {item.description ||
                      "High-quality Active Pharmaceutical Ingredient suitable for global formulations."}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1 text-[10px] text-[#0d2d47]">
                    {item.category && (
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-[#0d2d47]/8">
                        {item.category}
                      </span>
                    )}
                    {item.dosageForms &&
                      item.dosageForms.slice(0, 2).map((d) => (
                        <span
                          key={d}
                          className="inline-flex px-2 py-0.5 rounded-full bg-[#19a6b5]/8"
                        >
                          {d}
                        </span>
                      ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Finished Products Section */}
        {finishedMatches.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mb-4">
              Finished Pharmaceutical Products
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {finishedMatches.map((item) => (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="border border-gray-100 bg-white hover:bg-[#F5FAFF] rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={item.image || productImg}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-[#0d2d47]">
                        {item.name}
                      </h3>
                      {item.strength && (
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Strength: {item.strength}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-700 flex-1 line-clamp-3">
                    {item.shortTagline ||
                      item.introduction ||
                      "Finished dosage form developed under strict GMP conditions."}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1 text-[10px] text-[#0d2d47]">
                    {item.category && (
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-[#0d2d47]/8">
                        {item.category}
                      </span>
                    )}
                    {item.dosageForm && (
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-[#FF7A00]/10">
                        {item.dosageForm}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
