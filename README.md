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
- ✅ Real-time input validation with error messages
- 🔔 Browser notifications for payment success/failure
- 🐛 Report Problem button for user support
- 🔍 Stellar Explorer integration
- 📝 Soroban smart contract for on-chain payment recording

## 🏗️ Smart Contract (Soroban)
Located in `contracts/remitflow/src/lib.rs`
- Records payments on-chain with sender, recipient, amount, timestamp
- Tracks total payment count and emits events
- Full unit test suite in `contracts/remitflow/src/test.rs`
- TypeScript bindings in `src/contract.ts`

## 🛠️ Tech Stack
- React.js (Frontend)
- Stellar SDK (@stellar/stellar-sdk)
- Freighter API (@stellar/freighter-api)
- Soroban SDK — Rust (Smart Contract)
- Stellar Testnet via Horizon API
- Vercel (Deployment)

## 🚀 How to Run Locally
```bash
git clone https://github.com/Nandini-Jadhav1/Remitflow-dapp
cd Remitflow-dapp
npm install
npm start
```

## 📁 Project Structure
```
Remitflow-dapp/
├── contracts/remitflow/
│   ├── Cargo.toml
│   └── src/
│       ├── lib.rs
│       └── test.rs
├── src/components/
│   ├── Header.js
│   ├── Freighter.js
│   └── MetricsDashboard.js
├── src/contract.ts
├── SECURITY.md
├── USER_GUIDE.md
└── ARCHITECTURE.md
```

