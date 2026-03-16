import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { cryptoAssets } from './data'

export default function ProductsMarketSection() {
  const [activeTab, setActiveTab] = useState(0)
  const { t } = useI18n()

  return (
    <section className="bg-[#f6f7fb] py-16 md:py-20 lg:py-[100px] overflow-hidden">
      <div className="mx-auto grid w-full items-center gap-10 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">

        {/* Left: text */}
        <div>
          <h3 className="max-w-[520px] text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 md:text-[42px] lg:text-[44px]">
            {t.products.market.title}
          </h3>
          <p className="mt-4 max-w-[480px] text-[16px] leading-[1.6] text-slate-600">{t.products.market.description}</p>
          <a
            href="#"
            className="mt-7 inline-flex h-10 items-center rounded-xl bg-[#008080] px-5 text-[14px] font-semibold text-white transition hover:bg-[#007373]"
          >
            {t.products.market.cta}
          </a>
        </div>

        {/* Right: dark card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] rounded-3xl bg-[#0f1117] p-5 shadow-2xl">

            {/* Tabs */}
            <div className="mb-5 flex gap-1 rounded-xl bg-white/5 p-1">
              {t.products.market.tabs.map((tab, i) => (
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
