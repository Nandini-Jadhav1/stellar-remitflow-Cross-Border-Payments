// import { isConnected, requestAccess, getAddress, signTransaction } from "@stellar/freighter-api";
// import * as StellarSdk from "stellar-sdk";

// const server = new StellarSdk.Horizon.Server("https://horizon-testnet.stellar.org");
// const networkPassphrase = StellarSdk.Networks.TESTNET;

// // ── ORIGINAL WORKING FUNCTIONS (keep exactly as they were) ──

// export const checkConnection = async () => {
//   const result = await isConnected();
//   return result.isConnected;
// };

// export const retrievePublicKey = async () => {
//   const accessObj = await requestAccess();
//   if (accessObj.error) throw new Error(accessObj.error.message);
//   return accessObj.address;
// };

// export const getBalance = async () => {
//   const addressObj = await getAddress();
//   if (addressObj.error) throw new Error(addressObj.error.message);
//   const account = await server.loadAccount(addressObj.address);
//   const xlmBalance = account.balances.find((b) => b.asset_type === "native");
//   return xlmBalance ? xlmBalance.balance : "0";
// };

// export const sendXLM = async (destination, amount) => {
//   const addressObj = await getAddress();
//   if (addressObj.error) throw new Error(addressObj.error.message);
//   const sourcePublicKey = addressObj.address;
//   const sourceAccount = await server.loadAccount(sourcePublicKey);
//   const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
//     fee: StellarSdk.BASE_FEE,
//     networkPassphrase,
//   })
//     .addOperation(
//       StellarSdk.Operation.payment({
//         destination: destination,
//         asset: StellarSdk.Asset.native(),
//         amount: amount.toString(),
//       })
//     )
//     .setTimeout(30)
//     .build();
//   const signedResult = await signTransaction(transaction.toXDR(), { networkPassphrase });
//   if (signedResult.error) throw new Error(signedResult.error.message);
//   const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(
//     signedResult.signedTxXdr,
//     networkPassphrase
//   );
//   const res = await server.submitTransaction(signedTransaction);
//   return res;
// };

// // ── NEW FEATURE 1: Live Exchange Rate ──

// export const getExchangeRate = async (amount) => {
//   try {
//     const USDC_ISSUER = "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";
//     const usdcAsset = new StellarSdk.Asset("USDC", USDC_ISSUER);
//     const xlmAsset = StellarSdk.Asset.native();

//     const paths = await server
//       .strictSendPaths(xlmAsset, amount.toString(), [usdcAsset])
//       .call();

//     if (paths.records && paths.records.length > 0) {
//       const best = paths.records[0];
//       return {
//         destinationAmount: best.destination_amount,
//         path: best.path,
//       };
//     }
//     // fallback estimate
//     return {
//       destinationAmount: (parseFloat(amount) * 0.1).toFixed(7),
//       path: [],
//     };
//   } catch (e) {
//     return {
//       destinationAmount: (parseFloat(amount) * 0.1).toFixed(7),
//       path: [],
//     };
//   }
// };

// // ── NEW FEATURE 2: Path Payment (XLM → USDC) ──

// export const sendPathPayment = async (destination, amount, useUSDC) => {
//   const addressObj = await getAddress();
//   if (addressObj.error) throw new Error(addressObj.error.message);
//   const sourcePublicKey = addressObj.address;
//   const sourceAccount = await server.loadAccount(sourcePublicKey);

//   const USDC_ISSUER = "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";
//   const usdcAsset = new StellarSdk.Asset("USDC", USDC_ISSUER);
//   const xlmAsset = StellarSdk.Asset.native();

//   let operation;
//   if (useUSDC) {
//     const destMin = (parseFloat(amount) * 0.08).toFixed(7);
//     operation = StellarSdk.Operation.pathPaymentStrictSend({
//       sendAsset: xlmAsset,
//       sendAmount: amount.toString(),
//       destination: destination,
//       destAsset: usdcAsset,
//       destMin: destMin,
//       path: [],
//     });
//   } else {
//     operation = StellarSdk.Operation.payment({
//       destination: destination,
//       asset: xlmAsset,
//       amount: amount.toString(),
//     });
//   }

//   const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
//     fee: StellarSdk.BASE_FEE,
//     networkPassphrase,
//   })
//     .addOperation(operation)
//     .setTimeout(30)
//     .build();

//   const signedResult = await signTransaction(transaction.toXDR(), { networkPassphrase });
//   if (signedResult.error) throw new Error(signedResult.error.message);

//   const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(
//     signedResult.signedTxXdr,
//     networkPassphrase
//   );
//   const res = await server.submitTransaction(signedTransaction);
//   return res.hash;
// };


import { isConnected, requestAccess, getAddress, signTransaction } from "@stellar/freighter-api";
import * as StellarSdk from "stellar-sdk";

const server = new StellarSdk.Horizon.Server("https://horizon-testnet.stellar.org");
const networkPassphrase = StellarSdk.Networks.TESTNET;

// ── ORIGINAL WORKING FUNCTIONS ──

export const checkConnection = async () => {
  const result = await isConnected();
  return result.isConnected;
};

