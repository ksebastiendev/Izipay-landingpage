export interface Transaction {
  id: string;
  hash: string;
  hashShort: string;
  amount: string;
  currency: string;
  usd: string;
  time: string;
  timestamp: string;
  status: 'ok' | 'wait';
  confirmations: number;
  from: string;
  network: string;
  fee: string;
}

export type CheckoutView = 'selection' | 'client-info' | 'payment' | 'success';
