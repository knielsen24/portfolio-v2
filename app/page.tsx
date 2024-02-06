import Link from "next/link";
import Image from "next/image";
import headShot from "@/public/avatar.png";
import { Container } from "@/components/Container";
import { iconsObj } from "@/components/icons/IconsHome";
import { heroCopy } from "@/constants/home";
import BtnScrollSpy from "@/components/ui/BtnScrollSpy";
import Skills from "@/components/home/Skills"


export default function Home() {
  return (
    <Container className="h-auto snap-y snap-mandatory overflow-auto sm:mt-4">
      <div className="relative mx-auto -mb-4 grid h-svh max-w-5xl snap-start grid-cols-1 content-center gap-y-8 px-5 sm:-mb-6 sm:gap-y-12 sm:px-0 lg:grid-cols-3">
        <div className="mx-auto max-w-xs sm:px-0 lg:max-w-none">
          <Image
            src={headShot}
            alt="Headshot of Kevin"
            priority={true}
            className="w-52 rounded-full bg-gradient-to-r from-indigo-200 via-indigo-500 to-teal-400/70 shadow-lg shadow-slate-500 ring-1 ring-slate-300/20 delay-75 duration-300 dark:bg-gradient-to-r  dark:from-indigo-300 dark:via-indigo-500 dark:to-teal-300 dark:shadow-zinc-600  dark:ring-zinc-700 sm:w-64"
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
        </div>
      </div>
      <div className="snap-start" id="skills">
        <Skills />
      </div>
    </Container>
  );
}
