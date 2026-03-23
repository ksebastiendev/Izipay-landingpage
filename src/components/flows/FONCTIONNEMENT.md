# Architecture Flows - Fonctionnement Complet

## 🏗️ Vue Générale

L'architecture des **flows** repose sur un **pattern de composition hiérarchisé** qui sépare les responsabilités en 3 couches :

```
┌─────────────────────────────────────────┐
│        Flows (Orchestrateurs)           │
│  CheckoutFlow • ProductFlow • PosFlow   │
│  ↓ Gèrent l'état + orchestration        │
├─────────────────────────────────────────┤
│     Pages (Vues écran) + Shared         │
│   (Présentation + animations)           │
├─────────────────────────────────────────┤
│     Design System (UI/Tailwind)         │
│  (styles, tokens, composants de base)   │
└─────────────────────────────────────────┘
```

---

## 📁 Structure Physique

```
/src/components/flows/
├── CheckoutFlow.tsx          [~150 lignes] ← Flow orchestrateur
├── ProductFlow.tsx           [~150 lignes] ← Flow orchestrateur
├── PosFlow.tsx              [~170 lignes] ← Flow orchestrateur
│
├── shared/                   ← Composants réutilisables
│   ├── AmountHero.tsx        [Display montant + devise]
│   ├── StepIndicator.tsx     [Barre de progression 3 étapes]
│   ├── CheckoutHeader.tsx    [Header avec tx counter + back]
│   ├── CheckoutFooter.tsx    [Timer + progress bar]
│   ├── NotificationBanner.tsx [Toast notification]
│   ├── TransactionPanel.tsx  [Overlay transactions list]
│   └── index.ts              [Exports centralisés]
│
├── pages/                    ← Écrans/vues du flux
│   ├── ViewSelection.tsx     [Sélection devise/réseau]
│   ├── ViewClientInfo.tsx    [Formulaire client]
│   ├── ViewPayment.tsx       [Instructions paiement QR]
│   ├── ViewSuccess.tsx       [Confirmation paiement]
│   ├── ProductView.tsx       [Affichage produit]
│   ├── PosEntry.tsx          [Accueil POS]
│   ├── PosCurrency.tsx       [Numpad + crypto picker]
│   ├── PageDemoLauncher.tsx  [Showcase/test pages]
│   └── index.ts              [Exports + demo launcher]
│
├── index.ts                  [Exports principaux]
└── FONCTIONNEMENT.md         [Cette doc]
```

---

## 🔄 Flux de Données

### 1️⃣ **Flows** (Orchestrateurs d'État)

**Fichiers** : `CheckoutFlow.tsx`, `ProductFlow.tsx`, `PosFlow.tsx`

**Responsabilités** :
- Gestion d'état complète (currentView, transactions, form data, etc.)
- Orchestration du workflow (quelle vue afficher, quand)
- Callbacks et handlers pour la logique métier
- Composition des pages + shared components
- AnimatePresence pour les transitions entre vues

**Exemple (CheckoutFlow)** :
```tsx
const CheckoutFlow = ({ remaining, total, formatTime, ... }) => {
  const [currentView, setCurrentView] = useState("selection");
  const [transactions, setTransactions] = useState([]);
  const [firstName, setFirstName] = useState("");
  // ... autres states ...

  return (
    <div>
      <CheckoutHeader txCount={...} />
      <AnimatePresence mode="wait">
        {currentView === "selection" && 
          <ViewSelection amount={...} onContinue={() => setCurrentView("client-info")} />
        }
        {currentView === "client-info" &&
          <ViewClientInfo firstName={firstName} onChange={setFirstName} />
        }
        {currentView === "payment" &&
          <ViewPayment wallet={WALLET} />
        }
        {currentView === "success" &&
          <ViewSuccess transaction={successTx} />
        }
      </AnimatePresence>
      <CheckoutFooter remaining={remaining} />
    </div>
  );
};
```

**Pattern d'état** :
- Pour chaque vue, un state correspondant
- Les callbacks `handleXxx` et `setCurrentView` orchestrent les transitions
- Les props sont propagées vers le bas aux pages

---

### 2️⃣ **Pages** (Vues Écran)

