import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { notFound } from 'next/navigation';
import { Project } from '@/constants/projects';
import { getAllProjects, getProject } from '@/lib/getProjectsApi';
import { cn, getLinkText } from '@/lib/utils';
import Tabs from '@/components/project/Tabs';
import { SimpleLayout } from '@/components/SimpleLayout';
import IconHandler from '@/components/project/IconHandler';
import { ArrowTopRightOnSquare } from '@/components/icons/Project';
import { Fascinate } from 'next/font/google';

type Params = {
  params: {
    projectId: string;
  };
};

function HeaderHL({ title }: { title: string }) {
  return (
    <h1 className="mb-2 border-b border-slate-300/80 pb-3 text-zinc-500 dark:border-zinc-700/80">
      {title}
    </h1>
  );
}

function HighLights({ props }: { props: Project }) {
  const { links, highlights } = props;

  return (
    <div className="mx-4 mt-6 grid h-full grid-cols-1 content-around gap-y-2 text-sm sm:mx-0 sm:gap-y-0 sm:text-base lg:mt-0">
      <div>
        <HeaderHL title="Highlights" />
        {highlights.map((item, itemIdx) => (
          <div key={itemIdx} className="flex w-full flex-row items-center py-3 xl:py-4">
            <div className="ml-1 sm:ml-2">
              <IconHandler name={item.label} desc={item.desc} />
            </div>
            <p className="ml-3 mr-2 w-16 shrink-0 capitalize text-slate-500 dark:text-zinc-400 sm:w-24 lg:mr-1 lg:w-20">
              {item.label}
            </p>
            <h3 className="grow font-medium capitalize text-slate-900 dark:text-zinc-100">
              {item.desc}
            </h3>
          </div>
        ))}
      </div>
      <div>
        <HeaderHL title="Links" />
        {links.map((link, linkIdx) => (
          <div key={linkIdx} className="group flex flex-row items-center py-3 xl:py-4">
            <div className="ml-1 sm:ml-2">
              <IconHandler name={link.name} desc={link.href} />
            </div>
            <p className="ml-3 mr-2 w-16 shrink-0 capitalize text-slate-500 dark:text-zinc-400 sm:w-24 lg:mr-1 lg:w-20">
              {link.name}
            </p>
            <div className="flex w-full">
              <Link
                href={link.href}
                target="_blank"
                className="mr-2 flex w-full flex-row justify-between sm:mr-3">
                <p className="line-clamp-1 font-medium text-slate-900 dark:text-zinc-100">
                  {getLinkText(link)}
                </p>
                <ArrowTopRightOnSquare className="tranisition h-5 w-5 flex-none self-center text-slate-400 duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 dark:text-zinc-500" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectImage({ props }: { props: Project }) {
  const { imageUrl, title, bgSize } = props;

  return (
    <Image
      src={imageUrl as StaticImageData}
      alt={title}
      className={cn('aspect-[16/9] h-full w-full bg-slate-100 dark:bg-zinc-800', bgSize)}
      width={500}
      height={500}
      priority={true}
    />
  );
}

export default async function ProjectDetails({ params: { projectId } }: Params) {
  const projectData: Promise<Project | undefined> = getProject(projectId);
  const project = await projectData;

  if (!project) {
    notFound();
  }

  let hasFeatures = true;
  if (project?.features?.length === 0) {
    hasFeatures = false;
  }

  return (
    <SimpleLayout title={project.title} intro={project.intro}>
      <div className="grid grid-cols-1 gap-x-10 sm:mt-12 lg:grid-cols-10 ">
        <div className="order-1 mx-4 aspect-[16/9] overflow-hidden rounded-xl border border-slate-900/10 dark:border-zinc-100/10 sm:mx-0 sm:aspect-[3/2] lg:col-span-6">
          <ProjectImage props={project} />
          <div className="absolute inset-0 -z-10 rounded-xl" />
        </div>
        <div className="order-2 h-full lg:col-span-4">
          <h2 className="sr-only">Project Highlights</h2>
          <HighLights props={project} />
        </div>
      </div>
      {!hasFeatures ? null : (
        <div className="mx-4 mt-14 sm:mx-0 sm:mt-20 sm:rounded-2xl lg:px-8">
          <h1 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 sm:text-xl">
            Features
          </h1>
          <ul className="mt-4 grid grid-cols-1 gap-x-12 gap-y-6 text-base sm:mt-6 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            {project?.features?.map((feature) => (
              <ul
                key={feature.label}
                className="flex flex-col border-t border-slate-900/10 pt-6 dark:border-zinc-300/10">
                <li className="min-w-md font-medium text-slate-800 dark:text-zinc-200">
                  {feature.label}
                </li>
                <p className="mt-3 text-slate-600 dark:text-zinc-400">{feature.desc}</p>
              </ul>
            ))}
          </ul>
        </div>
      )}
      {/* <div className="mt-6 border-t dark:border-zinc-700/70" /> */}
      <div className="order-last mt-6 sm:mt-20 sm:px-0">
        <Tabs props={project} />
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
