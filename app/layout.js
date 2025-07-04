import { Geist, Geist_Mono, Bonheur_Royale } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bonheurRoyale = Bonheur_Royale({
  variable: "--font-bonheur-royale",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "ORAI",
  description: "ORAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bonheurRoyale.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
