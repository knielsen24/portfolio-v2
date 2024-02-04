"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Fragment, useState, useEffect, useMemo } from "react";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { Project, projects, initialProjectData } from "@/lib/projectData";
import {
  CodeBracketIcon,
  LinkIcon,
  CalendarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const perks = [
  {
    name: "fullstack",
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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function HighLights() {
  return (
    <div className="mt-16 bg-indigo-100  px-0 ring-1 ring-slate-900/10 dark:bg-zinc-800 dark:ring-zinc-300/10 sm:mt-28 sm:rounded-3xl">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl lg:flex lg:justify-center lg:py-12">
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

const tabs = [
  {
    name: "Technology",
    features: [
      {
        name: "Adaptive and modular",
        intro:
          "The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.",
      },
    ],
  },

  {
    name: "Description",
    features: [
      {
        name: "Helpful around the home",
        intro:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
      },
    ],
  },
  {
    name: "Challenges",
    features: [
      {
        name: "Everything you'll need",
        intro:
          "The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.",
      },
    ],
  },
];

function TabDetails() {
  return (
    <Tab.Group as="div" className="mt-12 sm:mt-28">
      <div className="-mx-4 flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-slate-200 dark:border-zinc-700 sm:px-0">
          <Tab.List className="-mb-px flex justify-center space-x-10 sm:justify-start sm:space-x-16">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-indigo-500 text-indigo-500 dark:border-indigo-400 dark:text-indigo-400"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-200",
                    "whitespace-nowrap border-b-2 py-6 text-sm font-medium",
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        {tabs.map((tab: any) => (
          <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
            {tab.features.map((feature: any) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-6 lg:mt-0">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-zinc-200">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  const [isLoading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | undefined>(
    initialProjectData,
  );

  const getById = useMemo(
    () => (id: string) => {
      return projects.find((proj) => proj.id === id);
    },
    [params.projectId],
  );

  useEffect(() => {
    const projectId = params.projectId;
    setLoading(true);

    if (projectId) {
      const project = getById(projectId);
      setProject(project);
    } else {
      setProject(initialProjectData);
    }
    setLoading(false);
  }, [params.projectId]);

  return (
    <Container className="py-12 sm:py-20">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 px-5 sm:px-0 lg:grid-cols-2">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-5xl">
            {project?.title}
          </h2>
          <p className="mt-4 text-slate-500 dark:text-zinc-300">
            {project?.intro}
          </p>
          <p className="mt-4 text-slate-500 dark:text-zinc-300">
            {project?.description}
          </p>
        </div>
        <div className="relative w-full overflow-hidden rounded-xl border border-slate-900/10 dark:border-zinc-100/10">
          <Image
            src={project?.imageUrl as StaticImageData}
            alt={project?.title || "default image"}
            className={cn(
              "aspect-[16/9] w-full bg-slate-200/80 transition duration-500 dark:bg-zinc-700/60 sm:aspect-[3/2]",
              project?.bgSize,
              // project.bgColor && `bg-${project.bgColor}`,
              // the bg-color is not working
            )}
            priority={true}
          />
          <div className="absolute inset-0 rounded-xl " />
        </div>
      </div>
      <div>
        <HighLights />
      </div>
      <div className="px-5 sm:px-0 ">
        <TabDetails />
      </div>
    </Container>
  );
}
