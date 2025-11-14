// src/pages/Products.jsx
import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import capsuleImage from "../assets/logo/medicineproduct.jpg"; // common image

const PRODUCTS = [
  { id: 1, name: "Atorvastatin 20 mg", slug: "atorvastatin-20", category: "Cardiology" },
  { id: 2, name: "Clopidogrel 75 mg", slug: "clopidogrel-75", category: "Cardiology" },
  { id: 3, name: "Imatinib 400 mg", slug: "imatinib-400", category: "Oncology" },
  { id: 4, name: "Letrozole 2.5 mg", slug: "letrozole-2-5", category: "Oncology" },
  { id: 5, name: "Metformin 500 mg", slug: "metformin-500", category: "Diabetes" },
  { id: 6, name: "Sitagliptin 100 mg", slug: "sitagliptin-100", category: "Diabetes" },
  { id: 7, name: "Pregabalin 75 mg", slug: "pregabalin-75", category: "Neurology" },
  { id: 8, name: "Levetiracetam 500 mg", slug: "levetiracetam-500", category: "Neurology" },
  { id: 9, name: "Omeprazole 20 mg", slug: "omeprazole-20", category: "Gastroenterology" },
  { id: 10, name: "Pantoprazole 40 mg", slug: "pantoprazole-40", category: "Gastroenterology" },
];

export default function Products() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const categories = useMemo(
    () => ["All", ...new Set(PRODUCTS.map((p) => p.category))],
    []
  );

  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  // 🔹 Read ?category= from URL so navbar dropdown acts like filter
  useEffect(() => {
    const catFromUrl = searchParams.get("category");

    if (catFromUrl && categories.includes(catFromUrl)) {
      setCategory(catFromUrl);
      setVisibleCount(6);
    }
  }, [searchParams, categories]);

  const filtered = useMemo(
    () =>
      category === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === category),
    [category]
  );

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  const handleViewMore = () => {
    if (!canLoadMore || loadingMore) return;
    setLoadingMore(true);

    // fake delay like reference site
    setTimeout(() => {
      setVisibleCount((c) => Math.min(c + 6, filtered.length));
      setLoadingMore(false);
    }, 800);
  };

  return (
    // padding-top so heading is not under navbar
    <div className="pt-24 md:pt-28 bg-[#FFF8F5] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        {/* PAGE HEADING */}
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47]">
            Pharmaceutical Products
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-700 max-w-2xl">
            Finished dosage formulations across key therapy areas, supplied
            with regulatory support and quality documentation.
          </p>
        </header>

        {/* 🔹 TOP RIGHT COUNT ABOVE FILTER + GRID */}
        <div className="flex justify-end mb-4">
          <p className="text-sm text-gray-600">
            Showing {visible.length} of {filtered.length} products
          </p>
        </div>

        {/* LAYOUT: SIDEBAR + GRID */}
        <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)] items-start">
          {/* LEFT FILTER PANEL */}
          <aside className="bg-white border border-gray-200 shadow-sm p-5 h-fit">
            <h2 className="text-lg font-semibold text-[#0d2d47] mb-4">
              Filter by Category
            </h2>
            <div className="space-y-2">
              {categories.map((cat) => {
                const active = cat === category;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setVisibleCount(6);
                    }}
                    className={`w-full text-left text-sm px-3 py-2 rounded-md border ${
                      active
                        ? "bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white border-transparent"
                        : "bg-white text-[#0d2d47] border-gray-200 hover:border-[#19a6b5]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT – PRODUCT GRID */}
          <div>
            {/* product count heading on the right (kept in comments so nothing is deleted) */}
            {/*
            <p className="text-sm text-gray-600 mb-4 text-right">
              Showing {visible.length} of {filtered.length} products
            </p>
            */}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <article
                  key={p.id}
                  onClick={() => {
                    // 🔹 Future detail page route
                    navigate(`/products/${p.slug}`);
                  }}
                  className="
                    bg-white border border-gray-200 shadow-sm 
                    flex flex-col h-full
                    overflow-hidden
                    min-h-[280px] md:min-h-[320px]  /* slightly less height */
                    cursor-pointer
                  "
                >
                  {/* IMAGE – ONLY IMAGE ZOOMS ON HOVER */}
                  <div className="overflow-hidden">
                    <div className="relative h-48 md:h-56 group">
                      <img
                        src={capsuleImage}
                        alt={p.name}
                        className="
                          w-full h-full object-cover
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-[#0d2d47] text-center">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 text-center">
                      {p.category}
                    </p>

                    {/* BUTTON – TEMPORARILY DISABLED (kept in comments) */}
                    {/*
                    <div className="mt-auto pt-6 flex justify-center">
                      <button
                        type="button"
                        className="
                          inline-flex items-center gap-1
                          text-sm font-semibold
                          px-4 py-2
                          bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
                          text-white
                          shadow-md
                          hover:opacity-90
                          transition
                        "
                      >
                        View details →
                      </button>
                    </div>
                    */}
                  </div>
                </article>
              ))}
            </div>

            {/* VIEW MORE BUTTON */}
            {canLoadMore && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={handleViewMore}
                  disabled={loadingMore}
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 
                    rounded-full
                    bg-gradient-to-r from-[#0d2d47] to-[#19a6b5]
                    text-white text-sm font-semibold
                    shadow-md
                    disabled:opacity-60
                  "
                >
                  {loadingMore ? "Loading…" : "View more"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
