// src/pages/Products/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import INGREDIENTS from "../../data/ingredients";
import capsuleImg from "../../assets/logo/capsuleimage.jpg";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = INGREDIENTS.find((p) => p.slug === slug);

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
      {/* 🔹 Added top padding so it's not under the navbar */}
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
            {/* TOP: image left, info right */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
              {/* Image block */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-3xl bg-white border border-[#0d2d47]/8 p-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-3xl bg-[#F5FAFF] opacity-70" />
                    <img
                      src={imgSrc}
                      alt={product.name}
                      className="relative w-full max-h-[260px] object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Right side info */}
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

                {/* General descriptive info */}
                <div className="mt-5 space-y-3 text-sm md:text-[15px] text-gray-700">
                  {product.description && <p>{product.description}</p>}
                  <p>
                    This Active Pharmaceutical Ingredient is manufactured under
                    controlled GMP conditions with full batch traceability.
                    Technical documentation such as CoA, MSDS and detailed
                    specifications can be shared for qualified partners.
                  </p>
                  <p>
                    It is suitable for formulation development, scale-up and
                    commercial supply in{" "}
                    {product.category
                      ? product.category.toLowerCase()
                      : "relevant"}{" "}
                    therapy areas.
                  </p>
                </div>

                {product.synonyms?.length ? (
                  <>
                    <h3 className="mt-4 text-sm font-semibold text-[#0d2d47]">
                      Synonyms
                    </h3>
                    <p className="text-sm text-gray-700">
                      {product.synonyms.join(", ")}
                    </p>
                  </>
                ) : null}

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

                {/* 🔹 Request quote button directly under dosage forms */}
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-white text-sm bg-gradient-to-r from-[#0d2d47] to-[#19a6b5] hover:opacity-90"
                  >
                    Request quote
                  </Link>
                </div>
              </div>
            </div>

            {/* MIDDLE: Specs + buttons (kept but hidden now) */}
            <section className="mt-10 text-center hidden">
              <h2 className="text-lg md:text-xl font-semibold text-[#0d2d47] mb-4">
                Specifications &amp; Documents
              </h2>

              {normalizedSpecs.length ? (
                <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white p-4 md:p-5 text-left">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    {normalizedSpecs.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between border-b border-gray-100 pb-1"
                      >
                        <dt className="text-gray-600">{s.label}</dt>
                        <dd className="font-medium text-gray-800 ml-4">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : (
                <p className="text-sm text-gray-600 max-w-xl mx-auto">
                  Detailed specifications and analytical methods are available
                  on request.
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href={product.coaUrl || "#"}
                  className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-[#19a6b5] text-sm"
                >
                  Download CoA
                </a>
                <a
                  href={product.msdsUrl || "#"}
                  className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-[#19a6b5] text-sm"
                >
                  Download MSDS
                </a>
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-lg text-white text-sm bg-gradient-to-r from-[#0d2d47] to-[#19a6b5] hover:opacity-90"
                >
                  Request quote
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* GAP + FULL-WIDTH SUGGESTED SECTION */}
      {suggested.length > 0 && (
        <section className="bg-[#FFF8F5] mt-10">
          <div className="max-w-7xl mx-auto px-6 py-14">
            {/* Heading */}
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

            {/* Bigger cards, centered, with blended image area */}
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
                  {/* Image top, blended area */}
                  <div className="w-full px-5 pt-5 pb-4 flex justify-center">
                    <div className="relative w-full rounded-2xl bg-[#F5FAFF] border border-[#0d2d47]/8 px-4 py-3 flex justify-center">
                      <img
                        src={p.image || capsuleImg}
                        alt={p.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain"
                      />
                    </div>
                  </div>

                  {/* Text center */}
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
    </>
  );
}
