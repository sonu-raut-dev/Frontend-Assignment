import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200','300','400', '500', '600', '700'],
  variable: '--font-montserrat', 
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Frontend Assignment",
  description: "A responsive card view inspired by Rentabel, built with Next.js + Redux + Axios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
