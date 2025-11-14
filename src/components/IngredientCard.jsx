// src/components/IngredientCard.jsx
import capsuleBg from "../assets/logo/capsule1.jpg";

export default function IngredientCard({ item }) {
  return (
    <article
      className="
        group relative rounded-none overflow-hidden
        border border-gray-200 shadow-sm
        transition p-0 
        min-h-[260px] h-full
      "
      style={{
        backgroundImage: `url(${capsuleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* FIXED OVERLAY - NO HOVER CHANGE */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] transition"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full p-6">

        <div className="flex-1">
          <header className="border-b border-gray-300 pb-3 mb-3">
            <h3 className="text-lg md:text-xl font-semibold text-[#0d2d47] leading-snug">
              {item.name}
            </h3>

            {item.category && (
              <p className="mt-1 text-sm font-medium text-[#0d1b2a]">
                {item.category}
              </p>
            )}
          </header>

          {item.cas && (
            <p className="text-sm text-[#333]">
              <span className="font-semibold">CAS:</span> {item.cas}
            </p>
          )}

          {item.synonyms?.length > 0 && (
            <p className="mt-2 text-sm text-[#2b2b2b] line-clamp-2">
              <span className="font-semibold">Synonyms:</span>{" "}
              {item.synonyms.join(", ")}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {item.dosageForms.map((d) => (
              <span
                key={d}
                className="text-xs px-2 py-1 border border-gray-300 bg-white/70 text-[#111]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <a
            href={`/portfolio/${item.slug}`}
            className="
              inline-flex items-center gap-1
              text-white text-sm font-semibold px-4 py-2
              bg-gradient-to-r from-[#FF7A00] to-[#E2004F]
              shadow-md hover:opacity-90 transition
            "
          >
            View Details →
          </a>
        </div>

      </div>
    </article>
  );
}
