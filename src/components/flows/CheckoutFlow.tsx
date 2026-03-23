import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Transaction, CheckoutView } from "@/types/checkout";
import { initialTransactions } from "@/data/transactions";

// Shared components
import {
  AmountHero,
  StepIndicator,
  CheckoutHeader,
  CheckoutFooter,
  NotificationBanner,
  TransactionPanel,
} from "./shared";

// Pages
import {
  ViewSelection,
  ViewClientInfo,
  ViewPayment,
  ViewSuccess,
} from "./pages";

interface CheckoutFlowProps {
  remaining: number;
  total: number;
  formatTime: (s: number) => string;
  formatTimeShort: (s: number) => string;
  onBack: () => void;
  initialAmount?: string;
  initialCurrency?: string;
}

/**
 * CheckoutFlow - Tunnel de paiement complet
 * Composé de pages réutilisables et composants shared
 * 
 * Vues: Selection → ClientInfo → Payment → Success
 */
const CheckoutFlow = ({
  remaining,
  total,
  formatTime,
  formatTimeShort,
  onBack,
  initialAmount = "5.00",
  initialCurrency = "USD",
}: CheckoutFlowProps) => {
  // État du flux
  const [currentView, setCurrentView] = useState<CheckoutView>("selection");
  const [transactions, setTransactions] = useState<Transaction[]>([
    ...initialTransactions,
  ]);
  const [txPanelOpen, setTxPanelOpen] = useState(false);
  const [highlightTxId, setHighlightTxId] = useState<string | null>(null);
  const [notifVisible, setNotifVisible] = useState(false);
  const [notifTx, setNotifTx] = useState<Transaction | null>(null);
  const [successTx, setSuccessTx] = useState<Transaction | null>(null);

  // État des formulaires
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const progressPercent = (remaining / total) * 100;
  const isUrgent = remaining <= 600;
  const WALLET = "0xde1744469688cd4dd79371684ecc9885c1dae89";

  // Simuler la réception d'une transaction
  const simulateIncomingTx = useCallback(() => {
    if (currentView === "success") return;
    const newTx: Transaction = {
      id: "tx-new-" + Date.now(),
      hash: "0xf8a1cc3e2b55d4f89d02b3c1a7f1855b29d4f8e3",
      hashShort: "0xf8a1...f8e3",
      amount: initialAmount,
      currency: "USDT",
      usd: initialAmount,
      time: "À l'instant",
      timestamp: new Date().toLocaleString("fr-FR"),
      status: "wait",
      confirmations: 1,
      from: "0x3c7e...d9b2",
      network: "BSC (BEP-20)",
      fee: "0.0003 BNB",
    };
    setTransactions((prev) => [newTx, ...prev]);
    setNotifTx(newTx);
    setNotifVisible(true);
    setTimeout(() => {
      setNotifVisible(false);
      setTimeout(() => {
        setSuccessTx(newTx);
        setCurrentView("success");
      }, 300);
    }, 3000);
  }, [currentView, initialAmount]);

  // Validation formulaire
  const handleSubmitClientInfo = () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const newErrors = {
      firstName: !firstName.trim(),
      lastName: !lastName.trim(),
      email: !emailValid,
    };
    setErrors(newErrors);
    if (!Object.values(newErrors).some(Boolean)) {
      setCurrentView("payment");
    }
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  return (
    <div className="w-[650px] max-w-full mx-auto bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)] relative transition-all duration-300 font-['Typold'] [&_button]:font-['Typold'] [&_input]:font-['Typold'] [&_select]:font-['Typold'] [&_textarea]:font-['Typold']">
      {/* Notification */}
      <NotificationBanner
        visible={notifVisible}
        transaction={notifTx}
        onClose={() => setNotifVisible(false)}
        onViewDetails={() => {
          setNotifVisible(false);
          setHighlightTxId(notifTx?.id || null);
          setTxPanelOpen(true);
        }}
      />

      {/* Transaction Panel */}
      <TransactionPanel
        open={txPanelOpen}
        transactions={transactions}
        onClose={() => setTxPanelOpen(false)}
        highlightTxId={highlightTxId}
        copiedField={copiedField}
        onCopy={handleCopy}
      />

      {/* Header */}
      <CheckoutHeader
        txCount={transactions.length}
        onOpenTxPanel={() => setTxPanelOpen(true)}
        onBack={onBack}
      />

      {/* Contenu principal */}
      <AnimatePresence mode="wait">
        {currentView === "selection" && (
          <ViewSelection
            amount={initialAmount}
            currency={initialCurrency}
            onContinue={() => setCurrentView("client-info")}
          />
        )}

        {currentView === "client-info" && (
          <ViewClientInfo
            amount={initialAmount}
            currency="USDT"
            firstName={firstName}
            lastName={lastName}
            email={email}
            errors={errors}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
            onEmailChange={setEmail}
            onSubmit={handleSubmitClientInfo}
          />
        )}

        {currentView === "payment" && (
          <ViewPayment
            amount={initialAmount}
            currency="USDT"
            remaining={remaining}
            total={total}
            formatTimeShort={formatTimeShort}
            copiedField={copiedField}
            onCopy={handleCopy}
            wallet={WALLET}
          />
        )}

        {currentView === "success" && (
          <ViewSuccess
            amount={initialAmount}
            currency="USDT"
            transaction={successTx}
            onViewTransactions={() => setTxPanelOpen(true)}
            onBack={onBack}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      {currentView !== "success" && (
        <CheckoutFooter
          remaining={remaining}
          total={total}
          formatTime={formatTime}
          onSimulate={simulateIncomingTx}
        />
      )}
    </div>
  );
};

export default CheckoutFlow;
