import { useI18n } from '../../i18n/useI18n'
import { productBlockImages } from './data'

export default function ProductsSolutionsSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#f6f7fb] pb-14 md:pb-20">
      <div className="mx-auto flex w-full flex-col gap-12 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] md:gap-16 max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:gap-20 xl:gap-24">
        {t.products.blocks.map((block, index) => {
          const reverse = index % 2 === 1
          const blockImage = productBlockImages[index]

          return (
            <div key={`${block.title}-${index}`} className={`grid items-center gap-7 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="w-full max-w-[520px] justify-self-start">
                <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">{block.title}</h2>
                {block.points.length > 0 ? (
                  <ul className="mt-4 list-none space-y-2 pl-0 text-[16px] leading-[1.6] text-slate-600">
                    <li className="flex items-start gap-2">
                      <img
                        src="/landing/icone%20/valid.svg"
                        alt=""
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0"
                      />
                      <span>{block.description}</span>
                    </li>
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <img
                          src="/landing/icone%20/valid.svg"
                          alt=""
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 max-w-[500px] text-[16px] leading-[1.6] text-slate-600">{block.description}</p>
                )}
                <a
                  href="#"
                  className="mt-6 inline-flex h-10 items-center rounded-xl bg-[#008080] px-5 text-[14px] font-semibold text-white transition hover:bg-[#007373]"
                >
                  {block.cta}
                </a>
              </div>

              <div className="flex w-full justify-center">
                <img src={blockImage} alt={block.imageAlt} className="w-full max-w-[520px] rounded-2xl object-cover" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
