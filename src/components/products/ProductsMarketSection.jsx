import { useState } from 'react'
import { marketSection, cryptoAssets } from './data'

const TABS = ['Disponibles', 'Actifs les plus performants', 'Nouveautés sur Izichange']

export default function ProductsMarketSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-[#f6f7fb] py-14 md:py-20 overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-4 md:px-5 lg:grid-cols-2 lg:gap-12">

        {/* Left: text */}
        <div>
          <h3 className="max-w-[520px] text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 md:text-[48px]">
            {marketSection.title}
          </h3>
          <p className="mt-4 max-w-[480px] text-[16px] leading-[1.6] text-slate-600">{marketSection.description}</p>
          <a
            href="#"
            className="mt-7 inline-flex h-10 items-center rounded-xl bg-[#008080] px-5 text-[14px] font-semibold text-white transition hover:bg-[#007373]"
          >
            {marketSection.cta}
          </a>
        </div>

        {/* Right: dark card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] rounded-3xl bg-[#0f1117] p-5 shadow-2xl">

            {/* Tabs */}
            <div className="mb-5 flex gap-1 rounded-xl bg-white/5 p-1">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 truncate rounded-lg px-2 py-1.5 text-[11px] font-semibold transition ${
                    activeTab === i
                      ? 'bg-white/10 text-white'
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Crypto rows */}
            <ul className="space-y-0.5">
              {cryptoAssets.map((asset) => (
                <li
                  key={asset.symbol}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/5 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    {asset.icon ? (
                      <img src={asset.icon} alt={asset.name} className="h-5 w-5 object-contain" />
                    ) : (
                      <span className="text-[12px] font-bold text-amber-400">B</span>
                    )}
                  </div>

                  {/* Name + symbol */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold leading-none text-white">{asset.name}</p>
                    <p className="mt-0.5 text-[11px] text-white/40">{asset.symbol}</p>
                  </div>

                  {/* Price + change */}
                  <div className="text-right">
                    <p className="text-[14px] font-semibold tabular-nums text-white">{asset.price}</p>
                    <p className={`mt-0.5 text-[11px] font-medium tabular-nums ${
                      asset.up ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {asset.change}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>
    </section>
  )
}
