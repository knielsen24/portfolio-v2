import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from '@/components/Footer';

type Props = { children: ReactNode };

function SquareBlocks() {
  return (
    <svg
      className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-slate-200/60 [mask-image:radial-gradient(24rem_24rem_at_center,white,transparent)] dark:stroke-zinc-800/50"
      aria-hidden="true">
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg
        x="50%"
        y={-1}
        className="overflow-visible fill-slate-200/40 dark:fill-zinc-800/50">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          strokeWidth={0}
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
      />
    </svg>
  );
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <div className="absolute inset-0 flex justify-center overflow-hidden">
        <div className="flex w-full max-w-6xl lg:px-8">
          <SquareBlocks />
        </div>
      </div> */}
      <div className="relative flex w-full flex-col">
        <Navbar />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
