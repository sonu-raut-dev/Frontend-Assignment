import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import 'remixicon/fonts/remixicon.css'
import SideNav from "@/components/SideNav";
import Breadcrumb from "@/components/BreadCrumb";


const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
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
        className={`${outfit.variable}`}
      >
        <ReduxProvider>
         <div className="flex min-h-screen">
            <aside className="hidden sm:block">
              <SideNav />
            </aside>

            <main className="flex-1 flex flex-col overflow-hidden bg-[#F9FAFB]">
              <Breadcrumb
                breadcrumb={[{type: "icon", content: "user-2-line"}, {type: "text", content: "User Directory"}]}
              />
              <div className="flex-1 overflow-y-auto">
                {children}
              </div>
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
