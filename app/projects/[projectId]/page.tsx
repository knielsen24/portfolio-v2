import Image from "next/image";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { getAllProjects, getProject } from "@/lib/getProjectsApi";
import { Project } from "@/constants/projects";
import Tabs from "@/components/project/Tabs";
import { SimpleLayout } from "@/components/SimpleLayout";

type Params = {
  params: {
    projectId: string;
  };
};

function ComputerIcon(props: React.ComponentPropsWithoutRef<"svg">) {
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

function EditorIcon(props: React.ComponentPropsWithoutRef<"svg">) {
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

function CubeIcon(props: React.ComponentPropsWithoutRef<"svg">) {
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

const perks = [
  {
    name: "Web Desktop & Mobile",
    description: "Platforms",
    icon: ComputerIcon,
  },
  {
    name: "Portfolio",
    description: "Category",
    icon: CubeIcon,
  },
  {
    name: "Repo Link",
    description: "Github Repo",
    icon: EditorIcon,
  },
];

function HighLights() {
  return (
    <div className="mt-6 bg-indigo-100 ring-1 ring-slate-900/10 dark:bg-zinc-800 dark:ring-zinc-300/10  sm:mt-16 sm:rounded-3xl sm:px-4">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl lg:flex sm:justify-center sm:justify-items-center lg:py-6">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <perk.icon
                className="h-8 w-8 flex-shrink-0 text-indigo-500 dark:text-indigo-400"
                aria-hidden="true"
              />
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-slate-900  dark:text-zinc-100">
                  {perk.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                  {perk.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectDetails({
  params: { projectId },
}: Params) {
  const projectData: Promise<Project | undefined> = getProject(projectId);
  const project = await projectData;

  if (!project) {
    notFound();
  }

  return (
    <SimpleLayout title={project.title} intro={project.intro}>
      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 px-4 sm:px-0 lg:grid-cols-2">
        <div className="aspect-[16/9]  overflow-hidden rounded-xl border border-slate-900/10 dark:border-zinc-100/10 sm:aspect-[3/2]">
          <Image
            src={project.imageUrl as StaticImageData}
            alt={project.title || "default image"}
            className={cn(
              "aspect-[16/9] h-full w-full bg-slate-100 dark:bg-zinc-800 sm:aspect-[3/2]",
              project.bgSize,
              // slug.bgColor && `bg-${slug.bgColor}`,
              // the bg-color is not working
            )}
            width={500}
            height={500}
            priority={true}
          />
          <div className="absolute inset-0 -z-10 rounded-xl" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 sm:text-xl">
            Features
          </h1>
          <div className="mt-4 grid grid-cols-1 grid-rows-4 gap-y-4 text-base ">
            <div className="flex flex-col">
              <h1 className="mr-4 font-semibold text-slate-800 dark:text-zinc-200">
                Account creation & Authentication
              </h1>{" "}
              <p className="text-slate-600 dark:text-zinc-400">
                Users can create an account and verify their email by email.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="mr-4 font-semibold text-slate-800 dark:text-zinc-200">
                Full Crud Application
              </h1>{" "}
              <p className="text-slate-600 dark:text-zinc-400">
                User can create and update
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="mr-4 font-semibold text-slate-800 dark:text-zinc-200">
                State Management:
              </h1>{" "}
              <p className="text-slate-600 dark:text-zinc-400">Redux Toolkit</p>
            </div>
            <div className="flex flex-col">
              <h1 className="mr-4 font-semibold text-slate-800 dark:text-zinc-200">
                Data Fetching & Caching:
              </h1>{" "}
              <p className="text-slate-600 dark:text-zinc-400">
                Redux RTK Query
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HighLights />
      </div>
      <div className="mx-4 sm:px-0 ">
        <Tabs />
      </div>
    </SimpleLayout>
  );
}

export async function generateStaticParams() {
  const projectData: Promise<Project[]> = getAllProjects();
  const projects = await projectData;

  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}
