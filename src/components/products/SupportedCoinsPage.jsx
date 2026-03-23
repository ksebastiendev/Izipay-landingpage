import { useMemo, useState } from 'react'
import Navbar from '../landing/Navbar'
import { useI18n } from '../../i18n/useI18n'
import { supportedCoins } from './data'
import { base } from '../../../helpers'
import ProductsFooterSection from './ProductsFooterSection'

const FILTERS = ['popular', 'all', 'stable', 'tokens']

export default function SupportedCoinsPage() {
  const { language } = useI18n()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const copy = language === 'FR'
    ? {
        title: 'Cryptos supportees',
        description: 'Explorez les cryptomonnaies disponibles avec leurs codes et frais de paiement.',
        searchPlaceholder: 'Rechercher une crypto...',
        noResult: 'Aucun resultat pour cette recherche.',
        filters: {
          popular: 'Popular',
          all: 'All Crypto',
          stable: 'Stable Coins',
          tokens: 'Tokens',
        },
        table: {
          coinName: 'Nom de la crypto',
          code: 'Code',
          paymentFee: 'Frais de paiement',
        },
      }
    : {
        title: 'Supported Coins',
        description: 'Browse available cryptocurrencies with their codes and payment fees.',
        searchPlaceholder: 'Search a coin...',
        noResult: 'No result for this search.',
        filters: {
          popular: 'Popular',
          all: 'All Crypto',
          stable: 'Stable Coins',
          tokens: 'Tokens',
        },
        table: {
          coinName: 'Coin Name',
          code: 'Code',
          paymentFee: 'Payment Fee',
        },
      }

  const filteredCoins = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return supportedCoins.filter((coin) => {
      if (activeFilter === 'popular' && !coin.popular) return false
      if (activeFilter === 'stable' && !coin.stable) return false
      if (activeFilter === 'tokens' && coin.stable) return false

      if (!query) return true

      return (
        coin.name.toLowerCase().includes(query) ||
        coin.code.toLowerCase().includes(query)
      )
    })
  }, [activeFilter, searchQuery])

  return (
    <main className="bg-[#f6f7fb] text-slate-900 min-h-screen">
      <Navbar />

      <section className="py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="mx-auto max-w-[720px] text-center">
            <h1 className="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 md:text-[40px] lg:text-[46px]">
              {copy.title}
            </h1>
            <p className="mt-3 text-[16px] leading-[1.6] text-slate-600 md:text-[17px]">
              {copy.description}
            </p>
          </div>

          <div className="mt-7 flex justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="h-11 w-full max-w-[620px] rounded-xl border border-[#008080]/20 bg-white px-4 text-[15px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#008080]/45"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex h-9 items-center rounded-full border px-4 text-[14px] font-semibold transition ${
                    isActive
                      ? 'border-[#008080] bg-[#008080] text-white'
                      : 'border-[#008080]/30 bg-white text-[#0f172a] hover:border-[#008080]/50 hover:bg-[#ecf9f9]'
                  }`}
                >
                  {copy.filters[filter]}
                </button>
              )
            })}
          </div>

          <div className="mt-8">
            <div className="mb-3 grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.6fr)_minmax(0,0.7fr)] gap-4 px-4 py-1 text-[13px] font-semibold text-slate-600 sm:px-6 sm:text-[14px]">
              <span>{copy.table.coinName}</span>
              <span>{copy.table.code}</span>
              <span>{copy.table.paymentFee}</span>
            </div>

            {filteredCoins.length > 0 ? (
              <ul className="space-y-3">
                {filteredCoins.map((coin) => (
                  <li
                    key={coin.code}
                    className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.6fr)_minmax(0,0.7fr)] items-center gap-4 border border-[#1f2937]/35 bg-transparent px-4 py-4 transition hover:border-[#111827]/55 sm:px-6"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff]">
                        <img src={base(coin.icon)} alt={coin.name} className="h-6 w-6 object-contain" />
                      </span>
                      <span className="truncate text-[15px] font-semibold text-slate-900 sm:text-[16px]">{coin.name}</span>
                    </div>

                    <span className="text-[14px] font-semibold text-slate-700 sm:text-[15px]">{coin.code}</span>

                    <span className="text-[14px] font-semibold text-[#006f6f] sm:text-[15px]">{coin.paymentFee}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-8 text-[15px] text-slate-500 sm:px-6">{copy.noResult}</p>
            )}
          </div>
        </div>
      </section>

      <ProductsFooterSection />
    </main>
  )
}
