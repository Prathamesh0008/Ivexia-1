import { useSearchParams, useNavigate } from "react-router-dom";
import capsuleImage from "../assets/logo/medicineproduct.jpg";
import geneTherapyImg from "../assets/logo/article/gene-therapy.jpg";
import aiMedicineImg from "../assets/logo/article/ai-medicine.jpg";
import obesityImg from "../assets/logo/article/obesity1.jpg";
import personalizedImg from "../assets/logo/article/personalized-medicine.jpg";
import womensDayImg from "../assets/logo/article/womens-day.jpg";
import diabetesKidneyImg from "../assets/logo/article/diabetes-kidney-2.jpg";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const q = (searchParams.get("q") || "").trim();
  const qLower = q.toLowerCase();

  // ===== 1. PRODUCTS (same names as your Products.jsx) =====
  const products = [
    {
      id: "prod-atorvastatin-20",
      type: "product",
      title: "Atorvastatin 20 mg",
      subtitle: "Cardiology • Tablet • 20 mg",
      image: capsuleImage,
      url: "/products/atorvastatin-20",
      tags: ["Cardiology", "Tablet"],
    },
    {
      id: "prod-clopidogrel-75",
      type: "product",
      title: "Clopidogrel 75 mg",
      subtitle: "Cardiology • Tablet • 75 mg",
      image: capsuleImage,
      url: "/products/clopidogrel-75",
      tags: ["Cardiology", "Tablet"],
    },
    {
      id: "prod-imatinib-400",
      type: "product",
      title: "Imatinib 400 mg",
      subtitle: "Oncology • Tablet • 400 mg",
      image: capsuleImage,
      url: "/products/imatinib-400",
      tags: ["Oncology", "Tablet"],
    },
    {
      id: "prod-letrozole-2-5",
      type: "product",
      title: "Letrozole 2.5 mg",
      subtitle: "Oncology • Tablet • 2.5 mg",
      image: capsuleImage,
      url: "/products/letrozole-2-5",
      tags: ["Oncology", "Tablet"],
    },
    {
      id: "prod-metformin-500",
      type: "product",
      title: "Metformin 500 mg",
      subtitle: "Diabetes • Tablet • 500 mg",
      image: capsuleImage,
      url: "/products/metformin-500",
      tags: ["Diabetes", "Tablet"],
    },
    {
      id: "prod-sitagliptin-100",
      type: "product",
      title: "Sitagliptin 100 mg",
      subtitle: "Diabetes • Tablet • 100 mg",
      image: capsuleImage,
      url: "/products/sitagliptin-100",
      tags: ["Diabetes", "Tablet"],
    },
    {
      id: "prod-pregabalin-75",
      type: "product",
      title: "Pregabalin 75 mg",
      subtitle: "Neurology • Capsule • 75 mg",
      image: capsuleImage,
      url: "/products/pregabalin-75",
      tags: ["Neurology", "Capsule"],
    },
    {
      id: "prod-levetiracetam-500",
      type: "product",
      title: "Levetiracetam 500 mg",
      subtitle: "Neurology • Tablet • 500 mg",
      image: capsuleImage,
      url: "/products/levetiracetam-500",
      tags: ["Neurology", "Tablet"],
    },
    {
      id: "prod-omeprazole-20",
      type: "product",
      title: "Omeprazole 20 mg",
      subtitle: "Gastroenterology • Capsule • 20 mg",
      image: capsuleImage,
      url: "/products/omeprazole-20",
      tags: ["Gastroenterology", "Capsule"],
    },
    {
      id: "prod-pantoprazole-40",
      type: "product",
      title: "Pantoprazole 40 mg",
      subtitle: "Gastroenterology • Injection • 40 mg",
      image: capsuleImage,
      url: "/products/pantoprazole-40",
      tags: ["Gastroenterology", "Injection"],
    },
  ];

  // ===== 2. IVEXIA MAG ARTICLES =====
  const articles = [
    {
      id: "art-gene",
      type: "article",
      title: "How Gene Therapy Is Transforming Modern Treatment",
      subtitle: "Ivexia Mag • Emerging Science",
      image: geneTherapyImg,
      url: "/ivexia-mag/gene-therapy-emerging-science",
      tags: ["Gene therapy", "Emerging Science"],
    },
    {
      id: "art-ai",
      type: "article",
      title: "The Power of AI in the Medical Industry: 4 Things to Know",
      subtitle: "Ivexia Mag • Digital Health & AI",
      image: aiMedicineImg,
      url: "/ivexia-mag/power-of-ai-medical-industry",
      tags: ["AI", "Digital Health"],
    },
    {
      id: "art-obesity",
      type: "article",
      title: "What Is Obesity—and How Do You Really Overcome It?",
      subtitle: "Ivexia Mag • Metabolic Health",
      image: obesityImg,
      url: "/ivexia-mag/what-is-obesity-how-to-overcome-it",
      tags: ["Obesity", "Metabolic Health"],
    },
    {
      id: "art-personalized",
      type: "article",
      title: "Personalized Medicine: Treatments Tailored to Each Patient",
      subtitle: "Ivexia Mag • Personalized Medicine",
      image: personalizedImg,
      url: "/ivexia-mag/personalized-medicine-basics",
      tags: ["Personalized medicine"],
    },
    {
      id: "art-women",
      type: "article",
      title: "In Honor of International Women’s Day",
      subtitle: "Ivexia Mag • People & Culture",
      image: womensDayImg,
      url: "/ivexia-mag/international-womens-day-healthcare",
      tags: ["Women", "Culture"],
    },
    {
      id: "art-diabetes-kidney",
      type: "article",
      title: "Does Diabetes Increase the Risk of Kidney Disease?",
      subtitle: "Ivexia Mag • Diabetes & Kidneys",
      image: diabetesKidneyImg,
      url: "/ivexia-mag/diabetes-kidney-disease-6",
      tags: ["Diabetes", "Kidney"],
    },
  ];

  // ===== 3. STATIC PAGES =====
  const pages = [
    {
      id: "page-home",
      type: "page",
      title: "Home",
      subtitle: "Overview of Ivexia Pharmaceuticals",
      url: "/",
      tags: ["home", "overview"],
    },
    {
      id: "page-about",
      type: "page",
      title: "About Us",
      subtitle: "Who we are and what we stand for",
      url: "/about",
      tags: ["about", "company"],
    },
    {
      id: "page-products",
      type: "page",
      title: "Pharmaceutical Products",
      subtitle: "Finished dosage formulations by therapy area",
      url: "/products",
      tags: ["products", "finished dosage"],
    },
    {
      id: "page-ingredient",
      type: "page",
      title: "Active Pharmaceutical Ingredients",
      subtitle: "API portfolio for global partners",
      url: "/products/ingredient",
      tags: ["API", "ingredients"],
    },
    {
      id: "page-mag",
      type: "page",
      title: "Ivexia Magazine",
      subtitle: "Articles, stories and insights",
      url: "/ivexia-mag",
      tags: ["magazine", "articles"],
    },
    {
      id: "page-contact",
      type: "page",
      title: "Contact Us",
      subtitle: "Reach the Ivexia team",
      url: "/contact",
      tags: ["contact", "support"],
    },
  ];

  // ===== MERGED INDEX =====
  const allItems = [...products, ...articles, ...pages];

  const filteredItems = q
    ? allItems.filter((item) => {
        const text =
          (item.title || "") +
          " " +
          (item.subtitle || "") +
          " " +
          (item.tags || []).join(" ");
        return text.toLowerCase().includes(qLower);
      })
    : [];

  return (
    <div className="pt-24 md:pt-28 bg-[#FFF8F5] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        {/* Heading */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d2d47]">
            Search
          </h1>
          {q ? (
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Showing results for{" "}
              <span className="font-semibold text-[#0d2d47]">“{q}”</span>
            </p>
          ) : (
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Type a product name, article topic or page name in the search bar.
            </p>
          )}
        </header>

        {/* No query */}
        {!q && (
          <p className="text-sm text-gray-600">
            Use the search icon in the top navigation to start searching.
          </p>
        )}

        {/* No results */}
        {q && filteredItems.length === 0 && (
          <p className="text-sm text-gray-600">
            No results found. Try a different product name or keyword.
          </p>
        )}

        {/* Results grid */}
        {filteredItems.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => navigate(item.url)}
                className="
                  bg-white border border-gray-200 shadow-sm 
                  flex flex-col h-full cursor-pointer
                  hover:shadow-md transition
                "
              >
                {/* Optional image (only for products + articles) */}
                {"image" in item && item.image && (
                  <div className="h-40 md:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-4 flex flex-col gap-2 flex-1">
                  {/* Type badge */}
                  <span
                    className={`
                      inline-flex w-fit px-2.5 py-1 rounded-full text-[11px] font-semibold
                      ${
                        item.type === "product"
                          ? "bg-[#0d2d47] text-white"
                          : item.type === "article"
                          ? "bg-[#19a6b5]/10 text-[#0d2d47] border border-[#19a6b5]/30"
                          : "bg-[#FF7A00]/10 text-[#0d2d47] border border-[#FF7A00]/40"
                      }
                    `}
                  >
                    {item.type === "product"
                      ? "Product"
                      : item.type === "article"
                      ? "Article"
                      : "Page"}
                  </span>

                  <h2 className="text-sm md:text-base font-semibold text-[#0d2d47]">
                    {item.title}
                  </h2>
                  {item.subtitle && (
                    <p className="text-xs md:text-sm text-gray-600">
                      {item.subtitle}
                    </p>
                  )}

                  {item.tags && (
                    <div className="mt-auto flex flex-wrap gap-1 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
