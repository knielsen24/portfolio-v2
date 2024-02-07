import Image from "next/image";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { getAllProjects, getProject } from "@/lib/getProjectsApi";
import { Project } from "@/constants/projects";
import Tabs from "@/components/project/Tabs";
import { SimpleLayout } from "@/components/SimpleLayout";
import Features from "@/components/project/Features";

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
    <>
      <h2 className="sr-only">Our perks</h2>
      <div className="grid-row-3 grid grid-cols-1 justify-start gap-y-6 py-6">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="flex">
            <div className="flex max-w-xs content-start px-4 lg:max-w-none">
              <perk.icon
                className="h-6 w-6 flex-shrink-0 self-center text-indigo-500 dark:text-indigo-400 "
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
    </>
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
      <div className="grid grid-cols-1 gap-x-8  gap-y-6 px-4 sm:mt-12 sm:gap-y-12 sm:px-0 lg:grid-cols-7">
        <div className="order-1 lg:col-span-4 ">
          <div className="aspect-[16/9] overflow-hidden rounded-xl border border-slate-900/10 dark:border-zinc-100/10 sm:aspect-[3/2] ">
            <Image
              src={project.imageUrl as StaticImageData}
              alt={project.title}
              className={cn(
                "aspect-[16/9] h-full w-full bg-slate-100 dark:bg-zinc-800 sm:aspect-[3/2]",
                project.bgSize,
              )}
              width={500}
              height={500}
              priority={true}
            />
            <div className="absolute inset-0 -z-10 rounded-xl" />
          </div>
          <div className="order-3 lg:col-span-4 flex flex-row mt-6 sm:mt-10 justify-around">
            <div className="">icon</div>
            <div className="">icon</div>
            <div className="">icon</div>
          </div>
          
        </div>
        <div className="order-2 lg:col-span-3">
          <h1 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 sm:text-xl">
            Features
          </h1>
          <ul
            role="list"
            className="mt-2 grid list-inside list-disc grid-cols-1 gap-y-3 text-base sm:mt-2 sm:gap-y-4"
          >
            {project?.features?.map((feature) => (
              <li className="ml-4 text-slate-600 dark:text-zinc-400">
                {feature.label}
              </li>
              // <ul key={feature.label} className="flex flex-col">
              //   <Features label={feature.label} desc={feature.desc}/>
              //   <p className="text-slate-600 dark:text-zinc-400 sm:mt-1">
              //     {feature.desc}
              //   </p>
              // </ul>
            ))}
          </ul>
          <div className="mt-6 border-t dark:border-zinc-700/70 ">
            <HighLights />
          </div>
        </div>
      </div>
      {/* <div className="mt-6 bg-indigo-100 ring-1 ring-slate-900/10 dark:bg-zinc-800 dark:ring-zinc-300/10 sm:mt-8 sm:rounded-3xl sm:px-4 lg:mt-16">
      </div> */}
      <div className="mt-4 sm:px-0 order-last">
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
