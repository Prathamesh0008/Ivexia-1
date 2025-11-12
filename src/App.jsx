import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Layout Wrapper handles DOM manipulation and page-based logic
function LayoutWrapper() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // === define which pages need full-screen layout (no nav/footer)
  const fullScreenRoutes = ["/login", "/register"];
  const hideLayout = fullScreenRoutes.includes(location.pathname);

  return (
    <div id="ivexia-app" className="min-h-screen flex flex-col bg-white text-[#0d2d47]">
      {/* === Shared Header Elements === */}
      {!hideLayout && <TopBar />}
      {!hideLayout && <Navbar />}

      {/* === Main Route Outlet === */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* full-page standalone routes */}
          <Route path="/login" element={<div className="p-20 text-center">Login Page</div>} />
          <Route path="/register" element={<div className="p-20 text-center">Register Page</div>} />
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
