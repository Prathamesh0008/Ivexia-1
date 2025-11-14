// src/pages/Products/Ingredient.jsx
import { useMemo, useState, useEffect } from "react";

import IngredientHero from "../../components/IngredientHero";
import IngredientStats from "../../components/IngredientStats";
import IngredientFilters from "../../components/IngredientFilters";
import IngredientGrid from "../../components/IngredientGrid";
import IngredientAccord from "../../components/IngredientAccord";
import IngredientQualityStrip from "../../components/IngredientQualityStrip";
import CustomerStrip from "../../components/CustomerStrip";

import INGREDIENTS from "../../data/ingredients";

export default function Ingredient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dosage, setDosage] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [page, setPage] = useState(1);

  // Responsive page size
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    function updatePageSize() {
      const w = window.innerWidth;

      if (w < 640) {
        setPageSize(4);     // mobile
      } else if (w < 1024) {
        setPageSize(8);     // tablet
      } else {
        setPageSize(12);    // desktop
      }
    }

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const categories = useMemo(
    () => ["All", ...new Set(INGREDIENTS.map((i) => i.category))],
    []
  );

  const dosages = useMemo(
    () => ["All", ...new Set(INGREDIENTS.flatMap((i) => i.dosageForms))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = INGREDIENTS.filter((i) => {
      const byQuery =
        !q ||
        i.name.toLowerCase().includes(q) ||
        (i.cas && i.cas.toLowerCase().includes(q)) ||
        i.synonyms?.join(" ").toLowerCase().includes(q);

      const byCat = category === "All" || i.category === category;
      const byDos = dosage === "All" || i.dosageForms.includes(dosage);

      return byQuery && byCat && byDos;
    });

    switch (sortBy) {
      case "name-asc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "category":
        list.sort(
          (a, b) =>
            a.category.localeCompare(b.category) ||
            a.name.localeCompare(b.name)
        );
        break;
      default:
        break;
    }

    return list;
  }, [query, category, dosage, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  const resetPage = () => setPage(1);

  return (
    <div>
      {/* Hero banner */}
      <IngredientHero />

      {/* Moving numbers */}
      <IngredientStats />

      {/* 3-box quality strip */}
      <IngredientQualityStrip />

      {/* Filters + heading */}
      <section className="bg-[#FFF8F5] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0d2d47] mb-6">
            List of API&apos;s Products
          </h2>

          <IngredientFilters
            query={query}
            setQuery={(v) => {
              setQuery(v);
              resetPage();
            }}
            categories={categories}
            category={category}
            setCategory={(v) => {
              setCategory(v);
              resetPage();
            }}
            dosages={dosages}
            dosage={dosage}
            setDosage={(v) => {
              setDosage(v);
              resetPage();
            }}
            sortBy={sortBy}
            setSortBy={(v) => {
              setSortBy(v);
              resetPage();
            }}
            total={filtered.length}
            onReset={() => {
              setQuery("");
              setCategory("All");
              setDosage("All");
              setSortBy("name-asc");
              resetPage();
            }}
          />
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#FFF8F5] pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <IngredientGrid
            items={current}
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </section>

      {/* FAQ */}
      <IngredientAccord />

      {/* Our Customers (above footer) */}
      <CustomerStrip />
    </div>
  );
}
