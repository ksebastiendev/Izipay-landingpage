import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Transaction } from "@/types/checkout";

interface NotificationBannerProps {
  visible: boolean;
  transaction: Transaction | null;
  onClose: () => void;
  onViewDetails: () => void;
}

export const NotificationBanner = ({
  visible,
  transaction,
  onClose,
  onViewDetails,
}: NotificationBannerProps) => (
  <AnimatePresence>
    {visible && transaction && (
      <motion.div
        className="absolute top-0 left-0 right-0 z-[100] rounded-t-2xl overflow-hidden"
        initial={{ y: "-110%" }}
        animate={{ y: 0 }}
        exit={{ y: "-110%" }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative bg-gradient-to-br from-[#005f5f] via-[#008080] to-[#00a0a0] px-[22px] py-5 flex items-center gap-4 min-h-[80px] animate-shimmer">
          <div className="w-[46px] h-[46px] rounded-[14px] bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Check size={22} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/65 mb-1">
              Paiement reçu
            </div>
            <div className="text-[17px] font-extrabold text-white tracking-tight truncate">
              +{transaction.amount} {transaction.currency} reçu
            </div>
            <div className="text-xs font-medium text-white/65 font-mono truncate mt-0.5">
              {transaction.hashShort} · À l'instant
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onViewDetails}
              className="bg-white/18 border border-white/30 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/28 transition-all whitespace-nowrap"
            >
              Voir détails
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white hover:bg-white/22 transition-all"
            >
              <X size={13} />
            </button>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
