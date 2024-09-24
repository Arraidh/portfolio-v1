import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

import { playfairDisplay, poppins } from "./components/font";

// If loading a variable font, you don't need to specify the font weight

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ari.dh Developer/Designer",
  description: "Brief showcase of Ari Dharmika's Artwork",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${playfairDisplay.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
