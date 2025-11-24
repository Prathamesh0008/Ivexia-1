import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

export default function IvexiaPresence() {
  const LOCATIONS = [
    { name: "India", x: 72, y: 63 },
    { name: "North Macedonia", x: 54, y: 40 },
    { name: "Spain", x: 47, y: 43 },
    { name: "France", x: 49, y: 38 },
    { name: "United Kingdom", x: 47, y: 32 },
    { name: "Germany", x: 52, y: 35 },
    { name: "Italy", x: 52, y: 45 },
    { name: "Portugal", x: 45, y: 44 },
    { name: "Greece", x: 55, y: 48 },
    { name: "Poland", x: 54, y: 32 },
    { name: "Netherlands", x: 50, y: 33 },
    { name: "Sweden", x: 52, y: 26 },
    { name: "Finland", x: 56, y: 22 },
    { name: "Norway", x: 48, y: 24 },
    { name: "Austria", x: 52, y: 38 },
    { name: "Switzerland", x: 49, y: 40 },
    { name: "Czech Republic", x: 53, y: 36 },
    { name: "Belgium", x: 48, y: 36 },
    { name: "Denmark", x: 49, y: 30 },
    { name: "Ireland", x: 45, y: 32 },
    { name: "Hungary", x: 54, y: 40 },
    { name: "Croatia", x: 53, y: 44 }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47]">
        Ivexia Global Pharmaceutical Network
      </h2>
      <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
        Our internationally expanding footprint across Europe & Asia.
      </p>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Map Frame */}
        <div className="relative overflow-hidden border border-gray-200 rounded-3xl shadow-xl bg-[#f5f8fb]">

          {/* Background Map */}
          <LazyImage
            src="https://i.imgur.com/M9ys2Xb.jpeg"   /* clean dark-blue world map */
            className="w-full object-cover opacity-95"
          />

          {/* Pins */}
          {LOCATIONS.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
            >
              {/* Outer glow */}
              <div className="w-6 h-6 bg-[#19a6b5]/40 rounded-full absolute animate-ping"></div>

              {/* Pin */}
              <div className="relative w-3.5 h-3.5 bg-[#0d2d47] border-2 border-white rounded-full shadow-md"></div>

              {/* Label */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#0d2d47] text-white text-xs rounded-md shadow">
                {loc.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
