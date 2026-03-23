import { Transaction } from "@/types/checkout";

export const initialTransactions: Transaction[] = [
  {
    id: 'tx1',
    hash: '0x7a3fbcd2910fe82c4d9f3a1bc2e87654f1e3a82c',
    hashShort: '0x7a3f...e82c',
    amount: '4.99', currency: 'USDT', usd: '5.00',
    time: 'Il y a 2 min', timestamp: '2024-01-15 14:32:07',
    status: 'ok', confirmations: 24,
    from: '0x9c4d...3fa1', network: 'BSC (BEP-20)',
    fee: '0.0003 BNB ≈ $0.18'
  },
  {
    id: 'tx2',
    hash: '0x1d92ee740b994af1c38e2b55a8d761e3920f4af1',
    hashShort: '0x1d92...4af1',
    amount: '4.99', currency: 'USDT', usd: '5.00',
    time: 'Il y a 18 min', timestamp: '2024-01-15 14:15:42',
    status: 'ok', confirmations: 87,
    from: '0x2e8a...b7c4', network: 'BSC (BEP-20)',
    fee: '0.0003 BNB ≈ $0.18'
  },
  {
    id: 'tx3',
    hash: '0xb3c1aa8f72e39d02a7f1cc3e855b29d4f8e39d02',
    hashShort: '0xb3c1...9d02',
    amount: '4.99', currency: 'USDT', usd: '5.00',
    time: 'Il y a 1h', timestamp: '2024-01-15 13:35:11',
    status: 'wait', confirmations: 2,
    from: '0x5f1b...a2e9', network: 'BSC (BEP-20)',
    fee: '0.0003 BNB ≈ $0.18'
  }
];
