import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import { Container } from "@/components/Container";
import headShot from "@/images/avatar.jpg";

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
    <Container>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-y-12 py-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:py-64">
        <div className="mx-auto max-w-xs px-6 pt-0 sm:px-0 sm:pt-6 lg:max-w-none lg:px-8 lg:pl-20">
          <Image
            src={headShot}
            alt="Headshot of Kevin"
            width={250}
            // sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-3xl shadow-sm shadow-slate-400 ring-1 ring-slate-300/50 dark:shadow-slate-600  dark:ring-slate-500/80"
          />
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
            {heroText.intro}
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-indigo-600 dark:text-indigo-300 sm:text-xl">
            {heroText.headline}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-50 sm:max-w-md lg:max-w-none">
            {heroText.description}
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/projects"
              className="rounded-md bg-indigo-400/90 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow hover:bg-indigo-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              View Projects
            </Link>
            <a
              href="#"
              className="border-0 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-100 dark:hover:text-gray-300"
            >
              Skills <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
