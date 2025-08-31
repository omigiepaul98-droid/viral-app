"use client";

import { CoinProvider } from "./context/CoinContext";
import { AdProvider } from "./context/AdContext";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
          <h1 className="text-xl font-bold text-blue-600">Viral App</h1>
          <div className="space-x-6">
            <Link href="/feed" className="hover:text-blue-500 font-medium">
              Feed
            </Link>
            <Link href="/wallet" className="hover:text-blue-500 font-medium">
              Wallet
            </Link>
            <Link href="/dashboard" className="hover:text-blue-500 font-medium">
              Dashboard
            </Link>
            <Link href="/login" className="hover:text-blue-500 font-medium">
              Login
            </Link>
            <Link href="/signup" className="hover:text-blue-500 font-medium">
              Signup
            </Link>
          </div>
        </nav>

        {/* Providers wrap all pages */}
        <CoinProvider>
          <AdProvider>
            <main className="p-6">{children}</main>
          </AdProvider>
        </CoinProvider>
      </body>
    </html>
  );
}
