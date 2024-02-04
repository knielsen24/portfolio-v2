import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex h-screen max-w-5xl items-center px-5 lg:px-8">
      <div className="mx-auto flex flex-col items-center">
        <p className="text-base font-semibold text-slate-400 dark:text-zinc-500">
          Project is unavailable
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-5xl">
          Project not found
        </h1>
        <p className="mt-6 text-center text-base text-slate-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-6 hover:text-indigo-500 hover:dark:text-indigo-400"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
