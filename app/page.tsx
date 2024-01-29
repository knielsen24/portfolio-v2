import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import { Container } from "@/components/Container";
import headShot from "@/images/avatar.png";

const iconsObj = [
  {
    name: "Linkedin",
    tilt: "back",
    href: "https://www.linkedin.com/in/kevin-nielsen-se/",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />{" "}
      </svg>
    ),
  },
  {
    name: "GitHub",
    tilt: "forward",
    href: "https://github.com/knielsen24",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    tilt: "back",
    href: "https://www.youtube.com/channel/UCsk1b30JmVTt_lz18das3Jw",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    tilt: "forward",
    href: "https://www.instagram.com/ktrain21mn/",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

function Skills() {
  return (
    <div className="relative isolate -z-10 mt-12 sm:mt-20">
      <div className="bg-slate-900/5 py-16 ring-1 ring-white/10 dark:bg-gray-50/5 dark:ring-slate-900/10 sm:rounded-3xl sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-2xl font-bold tracking-tight text-indigo-500 dark:text-indigo-400 sm:text-3xl">
                Technologies I love coding with
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                These are my bread and butter languages, frameworks, and
                libraries. To see all of my skills, go to my
              </p>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                alt="Laravel"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={147}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#a5b4fc] to-[#818cf8] opacity-30 dark:opacity-30"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </div>
  );
}

function ChevronDoubleLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-14 w-14"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <Container>
      <div className="grid max-w-5xl grid-cols-1 gap-y-12 px-5 py-8 sm:px-0 md:grid-rows-[auto_1fr] md:py-24 lg:grid-cols-3 lg:py-72">
        <div className="mx-auto max-w-xs sm:px-0 lg:max-w-none lg:px-8">
          <Image
            src={headShot}
            alt="Headshot of Kevin"
            width={250}
            className="rounded-full bg-gradient-to-r from-slate-300 via-indigo-400 to-slate-400/70 shadow-sm shadow-slate-500 ring-1 ring-slate-300 delay-75 duration-300 hover:shadow-md dark:bg-gradient-to-r dark:from-zinc-600 dark:via-indigo-400 dark:to-zinc-700  dark:shadow-zinc-700 dark:ring-zinc-700"
          />
        </div>
        <div className="sm:col-span-2 lg:order-first lg:row-span-2">
          <div className="grid-row-1 flex grid-flow-row">
            <h1 className="text-3xl font-bold leading-normal tracking-tight text-gray-800 dark:text-gray-100 sm:mb-2 sm:pr-12 sm:text-5xl">
              Software engineer and frontend enthusiast{" "}
            </h1>
            {/* <div className="transition-transform rotate-90">
              <ChevronDoubleLeft />
            </div> */}
          </div>
          <p className="mt-6 text-lg leading-normal text-gray-600 dark:text-gray-50 sm:max-w-xl">
            I'm Kevin, a web and mobile app developer with start up experience
            who is passionate about implementing practical solutions with
            beautiful ui that delights the user experience.{" "}
          </p>

          <div className="mt-6 flex items-center gap-x-6 sm:mt-10">
            <div className="flex justify-center space-x-6 md:order-2">
              {" "}
              {iconsObj.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className={`origin-bottom text-gray-500/90 delay-75 duration-500 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400
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
            {/* <Link href="/projects" className="ml-8 md:order-last" >View Projects
            </Link> */}
          </div>
        </div>
      </div>
      <Skills />
    </Container>
  );
}
