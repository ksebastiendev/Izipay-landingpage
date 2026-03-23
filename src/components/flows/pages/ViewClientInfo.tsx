import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AmountHero, StepIndicator } from "../shared";

interface ViewClientInfoProps {
  amount: string;
  currency: string;
  remaining: number;
  formatTime: (s: number) => string;
  firstName: string;
  lastName: string;
  email: string;
  errors: Record<string, boolean>;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSubmit: () => void;
}

export const ViewClientInfo = ({
  amount,
  currency,
  remaining,
  formatTime,
  firstName,
  lastName,
  email,
  errors,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubmit,
}: ViewClientInfoProps) => {
  const inputClass = (hasError: boolean) =>
    `w-full bg-white border-[1.5px] rounded-[14px] text-slate-800 font-medium text-[15px] px-[18px] py-[15px] outline-none transition-all placeholder:text-slate-400 placeholder:font-normal ${
      hasError
        ? "border-red-500 ring-[3px] ring-red-500/15"
        : "border-slate-300 hover:border-[#008080]/60 focus:border-[#008080] focus:ring-[3px] focus:ring-[#008080]/15"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <AmountHero
        amount={amount}
        currency={currency}
        remaining={remaining}
        formatTime={formatTime}
      />
      <div className="px-8 pt-6 pb-8">
        <StepIndicator currentStep={2} />
        <div className="flex gap-3.5 mb-4">
          <div className="flex-1">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
              Prénom
            </label>
            <input
              className={inputClass(!!errors.firstName)}
              placeholder="Jean"
              value={firstName}
              onChange={(e) => onFirstNameChange(e.target.value)}
            />
            {errors.firstName && (
              <p className="text-[11px] text-red-600 font-medium mt-1.5">
                Champ requis
              </p>
            )}
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
              Nom
            </label>
            <input
              className={inputClass(!!errors.lastName)}
              placeholder="Dupont"
              value={lastName}
              onChange={(e) => onLastNameChange(e.target.value)}
            />
            {errors.lastName && (
              <p className="text-[11px] text-red-600 font-medium mt-1.5">
                Champ requis
              </p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
            Adresse e-mail
          </label>
          <input
            type="email"
            className={inputClass(!!errors.email)}
            placeholder="jean@email.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 font-medium mt-1.5">
              E-mail invalide
            </p>
          )}
        </div>
        <button
          onClick={onSubmit}
          className="w-full bg-[#008080] text-white font-bold text-[15px] py-[17px] rounded-[14px] flex items-center justify-center gap-2.5 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Procéder au paiement
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};
