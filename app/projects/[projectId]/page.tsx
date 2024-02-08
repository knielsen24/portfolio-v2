import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { Project } from "@/constants/projects";
import { getAllProjects, getProject } from "@/lib/getProjectsApi";
import { cn } from "@/lib/utils";
import Tabs from "@/components/project/Tabs";
import { SimpleLayout } from "@/components/SimpleLayout";
import {
  ComputerIcon,
  CubeIcon,
  TagIcon,
  MobileIcon,
  DocumentIcon,
} from "@/components/icons/Project";
import { GitHubIcon, YouTubeIcon, LinkIcon } from "@/components/icons/Project";
import { ArrowTopRightOnSquare } from "@/components/icons/Project";

const underConstruction = true;

type Params = {
  params: {
    projectId: string;
  };
};

function HighLights({ props }: { props: Project }) {
  const { links, highlights } = props;

  const handleRemoveRegex = (link: string): string => {
    // Regex pattern to match either "https://" or "http://"
    const regex = /^(https?:\/\/)/i;
    return link.replace(regex, "");
  };

  const handleLinkIcon = (name: string, desc?: string) => {
    const handlePlatform = (name: string) => console.log("first");

    // console.log(name === "platform" && desc?.includes('web'))
    const className =
      "h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-indigo-500 dark:text-indigo-400";
    if (name === "github") {
      return <GitHubIcon className={className} aria-hidden="true" />;
    } else if (name === "youtube") {
      return <YouTubeIcon className={className} aria-hidden="true" />;
    } else if (name === "industry") {
      return <CubeIcon className={className} aria-hidden="true" />;
    } else if (name === "category") {
      return <TagIcon className={className} aria-hidden="true" />;
    } else if (name === "blog" || name === "linkedIn") {
      return <DocumentIcon className={className} aria-hidden="true" />;
    } else if (name === "platforms" && desc?.includes("web")) {
      return <ComputerIcon className={className} aria-hidden="true" />;
    } else if (name === "platforms" && desc?.toLowerCase().includes("mobile")) {
      return <MobileIcon className={className} aria-hidden="true" />;
    } else {
      return <LinkIcon className={className} aria-hidden="true" />;
    }
  };

  const perks = [
    {
      name: "Portfolio",
      description: "Category",
      icon: CubeIcon,
    },
    {
      name: "Technology",
      description: "Industry",
      icon: CubeIcon,
    },
    {
      name: "Web Desktop & Mobile",
      description: "Platforms",
      icon: ComputerIcon,
    },
  ];
  return (
    <>
      <div className="mx-4 mt-1 divide-y divide-slate-300/80 dark:divide-zinc-700/80 sm:mx-0 lg:mt-0 ">
        {links.map((link, linkIdx) => (
          <div key={linkIdx} className="group flex flex-row py-4 xl:py-6">
            <div className="ml-2 self-center">{handleLinkIcon(link.name)}</div>
            <p className="mx-2 w-1/5 flex-none capitalize text-slate-500 dark:text-zinc-400 sm:mx-3">
              {link.name}
            </p>
            <div className="flex w-full justify-between">
              <Link
                href={link.href}
                target="_blank"
                className="mr-6 flex w-full flex-row justify-between"
              >
                <h3 className="font-medium text-slate-900 dark:text-zinc-100">
                  {link.name === "github"
                    ? "View Source Code"
                    : link.name === "youtube"
                      ? "View Demo"
                      : link.name === "ios"
                        ? "View in App Store"
                        : link.name === "android"
                          ? "View in Play Store"
                          : link.name === "blog" || link.name === "linkedIn"
                            ? "View Post"
                            : link.name === "website"
                              ? handleRemoveRegex(link.href)
                              : "View Link"}
                </h3>
                <ArrowTopRightOnSquare className="tranisition h-5 w-5 flex-none self-center text-slate-400 duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 dark:text-zinc-500" />
              </Link>
            </div>
          </div>
        ))}
        {highlights.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="flex flex-row justify-start py-4 xl:py-6"
          >
            <div className="ml-2">{handleLinkIcon(item.label, item.desc)}</div>
            <p className="mx-2 w-1/5 capitalize text-slate-500 dark:text-zinc-400 sm:mx-3">
              {item.label}
            </p>
            <h3 className="font-medium capitalize text-slate-900 dark:text-zinc-100">
              {item.desc}
            </h3>
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
      <div className="grid grid-cols-1 gap-x-8 sm:mt-12 lg:grid-cols-10 ">
        <div className="order-1 mx-4 aspect-[16/9] overflow-hidden rounded-xl border border-slate-900/10 dark:border-zinc-100/10 sm:mx-0 sm:aspect-[3/2] md:col-span-5 xl:col-span-6">
          <Image
            src={project.imageUrl as StaticImageData}
            alt={project.title}
            className={cn(
              "] aspect-[16/9] h-full w-full bg-slate-100 dark:bg-zinc-800",
              project.bgSize,
            )}
            width={500}
            height={500}
            priority={true}
          />
          <div className="absolute inset-0 -z-10 rounded-xl" />
        </div>
        <div className="relative order-2 mt-2 sm:mt-0 sm:rounded-xl sm:ring-0 md:col-span-5 xl:col-span-4">
          <h2 className="sr-only">Project Highlights</h2>
          <HighLights props={project} />
        </div>
      </div>
      {underConstruction ? (
        <div className="flex h-64 animate-pulse flex-col items-center justify-center text-xl text-indigo-400">
          Features section coming soon
        </div>
      ) : (
        <div className="mt-6 bg-indigo-100 p-4 ring-1 ring-slate-900/10 dark:bg-zinc-800 dark:ring-zinc-300/10 sm:mx-0 sm:rounded-2xl sm:p-8 lg:mt-16 ">
          <h1 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 sm:text-xl">
            Features
          </h1>
          <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 text-base sm:mt-2 sm:gap-y-8 lg:grid-cols-2">
            {project?.features?.map((feature) => (
              <ul key={feature.label} className="flex flex-col">
                <li className="min-w-md font-medium text-slate-800 dark:text-zinc-200">
                  {feature.label}
                </li>
                <p className="mt-3 text-slate-600 dark:text-zinc-400">
                  {feature.desc}
                </p>
              </ul>
            ))}
          </ul>
        </div>
      )}
      {/* <div className="mt-6 border-t dark:border-zinc-700/70" /> */}
      {/* <div className="order-last mt-6 sm:px-0">
        <Tabs />
      </div> */}
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
