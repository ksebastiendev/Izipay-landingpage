import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CheckoutFlow, ProductFlow, PosFlow } from "../components/flows";
import { useNavigate, useParams } from "react-router-dom";

const TOTAL_SECONDS = 3371;
const VALID_FLOWS = new Set(["checkout", "product", "pos"]);

export default function PaymentFlowsPage() {
  const navigate = useNavigate();
  const { flow } = useParams();
  const [remaining, setRemaining] = useState(TOTAL_SECONDS);

  const activeFlow = flow && VALID_FLOWS.has(flow) ? flow : null;

  useEffect(() => {
    if (!flow) {
      navigate("/products", { replace: true });
      return;
    }

    if (!VALID_FLOWS.has(flow)) {
      navigate("/products", { replace: true });
    }
  }, [flow, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const formatTimeShort = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handleBack = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-8 pb-20 bg-background relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {activeFlow === "checkout" && (
            <CheckoutFlow
              remaining={remaining}
              total={TOTAL_SECONDS}
              formatTime={formatTime}
              formatTimeShort={formatTimeShort}
              onBack={handleBack}
            />
          )}

          {activeFlow === "product" && (
            <ProductFlow
              remaining={remaining}
              total={TOTAL_SECONDS}
              formatTime={formatTime}
              formatTimeShort={formatTimeShort}
              onBack={handleBack}
            />
          )}

          {activeFlow === "pos" && (
            <PosFlow
              remaining={remaining}
              total={TOTAL_SECONDS}
              formatTime={formatTime}
              formatTimeShort={formatTimeShort}
              onBack={handleBack}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
