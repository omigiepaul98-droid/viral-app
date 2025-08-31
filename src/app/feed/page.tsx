"use client";

import { useCoins } from "../context/CoinContext";

export default function Feed() {
  const { coins, addCoins } = useCoins();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      <p className="mb-2">Coins: {coins}</p>
      <button
        onClick={() => addCoins(5)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Complete Task +5 coins
      </button>
    </div>
  );
}
