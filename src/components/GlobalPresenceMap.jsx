import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./LazyImage";

// 1) Put your real map later if you want — keep this for now
const WORLD_MAP =
  "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";

// 2) Pins for your highlighted countries (positions are % based)
//    You can tweak these easily later.
const PINS = [
  { name: "India", x: 66, y: 62, color: "#0d6efd" },
  { name: "North Macedonia", x: 52, y: 38, color: "#0d6efd" },
  { name: "Spain", x: 47, y: 39, color: "#0d6efd" },
  { name: "France", x: 49, y: 34, color: "#0d6efd" },
  { name: "United Kingdom", x: 47, y: 30, color: "#0d6efd" },

  // optional extra EU pins (same blue)
  { name: "Germany", x: 54, y: 33, color: "#0d6efd" },
  { name: "Italy", x: 54, y: 44, color: "#0d6efd" },
  { name: "Netherlands", x: 50.5, y: 31.5, color: "#0d6efd" },
];

export default function GlobalPresenceMap() {
  const [active, setActive] = useState(null);

  const pins = useMemo(() => PINS, []);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center px-6 mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47]">
          Global Presence
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Ivexia’s footprint spans strategic regions across Europe, the Balkans,
          and India — enabling compliant manufacturing and reliable exports.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        {/* Soft background glow */}
        <div className="absolute -inset-6 bg-gradient-to-r from-[#0d2d47]/5 via-[#19a6b5]/10 to-[#E2004F]/5 blur-3xl rounded-[40px]" />

        {/* Map */}
        <div className="relative rounded-[28px] md:rounded-[36px] border border-gray-100 shadow-xl bg-white overflow-hidden">
          <LazyImage
            src={WORLD_MAP}
            alt="Ivexia Global Map"
            className="w-full h-auto object-contain select-none"
          />

          {/* Pins */}
          {pins.map((p, i) => (
            <button
              key={p.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onMouseEnter={() => setActive(p)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(p)}
              onBlur={() => setActive(null)}
              aria-label={p.name}
            >
              {/* outer pulse ring */}
              <span className="absolute inset-0 rounded-full animate-ping bg-blue-500/40" />

              {/* pin dot */}
              <motion.span
                initial={{ scale: 0.9 }}
                animate={{ scale: active?.name === p.name ? 1.25 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 14 }}
                className="relative block w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-white shadow-lg"
                style={{ background: p.color }}
              />

              {/* tiny tail for premium look */}
              <span
                className="absolute left-1/2 top-full -translate-x-1/2 w-[2px] h-3 md:h-4 rounded-full opacity-80"
                style={{ background: p.color }}
              />
            </button>
          ))}

          {/* Tooltip */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="absolute z-20 px-3 py-2 rounded-xl shadow-lg bg-[#0d2d47] text-white text-xs md:text-sm whitespace-nowrap"
                style={{
                  left: `${active.x}%`,
                  top: `${active.y}%`,
                  transform: "translate(-50%, -130%)",
                }}
              >
                <div className="font-semibold">{active.name}</div>
                <div className="text-white/70">
                  Active Ivexia presence
                </div>

                {/* tooltip arrow */}
                <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0d2d47]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-6 text-xs md:text-sm text-gray-500">
          Hover on highlighted regions to explore Ivexia’s network.
        </div>
      </div>

      {/* Accent line */}
      <div className="mt-14 w-full h-1 bg-gradient-to-r from-[#FF7A00] via-[#E2004F] to-[#19a6b5]" />
    </section>
  );
}
