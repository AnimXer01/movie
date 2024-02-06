import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClarityScript from "@/components/ClarityScript";
import { Providers } from "./providers";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "PrimeFlix",
  description: "Watch movies and series for free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
          <ClarityScript/>
        </Providers>
      </body>
    </html>
  );
}
