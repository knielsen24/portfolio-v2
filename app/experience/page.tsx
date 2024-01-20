import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Work from "@/components/experience/Work";
import { Container } from "@/components/Container";
import { SimpleLayout } from "@/components/SimpleLayout";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Page() {
  return (
    <SimpleLayout
      title="Tech experience at a startup"
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-500 dark:text-indigo-400">
              Deploy faster
            </h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl">
              Non-traditional background
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 dark:text-slate-500 lg:max-w-none">
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
        <div className="sm:px-6 lg:px-0">
          <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <Work />
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
