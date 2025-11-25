// src/pages/Products/IvexiaMagArticle.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./IvexiaMagArticle.css";
import { useTranslation } from "react-i18next";

// Hero images
import geneTherapyImg from "../../assets/logo/article/gene-therapy.jpg";
import aiMedicineImg from "../../assets/logo/article/ai-medicine.jpg";
import personalizedImg from "../../assets/logo/article/personalized-medicine.jpg";
import womensDayImg from "../../assets/logo/article/womens-day.jpg";
import obesityImg from "../../assets/logo/article/obesity1.jpg";
import diabetesKidneyImg from "../../assets/logo/article/diabetes-kidney-1.jpg";

// Map slugs → images
const IMAGE_MAP = {
  "gene-therapy-emerging-science": geneTherapyImg,
  "power-of-ai-medical-industry": aiMedicineImg,
  "personalized-medicine-basics": personalizedImg,
  "international-womens-day-healthcare": womensDayImg,
  "what-is-obesity-how-to-overcome-it": obesityImg,
  "diabetes-kidney-disease-6": diabetesKidneyImg,
};

export default function IvexiaMagArticle() {
  // use the 'common' namespace where your magazine JSON lives
  const { t, i18n } = useTranslation("common");
  
  const { slug } = useParams();

  // Replace the existing resolveArticle function with this
const resolveArticle = () => {
  // 1) Try detailed article object under ivexiaMag.<slug>
  const direct = t(`ivexiaMag.${slug}`, { returnObjects: true });

  // helper to check if an object looks like a full article (has sections or readTime or heroCaption or category)
  const isFullArticle = (obj) =>
    obj && typeof obj === "object" && (Array.isArray(obj.sections) || obj.readTime || obj.heroCaption || obj.category);

  if (isFullArticle(direct)) return direct;

  // If direct is a simple string (title) or partial object, we will try to merge with other sources.
  let merged = null;

  // If direct is a string -> treat as title
  if (typeof direct === "string" && direct.trim()) {
    merged = { title: direct };
  } else if (direct && typeof direct === "object" && direct.title) {
    merged = { ...direct }; // partial object (has title/date maybe)
  }

  // 2) Try articles array under ivexiaMag.articles (list form)
  const articlesArr = t("ivexiaMag.articles", { returnObjects: true });
  if (Array.isArray(articlesArr) && articlesArr.length) {
    const found = articlesArr.find((a) => a.slug === slug);
    if (found) merged = { ...(merged || {}), ...found };
  }

  // 3) Legacy keys: articles.<slug> or ivexiaMagArticle.articles.<slug>
  const alt1 = t(`articles.${slug}`, { returnObjects: true });
  if (!isFullArticle(merged) && alt1 && typeof alt1 === "object" && (alt1.title || alt1.sections)) {
    merged = { ...(merged || {}), ...alt1 };
  }

  const alt2 = t(`ivexiaMagArticle.articles.${slug}`, { returnObjects: true });
  if (!isFullArticle(merged) && alt2 && typeof alt2 === "object" && (alt2.title || alt2.sections)) {
    merged = { ...(merged || {}), ...alt2 };
  }

  // If any merged result already contains sections, return it
  if (isFullArticle(merged)) return merged;

  // 4) Fallback to English bundle if available (try to get full article)
  try {
    if (i18n.hasResourceBundle && i18n.hasResourceBundle("en", "common")) {
      const en = i18n.getResourceBundle("en", "common");
      if (en?.ivexiaMag?.[slug] && en.ivexiaMag[slug].title) return en.ivexiaMag[slug];
      if (Array.isArray(en?.ivexiaMag?.articles)) {
        const foundEn = en.ivexiaMag.articles.find((a) => a.slug === slug);
        if (foundEn) merged = { ...(merged || {}), ...foundEn };
      }
      if (en?.articles?.[slug] && en.articles[slug].title) merged = { ...(merged || {}), ...en.articles[slug] };
    }
  } catch (err) {
    // ignore
  }

  // Finally, return merged (could be partial) or null
  return merged || null;
};

  // Resolve article on each render (this will update automatically when language changes, because useTranslation triggers re-render)
  const article = resolveArticle();

  const [recentSlugs, setRecentSlugs] = useState([]);

  useEffect(() => {
    try {
      const STORAGE = "ivexiaRecentArticles";
      const raw = localStorage.getItem(STORAGE);
      let list = [];

      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      }

      list = list.filter((s) => s !== slug);
      list.unshift(slug);
      if (list.length > 4) list = list.slice(0, 4);

      localStorage.setItem(STORAGE, JSON.stringify(list));

      setRecentSlugs(list.slice(1, 4)); // skip current article
    } catch (e) {
      // ignore
      setRecentSlugs([]);
    }
  }, [slug]);

  // If invalid slug after all fallbacks, show not found
  if (!article || !article.title) {
    return (
      <div className="mag-article-page">
        <h1>{t("articles.notFound") || "Article not found"}</h1>
        <Link to="/ivexia-mag">← {t("articles.backToMag") || "Back to magazine"}</Link>
      </div>
    );
  }

  // Helper to resolve recent title using same priority
  const resolveRecentTitle = (s) => {
    // 1) ivexiaMag.<s>
    const d1 = t(`ivexiaMag.${s}`, { returnObjects: true });
    if (d1 && d1.title) return d1.title;

    // 2) ivexiaMag.articles
    const arr = t("ivexiaMag.articles", { returnObjects: true });
    if (Array.isArray(arr)) {
      const f = arr.find((a) => a.slug === s);
      if (f && f.title) return f.title;
    }

    // 3) legacy
    const a1 = t(`articles.${s}`, { returnObjects: true });
    if (a1 && a1.title) return a1.title;
    const a2 = t(`ivexiaMagArticle.articles.${s}`, { returnObjects: true });
    if (a2 && a2.title) return a2.title;

    // 4) english fallback
    try {
      if (i18n.hasResourceBundle && i18n.hasResourceBundle("en", "common")) {
        const en = i18n.getResourceBundle("en", "common");
        if (en?.ivexiaMag?.[s]?.title) return en.ivexiaMag[s].title;
        if (Array.isArray(en?.ivexiaMag?.articles)) {
          const fe = en.ivexiaMag.articles.find((a) => a.slug === s);
          if (fe && fe.title) return fe.title;
        }
        if (en?.articles?.[s]?.title) return en.articles[s].title;
      }
    } catch (err) {
      /* ignore */
    }

    // fallback to slug
    return s;
  };

  return (
    <div className="mag-article-page">
      <div className="mag-article-container">
        {/* Breadcrumb */}
        <p className="mag-article-breadcrumb">
          {t("articles.breadcrumb.home") || "Home"} / Ivexia Mag / <span>{article.title}</span>
        </p>

        {/* Header */}
        <header className="mag-article-header">
          <h1 className="mag-article-title">{article.title}</h1>
          <div className="mag-article-meta">
            {article.category && <span className="mag-article-chip">{article.category}</span>}
            {article.category && <span className="mag-article-dot">•</span>}
            {article.date && <span>{article.date}</span>}
            {article.readTime && (
              <>
                <span className="mag-article-dot">•</span>
                <span>{article.readTime}</span>
              </>
            )}
          </div>
        </header>

        {/* Hero */}
        <div className="mag-article-hero">
          {IMAGE_MAP[slug] ? (
            <img src={IMAGE_MAP[slug]} alt={article.title} className="mag-article-hero-img" />
          ) : null}
          {article.heroCaption && <p className="mag-article-hero-caption">{article.heroCaption}</p>}
        </div>

        {/* Body */}
        <div className="mag-article-layout">
          <article className="mag-article-body">
            {article.sections?.map((section) => (
              <div key={section.id} className="mag-section">
                {section.heading && <h2>{section.heading}</h2>}
                {section.subheading && <h3>{section.subheading}</h3>}
                {section.title && <h3>{section.title}</h3>}

                {section.paragraphs && section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

                {section.items && (
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.list?.items && (
                  <ul>
                    {section.list.items.map((it, idx) => (
                      <li key={idx}>{it}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mag-article-back">
              <Link to="/ivexia-mag" className="mag-article-back-link">
                ← {t("articles.backToMag") || "Back to magazine"}
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="mag-article-sidebar">
            <div className="mag-sidebar-card">
              <p className="mag-sidebar-label">{t("articles.recentlyViewed") || "Recently viewed"}</p>

              <ul className="mag-sidebar-list">
                {recentSlugs.map((s) => {
                  const recentTitle = resolveRecentTitle(s);
                  return (
                    <li key={s} className="mag-sidebar-item">
                      <Link to={`/ivexia-mag/${s}`} className="mag-sidebar-link">
                        {recentTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mag-sidebar-card mag-sidebar-newsletter">
              <p className="mag-sidebar-news-title">{t("articles.stayInKnow") || "Stay in the know"}</p>

              <p className="mag-sidebar-news-text">{t("articles.newsDescription") || ""}</p>

              <Link to="/contact" className="mag-sidebar-btn">
                {t("articles.getInsights") || "Get insights"}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}