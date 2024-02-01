import Link from "next/link";

import { Container } from "@/components/Container";
import { SimpleLayout } from "@/components/SimpleLayout";
import { projects } from "@/constants/projects";

export const pageHeader = {
  title: "These are projects that demonstrate my skills",
  intro:
    "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
};

export default function Projects() {
  return (
    <SimpleLayout
      title="These are projects that demonstrate my skills"
      intro="I’ve worked on toons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 px-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <img
                src={project.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-slate-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/15" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <div className="text-indigo-500 dark:text-indigo-400">
                  {project.industry}
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600 dark:text-zinc-100 dark:group-hover:text-indigo-500">
                  <Link href={`/projects/${project.id}`}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SimpleLayout>
  );
}
