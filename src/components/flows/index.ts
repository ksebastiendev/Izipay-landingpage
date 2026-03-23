/**
 * Flows Index - Refactored
 * Exporte tous les composants de flux de paiement réutilisables
 * 
 * Architecture: Composition pattern
 * - shared/ : Composants réutilisables (Header, Footer, NotificationBanner, etc.)
 * - pages/  : Vues de page (ViewSelection, ViewPayment, ViewSuccess, etc.)
 * - Flows   : Orchestrateurs d'état qui composent pages + shared
 * 
 * Bénéfices:
 * - Zéro duplication de code
 * - Pages réutilisables à 100% entre les flux
 * - Flows réduits de 800+ à ~150 lignes
 * - Maintenance simplifiée
 */

// Flows using composition pattern
export { default as CheckoutFlow } from "./CheckoutFlow";
export { default as ProductFlow } from "./ProductFlow";
export { default as PosFlow } from "./PosFlow";

// Shared components (reusable across flows)
export {
  AmountHero,
  StepIndicator,
  CheckoutHeader,
  CheckoutFooter,
  NotificationBanner,
  TransactionPanel,
} from "./shared";

// Page views (reusable across flows)
export {
  ViewSelection,
  ViewClientInfo,
  ViewPayment,
  ViewSuccess,
  ProductView,
  PosEntry,
  PosCurrency,
} from "./pages";

// Types
export type { Transaction, CheckoutView } from "@/types/checkout";

