// src/components/MagSidebar.jsx
import React from "react";

export default function MagSidebar({ articles = [] }) {
  return (
    <aside className="mag-sidebar">
      <h2 className="mag-sidebar-title">Recent Articles</h2>

      <ul className="mag-recent-list">
        {articles.map((article) => (
          <li key={article.id} className="mag-recent-item">
            <span className="mag-recent-date">{article.date}</span>
            <button className="mag-recent-link">
              {article.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
