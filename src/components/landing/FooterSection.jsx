export default function FooterSection() {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start justify-between gap-5 border-t border-slate-200 px-5 pt-8 text-[14px] text-slate-500 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-teal-700">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-teal-600 text-xs font-bold text-white">z</span>
          <span className="text-[30px] font-extrabold">izichange</span>
        </div>

        <div className="flex items-center gap-8 text-[14px] font-medium text-slate-500">
          <a href="#">Documentation</a>
          <a href="#">Nos Produits</a>
          <a href="#">Politique de confidentialité</a>
        </div>

        <div className="flex items-center gap-3 text-teal-700">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </div>
      </div>
    </footer>
  )
}
