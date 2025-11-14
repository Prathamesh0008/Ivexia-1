export default function IngredientQualityStrip() {
  const items = [
    {
      title: "High Performance Quality",
      desc: "Premium-grade APIs manufactured under strict GMP compliance.",
    },
    {
      title: "Trusted Global Network",
      desc: "Building long-term partnerships with formulators worldwide.",
    },
    {
      title: "Regulatory Excellence",
      desc: "Full regulatory documentation with transparent traceability.",
    },
  ];

  return (
    <section className="bg-[#FFF8F5] py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="grid gap-6 md:grid-cols-3">

          {items.map((item, idx) => (
            <div
              key={item.title}
              className="
                relative bg-white
                border border-[#0d2d47]
                shadow-[0_4px_18px_rgba(0,0,0,0.08)]
                hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]
                transition rounded-none
                min-h-[190px]
                flex flex-col items-center justify-center
                px-8 py-10 text-center
              "
            >
              {/* top accent line — little left */}
              <div className="h-[2px] w-20 bg-[#FF7A00] mb-6 self-start ml-2" />

              <h3 className="text-[#0d2d47] font-bold text-lg md:text-xl leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#0d2d47]/80 max-w-sm">
                {item.desc}
              </p>

              {/* bottom accent line — little right */}
              <div className="h-[2px] w-20 bg-[#FF7A00] mt-6 self-end mr-2" />

              {/* connector line — fixed */}
              {idx < items.length - 1 && (
                <div
                  className="
                    hidden md:block 
                    absolute top-1/2 right-0 translate-x-full
                    w-6 h-[2px]
                    bg-[#FF7A00]
                  "
                />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
