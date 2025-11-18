// src/pages/Products/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import INGREDIENTS from "../../data/ingredients";
import capsuleImg from "../../assets/logo/capsuleimage.jpg";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = INGREDIENTS.find((p) => p.slug === slug);

  // For quote popup
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Always scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!product) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-[#0d2d47]">Product not found</h1>
        <p className="mt-2 text-gray-600">
          We couldn&apos;t find this API in our portfolio.
        </p>
        <Link
          to="/products/ingredient"
          className="mt-6 inline-block px-4 py-2 rounded-lg border border-[#0d2d47] text-[#0d2d47] hover:bg-[#0d2d47] hover:text-white transition"
        >
          ← Back to Active Pharmaceutical Ingredients
        </Link>
      </section>
    );
  }

  const imgSrc = product.image || capsuleImg;

  // Suggested products (3–4 items, excluding current)
  const others = INGREDIENTS.filter((p) => p.slug !== product.slug);
  const diffCategory = others.filter((p) => p.category !== product.category);
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
      <section className="bg-white pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          {/* Breadcrumbs */}
          <nav className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
            <Link to="/" className="text-[#0d2d47] hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link
              to="/products/ingredient"
              className="text-[#0d2d47] hover:underline"
            >
              Active Pharmaceutical Ingredients
            </Link>{" "}
            / <span className="text-gray-500">{product.name}</span>
          </nav>

          <div className=" bg-[#FFF8F5] shadow-sm border border-gray-100 px-5 md:px-8 py-8 md:py-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
              {/* CLEAN IMAGE — NO BG, NO BORDER, NO SHADOW */}
              <div className="flex items-center justify-center">
                <img
                  src={imgSrc}
                  alt={product.name}
                  className="w-full max-h-[260px] object-contain"
                />
              </div>

              {/* PRODUCT INFO */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2d47]">
                  {product.name}
                </h1>

                {product.cas && (
                  <p className="mt-2 text-xs md:text-sm text-gray-500">
                    CAS: {product.cas}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-[#0d2d47] text-white">
                    {product.category}
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
                  {product.description && <p>{product.description}</p>}
                  <p>
                    This Active Pharmaceutical Ingredient is manufactured under
                    controlled GMP conditions with full batch traceability.
                  </p>
                  <p>
                    It is suitable for formulation development and commercial
                    supply in{" "}
                    {product.category?.toLowerCase() || "relevant"} therapy
                    areas.
                  </p>
                </div>

                {/* Synonyms */}
                {product.synonyms?.length > 0 && (
                  <>
                    <h3 className="mt-4 text-sm font-semibold text-[#0d2d47]">
                      Synonyms
                    </h3>
                    <p className="text-sm text-gray-700">
                      {product.synonyms.join(", ")}
                    </p>
                  </>
                )}

                <h3 className="mt-4 text-sm font-semibold text-[#0d2d47]">
                  Dosage Forms
                </h3>

                <div className="mt-1 flex flex-wrap gap-2">
                  {product.dosageForms.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-2 py-1 rounded-full border border-gray-200 bg-white"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* REQUEST QUOTE BUTTON → POPUP */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(true)}
                    className="
                      inline-flex items-center justify-center 
                      px-5 py-2.5 
                      rounded-lg 
                      text-white text-sm 
                      bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
                      shadow-md hover:opacity-90 transition
                    "
                  >
                    Request quote
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
                Explore More
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mt-1">
                Suggested Products
              </h2>
              <p className="text-xs md:text-sm text-gray-700 mt-2">
                Other APIs related to your current selection.
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
                  {/* CLEAN IMAGE BLOCK — NO BG WRAPPER */}
                  <div className="w-full px-5 pt-5 pb-4 flex justify-center">
                    <img
                      src={p.image || capsuleImg}
                      alt={p.name}
                      className="w-24 h-24 md:w-28 md:h-28 object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-center text-center flex-1 px-4 pb-4">
                    <h3 className="text-sm font-semibold text-[#0d2d47] leading-snug">
                      {p.name}
                    </h3>

                    {p.cas && (
                      <p className="text-[11px] text-gray-500 mt-1">
                        CAS: {p.cas}
                      </p>
                    )}

                    <span className="inline-flex mt-2 items-center rounded-full px-3 py-0.5 text-[11px] font-medium bg-[#0d2d47]/6 text-[#0d2d47]">
                      {p.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REQUEST QUOTE POPUP MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0d2d47] to-[#19a6b5] px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg">
                  Request Quote
                </h3>
                <p className="text-xs text-white/80 mt-0.5">
                  {product.name}
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

            {/* Modal Body */}
            <div className="px-6 py-5 space-y-4 bg-[#FFF8F5]">
              <p className="text-xs md:text-sm text-gray-700">
                Share a few details and our team will reach out to you.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Quote request submitted!");
                  setShowQuoteModal(false);
                }}
              >
                {/* Product Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                    Product
                  </label>
                  <input
                    type="text"
                    value={product.name}
                    readOnly
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#19a6b5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#19a6b5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#19a6b5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#19a6b5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0d2d47] mb-1">
                    Message / Requirement
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#19a6b5] resize-none"
                    placeholder="Briefly describe your requirement..."
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(false)}
                    className="px-4 py-2 rounded-full text-xs md:text-sm border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="
                      px-5 py-2 rounded-full text-xs md:text-sm font-semibold
                      bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
                      text-white shadow-md hover:opacity-90
                    "
                  >
                    Submit request
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
