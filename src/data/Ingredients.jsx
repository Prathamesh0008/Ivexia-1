// src/data/ingredients.js
const COMMON_IMAGE = "/src/assets/logo/capsuleimage.jpg";


const INGREDIENTS = [
  // ---- CARDIOLOGY ----
  {
    id: "amiodarone",
    name: "Amiodarone Hydrochloride",
    slug: "amiodarone-hcl",
    cas: "",
    category: "Cardiology",
    dosageForms: ["Tablet"],
    badges: ["GMP"],
    synonyms: [],
    description: "Antiarrhythmic agent used for heart rhythm disorders.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "atorvastatin",
    name: "Atorvastatin Calcium",
    slug: "atorvastatin-calcium",
    cas: "",
    category: "Cardiology",
    dosageForms: ["Tablet"],
    badges: ["GMP"],
    synonyms: [],
    description: "Used to lower LDL cholesterol levels.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "amlodipine",
    name: "Amlodipine Besylate",
    slug: "amlodipine-besylate",
    cas: "",
    category: "Cardiology",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "Calcium channel blocker for hypertension.",
    specs: [],
    image: COMMON_IMAGE
  },

  // ---- ANTIBIOTICS ----
  {
    id: "azithromycin",
    name: "Azithromycin",
    slug: "azithromycin",
    cas: "",
    category: "Anti-infective",
    dosageForms: ["Tablet", "Capsule"],
    badges: ["GMP"],
    synonyms: [],
    description: "Macrolide antibiotic for various infections.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "amoxicillin",
    name: "Amoxicillin Trihydrate",
    slug: "amoxicillin",
    cas: "",
    category: "Anti-infective",
    dosageForms: ["Tablet", "Capsule"],
    badges: [],
    synonyms: [],
    description: "Broad-spectrum penicillin antibiotic.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "clarithromycin",
    name: "Clarithromycin",
    slug: "clarithromycin",
    cas: "",
    category: "Anti-infective",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "Macrolide antibiotic.",
    specs: [],
    image: COMMON_IMAGE
  },

  // ---- ANALGESIC / PAIN ----
  {
    id: "codeine-sulfate",
    name: "Codeine Sulfate",
    slug: "codeine-sulfate",
    cas: "",
    category: "Pain Management",
    dosageForms: ["Tablet"],
    badges: ["GMP"],
    synonyms: [],
    description: "Opioid used for pain relief.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "tramadol",
    name: "Tramadol Hydrochloride",
    slug: "tramadol-hcl",
    cas: "",
    category: "Pain Management",
    dosageForms: ["Tablet", "Injection"],
    badges: [],
    synonyms: [],
    description: "Opioid analgesic.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "diclofenac",
    name: "Diclofenac Sodium",
    slug: "diclofenac-sodium",
    cas: "",
    category: "Pain Management",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "Anti-inflammatory pain reliever.",
    specs: [],
    image: COMMON_IMAGE
  },

  // ---- DIABETES / METABOLIC ----
  {
    id: "metformin",
    name: "Metformin HCl",
    slug: "metformin-hcl",
    cas: "",
    category: "Endocrinology",
    dosageForms: ["Tablet"],
    badges: ["GMP"],
    synonyms: [],
    description: "Biguanide used for type 2 diabetes.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "sitagliptin",
    name: "Sitagliptin Phosphate",
    slug: "sitagliptin-phosphate",
    cas: "",
    category: "Endocrinology",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "DPP-4 inhibitor for diabetes.",
    specs: [],
    image: COMMON_IMAGE
  },

  // ---- RESPIRATORY ----
  {
    id: "salbutamol",
    name: "Salbutamol Sulphate",
    slug: "salbutamol-sulphate",
    cas: "",
    category: "Respiratory",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "Bronchodilator used for asthma.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "montelukast",
    name: "Montelukast Sodium",
    slug: "montelukast-sodium",
    cas: "",
    category: "Respiratory",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "Leukotriene receptor blocker for asthma.",
    specs: [],
    image: COMMON_IMAGE
  },

  // ---- GASTRO ----
  {
    id: "omeprazole",
    name: "Omeprazole",
    slug: "omeprazole",
    cas: "",
    category: "Gastroenterology",
    dosageForms: ["Capsule"],
    badges: [],
    synonyms: [],
    description: "Proton pump inhibitor for acid reflux.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "pantoprazole",
    name: "Pantoprazole Sodium",
    slug: "pantoprazole-sodium",
    cas: "",
    category: "Gastroenterology",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "PPI for GERD treatment.",
    specs: [],
    image: COMMON_IMAGE
  },

  // ---- VITAMINS / NUTRA ----
  {
    id: "vitamin-c",
    name: "Vitamin C (Ascorbic Acid)",
    slug: "vitamin-c",
    cas: "",
    category: "Nutraceutical",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "Essential vitamin and antioxidant.",
    specs: [],
    image: COMMON_IMAGE
  },
  {
    id: "vitamin-b12",
    name: "Vitamin B12 (Cyanocobalamin)",
    slug: "vitamin-b12",
    cas: "",
    category: "Nutraceutical",
    dosageForms: ["Tablet"],
    badges: [],
    synonyms: [],
    description: "Vitamin important for metabolism.",
    specs: [],
    image: COMMON_IMAGE
  }
];

export default INGREDIENTS;
