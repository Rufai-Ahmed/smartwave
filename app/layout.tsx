import type { Metadata } from "next";
import Local from "next/font/local";
import "./globals.css";

const aeonik = Local({
  src: [
    { path: "../public/assets/fonts/AeonikTRIAL-Bold.otf", weight: "700" },
    {
      path: "../public/assets/fonts/AeonikTRIAL-Light.otf",
      weight: "200",
    },
    {
      path: "../public/assets/fonts/AeonikTRIAL-Regular.otf",
      weight: "400",
    },
  ],
});

export const metadata: Metadata = {
  title: "Smartwave",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aeonik.className}>{children}</body>
    </html>
  );
}
