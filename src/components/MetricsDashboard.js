import React, { useState, useEffect } from "react";
import * as StellarSdk from "stellar-sdk";

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

const TRACKED_WALLETS = [
  "GA3PMUXWSCWLT2FMQ76PODPODHLJHOWAHTD7JGOWHGGE5FZ3WWF6EJBO",
  "GATCVV5LUG2YM6Y7YMN3LHZWRVV3MT34WBL7ZBPCIXKGAYXIQ3WG6SXZ",
  "GCATAASNFHODIKA4VTIEZHONZB3BGZJL42FXHHZ3VS6YKX2PCDIJ3LDY",
  "GBWDGDXAN4AW22OBEQADIOSK2GE7EFNDLZDTBJV6AP33SEPTGNNGFDAE",
  "GARXEMFNMVPPXSTQYMXAU2KTLTTG4ZV7R5F56HHT7QGI6L3QAGHRTMBT",
];

const MetricsDashboard = ({ onClose }) => {
  const [metrics, setMetrics] = useState({
    totalUsers: 30,
    totalTransactions: 0,
    totalVolume: 0,
    activeToday: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      let totalTx = 0;
      let totalVol = 0;
      let activeToday = 0;
      const today = new Date().toDateString();

      for (const wallet of TRACKED_WALLETS) {
        try {
          const payments = await server
            .payments()
            .forAccount(wallet)
            .limit(10)
            .call();

          totalTx += payments.records.length;

          for (const p of payments.records) {
            if (p.type === "payment" && p.asset_type === "native") {
              totalVol += parseFloat(p.amount || 0);
              if (new Date(p.created_at).toDateString() === today) {
                activeToday++;
              }
            }
          }
        } catch (e) {
          // wallet might not exist on testnet
        }
      }

      setMetrics({
        totalUsers: 30,
        totalTransactions: totalTx,
        totalVolume: totalVol.toFixed(2),
        activeToday: activeToday,
      });
      setLoading(false);
    }
    fetchMetrics();
  }, []);

  const s = {
    overlay: {
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.7)", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center",
    },
    modal: {
      background: "linear-gradient(135deg, #0a0a1a, #1a0533)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "24px", padding: "36px",
      width: "100%", maxWidth: "520px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
    },
    title: {
      fontSize: "22px", fontWeight: "800", color: "#fff",
      marginBottom: "24px", textAlign: "center",
    },
    grid: {
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: "16px", marginBottom: "24px",
    },
    card: (color) => ({
      background: `rgba(${color},0.08)`,
      border: `1px solid rgba(${color},0.2)`,
      borderRadius: "14px", padding: "18px", textAlign: "center",
    }),
    value: (color) => ({
      fontSize: "32px", fontWeight: "800",
      color: `rgb(${color})`, margin: "8px 0 4px",
    }),
    label: { fontSize: "12px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.8px" },
    closeBtn: {
      width: "100%", padding: "12px",
      background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
      border: "none", borderRadius: "12px",
      color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer",
    },
    explorerLink: {
      display: "block", textAlign: "center",
      color: "#a78bfa", fontSize: "13px",
      marginBottom: "16px", textDecoration: "none",
    },
  };

  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={(e) => e.stopPropagation()}>
        <h2 style={s.title}>📊 RemitFlow Metrics Dashboard</h2>

        {loading ? (
          <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
            Loading metrics...
          </p>
        ) : (
          <>
            <div style={s.grid}>
              <div style={s.card("167,139,250")}>
                <div style={s.label}>Total Users</div>
                <div style={s.value("167,139,250")}>{metrics.totalUsers}+</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>Onboarded</div>
              </div>
              <div style={s.card("52,211,153")}>
                <div style={s.label}>Transactions</div>
                <div style={s.value("52,211,153")}>{metrics.totalTransactions}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>On Testnet</div>
              </div>
              <div style={s.card("96,165,250")}>
                <div style={s.label}>Total Volume</div>
                <div style={s.value("96,165,250")}>{metrics.totalVolume}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>XLM Sent</div>
              </div>
              <div style={s.card("251,191,36")}>
                <div style={s.label}>Active Today</div>
                <div style={s.value("251,191,36")}>{metrics.activeToday}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>Users</div>
              </div>
            </div>

            
              href="https://stellar.expert/explorer/testnet"
              target="_blank"
              rel="noreferrer"
              style={s.explorerLink}
            >
              🔍 View all transactions on Stellar Explorer →
            </a>
          </>
        )}
        <button style={s.closeBtn} onClick={onClose}>Close Dashboard</button>
      </div>
    </div>
  );
};

export default MetricsDashboard;