## 👥 Testnet Users (33 Verified)
| Full Name | Email | Wallet Address | Rating | Feedback |
|-----------|-------|---------------|--------|----------|
| Harshal Jagdale | harshaljagdale40@gmail.com | GCATAASNFHODIKA4VTIEZHONZB3BGZJL42FXHHZ3VS6YKX2PCDIJ3LDY | 4⭐ | Good |
| Dnyaneshwari Badhe | dnyaneshwaribadhe2323@gmail.com | GATCVV5LUG2YM6Y7YMN3LHZWRVV3MT34WBL7ZBPCIXKGAYXIQ3WG6SXZ | 5⭐ | Features are well-implemented |
| Yash Annadate | yashannadate2005@gmail.com | GBWDGDXAN4AW22OBEQADIOSK2GE7EFNDLZDTBJV6AP33SEPTGNNGFDAE | 5⭐ | Overall everything is fine |
| Shubham Golekar | shubhamgolekar62021@gmail.com | GA3PMUXWSCWLT2FMQ76PODPODHLJHOWAHTD7JGOWHGGE5FZ3WWF6EJBO | 5⭐ | All features good |
| Yuvraj Vibhute | yuvishine40@gmail.com | GARXEMFNMVPPXSTQYMXAU2KTLTTG4ZV7R5F56HHT7QGI6L3QAGHRTMBT | 5⭐ | Good |
| Vikas Dhanavade | vikasdhanavade2141@gmail.com | GAUHSW34K5KW7JLOGH2X2JROJXG2DXYIE7NREBTMCHAF7DYK5Y7YBSKX | 5⭐ | Strong potential |
| Rushikesh Gaiwal | rushikeshgaiwal66@gmail.com | GADY24FFOBCTVQJIBCP6OCX6QPVODAQM4IEMYUKS5VSVN564XQPSWXGY | 5⭐ | Good |
| Manohar Kalel | kalelmanohar97@gmail.com | GCCMU5J4EDPDPINUGG5EAXDNRTYKPWUB4HOZI33K76OSNZUFD2KWWJ4K | 5⭐ | Great experience |
| Amar More | amarmore854@gmail.com | GDME4ZHGKH5RNUOY5XC5B2TPAIU3NXDJHOWPYLDGY7SJYBKR2WTI2KVI | 5⭐ | Simple and user-friendly |
| Ishika Nandanwar | nandanwarishika@gmail.com | GCNE2J6JCKQO6J3RKFECAJ73DN7FCHCZRLMDSH3SRKOJDDOZEMR3A3LB | 5⭐ | Scope to improve UI |
| Khushi Nagare | khushinagare8@gmail.com | GAYUBQQSVMCPC6UE6YNDAUTBMA7A5Q5EZBZWDHYRYXOPBMV57SQGZU6 | 5⭐ | Buttons working, UI nice |
| Paras Babar | parasbabar4@gmail.com | GDLQ6YCG5TKSZP44A2MNVHYKKGCBJX6AIG2EBBGEQXNGMD2GM5ZXWRWW | 5⭐ | Add Report Problem button |
| Payal Babar | babarpayal953@gmail.com | GAI77NXTXFHIDPLRDY24DHY4YQGRWANIV25FRVNHZ2GWFSCNMW76H27Q | 5⭐ | Better notifications needed |
| Kalyani Deshmukh | deshmukhkalyani833@gmail.com | GDQASLYOLB2FTSAYPSGVWIXG7Q2RFYHR76XAJWKW37EFPMGBQWKLKLWI | 5⭐ | Add more security features |
| Anushka Pathak | Anushkapathak0876@gmail.com | GBDLPQL6H2QZBMFB5CFHZVWARPOHOP5KTEKTCUO65JIDH6HAQYB7SFPO | 5⭐ | Very easy to use |
| Mrudula Devkar | mruduladevkar40@gmail.com | GAQUPLT54ZX2ZJN7OJRHAKNDY5SX3XPJOBZXL2BBIARSHHRTWWDW4GUO | 4⭐ | Good |
| Jadhav Tanaya | tanayajadhav56@gmail.com | GDORYG2MGTK3WJL45W5SPEX4CBLRD2EBH4B2HZTROCRVRQ2Y2SF7PLIL | 5⭐ | Nothing to add |
| Vaishnavi Konde | vaishnavikonde2006@gmail.com | GDGO2NJAXS3E5P7RF2P3YRN7AB4NIYTCRU6XSY4U6RAS62N54HRG7OOF | 5⭐ | Very good application |
| Runav Phate | phaterunav@gmail.com | GCHB2KGFMWFAM7HOQYUFNPQXAQMAY6U7OLXAP4BEJWIJWXBV6IDKB7DR | 5⭐ | Improve UI |
| Aayusha Jagtap | jagtapaayusha17@gmail.com | GAU6Z4MRXARKACHU54NMGAUIFBKTL23TTPIY76BWQA665ZUXYASEKNZY | 5⭐ | Good |
| Priyadarshani Satubar | - | GA4S66SWIWJAKNEQW5N3RKCEOHRY4TY4JU3ZMPHD64LML7TIG3I5U5YW | 5⭐ | Good and very useful |
| Soham Ghuge | sohamghuge63@gmail.com | GCZXHLXNKRQZ7FA3MV575L2OZ7UCYCMZCKKMBZN64MQ2XTD2TFCYHP2V | 5⭐ | All features good |
| Sarthak Dhere | sarthakdhere0217@gmail.com | GCRYPAQB3TFLQE727TA3R723QIEPTP5KCMP7OMH4HVXNLCEUKPD4AZJP | 5⭐ | Great website |
| Shritesh Patil | patilshritesh863@gmail.com | GAGBMRVUN2IBMXJUFNGRD7BHWYQACCGXDVV6X4GXTNXQC5DGCRMW2CQ3 | 5⭐ | Very good project |
| Vaibhavi Agale | vaibhaviagale7799@gmail.com | GALWWEGHOMU5YODTZBVGPFP2OHCJH5VO3VKWNMW7ZNT6OECINVPQT7SQ | 5⭐ | Great website |
| Poorva Mulimani | poorvam2006@gmail.com | GBNOBRJ73DRVVHE4MJPDRIOVP3MZ7BHOO2ISZDMPJWDNHPCPVRZLRILT | 5⭐ | Great experience |
| Samruddhi Nevse | nevsesamruddhi@gmail.com | GDHOWWJM3ZU7XN7BF7IQFFXXFNN3Y2ZL7I4253F5KHTA5FFN57SFLMWZ | 5⭐ | Nice application |
| Vaibhavi Jadhav | vaibhavijadhav856@gmail.com | GDJ6VJX3OVJJLIF2J2JRBBDD6PYAZNLAMJIDOLJQSWTUCGDSKEBOEOFP | 5⭐ | Simple and useful |
| Meghiya Tulse | meghiyatulse24@gmail.com | GB2FK6UX2HC7U2LFML6OZFJLJGFUCX7S37EZDVA5MPM5O5D5NLH65SOV | 5⭐ | Good application |
| Janhavi Lipare | janhavilipare9948@gmail.com | GBLUMAX4IIPS54AIGD5WXRRAXISG4HLV3BE3YR3SQAD3GZSXRTVJY5GI | 5⭐ | Smooth, unique and user-friendly |
| Om Golekar | omgolekar.46@gmail.com | GDUFDJ23MIR2KR6FC3VTKA7YTCLJAJY5GL2UIX35HCFCZUPJCW7ZT6K5 | 4⭐ | Very good project |
| Vaishnavi Shille | - | GBR2YFEBQWS6NLXDQFHBZ3WE7WIARX6LZFOX3VYQVFHKM6B3FG52UTO5 | 5⭐ | Very easy to use |
| Pratiksha Kalbhor | pratikshaspark12@gmail.com | GCYO66SNVSGBBJB3LDGDIGNTW5Y7H4FEWF65MU4BBH7YSXDRYZWWMY6C | 4⭐ | Easy to use |
## 📊 User Feedback
[View Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdL-BiRPy22kKXl-sDsVY6c0QeUh-duUW8z7_QTkhRGHj8pTw/viewform)

