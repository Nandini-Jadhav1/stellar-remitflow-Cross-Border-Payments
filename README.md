# 🚀 RemitFlow — Cross-Border Payments on Stellar

> Instant international payments in 3-5 seconds with near-zero fees

## 🌐 Live Demo
[https://stellar-remitflow-lrdhf6yam-nandini-jadhav1s-projects.vercel.app](https://stellar-remitflow-lrdhf6yam-nandini-jadhav1s-projects.vercel.app)

## 🎥 Demo Video
[Watch Demo](https://www.loom.com/share/48c0f836b0ca4f318b314c9d92fe9331)

## 📋 Overview
RemitFlow is a full-stack remittance application built on Stellar that solves
cross-border payments being slow (2-5 days), expensive (6-10% fees), and opaque.
Payments settle in 3-5 seconds with near-zero fees (~0.00001 XLM).

## ✨ Features
- 🔗 Connect Freighter wallet (non-custodial)
- 💸 Send XLM payments instantly on Stellar Testnet
- 🔄 Path Payment toggle (XLM to USDC route)
- 📊 Live exchange rate preview before sending
- ⛽ Fee Bump (gasless for recipient) toggle
- ✅ Real-time settlement with transaction hash
- 🔍 Stellar Explorer integration
- 📝 Soroban smart contract for on-chain payment recording

## 🏗️ Smart Contract (Soroban)
Located in `contracts/remitflow/src/lib.rs`
- Records payments on-chain with sender, recipient, amount, timestamp
- Tracks total payment count and emits events
- Full unit test suite in `contracts/remitflow/src/test.rs`

## 🛠️ Tech Stack
- React.js
- Stellar SDK (@stellar/stellar-sdk)
- Freighter API (@stellar/freighter-api)
- Soroban SDK (Rust smart contract)
- Stellar Testnet (Horizon API)
- Vercel (Deployment)

## 🚀 How to Run Locally
```bash
git clone https://github.com/Nandini-Jadhav1/Remitflow-dapp
cd Remitflow-dapp
npm install
npm start
```

## 👥 Testnet Users
| Name | Wallet Address | Email | User Feedback |
|------|---------------|-------|---------------|
| Shubham Golekar | GA3PMUXWSCWLT2FMQ76PODPODHLJHOWAHTD7JGOWHGGE5FZ3WWF6EJBO | shubhamgolekar62021@gmail.com | Great app, very fast transactions! ⭐⭐⭐⭐⭐ |
| Dnyaneshwari Badhe | GATCVV5LUG2YM6Y7YMN3LHZWRVV3MT34WBL7ZBPCIXKGAYXIQ3WG6SXZ | dnyaneshwaribadhe2323@gmail.com | Easy to use, loved the UI ⭐⭐⭐⭐⭐ |
| Harshal Jagdale | GCATAASNFHODIKA4VTIEZHONZB3BGZJL42FXHHZ3VS6YKX2PCDIJ3LDY | harshaljagdale40@gmail.com | Transaction was instant! ⭐⭐⭐⭐ |
| Yash Annadate | GBWDGDXAN4AW22OBEQADIOSK2GE7EFNDLZDTBJV6AP33SEPTGNNGFDAE | yashannadate2005@gmail.com | Would love transaction history ⭐⭐⭐⭐⭐ |
| Yuvraj Vibhute | GARXEMFNMVPPXSTQYMXAU2KTLTTG4ZV7R5F56HHT7QGI6L3QAGHRTMBT | yuvishine40@gmail.com | Add mobile support please ⭐⭐⭐⭐ |
|Vikas Dhanavade|GAUHSW34K5KW7JLOGH2X2JROJXG2DXYIE7NREBTMCHAF7DYK5Y7YBSKX | vikasdhanavade2141@gmail.com |but adding more user-focused features and improving scalability would make it even more powerful.| ⭐⭐⭐⭐⭐ |

## 📊 User Feedback
[View Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdL-BiRPy22kKXl-sDsVY6c0QeUh-duUW8z7_QTkhRGHj8pTw/viewform)

[View Feedback Excel Sheet](https://docs.google.com/spreadsheets/d/12da1bg8IQiZxrh2JT2QR1nq5mX2LfKpR7KEtOpHbx6U/edit?usp=sharing)

## 🏗️ Architecture
See [ARCHITECTURE.md](./ARCHITECTURE.md)

## 🔄 Planned Improvements (based on user feedback)

| User Name | User Email | User Feedback | Commit ID |
|-----------|------------|---------------|-----------|
| Yash Annadate | yashannadate2005@gmail.com | Would love transaction history feature | [a3b970a](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a) |
| Yuvraj Vibhute | yuvishine40@gmail.com | Add mobile responsive design | [2be41dd](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/2be41dd) |
| Harshal Jagdale | harshaljagdale40@gmail.com | Show exchange rate before sending | [a3b970a](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a) |
| Shubham Golekar | shubhamgolekar62021@gmail.com | Add USDC payment option | [a89d93b](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a89d93b) |
| Dnyaneshwari Badhe | dnyaneshwaribadhe2323@gmail.com | Add success screen after payment | [834be6b](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/834be6b) |

### ✅ Changes Made Based on Feedback:
- [x] Add live exchange rate preview → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a)
- [x] Add USDC path payment option → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a)
- [x] Add success/error screens → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/834be6b)
- [x] Add metrics dashboard → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/2d7015a)
- [x] Add Fee Bump gasless transactions → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/834be6b)
- [x] Add Soroban smart contract → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a89d93b)
- [x] Add security checklist → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/b6f03fb)
- [x] Add user guide → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/7ae1994)
- [ ] Add transaction history page
- [ ] Mobile responsive improvements
- [ ] USDC support on mainnet