import "@/components/layout/Navbar";
import Link from "next/link";
import Collage from "@/components/landing/Collage";
import Work from "@/components/landing/Work";
import { Container } from "@/components/ui/Container";
import WorkTimeline from "@/components/landing/WorkSection";
import WorkSection from "@/components/landing/WorkSection";

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
    <div>
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="relative w-full max-w-xl sm:pl-16 lg:shrink-0 xl:max-w-2xl ">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-700 dark:text-slate-100 sm:text-5xl">
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
        <Collage />
      </div>
      <Container>
      <WorkSection />
        {/* <div className="mx-auto mt-40 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <WorkTimeline />
          </div>
        </div> */}
        {/* <div className="mx-auto mt-60 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Work />
          </div>
        </div> */}
      </Container>
    </div>
  );
}
