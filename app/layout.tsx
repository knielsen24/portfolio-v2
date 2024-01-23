import "@/app/globals.css";
import type { Metadata } from "next";
import { inter } from "@/components/ui/fonts";
import { Providers } from "@/app/providers";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Kevin Nielsen",
    default: "Kevin Nielsen - Developer and amateur golfer",
  },
  description: "Software engineer with an eye for design",
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
    <html lang="en" className="h-full antialiased">
      <body
        className={`${inter.className} flex h-full bg-slate-100 antialiased dark:bg-gray-700/60`}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
