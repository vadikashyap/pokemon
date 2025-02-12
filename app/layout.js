import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokémon",
  description: "Pokémon Search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className=" relative shadow-lg px-3 py-2">
          <nav className="flex justify-between">
            <div className="flex items-center container mx-auto">
              <h1 className="inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
                Pokémon
              </h1>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
