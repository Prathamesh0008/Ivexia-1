// src/pages/Products/IvexiaMag.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MagSidebar from "../../components/MagSidebar.jsx";
import MagArticleList from "../../components/MagArticleList.jsx";
import "./IvexiaMag.css";

// ✅ import hero images (adjust paths if needed)
import geneTherapyImg from "../../assets/logo/article/gene-therapy.jpg";
import aiMedicineImg from "../../assets/logo/article/ai-medicine.jpg";
import obesityImg from "../../assets/logo/article/obesity1.jpg";
import personalizedImg from "../../assets/logo/article/personalized-medicine.jpg";
import womensDayImg from "../../assets/logo/article/womens-day.jpg";
import diabetesKidneyImg from "../../assets/logo/article/diabetes-kidney-2.jpg"; // or 1.jpg depending on your file

// ✅ Core article data + simple tag for filtering
const articles = [
  {
    id: 1,
    slug: "gene-therapy-emerging-science",
    date: "May 13, 2024",
    category: "Emerging Science",
    title: "How Gene Therapy Is Transforming Modern Treatment",
    excerpt:
      "Gene therapy is moving from concept to clinic, offering targeted ways to correct genetic issues instead of only managing symptoms.",
    image: geneTherapyImg,
    tag: "health", // 👈 appears in Health Magazine
  },
  {
    id: 2,
    slug: "power-of-ai-medical-industry",
    date: "May 11, 2024",
    category: "Digital Health & AI",
    title: "The Power of AI in the Medical Industry: 4 Things to Know",
    excerpt:
      "Artificial intelligence is reshaping diagnostics, workflows and decision-making across hospitals and pharma companies.",
    image: aiMedicineImg,
    tag: "health", // 👈 health content
  },
  {
    id: 3,
    slug: "what-is-obesity-how-to-overcome-it",
    date: "March 9, 2024",
    category: "Metabolic Health",
    title: "What Is Obesity—and How Do You Really Overcome It?",
    excerpt:
      "Obesity is influenced by biology, environment and lifestyle. Long-term management needs structure, not just short diets.",
    image: obesityImg,
    tag: "health",
  },
  {
    id: 4,
    slug: "personalized-medicine-basics",
    date: "March 3, 2024",
    category: "Personalized Medicine",
    title: "Personalized Medicine: Treatments Tailored to Each Patient",
    excerpt:
      "By using genetics, biomarkers and clinical data, personalized medicine aims to choose the right treatment for the right person at the right time.",
    image: personalizedImg,
    tag: "health",
  },
  {
    id: 5,
    slug: "international-womens-day-healthcare",
    date: "February 21, 2024",
    category: "People & Culture",
    title: "In Honor of International Women’s Day",
    excerpt:
      "Women scientists, clinicians and leaders drive critical advances in healthcare. Recognizing their work is part of building a better system.",
    image: womensDayImg,
    tag: "news", // 👈 treat this as News
  },
  {
    id: 6,
    // ✅ keep ONLY ONE kidney article
    slug: "diabetes-kidney-disease-6",
    date: "December 4, 2023",
    category: "Diabetes & Kidneys",
    title: "Does Diabetes Increase the Risk of Kidney Disease?",
    excerpt:
      "Chronically high blood sugar can damage the tiny blood vessels in the kidneys. Understanding this link early matters.",
    image: diabetesKidneyImg,
    tag: "health",
  },
];

export default function IvexiaMag() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3; // 3 per page like before

  // 🔍 Read ?category=news | health
  const params = new URLSearchParams(location.search);
  const categoryFilter = params.get("category"); // "news", "health" or null

  // 🎯 Filter based on tag
  let visibleArticles = articles;
  if (categoryFilter === "news") {
    visibleArticles = articles.filter((a) => a.tag === "news");
  } else if (categoryFilter === "health") {
    visibleArticles = articles.filter((a) => a.tag === "health");
  }

  const totalPages = Math.ceil(visibleArticles.length / articlesPerPage) || 1;

  // 📄 Pagination on filtered list
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = visibleArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // ⏫ Reset page to 1 when filter changes (e.g. News → Health)
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="mag-page">
      <div className="mag-header">
        <p className="mag-breadcrumb">Home / Ivexia Mag</p>
        <h1 className="mag-title">Ivexia Mag</h1>
        <p className="mag-subtitle">
          Insights, stories and perspectives from the world of pharmaceuticals,
          innovation and healthcare.
        </p>
      </div>

      <div className="mag-layout">
        {/* LEFT: sidebar always shows ALL recent articles */}
        <MagSidebar articles={articles} />

        {/* RIGHT: list shows filtered + paginated articles */}
        <MagArticleList
          articles={paginatedArticles}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
