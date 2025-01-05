import Link from 'next/link';
import Image, { type ImageProps } from 'next/image'
import headShot from '@/public/avatar.png';
import { Container } from '@/components/Container';
import { iconsObj, emailObj } from '@/components/icons/Home';
import { heroCopy } from '@/constants/home';
import BtnScrollSpy from '@/components/ui/BtnScrollSpy';
import Skills from '@/components/home/Skills';
import { Button } from '@/components/ui/Button';
import expoDark from '@/public/logos/expo-dark-bg.png'
import { GradientBarVertical } from '@/components/ui/GradientBars';


type Role = {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}


function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Dynasty Nerds',
      title: 'Fullstack Software Engineer',
      logo: expoDark,
      start: 'May 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Kardio',
      title: 'Fullstack Software Engineer',
      logo: expoDark,
      start: 'Jan 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Xalt',
      title: 'React Native Developer',
      logo: expoDark,
      start: 'Mar 2023',
      end: {
        label: 'Oct 2023',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="relative rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex overflow-hidden">
      <GradientBarVertical className='left-0' />
      <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}


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
  )
}

export default function Home() {
  return (
    <Container className="mt-2 sm:mt-4">
      <HeroContainer />
      <div className="snap-start my-20 pt-8 mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2" id="work">
        <div className="flex flex-col gap-16">
          {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
        </div>

        <div className="space-y-10 lg:pl-12 xl:pl-16 lg:min-w-16">
          {/* <Newsletter /> */}
          <Resume />
        </div>
      </div>
      <div className="snap-start" id="skills">
        <Skills />
      </div>
    </Container>
  );
}



// {
//   company: 'Canyons Aquatic Club',
//   title: 'Head Coach, Team Director',
//   logo: expoDark,
//   start: 'Oct 2015',
//   end: 'Jan 2022',
// },
// {
//   company: 'Class Aquatics',
//   title: 'Associate Head Coach',
//   logo: expoDark,
//   start: 'Apr 2011',
//   end: 'Oct 2015',
// },