import Link from "next/link";
import { SimpleLayout } from "@/components/SimpleLayout";
import UnderConstruction from "@/components/UnderConstruction";
import { ArrowTopRightOnSquare } from "@/components/icons/Project";

const isUnderConstruction = false;

export default function Playground() {
  return (
    <>
      {isUnderConstruction ? (
        <UnderConstruction />
      ) : (
        <SimpleLayout
          title="Welcome to the playground"
          intro="The place where imagination meets reality."
        >
          <div className="relative select-text">
            <div className="flex flex-row items-baseline justify-between">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400 sm:text-2xl">
                Test
              </h3>
              <ArrowTopRightOnSquare className="mb-0.5 mr-8 h-5 w-5 self-end text-slate-400 transition ease-out group-hover:inline-flex group-hover:scale-110 dark:text-zinc-500 sm:mb-1.5 sm:h-6 sm:w-6" />
            </div>
            <p className="mt-4 line-clamp-3 text-base leading-6 text-slate-600 dark:text-zinc-400 sm:text-lg">
              Another test
            </p>
          </div>
          <div className="relative isolate">
            <Link href={""} target="_blank">
              <div className="flex flex-row items-baseline justify-between">
                <h3 className=" font-medium text-slate-900 dark:text-zinc-100">
                  website link
                </h3>
                <ArrowTopRightOnSquare className="mb-0.5 h-5 w-5 text-slate-400 transition ease-out  group dark:text-zinc-500" />
              </div>
            </Link>
          </div>
        </SimpleLayout>
      )}
    </>
  );
}
