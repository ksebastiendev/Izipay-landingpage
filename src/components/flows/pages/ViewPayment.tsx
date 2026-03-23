import { motion } from "framer-motion";
import { Info, AlertCircle, Copy, Check } from "lucide-react";
import { StepIndicator } from "../shared";

interface ViewPaymentProps {
  amount: string;
  currency: string;
  remaining: number;
  total: number;
  formatTimeShort: (s: number) => string;
  copiedField: string | null;
  onCopy: (text: string, field: string) => void;
  wallet: string;
}

export const ViewPayment = ({
  amount,
  currency,
  remaining,
  total,
  formatTimeShort,
  copiedField,
  onCopy,
  wallet,
}: ViewPaymentProps) => {
  const progressPercent = (remaining / total) * 100;
  const isUrgent = remaining <= 600;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 pt-5 pb-4 border-b border-slate-300 gap-3">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
            Montant à envoyer
          </div>
          <div className="text-4xl font-extrabold tracking-tight text-[#008080] leading-none">
            {amount} <span className="text-xl text-slate-500 font-bold">{currency}</span>
          </div>
          <div className="text-[13px] text-slate-500 mt-1">≈ ${amount} USD</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-[72px] h-[72px]">
            <svg className="-rotate-90 w-[72px] h-[72px]" viewBox="0 0 60 60">
              <circle
                className="fill-none stroke-slate-200"
                cx="30"
                cy="30"
                r="27"
                strokeWidth="3.5"
              />
              <circle
                className="fill-none transition-all duration-1000"
                cx="30"
                cy="30"
                r="27"
                strokeWidth="3.5"
                stroke={isUrgent ? "#dc2626" : "#008080"}
                strokeDasharray={2 * Math.PI * 27}
                strokeDashoffset={(2 * Math.PI * 27) * (1 - remaining / total)}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={`font-mono text-sm font-medium leading-none ${
                  isUrgent ? "text-red-600" : "text-[#008080]"
                }`}
              >
                {formatTimeShort(remaining)}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wide text-slate-500 mt-0.5">
                restant
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 pt-5 pb-1.5">
        <StepIndicator currentStep={3} />
      </div>
      <div className="flex gap-2 flex-wrap px-4 sm:px-8 pb-3.5 border-b border-slate-300">
        <span className="bg-white border-[1.5px] border-slate-300 rounded-full px-3.5 py-1.5 text-xs font-bold text-slate-700">
          BSC · BEP-20
        </span>
        <span className="bg-white border-[1.5px] border-slate-300 rounded-full px-3.5 py-1.5 text-xs font-bold text-[#008080] cursor-pointer hover:bg-blue-50 transition-colors">
          ↗ Contrat
        </span>
      </div>
      <div className="mx-4 sm:mx-8 mt-4 p-3.5 rounded-[10px] bg-blue-50 border border-[#008080]/25 text-[#008080] text-[13px] font-medium flex items-center gap-2.5 leading-relaxed">
        <Info size={15} className="flex-shrink-0" />
        Les frais de réseau sont à votre charge
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 sm:px-8 py-6 items-stretch sm:items-end">
        <div className="w-[130px] h-[130px] mx-auto sm:mx-0 flex-shrink-0 bg-white border-[1.5px] border-slate-300 rounded-2xl p-[7px] shadow-sm">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${wallet}&bgcolor=ffffff&color=14142b&margin=0`}
            alt="QR Code"
            className="w-full h-full rounded-[10px]"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-3.5">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
              Adresse
            </div>
            <div className="flex items-center justify-between bg-white border-[1.5px] border-slate-300 rounded-[10px] px-[15px] py-3 gap-2.5 hover:border-[#008080]/60 transition-colors min-w-0">
              <span className="font-mono text-sm text-[#008080] font-medium truncate flex-1 min-w-0 block">
                {wallet.slice(0, 12)}...{wallet.slice(-6)}
              </span>
              <button
                onClick={() => onCopy(wallet, "addr")}
                className="text-slate-500 hover:text-[#008080] transition-colors flex-shrink-0"
              >
                {copiedField === "addr" ? (
                  <Check size={16} className="text-[#008080]" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
              Montant exact
            </div>
            <div className="flex items-center justify-between bg-white border-[1.5px] border-slate-300 rounded-[10px] px-[15px] py-3 gap-2.5 hover:border-[#008080]/60 transition-colors min-w-0">
              <span className="font-mono text-[17px] font-semibold text-[#008080] flex-1 min-w-0">
                {amount} <span className="text-[13px] text-slate-500 font-normal">{currency}</span>
              </span>
              <button
                onClick={() => onCopy(amount, "amt")}
                className="text-slate-500 hover:text-[#008080] transition-colors flex-shrink-0"
              >
                {copiedField === "amt" ? (
                  <Check size={16} className="text-[#008080]" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 mb-6 p-3.5 rounded-[10px] bg-amber-50 border border-amber-200 text-amber-700 text-[13px] font-medium flex items-center gap-2.5 leading-relaxed">
        <AlertCircle size={16} className="flex-shrink-0" />
        Attendez la redirection automatique après paiement.
      </div>
    </motion.div>
  );
};
