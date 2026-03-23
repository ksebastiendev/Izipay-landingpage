import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Copy, ArrowLeft, ExternalLink, Activity, ChevronRight } from "lucide-react";
import { Transaction } from "@/types/checkout";

interface TransactionPanelProps {
  open: boolean;
  transactions: Transaction[];
  onClose: () => void;
  highlightTxId: string | null;
  copiedField: string | null;
  onCopy: (text: string, field: string) => void;
}

export const TransactionPanel = ({
  open,
  transactions,
  onClose,
  highlightTxId,
  copiedField,
  onCopy,
}: TransactionPanelProps) => {
  const [detailTx, setDetailTx] = React.useState<Transaction | null>(null);
  
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute inset-0 bg-white z-50 flex flex-col rounded-2xl overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Detail sub-panel */}
          <AnimatePresence>
            {detailTx && (
              <motion.div
                className="absolute inset-0 bg-white z-[60] flex flex-col rounded-2xl overflow-hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex items-center gap-3.5 px-7 pt-5 pb-4 border-b border-slate-300 flex-shrink-0">
                  <button
                    onClick={() => setDetailTx(null)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-[#008080] transition-all"
                  >
                    <ArrowLeft size={15} />
                  </button>
                  <span className="text-[17px] font-bold">Détail transaction</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="relative text-center px-7 pt-8 pb-7 border-b border-slate-200 overflow-hidden">
                    <div className="text-[48px] font-extrabold tracking-[-2px] text-[#008080] leading-none">
                      +{detailTx.amount}{" "}
                      <span className="text-2xl text-slate-500 font-bold">
                        {detailTx.currency}
                      </span>
                    </div>
                    <div className="text-[17px] text-slate-500 font-medium mt-2">
                      ≈ ${detailTx.usd} USD
                    </div>
                  </div>
                  <div className="py-1.5 border-b border-slate-200">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 px-7 pt-4 pb-2.5">
                      Informations
                    </div>
                    {[
                      {
                        k: "Statut",
                        v:
                          detailTx.status === "ok"
                            ? `✓ Confirmée (${detailTx.confirmations} conf.)`
                            : `⏳ En attente (${detailTx.confirmations}/12)`,
                      },
                      { k: "Date", v: detailTx.timestamp },
                      { k: "Réseau", v: detailTx.network },
                      { k: "Frais", v: detailTx.fee },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-start gap-4 px-7 py-[13px] text-sm border-t border-slate-200 first:border-t-0"
                      >
                        <span className="text-slate-600">{row.k}</span>
                        <span className="font-semibold text-slate-800 text-right">
                          {row.v}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="py-1.5 border-b border-slate-200">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 px-7 pt-4 pb-2.5">
                      Adresses
                    </div>
                    {[
                      {
                        label: "Expéditeur",
                        value: detailTx.from,
                        full: detailTx.from,
                      },
                      {
                        label: "Hash",
                        value: `${detailTx.hash.slice(0, 22)}...${detailTx.hash.slice(
                          -6
                        )}`,
                        full: detailTx.hash,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-7 py-3 gap-2 border-t border-slate-200 first:border-t-0"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                            {item.label}
                          </div>
                          <div className="font-['Typold'] text-[13px] text-[#008080] truncate">
                            {item.value}
                          </div>
                        </div>
                        <button
                          onClick={() => onCopy(item.full, item.label)}
                          className="text-slate-500 hover:text-[#008080] transition-colors flex-shrink-0"
                        >
                          {copiedField === item.label ? (
                            <Check size={16} className="text-[#008080]" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mx-7 my-[18px] flex items-center justify-center gap-2.5 bg-blue-50 border-[1.5px] border-[#008080]/25 rounded-[14px] py-3.5 text-[#008080] text-sm font-semibold cursor-pointer hover:bg-blue-100 transition-colors">
                    <ExternalLink size={16} />
                    Voir sur BSCScan
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* List header */}
          <div className="flex items-center justify-between px-7 pt-5 pb-4 border-b border-slate-300 flex-shrink-0">
            <div className="flex items-center gap-2.5 text-[17px] font-bold">
              Transactions reçues
              <span className="bg-[#008080] text-white text-[11px] font-bold min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1.5">
                {transactions.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-[#008080] transition-all"
            >
              <X size={15} />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto py-2">
            {transactions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-14 gap-3 text-slate-500 text-center">
                <Activity size={44} className="opacity-25" />
                <p className="text-sm font-medium">Aucune transaction reçue</p>
              </div>
            ) : (
              transactions.map((tx) => (
                <div
                  key={tx.id}
                  onClick={() => setDetailTx(tx)}
                  className={`flex items-center gap-4 px-7 py-[15px] border-b border-slate-200 cursor-pointer hover:bg-blue-50 transition-colors ${
                    tx.id === highlightTxId ? "animate-flash-new" : ""
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-[14px] flex items-center justify-center flex-shrink-0 ${
                      tx.status === "ok" ? "bg-[#008080]/10" : "bg-amber-100"
                    }`}
                  >
                    {tx.status === "ok" ? (
                      <Check size={20} className="text-[#008080]" />
                    ) : (
                      <>⏳</>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Typold'] text-[13px] text-[#008080] truncate">
                      {tx.hashShort}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500">{tx.time}</span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                          tx.status === "ok"
                            ? "bg-[#008080]/10 text-[#008080]"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {tx.status === "ok" ? "Confirmée" : "En attente"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[15px] font-bold text-[#008080]">
                      +{tx.amount} {tx.currency}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      ≈ ${tx.usd}
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
                </div>
              ))
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

