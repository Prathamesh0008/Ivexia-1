// src/pages/Products/FinishedProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FINISHED_PRODUCTS from "../../data/finishedProducts"; // your data
import fallbackImage from "../../assets/logo/medicineproduct.jpg"; // same image as overview

// 🔹 Single accordion item – light by default, turns blue on hover
function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="
        rounded-md overflow-hidden 
        border border-transparent 
        bg-[#edf4ff]
        transition-all duration-300
      "
    >
      <button
        type="button"
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between 
          px-4 md:px-5 py-3 
          text-left 
          text-[#0d2d47] 
          font-semibold
          transition-all duration-300
          hover:bg-[#0d2d47] hover:text-white
        `}
      >
        <span className="text-sm md:text-base flex-1">
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
  const [openImportant, setOpenImportant] = useState(null);
  const [openPrecaution, setOpenPrecaution] = useState(null);

  // Always scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // ✅ If product not found – clean Ivexia UI
  if (!product) {
    return (
      <section className="bg-[#FFF8F5] min-h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47]">
            We couldn&apos;t find this product
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-700">
            The product you&apos;re trying to open is not available in our
            finished pharmaceuticals yet.
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

  // ================== Content & fallbacks ==================
  const imgSrc = product.image || fallbackImage;

  const introText =
    product.introduction ||
    product.description ||
    "This finished dosage product is manufactured under strict GMP conditions with full regulatory and quality support available for partners.";

  const indicationsText =
    product.indications ||
    "Indications will be aligned with the approved label and target markets.";

  const maintenanceText =
    product.maintenance ||
    "Storage and maintenance instructions will follow the official pack insert and stability data.";

  const importantInfo =
    product.importantInfo && product.importantInfo.length
      ? product.importantInfo
      : [
          {
            q: "How should I use this product?",
            a: "Use the recommended dose with water, preferably at the same time each day, or as directed by your physician.",
          },
          {
            q: "Can I use it during pregnancy or breastfeeding?",
            a: "Only under medical supervision if the benefits clearly outweigh the risks.",
          },
          {
            q: "What if I miss a dose?",
            a: "Take it as soon as you remember unless it is almost time for the next dose. Do not double the dose.",
          },
          {
            q: "What if I accidentally take too much?",
            a: "Seek immediate medical advice or contact your local poison centre.",
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
            a: "Patients with chronic diseases or multiple medications should consult their doctor before starting treatment.",
          },
          {
            q: "Possible side effects",
            a: "Mild gastrointestinal discomfort, headache or dizziness may occur in some patients. Stop treatment and consult a doctor if symptoms persist.",
          },
        ];

  const pharmacies =
    product.pharmacies && product.pharmacies.length
      ? product.pharmacies
      : [
          "Partner Pharmacy 1",
          "Partner Pharmacy 2",
          "Hospital Pharmacy",
          "Online Partner",
          "Retail Chain A",
          "Retail Chain B",
        ];

  // ================== UI ==================
  return (
    <>
      {/* TOP HERO + TABS */}
      <section className="bg-[#FFF8F5] pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-10 pb-12 md:pb-14">
          {/* Breadcrumbs */}
          <nav className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
            <Link to="/" className="text-[#0d2d47] hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/products" className="text-[#0d2d47] hover:underline">
              Pharmaceutical Products
            </Link>{" "}
            / <span>{product.name}</span>
          </nav>

          <div className=" bg-white border border-gray-100 shadow-sm px-5 md:px-10 py-8 md:py-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
              {/* Image left */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#19a6b5]/12 via-[#FF7A00]/8 to-[#E2004F]/8 rounded-3xl blur-sm" />
                  <div className="relative rounded-3xl bg-white border border-[#0d2d47]/10 p-6 flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt={product.name}
                      className="w-full max-h-[320px] object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Text + tabs right */}
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

                {/* Tabs: Introduction / Indications / Maintenance */}
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
                          pb-2 -mb-px border-b-2
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

                <div className="mt-4 text-sm md:text-[15px] text-gray-700 space-y-3">
                  {activeTab === "introduction" && <p>{introText}</p>}
                  {activeTab === "indications" && <p>{indicationsText}</p>}
                  {activeTab === "maintenance" && <p>{maintenanceText}</p>}
                </div>

                {/* Dosage forms + Request quote button */}
                {product.dosageForm && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-[#0d2d47] mb-1">
                      Dosage Form
                    </h3>
                    <p className="text-sm text-gray-700">
                      {product.dosageForm}
                    </p>
                  </div>
                )}

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="
                      inline-flex items-center justify-center
                      px-5 py-2.5 rounded-full
                      text-sm font-semibold
                      bg-gradient-to-r from-[#0d2d47] to-[#19a6b5]
                      text-white hover:opacity-90
                    "
                  >
                    Request quote
                  </Link>
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
                  setOpenImportant(openImportant === idx ? null : idx)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRECAUTIONS + SIDE EFFECTS */}
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
                    setOpenPrecaution(openPrecaution === idx ? null : idx)
                  }
                />
              ))}
            </div>
          </div>

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
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2d47] text-center mb-8">
            List of Pharmacies
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pharmacies.map((ph, idx) => (
              <div
                key={idx}
                className="
                  flex flex-col items-center text-center
                  py-4
                "
              >
                {/* Just icon, no white card/border background */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">💊</span>
                </div>
                <p className="font-semibold text-[#0d2d47] mb-2 text-sm md:text-base">
                  {typeof ph === "string" ? ph : ph.name}
                </p>
                {/* Button kept simple, no big card-style container */}
                <button
                  type="button"
                  className="
                    text-xs md:text-sm font-semibold
                    px-4 py-2 rounded-full
                    border border-[#19a6b5] text-[#19a6b5]
                    hover:bg-[#19a6b5] hover:text-white
                    transition
                  "
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
