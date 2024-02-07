import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

function ArrowTopRightOnSquare(props: React.ComponentPropsWithoutRef<"svg">) {
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
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function Card({
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
      className="group relative flex flex-col items-start justify-between border-t border-slate-200/80 py-6 dark:border-zinc-700/60 sm:rounded-xl sm:border-none sm:py-0 "
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
              "aspect-[16/9] w-full bg-slate-100 dark:bg-zinc-800 sm:aspect-[3/2]",
              bgSize,
            )}
            priority={true}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 rounded-xl" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs sm:text-base">
            <div className="text-indigo-500 group-hover:text-slate-500 dark:text-indigo-400 dark:group-hover:text-zinc-500">
              {industry}
            </div>
          </div>
          <div className="relative select-text">
            <div className="flex flex-row items-baseline justify-between">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400 sm:text-2xl">
                {title}
              </h3>
              <ArrowTopRightOnSquare className="mb-0.5 mr-8 hidden h-5 w-5 self-end text-slate-400 transition ease-out group-hover:inline-flex group-hover:scale-110 dark:text-zinc-500 sm:mb-1.5 sm:h-6 sm:w-6" />
            </div>
            <p className="mt-4 line-clamp-3 text-base leading-6 text-slate-600 dark:text-zinc-400 sm:text-lg">
              {intro}
            </p>
          </div>
        </div>
      </Link>
      <span className="absolute -inset-x-8 inset-y-0 -z-10 scale-95 bg-slate-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800 sm:-inset-x-10 sm:-inset-y-8 sm:rounded-2xl" />
    </article>
  );
}
