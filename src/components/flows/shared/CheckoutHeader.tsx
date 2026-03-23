import { Activity } from "lucide-react";
import { base } from "../../../../helpers";

interface CheckoutHeaderProps {
  txCount: number;
  onOpenTxPanel: () => void;
  onBack?: () => void;
  variant?: "checkout" | "pos";
}

export const CheckoutHeader = ({
  txCount,
  onOpenTxPanel,
  onBack,
  variant = "checkout",
}: CheckoutHeaderProps) => (
  <div className="flex h-[76px] items-center justify-between px-7 border-b border-slate-300">
    <div className="flex items-center gap-2.5">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008080]/40"
          aria-label="Retour aux produits"
        >
          <img
            src={base("/assets/images/landing/logos%20/logo-izichangePay-green.svg")}
            alt="IzichangePay"
            className="h-6 w-auto"
          />
        </button>
      ) : (
        <img
          src={base("/assets/images/landing/logos%20/logo-izichangePay-green.svg")}
          alt="IzichangePay"
          className="h-6 w-auto"
        />
      )}
      {variant === "pos" && (
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
          POS
        </span>
      )}
      {onBack && (
        <span aria-hidden="true" className="h-[32px] w-[96px] opacity-0 select-none" />
      )}
    </div>
    <div className="flex items-center gap-2.5">
      <button
        onClick={onOpenTxPanel}
        className="flex items-center gap-2 bg-white border border-slate-300 rounded-full px-4 py-2 text-[13px] font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#008080] hover:border-[#008080] transition-all"
      >
        <Activity size={14} />
        Transactions
        <span className="bg-[#008080] text-white text-[11px] font-bold min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1.5 leading-none">
          {txCount}
        </span>
      </button>
    </div>
  </div>
);
