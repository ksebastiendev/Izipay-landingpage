import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Transaction, CheckoutView } from "@/types/checkout";
import { initialTransactions } from "@/data/transactions";

// Shared components
import {
  CheckoutHeader,
  CheckoutFooter,
  NotificationBanner,
  TransactionPanel,
} from "./shared";

// Pages
import {
  PosEntry,
  PosCurrency,
  ViewClientInfo,
  ViewPayment,
  ViewSuccess,
} from "./pages";

interface PosFlowProps {
  remaining: number;
  total: number;
  formatTime: (s: number) => string;
  formatTimeShort: (s: number) => string;
  onBack: () => void;
  includeClientInfo?: boolean;
}

type PosView = "entry" | "currency" | "client-info" | "payment" | "success";

// Currencies constant (outside component to avoid recreating on every render)
const CURRENCIES = [
  { code: "BTC", name: "Bitcoin", icon: "/assets/images/landing/crypto/btc.svg", rate: 0.000015 },
  { code: "ETH", name: "Ethereum", icon: "/assets/images/landing/crypto/etherium.svg", rate: 0.0003 },
  { code: "USDT", name: "Tether", icon: "/assets/images/landing/crypto/usdt.svg", rate: 1.0 },
  { code: "BNB", name: "Binance", icon: "/assets/images/landing/crypto/bnb.svg", rate: 0.002 },
  { code: "ADA", name: "Cardano", icon: "/assets/images/landing/crypto/ADA.svg", rate: 0.08 },
  { code: "XRP", name: "Ripple", icon: "/assets/images/landing/crypto/xrp.svg", rate: 1.8 },
];

/**
 * PosFlow - Terminal de caisse avec numpad et sélection crypto
 * Composed de pages réutilisables et composants shared
 * 
 * Vues: Entry → Currency → [ClientInfo] → Payment → Success
 */
const PosFlow = ({
  remaining,
  total,
  formatTime,
  formatTimeShort,
  onBack,
  includeClientInfo = false,
}: PosFlowProps) => {
  // État du flux
  const [currentView, setCurrentView] = useState<PosView>("entry");
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

  // Numpad & Currency
  const [amountDisplay, setAmountDisplay] = useState("0");
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [searchCrypto, setSearchCrypto] = useState("");
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false);
  const [currencyTab, setCurrencyTab] = useState<"crypto" | "local">("crypto");

  const WALLET = "0xde1744469688cd4dd79371684ecc9885c1dae89";

  const filteredCryptos = CURRENCIES.filter((c) =>
    c.name.toLowerCase().includes(searchCrypto.toLowerCase()) ||
    c.code.toLowerCase().includes(searchCrypto.toLowerCase())
  );

  // Gestion numpad
  const handleNumpad = (digit: string) => {
    if (digit === "C") {
      setAmountDisplay("0");
    } else if (digit === "←") {
      setAmountDisplay((prev) =>
        prev.length === 1 ? "0" : prev.slice(0, -1)
      );
    } else if (digit === ".") {
      if (!amountDisplay.includes(".")) {
        setAmountDisplay((prev) => prev + ".");
      }
    } else {
      setAmountDisplay((prev) =>
        prev === "0" ? digit : prev + digit
      );
    }
  };

  const handleSelectCurrency = (code: string) => {
    setSelectedCrypto(code);
    setShowCurrencyPicker(false);
  };

  const formatDisplay = (amount: string, currency: string) => {
    const currencyObj = CURRENCIES.find((c) => c.code === currency);
    const rate = currencyObj?.rate || 1;
    const num = parseFloat(amount) || 0;
    return {
      usd: (num / rate).toFixed(2),
      crypto: amount,
    };
  };

  const handleValidate = () => {
    if (amountDisplay === "0" || amountDisplay === "") {
      return;
    }
    if (includeClientInfo) {
      setCurrentView("client-info");
    } else {
      setCurrentView("payment");
    }
  };

  // Simuler la réception d'une transaction
  const simulateIncomingTx = useCallback(() => {
    if (currentView === "success") return;
    const currencyObj = CURRENCIES.find((c) => c.code === selectedCrypto);
    const rate = currencyObj?.rate || 1;
    const usdAmount = (parseFloat(amountDisplay) / rate).toFixed(2);
    const newTx: Transaction = {
      id: "tx-pos-" + Date.now(),
      hash: "0xf8a1cc3e2b55d4f89d02b3c1a7f1855b29d4f8e3",
      hashShort: "0xf8a1...f8e3",
      amount: amountDisplay,
      currency: selectedCrypto,
      usd: usdAmount,
      time: "À l'instant",
      timestamp: new Date().toLocaleString("fr-FR"),
      status: "wait",
      confirmations: 1,
      from: "0x3c7e...d9b2",
      network: "Réseau principal",
      fee: "Gratuit",
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
  }, [currentView, amountDisplay, selectedCrypto]);

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
        variant="pos"
        txCount={transactions.length}
        onOpenTxPanel={() => setTxPanelOpen(true)}
        onBack={onBack}
      />

      {/* Contenu principal */}
      <AnimatePresence mode="wait">
        {currentView === "entry" && (
          <PosEntry onStart={() => setCurrentView("currency")} />
        )}

        {currentView === "currency" && (
          <PosCurrency
            amount={amountDisplay}
            selectedCrypto={selectedCrypto}
            searchCrypto={searchCrypto}
            showCurrencyPicker={showCurrencyPicker}
            currencyTab={currencyTab}
            currencies={CURRENCIES}
            filteredCryptos={filteredCryptos}
            onNumpad={handleNumpad}
            onSelectCurrency={handleSelectCurrency}
            onSearchChange={setSearchCrypto}
            onTabChange={setCurrencyTab}
            onTogglePicker={() => setShowCurrencyPicker(!showCurrencyPicker)}
            onValidate={handleValidate}
            formatDisplay={formatDisplay}
            remaining={remaining}
            formatTime={formatTime}
          />
        )}

        {currentView === "client-info" && includeClientInfo && (
          <ViewClientInfo
            amount={amountDisplay}
            currency={selectedCrypto}
            remaining={remaining}
            formatTime={formatTime}
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
            amount={amountDisplay}
            currency={selectedCrypto}
            remaining={remaining}
            formatTimeShort={formatTimeShort}
            copiedField={copiedField}
            onCopy={handleCopy}
            wallet={WALLET}
          />
        )}

        {currentView === "success" && (
          <ViewSuccess
            amount={amountDisplay}
            currency={selectedCrypto}
            transaction={successTx}
            onViewTransactions={() => setTxPanelOpen(true)}
            onBack={onBack}
            successTitle="Transaction réussie !"
            successDescription="Paiement reçu. Merci."
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      {currentView !== "success" && currentView !== "entry" && (
        <CheckoutFooter
          onSimulate={simulateIncomingTx}
        />
      )}
    </div>
  );
};

export default PosFlow;
