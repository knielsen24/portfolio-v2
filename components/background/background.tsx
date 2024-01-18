import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import ColorSplash from "./color-splash";
import SquareBlocks from "./square-blocks";

const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <main>
        <div className="relative isolate">
          <SquareBlocks />
          <ColorSplash />
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
