/**
 * Pages/Vues réutilisables dans les flows
 * ===========================================
 * 
 * Pages communes (utilisées par CheckoutFlow, ProductFlow, PosFlow):
 * - ViewSelection: Sélection devise/réseau
 * - ViewClientInfo: Formulaire information client
 * - ViewPayment: Instructions paiement avec QR code
 * - ViewSuccess: Écran de confirmation paiement
 * 
 * Pages spécifiques:
 * - ProductView: Affichage produit (ProductFlow)
 * - PosEntry: Écran d'accueil POS (PosFlow)
 * - PosCurrency: Numpad + sélection devise crypto (PosFlow)
 */

// Pages communes
export { ViewSelection } from "./ViewSelection";
export { ViewClientInfo } from "./ViewClientInfo";
export { ViewPayment } from "./ViewPayment";
export { ViewSuccess } from "./ViewSuccess";

// Pages spécifiques
export { ProductView } from "./ProductView";
export { PosEntry } from "./PosEntry";
export { PosCurrency } from "./PosCurrency";

