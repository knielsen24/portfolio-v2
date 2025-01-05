'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import {
  PopoverPanel,
  Popover,
  PopoverButton,
  Transition,
  TransitionChild,
  PopoverBackdrop,
} from '@headlessui/react';
import { Container } from './Container';
import ThemeToggle from './ui/ThemeToggle';
import { GradientBarHorizontal } from './ui/GradientBars';

const ENABLE_FEATURE = process.env.NODE_ENV === 'development';

export const allRoutes = [
  { name: 'About', href: '/about', ariaLabel: 'about link', prefetch: true },
  { name: 'Experience', href: '/experience', ariaLabel: '', prefetch: true },
  { name: 'Projects', href: '/projects', ariaLabel: '', prefetch: true },
];

export const filteredRoutes = allRoutes.filter(
  (route) => route.name.toLowerCase() !== 'experience',
);

const routes = ENABLE_FEATURE ? allRoutes : filteredRoutes;

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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

function Logo() {
  return (
    <Link href="/" aria-label="Home">
      <h1 className="inline-block bg-gradient-to-r from-slate-700/90 to-slate-700 bg-clip-text text-xl font-semibold text-transparent dark:from-zinc-400/90 dark:to-zinc-400 sm:text-2xl ">
        {'[ kn ]'}
      </h1>
      <span className="sr-only">Kevin Nielsen</span>
    </Link>
  );
}

type MobileNavProps = { href: string; children: React.ReactNode };

function MobileNavItem(props: MobileNavProps) {
  const { href, children } = props;

  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
}

type Popover = React.ComponentPropsWithoutRef<typeof Popover>;
function MobileNavigation(props: Popover) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-slate-500 group-hover:stroke-zinc-700 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300" />
      </PopoverButton>
      <Transition>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <PopoverBackdrop className="fixed inset-0 z-50 bg-slate-800/40 backdrop-blur-sm dark:bg-zinc-800/60" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <PopoverPanel className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-900/5 dark:bg-zinc-800 dark:ring-zinc-700">
            <div className="flex flex-row-reverse items-center justify-between">
              <PopoverButton aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-slate-500 dark:text-zinc-400" />
              </PopoverButton>
              <h2 className="text-sm font-medium text-slate-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-slate-200/70 text-base text-slate-900 dark:divide-zinc-100/5 dark:text-zinc-100">
                <MobileNavItem href="/">Home</MobileNavItem>
                {routes.map((item) => (
                  <MobileNavItem key={item.name} href={item.href}>
                    {item.name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
}

type NavItemProps = {
  href: string;
  ariaLabel: string;
  prefetch: boolean;
  children: React.ReactNode;
};

function NavItem(props: NavItemProps) {
  const { href, ariaLabel, prefetch, children } = props;

  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        aria-label={ariaLabel}
        prefetch={prefetch}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-indigo-600 dark:text-indigo-400'
            : 'hover:text-indigo-500 dark:hover:text-indigo-400',
        )}>
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-[1.75px] bg-gradient-to-r from-indigo-500/5 via-indigo-500/40 to-indigo-500/5 dark:from-indigo-400/5 dark:via-indigo-400/40 dark:to-indigo-400/5" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white px-3 text-sm font-medium text-slate-900 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-zinc-800 dark:text-zinc-100 dark:ring-white/10 dark:hover:ring-white/20">
        {routes.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            ariaLabel={item.ariaLabel}
            prefetch={item.prefetch}>
            {item.name}{' '}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  return (
    <header className="pointer-events-none absolute top-0 z-50 w-full">
      <GradientBarHorizontal className="top-0" />
      <Container className="top-0 z-10 mt-6 h-16 w-full px-5 sm:mt-8">
        <div className="flex gap-4">
          <div className="pointer-events-auto flex flex-1 items-center">
            <Logo />
          </div>
          <div className="flex flex-1 items-end justify-end md:justify-center ">
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>
          <div className="flex justify-end md:flex-1">
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
