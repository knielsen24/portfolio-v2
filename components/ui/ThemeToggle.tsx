import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useState } from "react";

function SunIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function MoonIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 22 22" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="shadow-slate-zinc/5 group rounded-full bg-white px-2.5 py-1.5 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-slate-100 stroke-slate-500 transition group-hover:fill-slate-200 group-hover:stroke-slate-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-indigo-50 [@media(prefers-color-scheme:dark)]:stroke-indigo-400 [@media(prefers-color-scheme:dark)]:group-hover:fill-indigo-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-indigo-500" />
      <MoonIcon className="[@media_not_(prefers-color-scheme:dark hidden h-6 w-6 fill-zinc-700/40 stroke-zinc-500 transition group-hover:fill-zinc-400/10 dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-300/50 [@media_not_(prefers-color-scheme:dark)]:stroke-indigo-500" />
    </button>
  );
}
