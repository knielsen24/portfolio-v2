import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next";
import { cn } from "@/lib/utils";
import { SimpleLayout } from "@/components/SimpleLayout";
import { pageHeader } from "@/constants/projects";
import { Project } from "@/lib/data";
import { API_URL } from "@/lib/api";

export const metadata: Metadata = {
  title: pageHeader.page,
  description: pageHeader.title,
};

async function getProjects() {
  try {
    const res = await fetch(`${API_URL}/api/projects`);

    if (!res.ok) {
      // Log the status and response text for debugging
      console.error(`Error: ${res.status} - ${res.statusText}`);
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    // Log any other errors that might occur during the fetch
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Projects() {
  if (!API_URL) {
    return null;
  }

  const data = await getProjects();
  const projects = data.projects;

  return (
    <SimpleLayout title={pageHeader.title} intro={pageHeader.intro}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-12 px-5 sm:grid-cols-2 sm:px-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects?.map((project: Project) => (
          <article
            key={project.id}
            className="group relative mt-6 flex flex-col items-start justify-between rounded-xl"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-900/10 dark:border-zinc-100/10">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className={cn(
                  "aspect-[16/9] w-full bg-slate-200/80   transition duration-500 dark:bg-zinc-700/60 sm:aspect-[2/1] lg:aspect-[3/2]",
                  project.bgSize,
                  // project.bgColor && `bg-${project.bgColor}`,
                  // the bg-color is not working
                )}
                priority={true}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 rounded-xl " />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <div className="text-indigo-500 group-hover:text-slate-500 dark:text-indigo-400 dark:group-hover:text-zinc-500">
                  {project.industry}
                </div>
              </div>
              <div className="relative">
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
                  {project.intro}
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
