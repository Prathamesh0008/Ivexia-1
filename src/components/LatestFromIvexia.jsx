import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LatestFromIvexia() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  // Make sure returnObjects is true
  const posts = t("latestNews.posts", { returnObjects: true });

  // Debug: check if posts are loaded correctly
  console.log("Posts loaded:", posts);

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] mb-3">
          {t("latestNews.sectionTitle")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          {t("latestNews.sectionDesc")}
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-[#FF7A00] via-[#E2004F] to-[#19a6b5] mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white shadow-md hover:shadow-2xl rounded-xl overflow-hidden transition-all duration-500 border border-gray-100 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40 hover:opacity-20 transition"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between min-h-[260px]">
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
                  {t("latestNews.readMore")} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
