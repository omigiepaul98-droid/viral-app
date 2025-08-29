import { CoinProvider } from "./context/CoinContext";
import { AdProvider } from "./context/AdContext";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <CoinProvider>
          <AdProvider>
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
              <strong className="text-xl text-blue-600">Viral 🚀</strong>
              <nav className="space-x-6">
                <Link href="/" className="hover:text-blue-600">Feed</Link>
                <Link href="/create-ad" className="hover:text-blue-600">Create Ad</Link>
                <Link href="/wallet" className="hover:text-blue-600">Wallet</Link>
                <Link href="/signup" className="hover:text-blue-600">Signup</Link>
                <Link href="/login" className="hover:text-blue-600">Login</Link>
              </nav>
            </header>
            <main className="max-w-2xl mx-auto p-6">{children}</main>
          </AdProvider>
        </CoinProvider>
      </body>
    </html>
  );
}
