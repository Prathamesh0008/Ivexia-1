// src/components/MagArticleList.jsx
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/Products/IvexiaMag.css";

export default function MagArticleList({
  articles,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="mag-articles-wrapper" ref={wrapperRef}>
      <div className="mag-content-inner">
        {articles.map((article) => (
          <article key={article.slug} className="mag-card">
            <div
              className="mag-card-bg"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="mag-card-overlay">
                <div className="mag-card-meta">
                  <span className="mag-card-category">{article.category}</span>
                  <span className="mag-card-date">{article.date}</span>
                </div>

                <h2 className="mag-card-title">{article.title}</h2>

                <p className="mag-card-excerpt">{article.excerpt}</p>

                <Link
                  to={`/ivexia-mag/${article.slug}`}
                  className="mag-card-button"
                >
                  Read article
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mag-pagination">
          <button
            type="button"
            className="mag-page-btn"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={
                  "mag-page-btn" +
                  (page === currentPage ? " mag-page-btn--active" : "")
                }
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            className="mag-page-btn"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
