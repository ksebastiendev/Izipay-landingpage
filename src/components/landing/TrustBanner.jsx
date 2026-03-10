export default function TrustBanner() {
  return (
    <section className="bg-[#008080]">
      <div className="mx-auto grid h-[58px] w-full max-w-[1214px] grid-cols-[180px_1fr] items-center px-5">
        <div className="flex items-center gap-3">
          <p className="text-[40px] font-black italic leading-none text-white">it's7</p>
          <span className="text-[18px] text-white/60">·</span>
        </div>

        <div className="flex items-center justify-center">
          <p className="whitespace-nowrap text-center text-[28px] font-bold leading-none text-white lg:text-[44px]">
            Trusted by digital businesses and online merchants
          </p>
        </div>
      </div>
    </section>
  )
}
