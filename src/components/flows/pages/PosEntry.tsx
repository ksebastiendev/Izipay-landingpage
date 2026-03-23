import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PosEntryProps {
  onStart: () => void;
}

export const PosEntry = ({ onStart }: PosEntryProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="px-8 py-8 text-center">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        Terminal de paiement
      </div>
      <h1 className="text-[48px] font-extrabold text-[#008080] mb-6 tracking-tight">
        Vendre
      </h1>
      <p className="text-slate-600 text-sm mb-8 leading-relaxed">
        Entrez le montant à recevoir en crypto-monnaie
      </p>
      <button
        onClick={onStart}
        className="w-full bg-[#008080] text-white font-bold text-[15px] py-[17px] rounded-[14px] flex items-center justify-center gap-2.5 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 transition-all mb-4"
      >
        Démarrer
        <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);
