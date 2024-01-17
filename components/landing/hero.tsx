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

export default function Hero() {
  return (
    <div className="relative w-full sm:pl-16 max-w-xl lg:shrink-0 xl:max-w-2xl ">
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
        <a
          href="#"
          className="rounded-md bg-gradient-to-r from-indigo-600 to-sky-600 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow hover:from-blue-500 hover:to-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        >
          View Projects
        </a>
        <a
          href="#"
          className="border-0 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100 dark:hover:text-slate-300"
        >
          Skills <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
