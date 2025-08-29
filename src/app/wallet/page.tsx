"use client";
import { useCoins } from "../context/CoinContext";

export default function Wallet() {
  const { coins, addCoins } = useCoins();

  return (
    <section style={{ padding: "16px" }}>
      <h2 style={{ fontSize: "22px", fontWeight: 700 }}>Your Wallet</h2>
      <p style={{ marginBottom: "12px" }}>Coins: {coins}</p>

      <button
        onClick={() => addCoins(10)}
        style={{
          padding: "10px 16px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        Earn 10 Coins
      </button>
    </section>
  );
}
