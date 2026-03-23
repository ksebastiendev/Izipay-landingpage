import { motion } from "framer-motion";

interface AmountHeroProps {
  amount: string;
  currency: string;
  label?: string;
}

export const AmountHero = ({
  amount,
  currency,
  label = "Montant à payer",
}: AmountHeroProps) => (
  <div className="relative px-8 pt-7 pb-6 border-b border-slate-300 overflow-hidden bg-white">
    <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(39,69,134,0.09)_0%,transparent_70%)] pointer-events-none" />
    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2.5">
      {label}
    </div>
    <motion.div
      className="flex items-end gap-2.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-[56px] font-extrabold text-[#008080] tracking-[-3px] leading-none">
        {amount}
      </span>
      <span className="text-xl font-bold text-slate-500 mb-1.5">
        {currency}
      </span>
    </motion.div>
  </div>
);
