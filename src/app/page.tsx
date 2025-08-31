"use client";

import { useCoins } from "./context/CoinContext";
import { useAds } from "./context/AdContext";

export default function Page() {
  const { coins, addCoins } = useCoins();
  const { ads } = useAds();

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎯 Viral Feed</h1>
      <p className="mb-6">
        Your Coins: <span className="font-semibold">{coins}</span>
      </p>

      <div className="space-y-4">
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="bg-white shadow rounded-lg p-4 border"
          >
            <h2 className="text-lg font-semibold">{ad.title}</h2>
            <p className="text-gray-600 mb-3">{ad.description}</p>
            <button
              onClick={() => addCoins(5)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              ✅ Complete Task (+5 Coins)
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}