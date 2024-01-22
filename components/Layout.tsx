import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
};

function SquareBlocks() {
  return (
    <svg
      className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-slate-300/60 [mask-image:radial-gradient(28rem_28rem_at_center,white,transparent)] dark:stroke-slate-600/60 dark:[mask-image:radial-gradient(24rem_24rem_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg
        x="50%"
        y={-1}
        className="overflow-visible fill-slate-300/60 dark:fill-slate-800/50"
      >
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

// function Blotch() {
//   return (
//     <div
//       className="relative left-1/3 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
//       aria-hidden="true"
//     >
//       <div
//         className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#1d4ed8] to-[#9089fc] opacity-40"
//         style={{
//           clipPath:
//             "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
//         }}
//       />
//     </div>
//   );
// }

{
  /* <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-slate-100 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-300/20" />
        </div>
      </div> */
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="absolute inset-0 flex justify-center overflow-hidden sm:px-8">
        <div className="flex w-full max-w-6xl lg:px-8">
          <SquareBlocks />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Navbar />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
