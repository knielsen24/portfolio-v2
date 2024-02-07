import "@/app/globals.css";
import type { Metadata } from "next";
import { inter } from "@/constants/fonts";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Kevin Nielsen",
    default: "Kevin Nielsen - Frontend Software Engineer enthusiast",
  },
  description: "Software engineer, web and mobile developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} flex h-full bg-slate-50 antialiased dark:bg-zinc-800/60`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
            <Analytics />
            <SpeedInsights />
          </div>
        </Providers>
      </body>
    </html>
  );
}
