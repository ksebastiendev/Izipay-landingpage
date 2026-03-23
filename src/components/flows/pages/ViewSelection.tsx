import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Search, X } from "lucide-react";
import { AmountHero, StepIndicator } from "../shared";
import { base } from "../../../../helpers";

interface ViewSelectionProps {
  amount: string;
  currency: string;
  remaining: number;
  formatTime: (s: number) => string;
  onContinue: () => void;
}

const CRYPTO_OPTIONS = [
  { code: "USDT", name: "Tether", icon: "/assets/images/landing/crypto/usdt.svg" },
  { code: "BTC", name: "Bitcoin", icon: "/assets/images/landing/crypto/btc.svg" },
  { code: "ETH", name: "Ethereum", icon: "/assets/images/landing/crypto/etherium.svg" },
];

export const ViewSelection = ({
  amount,
  currency,
  remaining,
  formatTime,
  onContinue,
}: ViewSelectionProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState(currency || "USDT");
  const [searchCrypto, setSearchCrypto] = useState("");
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false);

  const selectedOption =
    CRYPTO_OPTIONS.find((item) => item.code === selectedCrypto) || CRYPTO_OPTIONS[0];

  const filteredCryptos = useMemo(
    () =>
      CRYPTO_OPTIONS.filter((item) => {
        const q = searchCrypto.toLowerCase();
        return item.code.toLowerCase().includes(q) || item.name.toLowerCase().includes(q);
      }),
    [searchCrypto]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <AmountHero
        amount={amount}
        currency={currency}
        remaining={remaining}
        formatTime={formatTime}
      />
      <div className="px-8 pt-6 pb-8">
        <StepIndicator currentStep={1} />
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
          Devise
        </label>
        <div className="relative mb-4">
          <button
            onClick={() => setShowCurrencyPicker(true)}
            className="w-full flex items-center justify-between bg-white border-[1.5px] border-slate-300 rounded-[14px] text-slate-800 font-semibold text-[15px] px-[18px] py-[15px] hover:border-[#008080]/60 focus:border-[#008080] focus:ring-[3px] focus:ring-[#008080]/15 outline-none transition-all"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={base(selectedOption.icon)}
                alt={selectedOption.code}
                className="h-5 w-5 object-contain"
              />
              <span>{selectedOption.code} — {selectedOption.name}</span>
            </div>
            <ChevronDown size={14} className="text-slate-500" />
          </button>
        </div>
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
          Réseau
        </label>
        <div className="relative mb-5">
          <select className="w-full bg-white border-[1.5px] border-slate-300 rounded-[14px] text-slate-800 font-semibold text-[15px] px-[18px] py-[15px] pr-[50px] appearance-none cursor-pointer hover:border-[#008080]/60 focus:border-[#008080] focus:ring-[3px] focus:ring-[#008080]/15 outline-none transition-all">
            <option>BSC (BEP-20)</option>
            <option>TRC-20</option>
            <option>ERC-20</option>
          </select>
          <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-[#008080]/10 text-[#008080] text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full pointer-events-none">
            Populaire
          </span>
          <ChevronDown
            size={14}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500"
          />
        </div>
        <div className="bg-blue-50 border-[1.5px] border-[#008080]/25 rounded-[14px] overflow-hidden mb-6">
          <div className="flex items-center justify-between px-[18px] py-[14px] text-sm">
            <span className="text-slate-600">Vous paierez</span>
            <span className="font-bold text-[#008080]">{parseFloat(amount) * 0.998} {selectedCrypto}</span>
          </div>
          <div className="flex items-center justify-between px-[18px] py-[14px] text-sm border-t border-[#008080]/25">
            <span className="text-slate-600">Taux valide pendant</span>
            <span className="flex items-center gap-[7px] text-[#008080] font-bold">
              <span className="w-[7px] h-[7px] bg-[#008080] rounded-full animate-pulse" />
              00:21
            </span>
          </div>
        </div>
        <button
          onClick={onContinue}
          className="w-full bg-[#008080] text-white font-bold text-[15px] py-[17px] rounded-[14px] flex items-center justify-center gap-2.5 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Continuer
          <ArrowRight size={16} />
        </button>
      </div>

      <AnimatePresence>
        {showCurrencyPicker && (
          <motion.div
            className="absolute inset-0 z-40 bg-white flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center justify-between px-8 pt-5 pb-4 border-b border-slate-300 flex-shrink-0">
              <span className="text-[17px] font-bold">Sélectionner une devise</span>
              <button
                onClick={() => setShowCurrencyPicker(false)}
                className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-[#008080] transition-all"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="relative mb-3">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchCrypto}
                  onChange={(e) => setSearchCrypto(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-[10px] px-3 py-2 pl-9 text-sm placeholder:text-slate-400 focus:border-[#008080] outline-none"
                />
              </div>

              {filteredCryptos.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setSelectedCrypto(item.code);
                    setShowCurrencyPicker(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm text-left transition-colors ${
                    selectedCrypto === item.code
                      ? "bg-blue-50 text-[#008080]"
                      : "hover:bg-blue-50 text-slate-800"
                  }`}
                >
                  <img
                    src={base(item.icon)}
                    alt={item.code}
                    className="h-5 w-5 object-contain"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{item.code}</div>
                    <div className="text-xs text-slate-500">{item.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
