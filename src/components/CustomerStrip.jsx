// src/components/CustomerStrip.jsx
import actoverco from "../assets/logo/customers/actoverco.png";
import abidi from "../assets/logo/customers/abidi.png";
import kharazmi from "../assets/logo/customers/kharazmi.png";
import varian from "../assets/logo/customers/varian.png";

const customers = [
  { name: "Actoverco", logo: actoverco },
  { name: "Abidi", logo: abidi },
  { name: "Kharazmi", logo: kharazmi },
  { name: "Varian", logo: varian },
];

export default function CustomerStrip() {
  return (
    <section className="bg-[#FFF8F5] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d47] text-center mb-12">
          Our Customers
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {customers.map((c) => (
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              className="
                h-24 md:h-28    /* Increased logo size */
                w-auto 
                object-contain
                transition-transform duration-300 hover:scale-105
              "
            />
          ))}
        </div>

      </div>
    </section>
  );
}
