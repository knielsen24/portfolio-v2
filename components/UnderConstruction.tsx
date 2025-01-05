'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UnderConstruction() {
  const pathname = usePathname();
  const regex = /\w/g;

  return (
    <div className="mx-auto flex h-screen max-w-5xl items-center px-5 lg:px-8">
      <div className="mx-auto flex flex-col items-center">
        {/* <p className="text-base font-semibold text-slate-400 dark:text-zinc-500">
          404
        </p> */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-5xl">
          Page is under development
        </h1>
        <p className="mt-6 text-center text-base text-slate-600 dark:text-zinc-400">
          Please check later to see the {pathname.match(regex)} page.
        </p>
        <Link
          href="/"
          className="mt-6 font-semibold hover:text-indigo-500 hover:dark:text-indigo-400">
          Go back home
        </Link>
      </div>
    </div>
  );
}
