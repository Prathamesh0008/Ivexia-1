// src/components/MagSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../pages/Products/IvexiaMag.css";

export default function MagSidebar({ recentArticles }) {
  return (
    <aside className="mag-sidebar">
      <p className="mag-breadcrumb">Ivexia Mag</p>

      <h2 className="mag-sidebar-title">Recent articles</h2>

      {recentArticles && recentArticles.length > 0 ? (
        <ul className="mag-recent-list">
          {recentArticles.map((article) => (
            <li key={article.slug} className="mag-recent-item">
              <span className="mag-recent-date">{article.date}</span>
              <Link
                to={`/ivexia-mag/${article.slug}`}
                className="mag-recent-link"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mag-sidebar-empty">
          Open any article — it will show up here as a recent read.
        </p>
      )}

      <button type="button" className="mag-sidebar-btn">
        <Link to="/contact">Get Ivexia insights</Link>
      </button>
    </aside>
  );
}
