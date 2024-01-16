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
    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-700 sm:text-6xl dark:text-slate-100">
        {heroText.intro}
      </h1>
      <h2 className="first-letter: text-xl font-medium tracking-tight text-indigo-500 sm:text-2xl dark:text-indigo-400">
        {heroText.headline}
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-600 sm:max-w-md lg:max-w-none dark:text-indigo-50">
        {heroText.description}
      </p>

      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
