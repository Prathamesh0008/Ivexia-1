// src/pages/Products/FinishedProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FINISHED_PRODUCTS from "../../data/finishedProducts";
import fallbackImage from "../../assets/logo/medicineproduct.jpg";

function AccordionItem({ item, isOpen, onToggle, dark }) {
  return (
    <div
      className={`
        rounded-md overflow-hidden border 
        ${dark ? "bg-[#0d2d47] border-[#0d2d47]" : "bg-[#f0f4ff] border-transparent"}
      `}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between px-4 md:px-5 py-3 text-left
          ${dark ? "text-white" : "text-[#0d2d47]"}
        `}
      >
        <span className="text-sm md:text-base font-semibold flex-1">
          {item.q}
        </span>
        <span className="ml-3 text-lg leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`
          px-4 md:px-5 text-sm md:text-[15px] text-gray-800 bg-white
          overflow-hidden transition-[max-height,opacity,padding]
          duration-400 ease-in-out
          ${isOpen ? "max-h-40 py-3 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FinishedProductDetail() {
  const { slug } = useParams();
  const product = FINISHED_PRODUCTS.find((p) => p.slug === slug);

  const [activeTab, setActiveTab] = useState("introduction");
  const [openImportant, setOpenImportant] = useState(0);
  const [openPrecaution, setOpenPrecaution] = useState(0);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!product) {
    // clean "not found" UI
    return (
      <section className="bg-[#FFF8F5] min-h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47]">
            We couldn&apos;t find this product
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-700">
            The product you&apos;re looking for is not available in our finished
            dosage portfolio yet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link
              to="/products"
              className="px-5 py-2.5 rounded-full text-sm font-semibold
                         bg-gradient-to-r from-[#0d2d47] to-[#19a6b5]
                         text-white hover:opacity-90 transition"
            >
              ← Back to Pharmaceutical Products
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold
                         border border-[#0d2d47] text-[#0d2d47]
                         hover:bg-[#0d2d47] hover:text-white transition"
            >
              Contact Ivexia
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const imgSrc = product.image || fallbackImage;

  const introText =
    product.introduction ||
    product.description ||
    "This finished dosage product is developed and manufactured under strict GMP compliance with full regulatory and quality support available on request.";

  const indicationsText =
    product.indications ||
    "Indications content will be updated based on the approved label and target markets.";

  const maintenanceText =
    product.maintenance ||
    "Storage, handling and maintenance information will be aligned with the product stability data and pack insert.";

  const importantInfo =
    product.importantInfo && product.importantInfo.length
      ? product.importantInfo
      : [
          {
            q: "How should I take this product?",
            a: "Take the recommended dose with water, preferably at the same time each day, or as directed by your healthcare professional.",
          },
          {
            q: "Can I use it during pregnancy or breastfeeding?",
            a: "Use only if clearly needed and strictly under medical supervision.",
          },
          {
            q: "What if I miss a dose?",
            a: "Take the missed dose as soon as you remember, but skip it if it is almost time for your next dose. Do not double the dose.",
          },
          {
            q: "What if I accidentally take too much?",
            a: "Seek immediate medical advice or contact your local poison control centre.",
          },
        ];

  const precautions =
    product.precautions && product.precautions.length
      ? product.precautions
      : [
          {
            q: "Who should not use this product?",
            a: "Patients with known hypersensitivity to any component of the formulation should not use this product.",
          },
          {
            q: "Who should use with caution?",
            a: "Patients with chronic medical conditions or on multiple medications should consult their doctor before use.",
          },
          {
            q: "What are some possible side effects?",
            a: "Mild gastrointestinal discomfort, headache or dizziness may occur in some individuals. Discontinue use and consult a doctor if symptoms persist.",
          },
        ];

  const pharmacies =
    product.pharmacies && product.pharmacies.length
      ? product.pharmacies
      : [
          "Local Pharmacy 1",
          "Local Pharmacy 2",
          "Hospital Pharmacy",
          "Online Partner",
          "Retail Chain A",
          "Retail Chain B",
        ];

  return (
    <>
      {/* TOP HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-10 pb-12 md:pb-14">
          {/* breadcrumbs */}
          <nav className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
            <Link to="/" className="text-[#0d2d47] hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link
              to="/products"
              className="text-[#0d2d47] hover:underline"
            >
              Pharmaceutical Products
            </Link>{" "}
            / <span>{product.name}</span>
          </nav>

          <div className="rounded-3xl bg-[#FFF8F5] border border-gray-100 shadow-sm px-5 md:px-10 py-8 md:py-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
              {/* image left */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#19a6b5]/10 via-[#FF7A00]/6 to-[#E2004F]/6 rounded-3xl blur-sm" />
                  <div className="relative rounded-3xl bg-white border border-[#0d2d47]/10 p-6 flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt={product.name}
                      className="w-full max-h-[320px] object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* right info + tabs */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2d47]">
                  {product.name}
                </h1>

                {product.shortTagline && (
                  <p className="mt-2 text-sm md:text-base text-gray-700">
                    {product.shortTagline}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.category && (
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-[#0d2d47] text-white">
                      {product.category}
                    </span>
                  )}
                  {product.dosageForm && (
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-[#19a6b5]/10 text-[#0d2d47] border border-[#19a6b5]/30">
                      {product.dosageForm}
                    </span>
                  )}
                  {product.strength && (
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-[#FF7A00]/10 text-[#0d2d47] border border-[#FF7A00]/40">
                      {product.strength}
                    </span>
                  )}
                </div>

                {/* tabs */}
                <div className="mt-6 border-b border-gray-200 flex gap-6 text-sm md:text-base">
                  {[
                    { id: "introduction", label: "Introduction" },
                    { id: "indications", label: "Indications" },
                    { id: "maintenance", label: "Maintenance" },
                  ].map((tab) => {
                    const active = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          pb-2 -mb-px
                          border-b-2
                          ${
                            active
                              ? "border-[#19a6b5] text-[#0d2d47] font-semibold"
                              : "border-transparent text-gray-500 hover:text-[#0d2d47]"
                          }
                        `}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* tab body */}
                <div className="mt-4 text-sm md:text-[15px] text-gray-700 space-y-3">
                  {activeTab === "introduction" && <p>{introText}</p>}
                  {activeTab === "indications" && <p>{indicationsText}</p>}
                  {activeTab === "maintenance" && <p>{maintenanceText}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT INFORMATION */}
      <section className="bg-[#FFF8F5] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mb-6">
            Important Information
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {importantInfo.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                isOpen={openImportant === idx}
                onToggle={() =>
                  setOpenImportant((current) =>
                    current === idx ? null : idx
                  )
                }
                dark={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRECAUTIONS & SIDE EFFECTS */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] mb-6">
              Precautions and Side Effects
            </h2>

            <div className="space-y-4">
              {precautions.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  item={item}
                  isOpen={openPrecaution === idx}
                  onToggle={() =>
                    setOpenPrecaution((current) =>
                      current === idx ? null : idx
                    )
                  }
                  dark={idx === 0}
                />
              ))}
            </div>
          </div>

          {/* side image again for balance */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-4 bg-[#19a6b5]/6 rounded-3xl" />
              <div className="relative bg-white rounded-3xl border border-[#0d2d47]/10 p-5 flex items-center justify-center shadow-sm">
                <img
                  src={imgSrc}
                  alt={product.name}
                  className="w-full max-h-[260px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST OF PHARMACIES */}
      <section className="bg-[#FFF8F5] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d2d47] text-center mb-8">
            List of Pharmacies
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pharmacies.map((ph, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full border border-[#19a6b5] flex items-center justify-center mb-4">
                  <span className="text-xl text-[#19a6b5]">💊</span>
                </div>
                <p className="font-semibold text-[#0d2d47] mb-3 text-sm md:text-base">
                  {typeof ph === "string" ? ph : ph.name}
                </p>
                <button
                  type="button"
                  className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full border border-[#19a6b5] text-[#19a6b5] hover:bg-[#19a6b5] hover:text-white transition"
                >
                  Online Shopping
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
