import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/components/ui/fonts";
import { ThemeProvider } from "@/app/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <Layout>{children}</Layout>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
