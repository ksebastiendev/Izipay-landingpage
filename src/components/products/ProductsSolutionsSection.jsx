import { useI18n } from '../../i18n/useI18n'
import { productBlockImages } from './data'
import { base } from '../../../helpers'
import { Link } from 'react-router-dom'

const DOCS_URL = 'https://cryptogateway-project.github.io/cryptogateway-project/'

export default function ProductsSolutionsSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#f6f7fb] pt-16 pb-16 md:pt-20 md:pb-24 lg:pt-[100px] lg:pb-[100px]">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
          <h2 className="text-[38px] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-[42px] lg:text-[44px]">
            {t.products.showcase.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-[16px] leading-[1.6] text-slate-600">
            {t.products.showcase.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
          {t.products.blocks.map((block, index) => {
            const blockImage = productBlockImages[index]
            const isDocsLink = index === 1
            const flowRouteByIndex = {
              0: '/payments/checkout',
              2: '/payments/pos',
              3: '/payments/product',
            }
            const ctaHref = isDocsLink ? DOCS_URL : (flowRouteByIndex[index] || '/products')

            return (
              <article
                key={`${block.title}-${index}`}
                className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <img
                  src={base(blockImage)}
                  alt={block.imageAlt}
                  className="h-[240px] w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 lg:text-[32px]">{block.title}</h2>

                  {block.points.length > 0 ? (
                    <ul className="mt-4 list-none space-y-2 pl-0 text-[16px] leading-[1.6] text-slate-600">
                      <li className="flex items-start gap-2">
                        <img
                          src={base('/assets/images/landing/icone%20/valid.svg')}
                          alt=""
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 shrink-0"
                        />
                        <span>{block.description}</span>
                      </li>
                      {block.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <img
                            src={base('/assets/images/landing/icone%20/valid.svg')}
                            alt=""
                            aria-hidden="true"
                            className="mt-1 h-5 w-5 shrink-0"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-[16px] leading-[1.6] text-slate-600">{block.description}</p>
                  )}

                  {isDocsLink ? (
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex h-10 items-center self-start rounded-xl bg-[#008080] px-5 text-[14px] font-semibold text-white transition hover:bg-[#007373]"
                    >
                      {block.cta}
                    </a>
                  ) : (
                    <Link
                      to={ctaHref}
                      className="mt-6 inline-flex h-10 items-center self-start rounded-xl bg-[#008080] px-5 text-[14px] font-semibold text-white transition hover:bg-[#007373]"
                    >
                      {block.cta}
                    </Link>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
