"use client";
import Link from "next/link";
import { useState, Fragment } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import { Container } from "./Container";

const navigation = [
  { name: "About", href: "/about", prefetch: true },
  { name: "Experience", href: "/experience", prefetch: true },
  { name: "Projects", href: "/projects", prefetch: true },
];

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-gray-700 dark:text-slate-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-slate-500 group-hover:stroke-slate-700 dark:group-hover:stroke-slate-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-slate-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-900/5 dark:bg-gray-800 dark:ring-gray-600"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-slate-500 dark:text-slate-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Kevin Nielsen
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-slate-100 text-base text-slate-800 dark:divide-gray-100/5 dark:text-gray-300">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/experience">Experience</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        prefetch={true}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-indigo-500 dark:text-indigo-400"
            : "hover:text-indigo-500 dark:hover:text-indigo-400",
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-slate-100/90 px-3 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-gray-700 dark:text-slate-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/experience">Experience</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <h1 className="inline-block bg-gradient-to-r from-slate-700/90 to-slate-700 bg-clip-text text-2xl font-semibold text-transparent dark:from-gray-500/90 dark:to-gray-500 sm:text-3xl">
      {"[ kn ]"}
    </h1>
  );
}

export default function Navbar() {
  return (
    <header className="pointer-events-none inset-x-0 top-0 z-50 flex flex-none flex-col">
      <Container>
        <nav className="pt-7 h-16" aria-label="Global">
          <div className="relative flex items-center gap-4">
            <div className="pointer-events-auto flex flex-1">
              <Link href="/">
                <Logo />
                <span className="sr-only">Kevin Nielsen</span>
              </Link>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <MobileNavigation className="pointer-events-auto md:hidden" />
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
