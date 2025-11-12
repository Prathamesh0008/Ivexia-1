export default function TherapyGroups() {
  const therapies = [
    {
      title: "Cardiology",
      desc: "Advanced cardiovascular therapies that protect and enhance heart health.",
      icon: "💓",
    },
    {
      title: "Oncology",
      desc: "Innovative cancer treatments focusing on targeted therapies and care.",
      icon: "🧬",
    },
    {
      title: "Neurology",
      desc: "Breakthrough neurological solutions for cognitive and nervous system care.",
      icon: "🧠",
    },
    {
      title: "Endocrinology",
      desc: "Hormonal balance and metabolic wellness through specialized formulations.",
      icon: "🩺",
    },
    {
      title: "Dermatology",
      desc: "Skin care excellence with dermatological innovation and safety.",
      icon: "🧴",
    },
  ];

  return (
    <section className="relative bg-[#FFF8F5] py-20 md:py-24">
      {/* Gradient Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7A00] to-[#E2004F]" />

      {/* Title Section */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-3">
          Therapy Groups
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-[#E2004F]">Quality, Innovation & Health — </span>
          at Ivexia, we advance precision-based therapies across multiple domains to redefine global healthcare.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="flex flex-wrap justify-center items-stretch gap-8 px-6 md:px-20">
        {therapies.map((item, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl w-[280px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] p-8 text-center shadow-md hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-2"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 to-[#E2004F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex flex-col items-center justify-between h-full">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#222] mb-2 group-hover:text-[#E2004F] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient footer strip */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7A00] to-[#E2004F]" />
    </section>
  );
}
