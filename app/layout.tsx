import type { Metadata } from "next";
import {  Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Desizn Bank",
  description: "",
  icons: "/logo.ico",
  // icons: {
  //   shortcut: "/logo.ico",
  //   apple: "/logo.ico"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
