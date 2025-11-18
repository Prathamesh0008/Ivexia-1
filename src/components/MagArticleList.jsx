// src/components/MagArticleList.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MagArticleList({
  articles = [],
  currentPage,
  totalPages,
  onPageChange,
}) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Keep your smooth scroll-to-top for the list
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  const openArticle = (slug) => {
    navigate(`/ivexia-mag/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mag-articles-wrapper" ref={scrollRef}>
      <div className="mag-content-inner">
        {articles.map((article) => (
          <article key={article.id} className="mag-card">
            <div
              className="mag-card-bg"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="mag-card-overlay">
                <div className="mag-card-meta">
                  {article.category && (
                    <span className="mag-card-category">
                      {article.category}
                    </span>
                  )}
                  <span className="mag-card-date">{article.date}</span>
                </div>

                <h2 className="mag-card-title">{article.title}</h2>
                <p className="mag-card-excerpt">{article.excerpt}</p>

                <button
                  className="mag-card-button"
                  onClick={() => openArticle(article.slug)}
                >
                  Read more
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mag-pagination">
        {currentPage > 1 && (
          <button
            className="mag-page-btn"
            onClick={() => onPageChange(currentPage - 1)}
          >
            ‹ Previous
          </button>
        )}

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`mag-page-btn ${
                page === currentPage ? "mag-page-btn--active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}

        {currentPage < totalPages && (
          <button
            className="mag-page-btn"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next ›
          </button>
        )}
      </div>
    </section>
  );
}
