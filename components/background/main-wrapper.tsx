import ColorSplash from "./color-splash";
import SVGWrapper from "./svg-wrapper";

export default function Background() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <main>
        <div className="relative isolate">
          <SVGWrapper />
          <ColorSplash />
          
          {/* <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <HeroSection />
                <ImageSection />
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}