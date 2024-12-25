import { Inter } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Goldman } from "next/font/google";
import { Sigmar_One } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-condensed",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-goldman",
});

const sigmarOne = Sigmar_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-sigmar-one",
});

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
      <body
        className={`${inter.className} ${robotoCondensed.variable} ${montserrat.variable} ${goldman.variable} ${sigmarOne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
