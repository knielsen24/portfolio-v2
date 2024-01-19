import type { Metadata } from "next";
import { inter } from "@/components/ui/fonts";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

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
          <Navbar />
          <Background>{children}</Background>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
