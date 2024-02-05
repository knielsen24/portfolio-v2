import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import { Container } from "@/components/Container";
import jsIcon from "@/public/logos/js-icon.png";
import tsIcon from "@/public/logos/ts-icon.svg.png";
import nodeIcon from "@/public/logos/nodejs-icon.png";
import nextDarkIcon from "@/public/logos/nextjs-icon-dark-bg.png";
import nextLightIcon from "@/public/logos/nextjs-icon-light-bg.png";
import reactIcon from "@/public/logos/React-icon.svg";
import expoLightIcon from "@/public/logos/expo-light-bg.png";
import expoDarkIcon from "@/public/logos/expo-dark-bg.png";
import reduxIcon from "@/public/logos/redux-icon.png";
import twIcon from "@/public/logos/tw-icon.svg";
import pgIcon from "@/public/logos/postgresql-icon.png";
import headShot from "@/public/avatar.png";
import { iconsObj } from "@/constants/Icons";
import { heroCopy, skillsCopy } from "@/constants/home";
import BtnScrollSpy from "@/components/ui/BtnScrollSpy";

function ChevronDoubleDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
      />
    </svg>
  );
}

function Skills() {
  return (
    <div className="relative mx-5 sm:mx-0">
      <div className="mx-auto max-w-7xl rounded-xl bg-indigo-100 px-6 py-12 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-zinc-300/10 sm:rounded-3xl sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-12 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-slate-700 dark:text-zinc-100 sm:text-3xl">
              {skillsCopy.header}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-zinc-300">
              {skillsCopy.firstPart}{" "}
              <span className="font-semibold text-indigo-500 ease-out hover:animate-pulse dark:text-indigo-400">
                {skillsCopy.firstHighlight}
              </span>
              {skillsCopy.secondPart}{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                {skillsCopy.secondHighlight}{" "}
              </span>
              {skillsCopy.thirdPart}{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                {skillsCopy.thirdHighlight}{" "}
              </span>
              {skillsCopy.fourthPart}
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:grid-cols-3 sm:gap-y-14 sm:pl-8 lg:mx-0 lg:max-w-none ">
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={jsIcon}
              alt="JavaScript"
            />
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={tsIcon}
              alt="TypeScript"
            />
            <Image
              className="max-h-14 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={nodeIcon}
              alt="Node.js"
            />
            <div>
              <Image
                className="hidden max-h-12 w-full object-contain duration-300 ease-in dark:block sm:hover:scale-110 "
                src={nextDarkIcon}
                alt="Next.js"
              />
              <Image
                className="block max-h-12 w-full object-contain duration-300 ease-in dark:hidden sm:hover:scale-110 "
                src={nextLightIcon}
                alt="Next.js"
              />
            </div>
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110 "
              src={reactIcon}
              alt="React.js"
            />

            <div>
              <Image
                className="hidden max-h-10 w-full object-contain duration-300 ease-in dark:block sm:hover:scale-110 "
                src={expoDarkIcon}
                alt="Expo React Native"
              />
              <Image
                className="block max-h-10 w-full object-contain duration-300 ease-in dark:hidden sm:hover:scale-110 "
                src={expoLightIcon}
                alt="Expo Go React Native"
              />
            </div>
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110 "
              src={reduxIcon}
              alt="Redux"
            />
            <Image
              className="max-h-9 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={twIcon}
              alt="TailwindCSS"
            />
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={pgIcon}
              alt="PostegeSQL"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Container className="h-auto snap-y snap-mandatory overflow-auto sm:mt-4">
      <div className="relative grid h-screen max-w-5xl snap-start grid-cols-1 content-center gap-y-8 px-5 sm:gap-y-12 sm:px-0 lg:grid-cols-3">
        <div className="mx-auto max-w-xs sm:px-0 lg:max-w-none lg:px-8 ">
          <Image
            src={headShot}
            alt="Headshot of Kevin"
            priority={true}
            className="w-52 rounded-full bg-gradient-to-r from-slate-300 via-indigo-500 to-slate-400/70 shadow-lg shadow-slate-500 ring-1 ring-slate-300/20 delay-75 duration-300 dark:bg-gradient-to-r  dark:from-zinc-400/80 dark:via-indigo-500 dark:to-zinc-400/80 dark:shadow-zinc-600  dark:ring-zinc-700 sm:w-64"
          />
        </div>
        <div className="sm:col-span-2 lg:order-first lg:row-span-2">
          <div className="grid-row-1 flex grid-flow-row">
            <h1 className="text-3xl font-bold leading-normal tracking-tight text-slate-800 dark:text-zinc-100 sm:mb-2 sm:pr-12 sm:text-5xl">
              {heroCopy.header} <span className="">{heroCopy.highlight}</span>
            </h1>
          </div>
          <p className="mt-4 text-lg leading-normal text-slate-600 dark:text-zinc-300 sm:mt-6 sm:max-w-lg">
            {heroCopy.description}
          </p>

          {/* Social Icons Container with View Projects button */}
          <div className="mt-8 grid max-w-lg gap-y-8 sm:mt-10 sm:grid-cols-2">
            <div className="flex justify-start space-x-6 md:order-2">
              {iconsObj.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className={`origin-bottom text-slate-500/90 delay-75 duration-500 hover:scale-110 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400
                    ${
                      item.tilt === "back"
                        ? "hover:-rotate-6"
                        : "hover:rotate-6"
                    }`}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="sm:justify-end md:order-last">
              <Link
                href="/projects"
                className="hover-underline-animation font-bold text-slate-600 duration-300 hover:text-indigo-500 dark:text-zinc-500 hover:dark:text-indigo-400"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <div>
          <BtnScrollSpy />
          {/* <Link
            href="/#skills"
            className="animate-pulse rounded-full bg-slate-200 p-1 opacity-90 hover:scale-110 hover:animate-none hover:duration-500 dark:bg-zinc-800"
          >
            <ChevronDoubleDownIcon className="h-6 w-6 text-indigo-300 dark:text-indigo-600" />
          </Link> */}
        </div>
      </div>
      <div className="snap-start" id="skills">
        <Skills />
      </div>
    </Container>
  );
}
