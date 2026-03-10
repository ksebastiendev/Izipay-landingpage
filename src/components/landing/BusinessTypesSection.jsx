export default function BusinessTypesSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <h3 className="max-w-[460px] text-[56px] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900">
            Built for Every Type of Digital Business
          </h3>
          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">eCommerce</h4>
              <p className="mt-2 text-[14px] text-slate-600">Accept cryptocurrency payments in your online store.</p>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">SaaS Platforms</h4>
              <p className="mt-2 text-[14px] text-slate-600">Allow users to pay for subscriptions using crypto.</p>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">Freelancers</h4>
              <p className="mt-2 text-[14px] text-slate-600">Receive international payments without relying on traditional banks.</p>
            </div>
          </div>
        </div>

        <img src="/landing/section-build-for.png" alt="Business use cases" className="w-full" />
      </div>
    </section>
  )
}
