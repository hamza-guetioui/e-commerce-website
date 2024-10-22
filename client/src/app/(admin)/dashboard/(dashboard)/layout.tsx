
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LayoutCompenents from "@/features/Admin/Layout";

import { AdminProvider } from "@/features/shared/context/adminContext";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-commerce website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#b9b9b945] ${inter.className} `}>
        <main>
          <LayoutCompenents>
            <AdminProvider>{children}</AdminProvider>
          </LayoutCompenents>
        </main>
      </body>
    </html>
  );
}
