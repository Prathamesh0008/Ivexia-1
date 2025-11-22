export default function IngredientModal({ open, item, onClose }) {
  if (!open || !item) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-end md:items-center justify-center">
      <button onClick={onClose} className="absolute inset-0 bg-black/50" aria-label="Close" />
      <div className="relative z-[61] w-full md:max-w-3xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-[#FF7A00] to-[#E2004F]" />
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[#0d2d47]">{item.name}</h3>
              {item.cas && <p className="text-sm text-gray-500 mt-1">CAS: {item.cas}</p>}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-[#0d2d47] text-white">{item.category}</span>
                {item.badges?.map((b)=>(
                  <span key={b} className="text-[10px] uppercase tracking-wide font-semibold px-2 py-1 rounded bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white">{b}</span>
                ))}
              </div>
            </div>
            <button onClick={onClose} className="shrink-0 rounded-full w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700" aria-label="Close details">✕</button>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#0d2d47]">Overview</h4>
              <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              {item.synonyms?.length ? (
                <>
                  <h5 className="mt-4 text-sm font-semibold text-[#0d2d47]">Synonyms</h5>
                  <p className="text-sm text-gray-700">{item.synonyms.join(", ")}</p>
                </>
              ) : null}
              <h5 className="mt-4 text-sm font-semibold text-[#0d2d47]">Dosage Forms</h5>
              <div className="mt-1 flex flex-wrap gap-2">
                {item.dosageForms.map((d)=>(
                  <span key={d} className="text-xs px-2 py-1 rounded-full border border-gray-200 bg-white">{d}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#0d2d47]">Specifications</h4>
              <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {item.specs?.map((s,i)=>(
                  <div key={i} className="flex justify-between border-b border-gray-100 py-1">
                    <dt className="text-gray-600">{s.label}</dt>
                    <dd className="font-medium text-gray-800">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={item.coaUrl || "#"} className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-[#19a6b5] text-sm">Download CoA</a>
                <a href={item.msdsUrl || "#"} className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-[#19a6b5] text-sm">Download MSDS</a>
                <a href="/contact" className="px-4 py-2 rounded-lg text-white text-sm bg-gradient-to-r from-[#0d2d47] to-[#19a6b5]">Request quote</a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-[#FF7A00] to-[#E2004F]" />
      </div>
    </div>
  );
}
