import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Trash2, Search, X } from "lucide-react";
import { StepIndicator } from "../shared";
import { base } from "../../../../helpers";

interface Currency {
  code: string;
  name: string;
  icon: string;
  rate: number;
}

interface PosCurrencyProps {
  amount: string;
  selectedCrypto: string;
  searchCrypto: string;
  showCurrencyPicker: boolean;
  currencyTab: "crypto" | "local";
  currencies: Currency[];
  filteredCryptos: Currency[];
  onNumpad: (digit: string) => void;
  onSelectCurrency: (code: string) => void;
  onSearchChange: (value: string) => void;
  onTabChange: (tab: "crypto" | "local") => void;
  onTogglePicker: () => void;
  onValidate: () => void;
  formatDisplay: (amount: string, currency: string) => { usd: string; crypto: string };
}

export const PosCurrency = ({
  amount,
  selectedCrypto,
  searchCrypto,
  showCurrencyPicker,
  currencyTab,
  currencies,
  filteredCryptos,
  onNumpad,
  onSelectCurrency,
  onSearchChange,
  onTabChange,
  onTogglePicker,
  onValidate,
  formatDisplay,
}: PosCurrencyProps) => {
  const display = formatDisplay(amount, selectedCrypto);
  const selectedCurrencyIcon = currencies.find((c) => c.code === selectedCrypto)?.icon || "⟨⟩";
  const isImageIcon = (icon: string) => icon.startsWith("/");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <StepIndicator currentStep={0} totalSteps={4} />
      <div className="px-8 py-8">
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 block">
            Sélectionner une devise
          </label>
          <div className="relative">
            <button
              onClick={onTogglePicker}
              className="w-full flex items-center justify-between bg-white border-[1.5px] border-slate-300 rounded-[14px] px-[18px] py-[15px] text-slate-800 font-semibold text-[15px] hover:border-[#008080]/60 focus:border-[#008080] focus:ring-[3px] focus:ring-[#008080]/15 outline-none transition-all"
            >
              <div className="flex items-center gap-2">
                {isImageIcon(selectedCurrencyIcon) ? (
                  <img
                    src={base(selectedCurrencyIcon)}
                    alt={selectedCrypto}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  <span className="text-xl">{selectedCurrencyIcon}</span>
                )}
                <span>{selectedCrypto}</span>
              </div>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Numpad */}
        <div className="mb-6">
          <div className="relative bg-blue-50 border-[1.5px] border-slate-300 rounded-[14px] p-6 mb-4 text-center overflow-hidden">
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(39,69,134,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">
              Montant à recevoir
            </div>
            <div className="text-[48px] font-extrabold text-[#008080] tracking-tight leading-none">
              {amount}{" "}
              <span className="text-2xl text-slate-500 font-bold">
                {selectedCrypto}
              </span>
            </div>
            <div className="text-[13px] text-slate-600 mt-1.5">
              {display.crypto} {selectedCrypto}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-2">
            {["1", "2", "3"].map((n) => (
              <button
                key={n}
                onClick={() => onNumpad(n)}
                className="bg-white border border-slate-300 rounded-[10px] py-4 text-[22px] font-bold text-slate-800 hover:bg-blue-50 hover:border-[#008080]/50 transition-all"
              >
                {n}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {["4", "5", "6"].map((n) => (
              <button
                key={n}
                onClick={() => onNumpad(n)}
                className="bg-white border border-slate-300 rounded-[10px] py-4 text-[22px] font-bold text-slate-800 hover:bg-blue-50 hover:border-[#008080]/50 transition-all"
              >
                {n}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {["7", "8", "9"].map((n) => (
              <button
                key={n}
                onClick={() => onNumpad(n)}
                className="bg-white border border-slate-300 rounded-[10px] py-4 text-[22px] font-bold text-slate-800 hover:bg-blue-50 hover:border-[#008080]/50 transition-all"
              >
                {n}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button
              onClick={() => onNumpad(".")}
              className="bg-white border border-slate-300 rounded-[10px] py-4 text-[22px] font-bold text-slate-800 hover:bg-blue-50 hover:border-[#008080]/50 transition-all"
            >
              .
            </button>
            <button
              onClick={() => onNumpad("0")}
              className="bg-white border border-slate-300 rounded-[10px] py-4 text-[22px] font-bold text-slate-800 hover:bg-blue-50 hover:border-[#008080]/50 transition-all"
            >
              0
            </button>
            <button
              onClick={() => onNumpad("←")}
              className="bg-white border border-slate-300 rounded-[10px] py-4 text-[22px] font-bold text-slate-800 hover:bg-blue-50 hover:border-[#008080]/50 transition-all"
            >
              ⌫
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onNumpad("C")}
              className="bg-white border border-slate-300 rounded-[10px] py-4 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:border-[#008080]/50 transition-all flex items-center justify-center gap-2"
            >
              <Trash2 size={16} />
              Réinitialiser
            </button>
            <button
              onClick={onValidate}
              disabled={parseFloat(amount) <= 0}
              className="bg-[#008080] text-white rounded-[10px] py-4 text-sm font-bold hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Valider
            </button>
          </div>
        </div>
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
                onClick={onTogglePicker}
                className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-[#008080] transition-all"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex border-b border-slate-300 flex-shrink-0">
              {(["crypto", "local"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={`flex-1 font-semibold text-sm py-3 border-b-2 transition-colors ${
                    currencyTab === tab
                      ? "border-[#008080] text-[#008080]"
                      : "border-transparent text-slate-500"
                  }`}
                >
                  {tab === "crypto" ? "Crypto" : "Local"}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {currencyTab === "crypto" && (
                <>
                  <div className="relative mb-3">
                    <Search
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchCrypto}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-[10px] px-3 py-2 pl-9 text-sm placeholder:text-slate-400 focus:border-[#008080] outline-none"
                    />
                  </div>
                  {filteredCryptos.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => onSelectCurrency(c.code)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm text-left transition-colors ${
                        selectedCrypto === c.code
                          ? "bg-blue-50 text-[#008080]"
                          : "hover:bg-blue-50 text-slate-800"
                      }`}
                    >
                      {isImageIcon(c.icon) ? (
                        <img
                          src={base(c.icon)}
                          alt={c.code}
                          className="h-5 w-5 object-contain"
                        />
                      ) : (
                        <span className="text-lg">{c.icon}</span>
                      )}
                      <div className="flex-1">
                        <div className="font-semibold">{c.code}</div>
                        <div className="text-xs text-slate-500">{c.name}</div>
                      </div>
                    </button>
                  ))}
                </>
              )}

              {currencyTab === "local" && (
                <>
                  {["USD", "EUR", "GBP"].map((c) => (
                    <button
                      key={c}
                      onClick={() => onSelectCurrency(c)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm text-left transition-colors ${
                        selectedCrypto === c
                          ? "bg-blue-50 text-[#008080]"
                          : "hover:bg-blue-50 text-slate-800"
                      }`}
                    >
                      <span className="text-lg">💱</span>
                      <div className="font-semibold">{c}</div>
                    </button>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
