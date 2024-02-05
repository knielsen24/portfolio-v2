import Image from "next/image";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { getAllProjects, getProject } from "@/lib/getProjectsApi";
import { Project } from "@/constants/projects";
import {
  CodeBracketIcon,
  LinkIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Tabs from "@/components/project/Tabs";
import { SimpleLayout } from "@/components/SimpleLayout";

type Params = {
  params: {
    projectId: string;
  };
};

const perks = [
  {
    name: "Fullstack",
    description: "Type of application",
    icon: LinkIcon,
  },
  {
    name: "Repo Link",
    description: "Checkout the code on GitHub",
    icon: CodeBracketIcon,
  },
  {
    name: "Free, contactless delivery",
    description: "The shipping is on us",
    icon: TruckIcon,
  },
];

function HighLights() {
  return (
    <div className="mt-6 bg-indigo-100 px-0 ring-1 ring-slate-900/10 dark:bg-zinc-800  dark:ring-zinc-300/10 sm:mt-12 sm:rounded-3xl">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl lg:flex lg:justify-center lg:py-6">
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
      {/* <div>
        <HighLights />
      </div> */}
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

          <div className="mt-4 grid grid-cols-1 grid-rows-4 gap-y-8 text-base ">
            <div className="flex flex-col border-b border-slate-200/80 pb-8 dark:border-zinc-700/80">
              <h1 className="mr-4 font-semibold">
                Account creation & Authentication
              </h1>{" "}
              <p>
                Users can create an account and verify their email by email.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="mr-4 font-semibold">Full Crud Application</h1>{" "}
              <p>User can create and update</p>
            </div>
            <div className="flex flex-col">
              <h1 className="mr-4 font-semibold">State Management:</h1>{" "}
              <p>Redux Toolkit</p>
            </div>
            <div className="flex flex-col">
              <h1 className="mr-4 font-semibold">Data Fetching & Caching:</h1>{" "}
              <p>Redux RTK Query</p>
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
