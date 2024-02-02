import "@/app/globals.css";
import type { Metadata } from "next";
import { inter } from "@/components/ui/fonts";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Kevin Nielsen",
    default: "Kevin Nielsen - Frontend enthusiast",
  },
  description: "Software engineer, web and mobile developer",
  // alternates: {
  //   types: {
  //     'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${inter.className} flex h-full bg-slate-50 antialiased dark:bg-zinc-800/60`}
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
