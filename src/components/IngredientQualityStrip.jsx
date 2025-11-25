import { useTranslation } from "react-i18next";

export default function IngredientQualityStrip() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("ingredientQualityStrip.items.0.title"),
      desc: t("ingredientQualityStrip.items.0.desc"),
    },
    {
      title: t("ingredientQualityStrip.items.1.title"),
      desc: t("ingredientQualityStrip.items.1.desc"),
    },
    {
      title: t("ingredientQualityStrip.items.2.title"),
      desc: t("ingredientQualityStrip.items.2.desc"),
    },
  ];

  return (
    <section className="bg-[#FFF8F5] py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div 
          className="grid gap-2 md:grid-cols-3"
        >
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="
                relative bg-white
                border border-[#0d2d47]
                shadow-[0_4px_18px_rgba(0,0,0,0.08)]
                hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]
                transition rounded-none

                /* 🎯 BOX HEIGHT */
                h-[220px]

                /* 🎯 BOX WIDTH CONTROL (smaller width) */
                max-w-[280px]
                mx-auto

                flex flex-col items-center justify-center
                px-6 py-8 text-center
              "
            >

              {/* 🎯 TOP LINE */}
              <div className="h-[2px] w-12 bg-[#FF7A00] mb-6 self-start ml-2" />

              <h3 className="text-[#0d2d47] font-bold text-lg leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#0d2d47]/80 max-w-sm">
                {item.desc}
              </p>

              {/* 🎯 BOTTOM LINE */}
              <div className="h-[2px] w-12 bg-[#FF7A00] mt-6 self-end mr-2" />

              
              {/* {idx < items.length - 1 && (
                <div
                  className="
                    hidden md:block
                    absolute top-1/2 right-0 translate-x-full
                    w-30
                    h-[2px]
                    bg-[#FF7A00]
                  "
                />
              )} */}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
