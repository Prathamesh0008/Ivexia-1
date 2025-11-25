import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

export default function NewsDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>Article not found. Please return to home.</p>
      </div>
    );
  }

  // Sample related posts — ideally these come from your backend
  const relatedPosts = [
    {
      id: 2,
      title: "Sustainability in Pharma Manufacturing",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      date: "October 28, 2025",
    },
    {
      id: 3,
      title: "New Oncology Line Launch 2026",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e56?auto=format&fit=crop&w=800&q=80",
      date: "October 15, 2025",
    },
    {
      id: 1,
      title: "Ivexia Expands R&D in Biotech",
      image:
        "https://images.unsplash.com/photo-1581090467727-9737c1b1a83b?auto=format&fit=crop&w=800&q=80",
      date: "November 10, 2025",
    },
  ].filter((post) => post.id !== state.id);

  return (
    <>
      {/* <TopBar />
      <Navbar /> */}

      {/* === Hero Section === */}
      <section
        className="relative h-[60vh] flex flex-col justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(13,45,71,0.7), rgba(13,45,71,0.8)), url(${state.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center md:text-left">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-6 text-sm text-white/80 hover:text-white transition"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <p className="text-sm uppercase text-[#19a6b5] tracking-wide mb-2">
            {state.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            {state.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CalendarDays size={16} />
            <span>{state.date}</span>
          </div>
        </div>
      </section>

      {/* === Main Content === */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-gray-700">
          <p className="text-lg leading-relaxed mb-6">
            {state.content ||
              `Ivexia Pharmaceuticals continues to innovate across the healthcare spectrum.
              This initiative reinforces our long-term commitment to research, compliance,
              and sustainable manufacturing practices that ensure global accessibility and
              uncompromising quality. Our dedicated teams across R&D, manufacturing, and
              regulatory divisions collaborate closely to push the boundaries of
              pharmaceutical excellence.`}
          </p>

          <p className="leading-relaxed mb-6">
            Our core facilities operate under WHO-GMP and EU-GMP standards, integrating
            automation and precision manufacturing. Each division — APIs, Nutraceuticals,
            Biotech, and Oncology — represents a cornerstone of Ivexia’s mission: advancing
            science through integrity and purpose. We continually invest in modern
            infrastructure, digital systems, and green manufacturing protocols to drive
            a more sustainable, patient-focused future.
          </p>

          <p className="leading-relaxed mb-6">
            This new initiative complements our “Accord for a Healthier World,” an
            international commitment to improve healthcare accessibility across emerging
            regions including Europe, North Macedonia, India, and the Middle East.
          </p>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-[#FF7A00]/10 via-[#E2004F]/10 to-[#19a6b5]/10 p-6 rounded-xl border-l-4 border-[#E2004F] my-10">
            <h3 className="text-xl font-semibold text-[#0d2d47] mb-2">
              “At Ivexia, progress is precision-driven.”
            </h3>
            <p className="text-gray-700 text-sm">
              Every discovery, every formulation, and every capsule we produce is guided
              by science and responsibility — empowering healthier lives through innovation.
            </p>
          </div>

          <p className="leading-relaxed mb-6">
            With its upcoming product pipeline and partnerships, Ivexia aims to expand its
            oncology, biotech, and nutraceutical portfolios globally by 2030, continuing
            to set benchmarks in affordability, safety, and excellence.
          </p>
        </div>
      </section>

      {/* === Related Articles === */}
      <section className="bg-[#f8fafc] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2d47] mb-10 text-center">
            More from <span className="text-[#E2004F]">Ivexia</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                onClick={() => navigate(`/news/${post.id}`, { state: post })}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5">
                  <p className="text-xs uppercase text-[#19a6b5] font-medium mb-2">
                    {post.date}
                  </p>
                  <h4 className="text-lg font-semibold text-[#0d2d47] hover:text-[#E2004F] transition">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
