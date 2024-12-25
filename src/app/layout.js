import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import BackgroundGradient from "./components/BackgroundGradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoundFlow - Music Distribution Made Simple",
  description:
    "Release unlimited music to Spotify, Apple Music, and 200+ platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BackgroundGradient />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
