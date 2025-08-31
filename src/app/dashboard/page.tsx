"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Create Ad */}
        <Link
          href="/create-ad"
          className="block p-4 bg-blue-100 rounded hover:bg-blue-200"
        >
          <h2 className="text-xl font-semibold">📢 Create Ad</h2>
          <p className="text-gray-600">Post ads and promote your brand.</p>
        </Link>

        {/* Buy Coins */}
        <Link
          href="/buy-coins"
          className="block p-4 bg-green-100 rounded hover:bg-green-200"
        >
          <h2 className="text-xl font-semibold">💰 Buy Coins</h2>
          <p className="text-gray-600">Purchase coins to unlock features.</p>
        </Link>

        {/* Coming Soon Feature 1 */}
        <div className="block p-4 bg-gray-100 rounded opacity-70 cursor-not-allowed">
          <h2 className="text-xl font-semibold">📊 Analytics</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>

        {/* Coming Soon Feature 2 */}
        <div className="block p-4 bg-gray-100 rounded opacity-70 cursor-not-allowed">
          <h2 className="text-xl font-semibold">👤 Profile</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}