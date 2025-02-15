import Image from 'next/image';
import jsIcon from '@/public/logos/js-icon.png';
import tsIcon from '@/public/logos/ts-icon.svg.png';
import nodeIcon from '@/public/logos/nodejs-icon.png';
import nextDarkIcon from '@/public/logos/nextjs-icon-dark-bg.png';
import nextLightIcon from '@/public/logos/nextjs-icon-light-bg.png';
import reactIcon from '@/public/logos/React-icon.svg';
import expoLightIcon from '@/public/logos/expo-light-bg.png';
import expoDarkIcon from '@/public/logos/expo-dark-bg.png';
import reduxIcon from '@/public/logos/redux-icon.png';
import twIcon from '@/public/logos/tw-icon.svg';
import pgIcon from '@/public/logos/postgresql-icon.png';

const skillsCopy = {
  header: 'Skilled in modern technologies',
  firstPart: 'These are languages, frameworks, and libraries in which I',
  firstHighlight: 'excel',
  secondPart: '. Although these are my favorites, I am always open to',
  secondHighlight: 'learning',
  thirdPart: 'new technologies. Visit my projects page to explore specific',
  thirdHighlight: 'skills',
  fourthPart: 'tailored to individual projects.',
};

export default function Skills() {
  return (
    <div className="group relative sm:mx-0">
      <div className="mx-auto max-w-7xl bg-indigo-100 py-12 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-zinc-300/10 sm:rounded-3xl sm:px-6 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-12 lg:grid-cols-2">
          <div className="w-full max-w-xl px-5 lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-3xl">
              {skillsCopy.header}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-zinc-300">
              {skillsCopy.firstPart}{' '}
              <span className="font-semibold text-indigo-500 ease-out dark:text-indigo-400">
                {skillsCopy.firstHighlight}
              </span>
              {skillsCopy.secondPart}{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                {skillsCopy.secondHighlight}{' '}
              </span>
              {skillsCopy.thirdPart}{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                {skillsCopy.thirdHighlight}{' '}
              </span>
              {skillsCopy.fourthPart}
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:grid-cols-3 sm:gap-y-14 sm:pl-8 lg:mx-0 lg:max-w-none ">
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={jsIcon}
              alt="JavaScript"
            />
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={tsIcon}
              alt="TypeScript"
            />
            <Image
              className="max-h-14 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={nodeIcon}
              alt="Node.js"
            />
            <div>
              <Image
                className="hidden max-h-12 w-full object-contain duration-300 ease-in dark:block sm:hover:scale-110 "
                src={nextDarkIcon}
                alt="Next.js"
              />
              <Image
                className="block max-h-12 w-full object-contain duration-300 ease-in dark:hidden sm:hover:scale-110 "
                src={nextLightIcon}
                alt="Next.js"
              />
            </div>
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110 "
              src={reactIcon}
              alt="React.js"
            />

            <div>
              <Image
                className="hidden max-h-10 w-full object-contain duration-300 ease-in dark:block sm:hover:scale-110 "
                src={expoDarkIcon}
                alt="Expo React Native"
              />
              <Image
                className="block max-h-10 w-full object-contain duration-300 ease-in dark:hidden sm:hover:scale-110 "
                src={expoLightIcon}
                alt="Expo Go React Native"
              />
            </div>
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110 "
              src={reduxIcon}
              alt="Redux"
            />
            <Image
              className="max-h-9 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={twIcon}
              alt="TailwindCSS"
            />
            <Image
              className="max-h-12 w-full object-contain duration-300 ease-in sm:hover:scale-110"
              src={pgIcon}
              alt="PostegeSQL"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