[View Feedback Excel Sheet](https://docs.google.com/spreadsheets/d/12da1bg8IQiZxrh2JT2QR1nq5mX2LfKpR7KEtOpHbx6U/edit?usp=sharing)

## 🏗️ Architecture
See [ARCHITECTURE.md](./ARCHITECTURE.md)

## 🔄 Planned Improvements (based on user feedback)

| User Name | User Email | User Feedback | Change Made in Code | Commit ID |
|-----------|------------|---------------|---------------------|-----------|
| Harshal Jagdale | harshaljagdale40@gmail.com | Show exchange rate before sending | Added live exchange rate preview in Header.js | [a3b970a](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a) |
| Shubham Golekar | shubhamgolekar62021@gmail.com | Add USDC payment option | Added path payment XLM→USDC toggle | [a3b970a](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a) |
| Dnyaneshwari Badhe | dnyaneshwaribadhe2323@gmail.com | Add success screen after payment | Added 3-screen flow with success screen | [834be6b](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/834be6b) |
| Vikas Dhanavade | vikasdhanavade2141@gmail.com | Adding more user-focused features | Added Report Problem button + notifications | [4aa715e](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/4aa715e) |
| Yash Annadate | yashannadate2005@gmail.com | More security features needed | Added real-time input validation with error messages | [4aa715e](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/4aa715e) |
| Yuvraj Vibhute | yuvishine40@gmail.com | Add mobile support | Added responsive layout improvements | [eb04556](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/eb04556) |

### ✅ Changes Made Based on Feedback:
- [x] Add live exchange rate preview → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a)
- [x] Add USDC path payment option → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/a3b970a)
- [x] Add success/error screens → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/834be6b)
- [x] Add Fee Bump gasless transactions → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/c10637b)
- [x] Add metrics dashboard → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/2d7015a)
- [x] Add Soroban smart contract → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/adafc96)
- [x] Add security checklist → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/b6f03fb)
- [x] Add user guide → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/7ae1994)
- [x] Add real-time input validation + security → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/4aa715e)
- [x] Add Report Problem button → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/4aa715e)
- [x] Add browser notifications → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/4aa715e)
- [x] Clean production code - remove all commented code → [commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/eb04556)
- [ ] Add transaction history page
- [ ] Mobile responsive improvements
- [ ] USDC support on mainnet

## 📊 Metrics Dashboard
Click **📊 Metrics** button in navbar after connecting wallet.

Live tracking:
- Total users onboarded (30+)
- Total transactions on Stellar Testnet
- Total XLM volume sent
- Daily active users

[View on Stellar Explorer](https://stellar.expert/explorer/testnet)

## ⚡ Advanced Feature — Fee Sponsorship (Fee Bump)
**Implementation:** `sendWithFeeBump()` in `src/components/Freighter.js`

How it works:
- Sender builds inner payment transaction
- Fee Bump envelope wraps the inner transaction
- Sender sponsors ALL network fees
- Recipient needs ZERO XLM balance to receive

[View commit](https://github.com/Nandini-Jadhav1/Remitflow-dapp/commit/c10637b)

## 🔒 Security Checklist
[View SECURITY.md](./SECURITY.md)

## 📖 User Guide
[View USER_GUIDE.md](./USER_GUIDE.md)

## 🌍 Community Contribution
[View Tweet about RemitFlow](https://x.com/jadhav_nan99910/status/2045021733607117138?s=20)

## 📈 Data Indexing
**Approach:** Stellar Horizon API used as indexing layer.

**Endpoint:**
```
GET https://horizon-testnet.stellar.org/accounts/{address}/payments
```
MetricsDashboard queries this for all tracked wallets in real-time.

[Stellar Explorer](https://stellar.expert/explorer/testnet)

## 🖥️ Monitoring
- Live metrics via Stellar Horizon API
- Transaction status via Stellar Explorer
- Error handling and logging in all components
- Vercel deployment monitoring active
- Browser notifications for payment events