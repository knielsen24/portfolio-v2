"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "About", href: "/about", prefetch: true },
  { name: "Experience", href: "/experience", prefetch: true },
  { name: "Projects", href: "/projects", prefetch: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let pathname = usePathname() || "/";

  return (
    <header className="inset-x-0 top-0 z-50 flex-none">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            // className="bg-gray-300 rounded-full py-3"
          >
            <h1 className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-xl font-semibold text-transparent dark:from-indigo-500 dark:to-indigo-400 sm:text-3xl">
              {"[ kn ]"}
            </h1>
            <span className="sr-only">Kevin Nielsen</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={item.prefetch}
              className="text-sm font-semibold leading-6 text-gray-800 hover:text-indigo-500 dark:text-gray-100 dark:hover:text-indigo-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-100 px-6 py-6 dark:bg-gray-700 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <h1 className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-xl font-semibold text-transparent dark:from-indigo-500 dark:to-indigo-400 sm:text-2xl">
                {"[ kn ]"}
              </h1>
              <span className="sr-only">Kevin Nielsen</span>

              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={item.prefetch}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-indigo-50 dark:text-gray-100 dark:hover:bg-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
