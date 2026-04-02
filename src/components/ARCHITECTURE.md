# 🏗️ RemitFlow Architecture

## System Overview
```
User Browser
     │
     ▼
React Frontend (Vercel)
     │
     ├──► Freighter Wallet Extension
     │         (Signs transactions locally)
     │
     └──► Stellar Horizon API (Testnet)
               │
               ▼
         Stellar Network
               │
               ▼
         Recipient Wallet
```

## Components

### Frontend (React)
- **App.js** — Main state management, screen routing
- **Header.js** — Wallet connect/disconnect, balance display
- **SendPayment.js** — Payment form, validation, transaction building
- **TransactionResult.js** — Success screen, Explorer link
- **Freighter.js** — Wallet API wrapper, Stellar SDK helpers

### Stellar Integration
- **Network:** Stellar Testnet
- **API:** Horizon REST API
- **Wallet:** Freighter browser extension
- **Operations:** Native XLM payment

## Transaction Flow
1. User connects Freighter wallet
2. App fetches balance from Horizon API
3. User enters recipient + amount
4. App builds transaction using Stellar SDK
5. Freighter signs the transaction locally
6. Signed XDR submitted to Horizon
7. Result hash displayed + linked to Explorer

## Security
- No private keys stored anywhere
- All signing done locally in Freighter
- Non-custodial — app never touches user funds