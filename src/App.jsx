// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Ingredient from "./pages/Products/Ingredient";
import ProductDetail from "./pages/Products/ProductDetail";
import FinishedProductDetail from "./pages/Products/FinishedProductDetail";
import IvexiaMag from "./pages/Products/IvexiaMag.jsx";
import IvexiaMagArticle from "./pages/Products/IvexiaMagArticle.jsx";
import SearchResults from "./pages/SearchResults.jsx";

// ✅ Layout Wrapper handles DOM manipulation and page-based logic
function LayoutWrapper() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // which pages need full-screen layout (no nav/footer)
  const fullScreenRoutes = ["/login", "/register"];
  const hideLayout = fullScreenRoutes.includes(location.pathname);

  return (
    <div
      id="ivexia-app"
      className="min-h-screen flex flex-col bg-white text-[#0d2d47]"
    >
      {/* === Shared Header Elements === */}
      {!hideLayout && <TopBar />}
      {!hideLayout && <Navbar />}

      {/* === Main Route Outlet === */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/ingredient" element={<Ingredient />} />
          <Route path="/portfolio/:slug" element={<ProductDetail />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<FinishedProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ivexia-mag" element={<IvexiaMag />} />
          <Route path="/ivexia-mag/:slug" element={<IvexiaMagArticle />} />
          <Route path="/search" element={<SearchResults />} />

          {/* full-page standalone routes */}
          <Route
            path="/login"
            element={<div className="p-20 text-center">Login Page</div>}
          />
          <Route
            path="/register"
            element={<div className="p-20 text-center">Register Page</div>}
          />
        </Routes>
      </main>

      {/* === Shared Footer === */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