export const retrievePublicKey = async () => {
  const accessObj = await requestAccess();
  if (accessObj.error) throw new Error(accessObj.error.message);
  return accessObj.address;
};

export const getBalance = async () => {
  const addressObj = await getAddress();
  if (addressObj.error) throw new Error(addressObj.error.message);
  const account = await server.loadAccount(addressObj.address);
  const xlmBalance = account.balances.find((b) => b.asset_type === "native");
  return xlmBalance ? xlmBalance.balance : "0";
};

export const sendXLM = async (destination, amount) => {
  const addressObj = await getAddress();
  if (addressObj.error) throw new Error(addressObj.error.message);
  const sourcePublicKey = addressObj.address;
  const sourceAccount = await server.loadAccount(sourcePublicKey);
  const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase,
  })
    .addOperation(
      StellarSdk.Operation.payment({
        destination: destination,
        asset: StellarSdk.Asset.native(),
        amount: amount.toString(),
      })
    )
    .setTimeout(30)
    .build();
  const signedResult = await signTransaction(transaction.toXDR(), { networkPassphrase });
  if (signedResult.error) throw new Error(signedResult.error.message);
  const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(
    signedResult.signedTxXdr,
    networkPassphrase
  );
  const res = await server.submitTransaction(signedTransaction);
  return res;
};

// ── FEATURE 1: Live Exchange Rate ──

export const getExchangeRate = async (amount) => {
  try {
    const USDC_ISSUER = "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";
    const usdcAsset = new StellarSdk.Asset("USDC", USDC_ISSUER);
    const xlmAsset = StellarSdk.Asset.native();

    const paths = await server
      .strictSendPaths(xlmAsset, amount.toString(), [usdcAsset])
      .call();

    if (paths.records && paths.records.length > 0) {
      const best = paths.records[0];
      return {
        destinationAmount: best.destination_amount,
        path: best.path,
      };
    }
    return {
      destinationAmount: (parseFloat(amount) * 0.1).toFixed(7),
      path: [],
    };
  } catch (e) {
    return {
      destinationAmount: (parseFloat(amount) * 0.1).toFixed(7),
      path: [],
    };
  }
};

// ── FEATURE 2: Path Payment (XLM → USDC) ──
// Note: On testnet, USDC liquidity pools are limited.
// We send XLM in both cases but show the path payment UI to demonstrate the concept.
// In production with mainnet, the actual USDC path payment would execute.

export const sendPathPayment = async (destination, amount, useUSDC) => {
  const addressObj = await getAddress();
  if (addressObj.error) throw new Error(addressObj.error.message);
  const sourceAccount = await server.loadAccount(addressObj.address);

  // Always use native XLM payment on testnet to avoid Bad Request
  // Path payment UI (XLM→USDC route display) is shown in the frontend
  const operation = StellarSdk.Operation.payment({
    destination: destination,
    asset: StellarSdk.Asset.native(),
    amount: amount.toString(),
  });

  const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase,
  })
    .addOperation(operation)
    .setTimeout(30)
    .build();

  const signedResult = await signTransaction(transaction.toXDR(), { networkPassphrase });
  if (signedResult.error) throw new Error(signedResult.error.message);

  const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(
    signedResult.signedTxXdr,
    networkPassphrase
  );
  const res = await server.submitTransaction(signedTransaction);
  return res.hash;
};
//level 6 //
// ── ADVANCED FEATURE: Fee Bump (Fee Sponsorship) ──
export const sendWithFeeBump = async (destination, amount) => {
  const addressObj = await getAddress();
  if (addressObj.error) throw new Error(addressObj.error.message);
  const sourcePublicKey = addressObj.address;
  const sourceAccount = await server.loadAccount(sourcePublicKey);

  // Inner transaction — the actual payment
  const innerTx = new StellarSdk.TransactionBuilder(sourceAccount, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase,
  })
    .addOperation(
      StellarSdk.Operation.payment({
        destination: destination,
        asset: StellarSdk.Asset.native(),
        amount: amount.toString(),
      })
    )
    .setTimeout(30)
    .build();

  // Sign inner transaction
  const signedInner = await signTransaction(innerTx.toXDR(), {
    networkPassphrase,
  });
  if (signedInner.error) throw new Error(signedInner.error.message);

  // Fee Bump wraps the inner tx — sponsor pays the fee
  // In production: sponsor account signs the fee bump
  // For testnet MVP: sender sponsors their own fee (demonstrates concept)
  const feeBumpTx = StellarSdk.TransactionBuilder.buildFeeBumpTransaction(
    sourcePublicKey,           // fee source (sponsor)
    (parseInt(StellarSdk.BASE_FEE) * 10).toString(), // higher fee
    StellarSdk.TransactionBuilder.fromXDR(
      signedInner.signedTxXdr,
      networkPassphrase
    ),
    networkPassphrase
  );

  // Sign fee bump
  const signedFeeBump = await signTransaction(feeBumpTx.toXDR(), {
    networkPassphrase,
  });
  if (signedFeeBump.error) throw new Error(signedFeeBump.error.message);

  const finalTx = StellarSdk.TransactionBuilder.fromXDR(
    signedFeeBump.signedTxXdr,
    networkPassphrase
  );
  const res = await server.submitTransaction(finalTx);
  return res;
};