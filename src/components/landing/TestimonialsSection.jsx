const testimonials = [
  {
    text: "IzichangePay a transformé la façon dont j'accepte les paiements en ligne. L'intégration est intuitive et l'équipe offre un support 5/5. Je les recommande vivement !",
    name: 'Sophie B',
    role: 'Commerçante',
  },
  {
    text: "Je suis un développeur indépendant et IzichangePay a été un véritable atout pour faciliter les paiements en cryptomonnaies et les convertir automatiquement pour moi.",
    name: 'Maxime L',
    role: 'Développeur',
  },
  {
    text: "Le service client de IzichangePay est incroyable. Ils ont été très réactifs et ont résolu chaque problème rapidement. Je me sens en sécurité en utilisant leur plateforme.",
    name: 'Emma R',
    role: 'Freelancer',
  },
]

const getInitials = (fullName) =>
  fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <h3 className="text-[52px] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900">Que pense nos clients ?</h3>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-[14px] leading-7 text-slate-600">{item.text}</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#008080] text-[14px] font-bold text-white">
                  {getInitials(item.name)}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-slate-900">{item.name}</p>
                  <p className="text-[13px] text-slate-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
