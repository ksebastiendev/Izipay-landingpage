import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Transaction, CheckoutView } from "@/types/checkout";
import { initialTransactions } from "@/data/transactions";

// Shared components
import {
  StepIndicator,
  CheckoutHeader,
  CheckoutFooter,
  NotificationBanner,
  TransactionPanel,
} from "./shared";

// Pages
import {
  ProductView,
  ViewSelection,
  ViewClientInfo,
  ViewPayment,
  ViewSuccess,
} from "./pages";

interface ProductFlowProps {
  remaining: number;
  total: number;
  formatTime: (s: number) => string;
  formatTimeShort: (s: number) => string;
  onBack: () => void;
  productTitle?: string;
  productDescription?: string;
  productImage?: string;
  productPrice?: string;
  productCurrency?: string;
}

/**
 * ProductFlow - Tunnel e-commerce avec affichage produit
 * Composed de pages réutilisables et composants shared
 * 
 * Vues: Product → Selection → ClientInfo → Payment → Success
 */
const ProductFlow = ({
  remaining,
  total,
  formatTime,
  formatTimeShort,
  onBack,
  productTitle = "Product Title",
  productDescription = "Product description goes here",
  productImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  productPrice = "99.99",
  productCurrency = "USD",
}: ProductFlowProps) => {
  // État du flux
  const [currentView, setCurrentView] = useState<CheckoutView | "product">("product");
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

  const WALLET = "0xde1744469688cd4dd79371684ecc9885c1dae89";

  // Simuler la réception d'une transaction
  const simulateIncomingTx = useCallback(() => {
    if (currentView === "success") return;
    const newTx: Transaction = {
      id: "tx-new-" + Date.now(),
      hash: "0xf8a1cc3e2b55d4f89d02b3c1a7f1855b29d4f8e3",
      hashShort: "0xf8a1...f8e3",
      amount: productPrice,
      currency: "USDT",
      usd: productPrice,
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
  }, [currentView, productPrice]);

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
        {currentView === "product" && (
          <ProductView
            productTitle={productTitle}
            productDescription={productDescription}
            productImage={productImage}
            productPrice={productPrice}
            onAddToCart={() => setCurrentView("selection")}
          />
        )}

        {currentView === "selection" && (
          <ViewSelection
            amount={productPrice}
            currency="USDT"
            onContinue={() => setCurrentView("client-info")}
          />
        )}

        {currentView === "client-info" && (
          <ViewClientInfo
            amount={productPrice}
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
            amount={productPrice}
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
            amount={productPrice}
            currency="USDT"
            transaction={successTx}
            onViewTransactions={() => setTxPanelOpen(true)}
            onBack={onBack}
            successTitle="Commande confirmée !"
            successDescription="Merci pour votre achat. Votre transaction a été reçue."
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      {currentView !== "success" && currentView !== "product" && (
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

export default ProductFlow;
