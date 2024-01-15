interface heroText {
  intro: string;
  headline: string;
  description: string;
}

const heroText: heroText = {
  intro: "Hi, I'm Kevin",
  headline: "A software engineer with an eye for design",
  description:
    "I'm a web and mobile app developer with start up experience. Skilled in frontend technologies like JavaScript, React, React Native, Redux Toolkit, Expo, and other modern development frameworks, I have a passion for solving problems while making it look pretty.",
};

export default function HeroSection() {
  return (
    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
        {heroText.intro}
      </h1>
      <h2 className="first-letter: text-xl font-medium tracking-tight text-indigo-500 sm:text-2xl">
        {heroText.headline}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
        {heroText.description}
      </p>

      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Experience
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-800">
          Skills Overview <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
