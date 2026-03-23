interface CheckoutFooterProps {
  onSimulate: () => void;
}

export const CheckoutFooter = ({
  onSimulate,
}: CheckoutFooterProps) => {
  return (
    <div className="border-t border-slate-300">
      <div className="flex items-center justify-end px-8 py-4">
        <button
          onClick={onSimulate}
          className="flex items-center gap-2 bg-blue-50 border border-[#008080]/30 rounded-full px-4 py-2 text-xs font-bold text-[#008080] cursor-pointer hover:bg-blue-100 transition-colors"
        >
          <span className="w-[7px] h-[7px] bg-[#008080] rounded-full animate-pulse" />
          En attente
        </button>
      </div>
    </div>
  );
};
