import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface AmountHeroProps {
  amount: string;
  currency: string;
  label?: string;
  remaining?: number;
  formatTime?: (s: number) => string;
}

export const AmountHero = ({
  amount,
  currency,
  label = "Montant à payer",
  remaining,
  formatTime,
}: AmountHeroProps) => (
  <div className="relative px-8 pt-7 pb-6 border-b border-slate-300 overflow-hidden bg-white">
    <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(39,69,134,0.09)_0%,transparent_70%)] pointer-events-none" />
    <div className="relative z-10 flex items-start justify-between gap-4 mb-2.5">
      <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </div>
      {typeof remaining === "number" && formatTime && (
        <div className="flex flex-col items-start text-left gap-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Expiration
          </span>
          <span className="flex items-center gap-2 text-xl font-medium text-[#DC3F4D] leading-none">
            <Clock size={14} />
            {formatTime(remaining)}
          </span>
        </div>
      )}
    </div>
    <motion.div
      className="relative z-10 flex items-end gap-2.5"
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
