import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

export default function IvexiaTechMap() {
  const nodes = [
    { name: "India", x: 72, y: 63 },
    { name: "North Macedonia", x: 54, y: 40 },
    { name: "Spain", x: 47, y: 43 },
    { name: "France", x: 49, y: 38 },
    { name: "United Kingdom", x: 47, y: 32 },
    { name: "Germany", x: 52, y: 35 },
    { name: "Italy", x: 52, y: 45 },
    { name: "Portugal", x: 45, y: 44 },
  ];

  const connections = [
    ["India", "North Macedonia"],
    ["North Macedonia", "Germany"],
    ["Germany", "France"],
    ["France", "United Kingdom"],
    ["France", "Spain"],
    ["Spain", "Portugal"],
    ["North Macedonia", "Italy"],
  ];

  const getNodeByName = (name) => nodes.find((n) => n.name === name);

  return (
    <section className="py-20 md:py-32 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d2d47]">
        Ivexia Global Technology Network
      </h2>
      <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
        A connected ecosystem of manufacturing, regulatory and R&D excellence.
      </p>

      <div className="relative max-w-6xl mx-auto px-6 select-none">
        {/* MAP */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
          <LazyImage
            src="https://i.imgur.com/M9ys2Xb.jpeg"
            className="w-full object-cover opacity-90"
          />

          {/* LINES */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map(([from, to], i) => {
              const A = getNodeByName(from);
              const B = getNodeByName(to);
              if (!A || !B) return null;

              return (
                <motion.line
                  key={i}
                  x1={`${A.x}%`}
                  y1={`${A.y}%`}
                  x2={`${B.x}%`}
                  y2={`${B.y}%`}
                  stroke="#19a6b5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: i * 0.3 }}
                />
              );
            })}
          </svg>

          {/* NODES */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${node.y}%`, left: `${node.x}%` }}
            >
              <div className="w-6 h-6 bg-[#19a6b5]/40 rounded-full blur-sm absolute animate-ping"></div>
              <div className="w-3.5 h-3.5 bg-[#0d2d47] border-2 border-white rounded-full shadow-md"></div>

              <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0d2d47] text-white px-2 py-1 rounded-md text-xs shadow">
                {node.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
