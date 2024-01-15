import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Navbar from "./ui/shared/navbar";
import Footer from "./ui/shared/footer";

export const metadata: Metadata = {
  title: "Kevin Nielsen",
  description: "Software engineer with an eye for design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
