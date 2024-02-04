"use client";

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
      <div className="mx-auto flex h-screen max-w-5xl items-center px-5 lg:px-8">
        <div className="mx-auto flex flex-col items-center">
          <p className="text-base font-semibold text-slate-400 dark:text-zinc-500">
            404
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-center text-base text-slate-600 dark:text-zinc-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}> Try again</button>
          </div>
        </div>
      </div>
    </>
  );
}
