// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
import Breadcrumbs from "./components/Breadcrumbs";

// scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();

  const fullScreenRoutes = ["/login", "/register"];
  const hideLayout = fullScreenRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <TopBar />}
      {!hideLayout && <Navbar />}
      {!hideLayout && <Breadcrumbs />}

      <main className="flex-grow min-h-screen bg-white text-[#0d2d47]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/ingredient" element={<Ingredient />} />
          <Route path="/portfolio/:slug" element={<ProductDetail />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<FinishedProductDetail />} />
          <Route path="/products/category/:categorySlug" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ivexia-mag" element={<IvexiaMag />} />
          <Route path="/ivexia-mag/:slug" element={<IvexiaMagArticle />} />
          <Route path="/search" element={<SearchResults />} />

          {/* Standalone full-page routes */}
          <Route
            path="/login"
            element={<div className="p-20 text-center">Login Page</div>}
          />
          <Route
            path="/register"
            element={<div className="p-20 text-center">Register Page</div>}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<div className="p-20 text-center">404 - Page Not Found</div>}
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}