import { useEffect, useRef, useState } from "react";

export default function IngredientHero() {
  const slides = [
    { id: 1, color: "from-[#FF7A00] to-[#E2004F]", title: "API Portfolio", text: "Precision-grade Active Pharmaceutical Ingredients." },
    { id: 2, color: "from-[#0d2d47] to-[#19a6b5]", title: "Global Standards", text: "WHO-GMP & cGMP compliant manufacturing." },
    { id: 3, color: "from-[#E2004F] to-[#FF7A00]", title: "Traceable & Reliable", text: "CoA / MSDS and full documentation support." },
  ];

  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const ts = useRef(0), te = useRef(0);

  useEffect(() => {
    if (hover) return;
    const id = setInterval(()=>setIdx(p=>(p+1)%slides.length), 4000);
    return ()=>clearInterval(id);
  }, [hover, slides.length]);

  return (
    <section
      className="relative w-full h-[55vh] md:h-[50vh] overflow-hidden"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onTouchStart={(e)=>ts.current=e.touches[0].clientX}
      onTouchMove={(e)=>te.current=e.touches[0].clientX}
      onTouchEnd={()=>{
        if (ts.current - te.current > 50) setIdx(p=>(p+1)%slides.length);
        if (te.current - ts.current > 50) setIdx(p=>(p-1+slides.length)%slides.length);
      }}
    >
      {slides.map((s,i)=>(
        <div key={s.id} className={`absolute inset-0 transition-opacity duration-1000 ${i===idx?"opacity-100 z-20":"opacity-0 z-10"}`}>
          <div className={`w-full h-full bg-gradient-to-r ${s.color} flex flex-col justify-center items-start px-6 sm:px-10 md:px-20`}>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{s.title}</h1>
            <p className="text-gray-100 max-w-2xl text-sm sm:text-base md:text-lg">{s.text}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_,i)=>(
          <button key={i} aria-label={`Go to slide ${i+1}`}
            onClick={()=>setIdx(i)}
            className={`w-3 h-3 rounded-full ${i===idx?"bg-white scale-125":"bg-white/60 hover:bg-white"}`} />
        ))}
      </div>
    </section>
  );
}
