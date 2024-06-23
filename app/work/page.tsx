import { SimpleLayout } from "@/components/SimpleLayout";
import WorkExperience from "@/components/experience/WorkExperience";

type SvgProps = React.ComponentPropsWithoutRef<"svg">

function ComputerIcon(props: SvgProps) {
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
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>
  );
}

function EditorIcon(props: SvgProps) {
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
        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

function CubeIcon(props: SvgProps) {
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
        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  );
}

const features = [
  {
    name: "Lead",
    description: "leader... message, intentions, and actions are the same.",
    icon: ComputerIcon,
  },
  {
    name: "Support",
    description:
      "Looking out for what is best for the individual, and giving them positive reinforcement or constructive criticism",
    icon: ComputerIcon,
  },
  {
    name: "Empower",
    description:
      "The most important aspect is to teach transferrable skills. Having a great mindset, and appreciating the process will consistently produce high results.",
    icon: CubeIcon,
  },
];

const header = {
  title: "Tech experience at multiple startup companies ",
  intro: "Coincidently, I have worked at two startups in the fitness and wellness industry. Having coached athletes at the Olympic level, and qualified for the Olympic Trials myself, I bring a competitive mindset to work. I'm proud of my non-traditional background."
}

export default function Experience() {
  return (
    <SimpleLayout
      title={header.title}
      intro={header.intro} >
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div className="px-5 lg:px-0 lg:pr-4 lg:pt-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-500 dark:text-indigo-400">
              Soft skills unlike your average coder
            </h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl">
              Coaching taught me how to...
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 dark:text-slate-400 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-slate-900 dark:text-slate-100">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-cyan-600 dark:text-cyan-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="sm:px-5 lg:px-0">
          <div className="relative isolate overflow-hidden bg-indigo-500 px-5 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              {/* <WorkExperience /> */}
            </div>
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
