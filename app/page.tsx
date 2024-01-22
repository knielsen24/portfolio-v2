import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import { Container } from "@/components/Container";
import ideImage from "@/images/photos/asset-ide3.jpg";
import logosImage from "@/images/photos/tech-logos2.jpg";
import headShot from "@/images/avatar3.jpg";

function Collage() {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-36 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-first lg:pt-40 xl:order-none xl:pt-52">
        <div className="relative">
          <Image
            src={headShot}
            alt="headshot"
            className="aspect-[2/3] w-full rounded-xl bg-slate-900/10 object-cover shadow-lg dark:bg-slate-50/10"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-50/10" />
        </div>
      </div>
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-8">
        <div className="relative">
          <Image
            src={ideImage}
            alt="ide code"
            className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg dark:bg-slate-50/10"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-50/10" />
        </div>
        <div className="relative">
          <Image
            src={logosImage}
            alt="technology logos"
            className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg dark:bg-slate-50/10"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-50/10" />
        </div>
      </div>
    </div>
  );
}

interface heroText {
  intro: string;
  headline: string;
  description: string;
}

const heroText: heroText = {
  intro: "Hi there, I'm Kevin",
  headline: "A software engineer with an eye for design",
  description:
    "I'm a web and mobile app developer with start up experience that is passionate about finding solutions while making them look pretty.",
};

export default function Page() {
  return (
    <Container className=" my-12 md:my-20 lg:my-64">
      <div className="mx-auto md:mx-16 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] md:gap-y-24">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2 pr-32 lg:px-16 lg:max-w-none">
            <Image
              src={headShot}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-3xl shadow-sm shadow-slate-400 dark:shadow-slate-600"
            />
          </div>
        </div>
        <div className="lg:pl-8 lg:order-first lg:row-span-2">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            {heroText.intro}
          </h1>
          <h2 className="first-letter: text-lg font-medium tracking-tight text-indigo-600 dark:text-indigo-300 sm:text-xl">
            {heroText.headline}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-50 sm:max-w-md lg:max-w-none">
            {heroText.description}
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/projects"
              className="rounded-md bg-gradient-to-r from-indigo-600 to-sky-600 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow hover:from-blue-500 hover:to-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              View Projects
            </Link>
            <a
              href="#"
              className="border-0 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100 dark:hover:text-slate-300"
            >
              Skills <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* <Collage /> */}
      </div>
    </Container>
  );
}
