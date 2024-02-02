import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import { Container } from "@/components/Container";
import nextDarkIcon from "@/public/logos/nextjs-icon-dark-bg.png";
import nextLightIcon from "@/public/logos/nextjs-icon-light-bg.png";
import expoLightIcon from "@/public/logos/expo-light-bg.png";
import expoDarkIcon from "@/public/logos/expo-dark-bg.png";
import headShot from "@/public/avatar.png";
import { iconsObj } from "@/constants/Icons";
import { heroCopy, skillsCopy } from "@/constants/home";

function Skills() {
  return (
    <div className="relative mx-5 mt-16 sm:mx-0 sm:mt-20">
      <div className="rounded-xl bg-indigo-100 py-16 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-zinc-300/10 sm:rounded-3xl sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
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
            <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-16 sm:grid-cols-3 sm:gap-y-20 sm:pl-8 lg:mx-0 lg:max-w-none ">
              <img
                className="ease-in sm:hover:scale-110 max-h-12 w-full object-contain duration-300"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
                alt="JavaScript"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png"
                alt="TypeScript"
                width={136}
                height={48}
              />
              <img
                className="max-h-14 w-full object-contain duration-300 ease-in sm:hover:scale-110"
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                alt="Node.js"
                width={147}
                height={48}
              />

              <div>
                <Image
                  className="hidden max-h-12 w-full object-contain duration-300 ease-in dark:block sm:hover:scale-110 "
                  src={nextDarkIcon}
                  alt="Next.js"
                  width={140}
                  height={48}
                />
                <Image
                  className="block max-h-12 w-full object-contain duration-300 ease-in dark:hidden sm:hover:scale-110 "
                  src={nextLightIcon}
                  alt="Next.js"
                  width={140}
                  height={48}
                />
              </div>
              <img
                className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110 "
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React.js"
                width={140}
                height={48}
              />

              <div>
                <Image
                  className="hidden max-h-10 w-full object-contain duration-300 ease-in dark:block sm:hover:scale-110 "
                  src={expoDarkIcon}
                  alt="Expo React Native"
                  width={140}
                  height={48}
                />
                <Image
                  className="block max-h-10 w-full object-contain duration-300 ease-in dark:hidden sm:hover:scale-110 "
                  src={expoLightIcon}
                  alt="Expo Go React Native"
                  width={140}
                  height={48}
                />
              </div>
              <img
                className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110 "
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                alt="Redux"
                width={110}
                height={48}
              />
              <img
                className="max-h-9 w-full object-contain duration-300 ease-in sm:hover:scale-110"
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                alt="TailwindCSS"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
                src="https://www.postgresql.org/media/img/about/press/elephant.png"
                alt="PostegeSQL"
                width={110}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Container>
      <div className="grid max-w-5xl grid-cols-1 gap-y-8 px-5 py-8 sm:gap-y-12 sm:px-0 md:grid-rows-[auto_1fr] md:py-32 lg:grid-cols-3 lg:py-60 2xl:py-72">
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
          <div className="mt-8 grid max-w-xl gap-y-8 sm:mt-10 sm:grid-cols-2">
            <div className="flex justify-start space-x-6 md:order-2">
              {iconsObj.map((item) => (
                <a
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
                </a>
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
      </div>
      <Skills />
    </Container>
  );
}
