"use client";

import Link from "next/link";
import "./globals.css";

// import the providers
import { CoinProvider } from "./context/CoinContext";
import { AdProvider } from "./context/AdContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        {/* Wrap everything in Providers */}
        <CoinProvider>
          <AdProvider>
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
              <h1 className="text-2xl font-extrabold text-blue-600">🔥 Viral App</h1>
              <div className="flex space-x-6 text-lg font-medium">
                <Link href="/feed" className="hover:text-blue-500 transition">Feed</Link>
                <Link href="/wallet" className="hover:text-blue-500 transition">Wallet</Link>
                <Link href="/dashboard" className="hover:text-blue-500 transition">Dashboard</Link>
                <Link href="/login" className="hover:text-blue-500 transition">Login</Link>
                <Link href="/signup" className="hover:text-blue-500 transition">Signup</Link>
              </div>
            </nav>

            {/* Page Content */}
            <main className="flex-1 p-8">{children}</main>

            {/* Footer */}
            <footer className="bg-white shadow-inner text-center p-4 text-gray-500">
              © {new Date().getFullYear()} Viral App — All Rights Reserved
            </footer>
          </AdProvider>
        </CoinProvider>
      </body>
    </html>
  );
}
