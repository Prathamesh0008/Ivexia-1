// src/data/finishedProducts.js
import commonImage from "../assets/logo/capsuleimage.jpg"; // your single product image

const FINISHED_PRODUCTS = [
  // ===== Cardiology =====
  {
    id: "fp-1",
    slug: "atorvastatin-10",
    name: "Atorvastatin 10 mg",
    category: "Cardiology",
    form: "Tablet",
    dosageForm: "Tablet", // added for detail page
    strength: "10 mg",
    image: commonImage,
  },
  {
    id: "fp-2",
    slug: "atorvastatin-20", // 🔥 matches PRODUCTS.jsx
    name: "Atorvastatin 20 mg",
    category: "Cardiology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "20 mg",
    image: commonImage,
  },
  {
    id: "fp-8",
    slug: "losartan-50",
    name: "Losartan 50 mg",
    category: "Cardiology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "50 mg",
    image: commonImage,
  },
  {
    id: "fp-9",
    slug: "amlodipine-5",
    name: "Amlodipine 5 mg",
    category: "Cardiology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "5 mg",
    image: commonImage,
  },

  // Extra products that exist in PRODUCTS.jsx but were missing here:
  {
    id: "fp-13",
    slug: "clopidogrel-75", // 🔥 matches PRODUCTS.jsx
    name: "Clopidogrel 75 mg",
    category: "Cardiology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "75 mg",
    image: commonImage,
  },

  // ===== Diabetes =====
  {
    id: "fp-3",
    slug: "metformin-500", // 🔥 matches PRODUCTS.jsx
    name: "Metformin 500 mg",
    category: "Diabetes",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "500 mg",
    image: commonImage,
  },
  {
    id: "fp-4",
    slug: "metformin-1000",
    name: "Metformin 1000 mg",
    category: "Diabetes",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "1000 mg",
    image: commonImage,
  },
  {
    id: "fp-14",
    slug: "sitagliptin-100", // 🔥 matches PRODUCTS.jsx
    name: "Sitagliptin 100 mg",
    category: "Diabetes",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "100 mg",
    image: commonImage,
  },

  // ===== Gastroenterology =====
  {
    id: "fp-5",
    slug: "omeprazole-20", // 🔥 matches PRODUCTS.jsx
    name: "Omeprazole 20 mg",
    category: "Gastroenterology",
    form: "Capsule",
    dosageForm: "Capsule",
    strength: "20 mg",
    image: commonImage,
  },
  {
    id: "fp-12",
    slug: "pantoprazole-40", // 🔥 matches PRODUCTS.jsx
    name: "Pantoprazole 40 mg",
    category: "Gastroenterology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "40 mg",
    image: commonImage,
  },

  // ===== Antibiotics =====
  {
    id: "fp-6",
    slug: "amoxicillin-500",
    name: "Amoxicillin 500 mg",
    category: "Antibiotic",
    form: "Capsule",
    dosageForm: "Capsule",
    strength: "500 mg",
    image: commonImage,
  },
  {
    id: "fp-7",
    slug: "cefixime-200",
    name: "Cefixime 200 mg",
    category: "Antibiotic",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "200 mg",
    image: commonImage,
  },

  // ===== Neurology / Psychiatry =====
  {
    id: "fp-10",
    slug: "gabapentin-300",
    name: "Gabapentin 300 mg",
    category: "Neurology",
    form: "Capsule",
    dosageForm: "Capsule",
    strength: "300 mg",
    image: commonImage,
  },
  {
    id: "fp-11",
    slug: "sertraline-50",
    name: "Sertraline 50 mg",
    category: "Psychiatry",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "50 mg",
    image: commonImage,
  },

  // Extra neurology products from PRODUCTS.jsx:
  {
    id: "fp-15",
    slug: "pregabalin-75", // 🔥 matches PRODUCTS.jsx
    name: "Pregabalin 75 mg",
    category: "Neurology",
    form: "Capsule",
    dosageForm: "Capsule",
    strength: "75 mg",
    image: commonImage,
  },
  {
    id: "fp-16",
    slug: "levetiracetam-500", // 🔥 matches PRODUCTS.jsx
    name: "Levetiracetam 500 mg",
    category: "Neurology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "500 mg",
    image: commonImage,
  },

  // ===== Oncology products from PRODUCTS.jsx =====
  {
    id: "fp-17",
    slug: "imatinib-400", // 🔥 matches PRODUCTS.jsx
    name: "Imatinib 400 mg",
    category: "Oncology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "400 mg",
    image: commonImage,
  },
  {
    id: "fp-18",
    slug: "letrozole-2-5", // 🔥 matches PRODUCTS.jsx
    name: "Letrozole 2.5 mg",
    category: "Oncology",
    form: "Tablet",
    dosageForm: "Tablet",
    strength: "2.5 mg",
    image: commonImage,
  },
];

export default FINISHED_PRODUCTS;
