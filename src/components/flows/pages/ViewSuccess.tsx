import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Transaction } from "@/types/checkout";

interface ViewSuccessProps {
  amount: string;
  currency: string;
  transaction: Transaction | null;
  onViewTransactions: () => void;
  onBack: () => void;
  successTitle?: string;
  successDescription?: string;
}

export const ViewSuccess = ({
  amount,
  currency,
  transaction,
  onViewTransactions,
  onBack,
  successTitle = "Paiement confirmé !",
  successDescription = "Votre transaction a été reçue et confirmée sur la blockchain BSC.",
}: ViewSuccessProps) => (
  <motion.div
    initial={{ opacity: 0, y: 18, scale: 0.99 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="relative flex flex-col items-center text-center px-8 pt-12 pb-8 border-b border-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(39,69,134,0.09)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative w-24 h-24 mb-6">
        <svg className="-rotate-90 w-24 h-24" viewBox="0 0 96 96">
          <circle
            className="fill-none stroke-[#008080]/25"
            cx="48"
            cy="48"
            r="44"
            strokeWidth="3"
          />
          <circle
            className="fill-none stroke-[#008080] transition-all duration-1000"
            cx="48"
            cy="48"
            r="44"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 44}
            strokeDashoffset={0}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Check size={38} className="text-[#008080]" strokeWidth={3} />
          </motion.div>
        </div>
      </div>
      <h2 className="text-[26px] font-extrabold tracking-tight text-[#008080] mb-2">
        {successTitle}
      </h2>
      <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-[340px]">
        {successDescription}
      </p>
      <div className="inline-flex items-center gap-2 bg-[#008080]/10 border-[1.5px] border-[#008080]/25 rounded-full px-[22px] py-2.5 mt-5 text-[17px] font-extrabold text-[#008080] tracking-tight">
        <Check size={15} />
        +{transaction?.amount || amount} {transaction?.currency || currency}
      </div>
    </div>
    <div className="py-2">
      {[
        { key: "Montant", val: `${amount} ${currency} ≈ $${amount}` },
        { key: "Réseau", val: "BSC (BEP-20)" },
        { key: "Hash", val: transaction?.hashShort || "0xf8a1...f8e3", mono: true },
        {
          key: "Date",
          val: transaction?.timestamp || new Date().toLocaleString("fr-FR"),
        },
      ].map((row, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-8 py-[15px] text-sm border-b border-slate-200 last:border-b-0"
        >
          <span className="text-slate-600">{row.key}</span>
          <span
            className={`font-semibold text-slate-800 text-right ${
              row.mono ? "font-['Typold'] text-[13px] text-[#008080]" : ""
            }`}
          >
            {row.val}
          </span>
        </div>
      ))}
    </div>
    <div className="flex flex-col gap-3 px-8 pt-6 pb-8">
      <button
        onClick={onViewTransactions}
        className="w-full bg-[#008080] text-white font-bold text-[15px] py-[17px] rounded-[14px] flex items-center justify-center gap-2 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 transition-all"
      >
        Voir les transactions
      </button>
      <button
        onClick={onBack}
        className="w-full bg-white text-slate-700 font-semibold text-sm py-[15px] border-[1.5px] border-slate-300 rounded-[14px] flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-[#008080] hover:border-[#008080] transition-all"
      >
        Retour
      </button>
    </div>
  </motion.div>
);
