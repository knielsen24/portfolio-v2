import type { Metadata } from "next";
import { inter } from "@/app/components/fonts";
import "@/app/ui/globals.css";
import { ThemeProvider } from "@/app/components/shared/theme-provider";
import Navbar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";

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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
