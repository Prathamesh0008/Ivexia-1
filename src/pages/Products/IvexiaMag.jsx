// src/pages/Products/IvexiaMag.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MagSidebar from "../../components/MagSidebar.jsx";
import MagArticleList from "../../components/MagArticleList.jsx";
import "./IvexiaMag.css";

// hero images
import geneTherapyImg from "../../assets/logo/article/gene-therapy.jpg";
import aiMedicineImg from "../../assets/logo/article/ai-medicine.jpg";
import obesityImg from "../../assets/logo/article/obesity1.jpg";
import personalizedImg from "../../assets/logo/article/personalized-medicine.jpg";
import womensDayImg from "../../assets/logo/article/womens-day.jpg";
import diabetesKidneyImg from "../../assets/logo/article/diabetes-kidney-2.jpg";

// image mapping
const IMAGE_MAP = {
  "gene-therapy-emerging-science": geneTherapyImg,
  "power-of-ai-medical-industry": aiMedicineImg,
  "what-is-obesity-how-to-overcome-it": obesityImg,
  "personalized-medicine-basics": personalizedImg,
  "international-womens-day-healthcare": womensDayImg,
  "diabetes-kidney-disease-6": diabetesKidneyImg,
};

export default function IvexiaMag() {
  const { t, i18n } = useTranslation("common");
  const location = useLocation();

  // FIX: memoize articles so they don't trigger infinite re-renders
  const articlesData = useMemo(
    () => t("ivexiaMag.articles", { returnObjects: true }) || [],
    [i18n.language]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const [recentArticles, setRecentArticles] = useState([]);

  // read category filter
  const params = new URLSearchParams(location.search);
  const categoryFilter = params.get("category");

  // filter
  let visibleArticles = articlesData;
  if (categoryFilter === "news") {
    visibleArticles = articlesData.filter((a) => a.tag === "news");
  } else if (categoryFilter === "health") {
    visibleArticles = articlesData.filter((a) => a.tag === "health");
  }

  const totalPages = Math.ceil(visibleArticles.length / articlesPerPage) || 1;

  // paginate
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = visibleArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // reset page on category change
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter]);

  // load recent articles safely
  useEffect(() => {
    try {
      const raw = localStorage.getItem("ivexiaRecentArticles");
      if (!raw) {
        setRecentArticles([]);
        return;
      }

      const slugs = JSON.parse(raw);
      if (!Array.isArray(slugs)) {
        setRecentArticles([]);
        return;
      }

      const mapped = slugs
        .map((slug) => articlesData.find((a) => a.slug === slug))
        .filter(Boolean)
        .slice(0, 3);

      setRecentArticles(mapped);
    } catch {
      setRecentArticles([]);
    }
  }, [location.key, i18n.language]); // FIX: only re-run on navigation or language change

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="mag-page">
      <div className="mag-header">
        <h1 className="mag-title">{t("ivexiaMag.title")}</h1>
        <p className="mag-subtitle">{t("ivexiaMag.subtitle")}</p>
      </div>

      <div className="mag-layout">
        <MagSidebar recentArticles={recentArticles} />

        <MagArticleList
          articles={paginatedArticles.map((a) => ({
            ...a,
            image: IMAGE_MAP[a.slug] || a.image,
          }))}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}