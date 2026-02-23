//src\pages\Products\Ingredient.jsx
import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import IngredientHero from "../../components/IngredientHero";
import IngredientStats from "../../components/IngredientStats";
import IngredientFilters from "../../components/IngredientFilters";
import IngredientGrid from "../../components/IngredientGrid";
import IngredientAccord from "../../components/IngredientAccord";
import IngredientQualityStrip from "../../components/IngredientQualityStrip";
import CustomerStrip from "../../components/CustomerStrip";

import INGREDIENTS from "../../data/ingredients";

export default function Ingredient() {
  const { t } = useTranslation();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dosage, setDosage] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [page, setPage] = useState(1);

  // Responsive sizing
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => { 
    function updatePageSize() {
      const w = window.innerWidth;
      if (w < 640) setPageSize(4);
      else if (w < 1024) setPageSize(8);
      else setPageSize(12);
    }

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => setPage(1), [pageSize]);

  // Translated categories
  const categories = useMemo(() => {
    const unique = new Set();
    INGREDIENTS.forEach((i) => {
      unique.add(i.categoryKey);
    });

    return ["All", ...Array.from(unique)];
  }, []);

  // Translated dosage forms
  const dosages = useMemo(() => {
    const unique = new Set();
    INGREDIENTS.forEach((i) => {
      i.dosageKeys.forEach((d) => unique.add(d));
    });

    return ["All", ...Array.from(unique)];
  }, []);

  // Final filtering
  const filtered = useMemo(() => {
  const q = query.trim().toLowerCase();

  let list = INGREDIENTS.filter((i) => {
    const name = t(i.nameKey).toLowerCase();
    const desc = t(i.descKey).toLowerCase();

    const matchQuery =
      !q ||
      name.includes(q) ||
      desc.includes(q) ||
      (i.cas && i.cas.toLowerCase().includes(q));

    // IMPORTANT FIX → use raw keys
    const matchCategory =
      category === "All" || i.categoryKey === category;

    const matchDosage =
      dosage === "All" || i.dosageKeys.includes(dosage);

    return matchQuery && matchCategory && matchDosage;
  });

  // SORTING
  switch (sortBy) {
    case "name-asc":
      list.sort((a, b) => t(a.nameKey).localeCompare(t(b.nameKey)));
      break;
    case "name-desc":
      list.sort((a, b) => t(b.nameKey).localeCompare(t(a.nameKey)));
      break;
    case "category":
      list.sort(
        (a, b) =>
          t(a.categoryKey).localeCompare(t(b.categoryKey)) ||
          t(a.nameKey).localeCompare(t(b.nameKey))
      );
      break;
  }

  return list;
}, [query, category, dosage, sortBy, t]);


  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / pageSize)
  );

  const current = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div>
      <IngredientHero />
      <IngredientStats />
      <IngredientQualityStrip />

      {/* Filters */}
      <section className="bg-[#FFF8F5] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0d2d47] mb-6">
            {t("ingredient.heading")}
          </h2>

          <IngredientFilters
            query={query}
            setQuery={(v) => {
              setQuery(v);
              setPage(1);
            }}
            categories={categories.map((c) =>
              c === "All" ? "All" : t(c)
            )}
            category={category}
            setCategory={(v) => {
              setCategory(v === "All" ? "All" : categories.find((key) => t(key) === v));
              setPage(1);
            }}
            dosages={dosages.map((d) =>
              d === "All" ? "All" : t(d)
            )}
            dosage={dosage}
            setDosage={(v) => {
              setDosage(v === "All" ? "All" : dosages.find((key) => t(key) === v));
              setPage(1);
            }}
            sortBy={sortBy}
            setSortBy={(v) => {
              setSortBy(v);
              setPage(1);
            }}
            total={filtered.length}
            onReset={() => {
              setQuery("");
              setCategory("All");
              setDosage("All");
              setSortBy("name-asc");
              setPage(1);
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

      <IngredientAccord />
      <CustomerStrip />
    </div>
  );
}