**Dossier** : `/pages`

**Responsabilités** :
- Rendu des écrans spécifiques
- Animations d'entrée/sortie (motion.div)
- Gestion des inputs utilisateur
- ❌ Pas d'état (props only)

**Types de pages** :

#### **Pages Communes** (utilisées par tous les flows)
| Page | Rôle | Props clé |
|------|------|-----------|
| `ViewSelection` | Sélection devise/réseau | `amount`, `currency`, `onContinue` |
| `ViewClientInfo` | Formulaire (nom, email) | `firstName`, `lastName`, `email`, `onSubmit` |
| `ViewPayment` | Instructions + QR code | `amount`, `wallet`, `remaining`, `onCopy` |
| `ViewSuccess` | Confirmation paiement | `transaction`, `onViewTransactions` |

#### **Pages Spécifiques**
| Page | Flow | Rôle |
|------|------|------|
| `ProductView` | ProductFlow | Affichage produit e-commerce |
| `PosEntry` | PosFlow | Écran "Vendre" du POS |
| `PosCurrency` | PosFlow | Numpad + selector crypto |

**Exemple (ViewSelection)** :
```tsx
export const ViewSelection = ({ amount, currency, onContinue }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      {/* UI avec dropdowns */}
      <button onClick={() => onContinue()}>Continuer</button>
    </motion.div>
  );
};
```

**Animations** :
- Chaque page a `motion.div` wrapper avec transitions
- Flow parent gère `AnimatePresence mode="wait"` pour les changements
- Resultat : transitions fluides entre pages

---

### 3️⃣ **Shared Components** (Blocs Réutilisables)

**Dossier** : `/shared`

