import { type Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { Project, easterEgg, pageHeader, EasterEgg } from '@/constants/projects';
import { getAllProjects } from '@/lib/getProjectsApi';
import { cn } from '@/lib/utils';
import { SimpleLayout } from '@/components/SimpleLayout';
import { ArrowTopRightOnSquare } from '@/components/icons/Project';

export const metadata: Metadata = {
  title: pageHeader.page,
  description: pageHeader.title,
};

type Props = { project: Project | EasterEgg };

function Card(props: Props) {
  const project = props.project;
  const { id, imageUrl, title, bgSize, industry, intro, href } = project;

  const link = id === '777' ? (href as string) : `/projects/${id}`;
  const target = id === '777' ? '_blank' : ('' as string);

  return (
    <article
      key={id}
      className="group relative flex max-w-xl flex-col items-start justify-between border-t border-slate-200/80 py-8 dark:border-zinc-700/60 sm:rounded-xl sm:border-none sm:py-0 ">
      <Link href={link} target={target} prefetch>
        <div
          className={cn(
            'relative z-10 w-full overflow-hidden rounded-xl ring-1 ring-slate-900/10 dark:ring-zinc-100/10',
            bgSize === 'object-cover'
              ? 'ring-1 ring-slate-900/10 dark:ring-zinc-100/10'
              : 'ring-0',
          )}>
          <Image
            src={imageUrl as StaticImageData}
            alt={title}
            className={cn(
              'aspect-[3/2] w-full',
              bgSize,
              bgSize === 'object-contain' ? 'rounded-3xl' : 'rounded-none',
            )}
            priority={true}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 rounded-xl" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs sm:text-sm">
            <p className="capitalize text-indigo-500 group-hover:text-slate-500 dark:text-indigo-400 dark:group-hover:text-zinc-500">
              {industry}
            </p>
          </div>
          <div className="relative select-text">
            <div className="flex flex-row items-center justify-between">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400 sm:text-xl">
                {title}
              </h3>
              <ArrowTopRightOnSquare className="mr-3 hidden h-5 w-5 self-end text-slate-400 transition ease-out group-hover:inline-flex group-hover:scale-110 dark:text-zinc-500 sm:mb-1" />
            </div>
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:text-base">
              {intro}
            </p>
          </div>
        </div>
      </Link>
      <span className="absolute -inset-x-4 inset-y-0 -z-10 scale-95 bg-slate-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800 sm:-inset-x-10 sm:-inset-y-8 sm:rounded-2xl" />
    </article>
  );
}

export default async function Projects() {
  const projectData: Promise<Project[]> = getAllProjects();
  const projects = await projectData;

  return (
    <SimpleLayout title={pageHeader.title} intro={pageHeader.intro}>
      <div className="mx-4 grid grid-cols-1 border-slate-200/80 py-6 dark:border-zinc-700/60 sm:mx-0 sm:mt-16 sm:gap-y-20 sm:border-t sm:pt-16 lg:grid-cols-3 lg:gap-x-20">
        {projects?.map((project: Project) => <Card project={project} />)}
        {/* 
          create child client component that includes
            Show more button - useState≈
            The show more button renders the easter egg card
        */}
        <Card project={easterEgg} />
      </div>
    </SimpleLayout>
  );
}
