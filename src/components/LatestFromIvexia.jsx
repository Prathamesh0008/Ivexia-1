import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LatestFromIvexia() {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "Ivexia Expands R&D in Biotech",
      date: "November 10, 2025",
      category: "Research & Development",
      image:
        "https://images.unsplash.com/photo-1581090467727-9737c1b1a83b?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Ivexia strengthens its innovation footprint by expanding R&D capabilities in advanced biologics and biosimilar research.",
      content: `Ivexia Pharmaceuticals is establishing a state-of-the-art biotech research division to accelerate development of biologics and biosimilars, focusing on oncology and metabolic diseases. The expansion includes partnerships with leading global institutions and implementation of AI-driven drug discovery models.`,
    },
    {
      id: 2,
      title: "Sustainability in Pharma Manufacturing",
      date: "October 28, 2025",
      category: "Corporate Responsibility",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Our facilities are moving toward full Zero Liquid Discharge (ZLD) compliance, ensuring a greener tomorrow for healthcare manufacturing.",
      content: `Ivexia is integrating Zero Liquid Discharge (ZLD) systems across all major plants to ensure no wastewater leaves the site untreated. This sustainability initiative aligns with WHO and EU-GMP environmental benchmarks, reaffirming Ivexia’s leadership in responsible manufacturing.`,
    },
    {
      id: 3,
      title: "New Oncology Line Launch 2026",
      date: "October 15, 2025",
      category: "Product Innovation",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e56?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Ivexia announces the upcoming launch of its oncology formulations line, focusing on affordable and high-efficacy cancer care.",
      content: `Ivexia will introduce a dedicated oncology division in 2026, manufacturing affordable and advanced formulations targeting various cancers. The new line will feature targeted delivery systems and novel drug combinations developed by Ivexia’s R&D team.`,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* === Section Header === */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] mb-3">
          Latest from <span className="text-[#E2004F]">Ivexia</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Discover the latest updates, innovations, and milestones driving
          Ivexia’s mission toward precision, purity, and progress.
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#FF7A00] via-[#E2004F] to-[#19a6b5] mx-auto mt-5 rounded-full"></div>
      </div>

      {/* === Posts Grid === */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white shadow-md hover:shadow-2xl rounded-xl overflow-hidden transition-all duration-500 border border-gray-100 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40 hover:opacity-20 transition"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[260px]">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#19a6b5] font-medium mb-2">
                  {post.category}
                </p>
                <h3 className="text-lg font-semibold text-[#0d2d47] mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  <span>{post.date}</span>
                </div>
                <button
                  onClick={() => navigate(`/news/${post.id}`, { state: post })}
                  className="text-[#E2004F] font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300"
                >
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
