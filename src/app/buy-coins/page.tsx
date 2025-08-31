"use client";

import { useCoins } from "../context/CoinContext";

export default function BuyCoins() {
  const { addCoins } = useCoins();

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Buy Coins</h1>
      <div className="space-x-4">
        <button
          onClick={() => addCoins(10)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Buy 10 Coins
        </button>
        <button
          onClick={() => addCoins(50)}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Buy 50 Coins
        </button>
      </div>
    </div>
  );
}
