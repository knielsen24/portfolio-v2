import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
// import WorkExperience from "@/components/experience/WorkExperience";
import { SimpleLayout } from "@/components/SimpleLayout";
import UnderConstruction from "@/components/UnderConstruction";

const isUnderConstruction = false;

const features = [
  {
    name: "Lead",
    description: "leader... message, intentions, and actions are the same.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Support",
    description:
      "Looking out for what is best for the individual, and giving them positive reinforcement or constructive criticism",
    icon: LockClosedIcon,
  },
  {
    name: "Empower",
    description:
      "The most important aspect is to teach transferrable skills. Having a great mindset, and appreciating the process will consistently produce high results.",
    icon: ServerIcon,
  },
];

export default function Experience() {
  return (
    <>
      {isUnderConstruction ? (
        <UnderConstruction />
      ) : (
        <SimpleLayout
          title="Tech experience at multiple startup companies "
          intro="Coincidently, I have worked at two startups in the fitness and wellness industry. Having coached athletes at the Olympic level, and qualified for the Olympic Trials myself, I bring a competitive mindset to work. I'm proud of my non-traditional background."
        >
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
      )}
    </>
  );
}
