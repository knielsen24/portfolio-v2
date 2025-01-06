import Link from 'next/link';
import Image from 'next/image';
import headShot from '@/public/avatar.png';
import { Container } from '@/components/Container';
import { iconsObj, emailObj } from '@/components/icons/Home';
import BtnScrollSpy from '@/components/ui/BtnScrollSpy';
import Skills from '@/components/home/Skills';
import ResumeCard from '@/components/home/ResumeCard';

const heroCopy = {
  header: 'Software engineer. \n',
  highlight: 'Frontend enthusiast.',
  description:
    "I'm Kevin, a full-stack developer that leverages modern framework technologies to build and design web and mobile applications.",
};

function HeroContainer() {
  return (
    <div className="relative mx-auto -mb-2 grid h-svh max-w-5xl grid-cols-1 content-center gap-y-6 px-4 sm:-mb-6 sm:px-0 lg:grid-cols-3 lg:gap-y-0">
      <div className="mx-auto px-16 pt-10 sm:px-0 sm:pt-2">
        <Image
          src={headShot}
          alt="Headshot of Kevin"
          priority={true}
          className="w-44 rounded-full bg-gradient-to-r from-indigo-200 via-indigo-500 to-teal-400/70 shadow-lg shadow-slate-500 ring-1 ring-slate-300/70 delay-75 duration-300 dark:bg-gradient-to-r dark:from-indigo-300 dark:via-indigo-500 dark:to-teal-300 dark:shadow-zinc-500 dark:ring-zinc-500/80 sm:w-56 lg:w-64"
        />
      </div>
      <div className="sm:col-span-2 lg:order-first">
        <div className="grid-row-1 flex grid-flow-row">
          <h1 className="text-3xl font-bold leading-normal tracking-tight text-slate-900 dark:text-zinc-100 sm:mb-2 sm:pr-12 sm:text-5xl">
            {heroCopy.header} <span className="">{heroCopy.highlight}</span>
          </h1>
        </div>
        <p className="mt-4 text-sm leading-normal text-slate-600 dark:text-zinc-400 sm:mt-6 sm:max-w-lg sm:text-lg">
          {heroCopy.description}
        </p>

        {/* Social Icons Container with View Projects button */}
        <div className="mt-6 grid max-w-lg content-around gap-y-6 sm:mt-10 sm:grid-cols-2 sm:gap-y-8">
          <div className="flex justify-start space-x-6 md:order-2">
            {iconsObj.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className={`delay-50 origin-bottom text-slate-500/90 duration-500 hover:scale-110 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400
                    ${item.tilt === 'back' ? 'hover:-rotate-6' : 'hover:rotate-6'}`}>
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
            <Link
              key={emailObj.name}
              href={emailObj.href}
              target="_blank"
              className={`delay-50 origin-bottom text-slate-500/90 duration-500 hover:scale-110 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400
                    ${emailObj.tilt === 'back' ? 'hover:-rotate-6' : 'hover:rotate-6'}`}>
              <span className="sr-only">{emailObj.name}</span>
              <emailObj.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <div className="md:order-last">
            <Link
              href="/projects"
              className="hover-underline-animation font-bold text-slate-500 duration-300 hover:text-indigo-500 dark:text-zinc-500 hover:dark:text-indigo-400  sm:text-lg">
              View Projects
            </Link>
          </div>
        </div>
      </div>
      <BtnScrollSpy />
    </div>
  );
}

const resumeCtaCopy = {
  header: 'Professional experience',
  firstPart: 'I’ve ',
  firstHighlight: 'contributed ',
  secondPart:
    'to one of the leading dynasty football apps in fantasy sports industry and helped ',
  secondHighlight: ' launch',
  thirdPart: 'MVP products for health and fitness startups.',
};

function ResumeCTA() {
  return (
    <div className="mx-4 mb-8 flex flex-col justify-center gap-16 sm:mx-auto sm:mb-0 sm:mr-20">
      <div className="w-full max-w-xl lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-3xl">
          {resumeCtaCopy.header}
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-zinc-300">
          {resumeCtaCopy.firstPart}{' '}
          <span className="font-semibold text-indigo-500 ease-out dark:text-indigo-400">
            {resumeCtaCopy.firstHighlight}
          </span>
          {resumeCtaCopy.secondPart}{' '}
          <span className="font-semibold text-indigo-500 dark:text-indigo-400">
            {resumeCtaCopy.secondHighlight}{' '}
          </span>
          {resumeCtaCopy.thirdPart}{' '}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Container className="mt-2 sm:mt-4">
      <HeroContainer />
      <div
        className="mx-auto my-10 grid max-w-xl snap-start grid-cols-1 space-y-6 dark:border-zinc-700/60 sm:my-20 sm:space-y-16 sm:py-20 lg:max-w-none lg:grid-cols-2"
        id="work">
        <ResumeCTA />
        <div className="lg:pl-6 xl:pl-10">
          <ResumeCard />
        </div>
      </div>
      <div className="snap-start pt-20" id="skills">
        <Skills />
      </div>
    </Container>
  );
}
