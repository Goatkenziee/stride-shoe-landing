import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "STRIDE — Run Further. Feel Everything.",
  description:
    "Engineered for the roads you take and the ones you haven't found yet. The Pegasus 41 features ReactX foam cushioning, dual Air Zoom units, and an engineered mesh upper built for every runner.",
  openGraph: {
    title: "STRIDE — Run Further. Feel Everything.",
    description:
      "The Pegasus 41. ReactX foam. Dual Air Zoom. Built for every stride.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
