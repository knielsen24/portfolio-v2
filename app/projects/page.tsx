import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { type Metadata } from "next";
import { cn } from "@/lib/utils";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Project, easterEgg, pageHeader } from "@/constants/projects";
import { getAllProjects } from "@/lib/getProjectsApi";

export const metadata: Metadata = {
  title: pageHeader.page,
  description: pageHeader.title,
};

function ArrowTopRightOnSquare(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function Card({
  id,
  imageUrl,
  title,
  bgSize,
  industry,
  href,
  intro,
}: {
  id: string;
  imageUrl: string | StaticImageData;
  title: string;
  bgSize: string;
  industry: string | undefined;
  href: string;
  intro: string;
}) {
  return (
    <article
      key={id}
      className="group relative flex flex-col items-start justify-between rounded-xl"
    >
      <Link
        href={id === "777" ? href : `/projects/${id}`}
        target={id === "777" ? "_blank" : ""}
        prefetch
      >
        <div className="relative z-10 w-full overflow-hidden rounded-xl border border-slate-900/10 dark:border-zinc-100/10">
          <Image
            src={
              typeof imageUrl === "string"
                ? imageUrl
                : (imageUrl as StaticImageData)
            }
            alt={title}
            className={cn(
              "aspect-[16/9] w-full bg-slate-200/80 transition duration-500 dark:bg-zinc-800 sm:aspect-[3/2]",
              bgSize,
              // bgColor && `bg-${bgColor}`,
              // the bg-color is not working
            )}
            priority={true}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 rounded-xl" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <div className="text-indigo-500 group-hover:text-slate-500 dark:text-indigo-400 dark:group-hover:text-zinc-500">
              {industry}
            </div>
          </div>
          <div className="relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400">
              {title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-zinc-400">
              {intro}
            </p>
          </div>
        </div>
        <span className="absolute -inset-x-8 -inset-y-8 -z-10 scale-95 bg-slate-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800 sm:-inset-x-8 sm:-inset-y-8 sm:rounded-2xl" />
      </Link>
    </article>
  );
}

export default async function Projects() {
  const projectData: Promise<Project[]> = getAllProjects();
  const projects = await projectData;

  return (
    <SimpleLayout title={pageHeader.title} intro={pageHeader.intro}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 px-4 pt-4 sm:grid-cols-2 sm:px-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects?.map((project: Project) => (
          <Card
            key={project.id}
            id={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            bgSize={project.bgSize}
            industry={project.industry}
            href={project.href}
            intro={project.intro}
          />
        ))}
        {/* 
          create child client component that includes
            Show more button - useState
            The show more button renders the easter egg card
        */}
        <Card
          key={easterEgg.id}
          id={easterEgg.id}
          imageUrl={easterEgg.imageUrl}
          title={easterEgg.title}
          bgSize={easterEgg.bgSize}
          industry={easterEgg.industry}
          href={easterEgg.href}
          intro={easterEgg.intro}
        />
      </div>
    </SimpleLayout>
  );
}
