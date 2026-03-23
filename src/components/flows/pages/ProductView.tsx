import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductViewProps {
  productTitle: string;
  productDescription: string;
  productImage: string;
  productPrice: string;
  onAddToCart: () => void;
}

export const ProductView = ({
  productTitle,
  productDescription,
  productImage,
  productPrice,
  onAddToCart,
}: ProductViewProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative w-full h-[280px] bg-gradient-to-br from-slate-100 to-slate-300 overflow-hidden border-b border-slate-300">
      <img src={productImage} alt={productTitle} className="w-full h-full object-cover" />
    </div>
    <div className="px-8 pt-8 pb-8">
      <h1 className="text-[28px] font-extrabold text-[#008080] mb-1">
        {productTitle}
      </h1>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        {productDescription}
      </p>
      <div className="relative px-6 py-[18px] border-[1.5px] border-slate-300 rounded-[14px] bg-blue-50 overflow-hidden mb-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(39,69,134,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative flex items-baseline gap-2.5">
          <span className="text-[42px] font-extrabold tracking-tight text-[#008080] leading-none">
            {productPrice}
          </span>
          <span className="text-lg font-bold text-slate-500">USD</span>
        </div>
        <div className="mt-3 text-[13px] text-slate-600 font-medium">
          Prix converti en crypto à la confirmation
        </div>
      </div>
      <button
        onClick={onAddToCart}
        className="w-full bg-[#008080] text-white font-bold text-[15px] py-[17px] rounded-[14px] flex items-center justify-center gap-2.5 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 transition-all"
      >
        Commander maintenant
        <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);
