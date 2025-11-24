import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./LazyImage";

export default function GlobalNetwork() {
  const [active, setActive] = useState(null);

  // ===========================
  // FIXED: ALL COUNTRIES ADDED
  // ===========================
  const NODES = [
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

  // ===========================
  // SAFE CONNECTIONS (no errors)
  // ===========================
  const CONNECTIONS = [
    ["India", "North Macedonia"],
    ["North Macedonia", "Italy"],
    ["Italy", "France"],
    ["France", "Germany"],
    ["France", "Spain"],
    ["France", "UK"],
    ["Germany", "Poland"],
    ["Germany", "Netherlands"],
    ["Netherlands", "Belgium"],
    ["Belgium", "France"],
    ["France", "Portugal"],
  ];

  const findNode = (name) => NODES.find((n) => n.name === name);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47] mb-4">
        Ivexia Global Network
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Our pharmaceutical presence across Europe and Asia, connected with precision.
      </p>

      {/* Map Frame */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-200">

          {/* World Map */}
          <LazyImage
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            className="w-full select-none opacity-95"
          />

          {/* Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {CONNECTIONS.map(([a, b], index) => {
              const A = findNode(a);
              const B = findNode(b);
              if (!A || !B) return null;

              return (
                <motion.line
                  key={index}
                  x1={`${A.x}%`}
                  y1={`${A.y}%`}
                  x2={`${B.x}%`}
                  y2={`${B.y}%`}
                  stroke="#19a6b5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: index * 0.2 }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {NODES.map((n) => (
            <div
              key={n.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ top: `${n.y}%`, left: `${n.x}%` }}
              onMouseEnter={() => setActive(n)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="absolute w-5 h-5 bg-[#0d2d47]/40 rounded-full animate-ping" />
              <span className="relative block w-3.5 h-3.5 bg-[#0d2d47] rounded-full border-2 border-white shadow" />
            </div>
          ))}

          {/* Tooltip */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute bg-[#0d2d47] text-white text-sm px-3 py-1.5 rounded-lg shadow-lg"
                style={{
                  top: `${active.y}%`,
                  left: `${active.x}%`,
                  transform: "translate(-50%, -130%)",
                }}
              >
                {active.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
