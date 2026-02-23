// src/components/CustomerStrip.jsx
import { useTranslation } from "react-i18next";

import actoverco from "../assets/logo/customers/actoverco.png";
import abidi from "../assets/logo/customers/abidi.png";
import kharazmi from "../assets/logo/customers/kharazmi1.png";
import varian from "../assets/logo/customers/varian1.png";

const customers = [
  { name: "Actoverco", logo: actoverco },
  { name: "Abidi", logo: abidi },
  { name: "Kharazmi", logo: kharazmi },
  { name: "Varian", logo: varian },
];

export default function CustomerStrip() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FFF8F5] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] text-center mb-12">
          {t("customerStrip.title")}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {customers.map((c) => (
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              className="
                h-24 md:h-28
                w-auto object-contain
                transition-transform duration-300 hover:scale-105
              "
            />
          ))}
        </div>

      </div>
    </section>
  );
}
