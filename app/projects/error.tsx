"use client";
import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    //log the error to an error reporting service
    console.log(error);
  }, [error]);
  return (
    <>
      <div className="mx-auto mt-20 flex max-w-5xl items-center px-5 sm:mt-40 lg:px-8">
        <div className="mx-auto flex flex-col items-center">
          <p className="text-base font-semibold text-slate-400 dark:text-zinc-500">
            Orange Mocha Frappuccino!
          </p>
          <h1 className="mt-6 text-center text-2xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-4xl sm:text-5xl">
            Oops, something went wrong.
          </h1>
          <p className="mt-6 text-center text-base text-slate-600 dark:text-zinc-400">
            There was an error with your request... You are probably looking for
            something else.
          </p>
          <Link
            href="/projects"
            className="hover-underline-animation mt-6 font-bold text-slate-600 duration-300 hover:text-indigo-500 dark:text-zinc-500 hover:dark:text-indigo-400"
          >
            View Projects
          </Link>
        </div>
      </div>
    </>
  );
}