**Responsabilités** :
- Composants visuels utilisés par plusieurs flows
- Animations internes (pas d'orchestration de pages)
- Props-driven, no local state (sauf si vraiment nécessaire)

**Composants** :

| Composant | Utilisé par | Rôle |
|-----------|-----------|------|
| `CheckoutHeader` | Tous | Header avec tx counter + back button |
| `CheckoutFooter` | Tous | Timer + progress bar en bas |
| `AmountHero` | Pages | Display montant + devise (center) |
| `StepIndicator` | Pages | Barre 3/4/5 étapes |
| `NotificationBanner` | Flows | Toast notification slide-in |
| `TransactionPanel` | Flows | Overlay avec list/detail transactions |

**Exemple (NotificationBanner)** :
```tsx
export const NotificationBanner = ({ visible, transaction, onClose }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="notif" initial={{ y: -100 }} animate={{ y: 0 }}>
          {/* Display transaction reçue */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

---

## 🎨 Animations & Design System

### Animations

**Framer Motion** utilisé à 3 niveaux :

1. **Niveau Page** (motion.div, transitions fade/slide)
   ```tsx
   <motion.div 
     initial={{ opacity: 0, x: 20 }} 
     animate={{ opacity: 1, x: 0 }} 
     exit={{ opacity: 0, x: -20 }}
   />
   ```

2. **Niveau Flow** (AnimatePresence pour orchestration)
   ```tsx
   <AnimatePresence mode="wait">
     {currentView === "selection" && <ViewSelection />}
   </AnimatePresence>
   ```

3. **Niveau Shared** (NotificationBanner, TransactionPanel)
   - Animations indépendantes
   - Innerées

### Design System

**Tailwind CSS** avec tokens personnalisés :
- `bg-primary`, `text-primary-foreground` → Couleur principale
- `bg-muted`, `text-muted-foreground` → Arrière-plan/texte secondaire
- `border-border` → Bordures
- `bg-destructive`, `text-destructive` → Erreurs/alerte

**Breakpoints** :
- Responsive grid : `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Elements adaptatifs à mobile/desktop

---

## 📊 Flux de Données (exemple CheckoutFlow)

```
┌─────────────────────────────────────────────────────────────┐
│ CheckoutFlow                                                │
│ State: currentView, transactions, firstName, lastName, ...  │
└─────────────┬───────────────────────────────────────────────┘
              │
              ├─→ CheckoutHeader (txCount, onOpenTxPanel)
              │   └─→ emit onOpenTxPanel → set txPanelOpen
              │
              ├─→ AnimatePresence
              │   ├─→ {currentView === "selection" && 
              │   │       <ViewSelection amount={amount} 
              │   │         onContinue={() => setCurrentView("client-info")} 
              │   │       />
              │   │   }
              │   │   └─→ User clicks → onContinue → setCurrentView
              │   │
              │   ├─→ {currentView === "client-info" &&
              │   │       <ViewClientInfo firstName={firstName}
              │   │         onFirstNameChange={setFirstName}
              │   │         onSubmit={handleSubmitClientInfo}
              │   │       />
              │   │   }
              │   │   └─→ User fills form → onChange → state updates
              │   │   └─→ User clicks submit → onSubmit → validation → setCurrentView("payment")
              │   │
              │   └─→ ... autres vues
              │
              ├─→ CheckoutFooter (remaining, total, onSimulate)
              │   └─→ User clicks simulate → simulateIncomingTx
              │       └─→ Add transaction
              │       └─→ Show NotificationBanner
              │       └─→ On close: setCurrentView("success")
              │
              └─→ NotificationBanner (visible, onClose)
                  └─→ Shows transaction received
```

---

## 🔗 Types de Dépendances

### Imports Internes
```tsx
// Flows importent Pages + Shared
import { ViewSelection, ViewPayment, ... } from "./pages";
import { CheckoutHeader, NotificationBanner, ... } from "./shared";

// Pages importent Shared uniquement
import { StepIndicator } from "../shared";

// Index.ts exporte tout
export { CheckoutFlow, ProductFlow, PosFlow } from "./flows";
export { AmountHero, StepIndicator, ... } from "./shared";
export { ViewSelection, ViewPayment, ... } from "./pages";
```

### Imports Externes
```tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { Copy, Check, ChevronDown } from "lucide-react";
// Types
import { Transaction, CheckoutView } from "@/types/checkout";
import { initialTransactions } from "@/data/transactions";
```

---

## 🎯 Cas d'Usage : Ajouter une Nouvelle Page

**Scenario** : Tu veux ajouter une page "VerificationEmail" dans CheckoutFlow.

**Étapes** :

1. **Créer la page** : `/pages/ViewVerifyEmail.tsx`
   ```tsx
   import { motion } from "framer-motion";
   import { StepIndicator } from "../shared";

   export const ViewVerifyEmail = ({ email, code, onVerify, onResend }) => {
     return (
       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
         <StepIndicator currentStep={2} totalSteps={5} />
         {/* Form pour entrer le code */}
       </motion.div>
     );
   };
   ```

2. **Exporter** : Ajouter dans `/pages/index.ts`
   ```tsx
   export { ViewVerifyEmail } from "./ViewVerifyEmail";
   ```

3. **Utiliser dans Flow** : `CheckoutFlow.tsx`
   ```tsx
   const [currentView, setCurrentView] = useState("selection");
   const [verificationCode, setVerificationCode] = useState("");

   return (
     <AnimatePresence mode="wait">
       {currentView === "verify-email" && (
         <ViewVerifyEmail 
           email={email}
           code={verificationCode}
           onVerify={() => setCurrentView("payment")}
         />
       )}
     </AnimatePresence>
   );
   ```

---

## ✅ Checklist pour le Design Actuel

- ✅ **Pages** : Écrans individuels + animations
- ✅ **Shared** : Composants réutilisables
- ✅ **Flows** : Orchestration d'état + composition
- ✅ **Zero Duplication** : Pages utilisées par tous les flows
- ✅ **Type Safety** : TypeScript pour props interfaces
- ✅ **Animations Fluides** : Framer Motion partout
- ✅ **Responsive** : Tailwind breakpoints
- ✅ **Isolé** : Pas d'imports circulaires

---

## 🚀 Prochaines Étapes

1. **API/Services** : Créer couche API pour les requêtes
2. **Context/State** : Ajouter Context global si nécessaire
3. **Error Handling** : Validation + error boundaries
4. **Tests** : Unit + integration tests
5. **Documentation** : JSDoc + Storybook

---

**Date** : 22 Mars 2026  
**Version** : 1.0 - Pattern de Composition  
**Auteur** : Refactoring automatique  
