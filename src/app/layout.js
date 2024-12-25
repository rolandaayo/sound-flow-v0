import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SoundFlow",
  description: "Music Distribution Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/bg-1.jpg" as="image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
