'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

function ChevronDoubleDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
      />
    </svg>
  );
}

export default function BtnScrollSpy() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isShowing, setIsShowing] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 200) {
      setIsShowing(false);
    } else {
      setIsShowing(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShowing(true);
    }, 2000);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="absolute inset-x-0 bottom-6 flex justify-center sm:bottom-12">
        <Transition
          show={isShowing}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="animate-bounce rounded-full bg-slate-200 p-1 opacity-90 dark:bg-zinc-800">
            <Link href="/#work" onClick={() => setIsShowing(false)}>
              <ChevronDoubleDownIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-600" />
            </Link>
          </div>
        </Transition>
      </div>
    </>
  );
}
