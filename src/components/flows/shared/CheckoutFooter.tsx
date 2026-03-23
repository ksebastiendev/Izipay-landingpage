import { Clock } from "lucide-react";

interface CheckoutFooterProps {
  remaining: number;
  total: number;
  formatTime: (s: number) => string;
  onSimulate: () => void;
}

export const CheckoutFooter = ({
  remaining,
  total,
  formatTime,
  onSimulate,
}: CheckoutFooterProps) => {
  const progressPercent = (remaining / total) * 100;
  const isUrgent = remaining <= 600;

  return (
    <div className="border-t border-slate-300">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">
            Expiration
          </div>
          <div
            className={`flex items-center gap-2 font-mono text-xl font-medium ${
              isUrgent ? "text-red-600" : "text-[#008080]"
            }`}
          >
            <Clock size={14} />
            <span>{formatTime(remaining)}</span>
          </div>
        </div>
        <button
          onClick={onSimulate}
          className="flex items-center gap-2 bg-blue-50 border border-[#008080]/30 rounded-full px-4 py-2 text-xs font-bold text-[#008080] cursor-pointer hover:bg-blue-100 transition-colors"
        >
          <span className="w-[7px] h-[7px] bg-[#008080] rounded-full animate-pulse" />
          En attente
        </button>
      </div>
      <div className="h-[3px] bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-r-sm transition-all duration-1000"
          style={{
            width: `${progressPercent}%`,
            background: isUrgent
              ? "linear-gradient(90deg, #ef4444, #dc2626)"
              : "linear-gradient(90deg, #008080, #008080)",
          }}
        />
      </div>
    </div>
  );
};
