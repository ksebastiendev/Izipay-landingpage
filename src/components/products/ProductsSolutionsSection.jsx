import { useI18n } from '../../i18n/useI18n'
import { productBlockImages } from './data'

export default function ProductsSolutionsSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#f6f7fb] pb-14 md:pb-20">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 px-4 md:gap-16 md:px-5 lg:gap-20">
        {t.products.blocks.map((block, index) => {
          const reverse = index % 2 === 1
          const blockImage = productBlockImages[index]

          return (
            <div key={`${block.title}-${index}`} className={`grid items-center gap-7 md:gap-10 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">{block.title}</h2>
                <p className="mt-4 max-w-[500px] text-[16px] leading-[1.6] text-slate-600">{block.description}</p>
                {block.points.length > 0 && (
                  <ul className="mt-4 space-y-2 text-[16px] leading-[1.6] text-slate-600">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#19c37d]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href="#"
                  className="mt-6 inline-flex h-10 items-center rounded-xl bg-[#008080] px-5 text-[14px] font-semibold text-white transition hover:bg-[#007373]"
                >
                  {block.cta}
                </a>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img src={blockImage} alt={block.imageAlt} className="w-full max-w-[460px] rounded-2xl object-cover" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
