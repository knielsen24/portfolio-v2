import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next";
import { SimpleLayout } from "@/components/SimpleLayout";
import { pageHeader, projects } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: pageHeader.title,
};

export default function Projects() {
  return (
    <SimpleLayout title={pageHeader.title} intro={pageHeader.intro}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-12 px-5 sm:grid-cols-2 sm:px-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative mt-6 flex flex-col items-start justify-between rounded-xl 
            "
          >
            <div className="relative w-full ">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={500}
                className="aspect-[16/9] w-full rounded-xl bg-slate-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2] "
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/15" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <div className="text-indigo-500 dark:text-indigo-400">
                  {project.industry}
                </div>
              </div>
              <div className="relative">
                {/* hover animation does not work with the group-hover */}
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                  <Link
                    href={
                      project.id === 777
                        ? project.href
                        : `/projects/${project.id}`
                    }
                    target={project.id === 777 ? "_blank" : ""}
                  >
                    <span className="absolute -inset-x-5 -inset-y-5 z-20 sm:-inset-y-6" />
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="absolute -inset-x-5 -inset-y-5 -z-10 scale-95 bg-slate-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800 sm:-inset-x-8 sm:-inset-y-8 sm:rounded-2xl" />
          </article>
        ))}
      </div>
    </SimpleLayout>
  );
}
