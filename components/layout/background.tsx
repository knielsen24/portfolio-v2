import React, { ReactNode } from "react";
import SquareBlocks from "./SquareBlocks";

type Props = {
  children: ReactNode;
};

const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <main>
        <div className="relative isolate">
          <SquareBlocks />
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#1d4ed8] to-[#9089fc] opacity-40"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Background;
