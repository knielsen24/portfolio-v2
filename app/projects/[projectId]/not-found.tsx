import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center px-5 text-center sm:px-0">
        <p className="text-base text-slate-400 dark:text-zinc-500">
          Orange Mocha Frappuccino!
        </p>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-5xl">
          404 - Project not found
        </h1>
        <p className="mt-8 text-base text-slate-400 dark:text-zinc-500">
          Oops, you were probably looking for something else.
        </p>
        <Link
          href="/"
          className="mt-6 font-semibold text-slate-700 hover:text-indigo-500 dark:text-zinc-400 hover:dark:text-indigo-400"
        >
          Go back home
        </Link>
      </div>
    </>
  );
}
