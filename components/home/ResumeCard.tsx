import Image, { type ImageProps } from 'next/image'
import { Button } from '@/components/ui/Button';
import nerdsLogo from '@/public/logos/work/nerds-logo.png'
import { GradientBarHorizontal, GradientBarVertical } from '@/components/ui/GradientBars';
import kardioLogo from '@/public/logos/work/kardio-black.png';
import xaltLogo from '@/public/logos/work/xalt-logo.png'
// import { useTheme } from 'next-themes';
// import { type UseThemeProps } from 'next-themes/dist/types';


type Role = {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  background: string
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

  const isXalt = role.company === 'Xalt Fitness'

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {isXalt && (
          <div className='rounded-full overflow-hidden'>
            <Image src={role.logo} alt={role.company} className="h-7 w-7" unoptimized />
          </div>
        )}
        {!isXalt && <Image src={role.logo} alt={role.company} className="h-7 w-7" unoptimized />}
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

export default function ResumeCard() {
  // TODO figure out why useTheme() is causing an runtime error
  // const { theme } = useTheme() as UseThemeProps
  // console.log("🔋<theme>", theme)

  let resume: Array<Role> = [
    {
      company: 'Dynasty Nerds',
      title: 'Fullstack Software Engineer',
      logo: nerdsLogo,
      start: 'May 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      background: 'bg-white'
    },
    {
      company: 'Kardio',
      title: 'Fullstack Software Engineer',
      logo: kardioLogo,
      start: 'Jan 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      background: 'bg-zinc-800'
    },
    {
      company: 'Xalt Fitness',
      title: 'React Native Developer',
      logo: xaltLogo,
      start: 'Mar 2023',
      end: {
        label: 'Oct 2023',
        dateTime: new Date().getFullYear().toString(),
      },
      background: 'bg-zinc-800'
    },
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
  ]

  return (
    <div className="relative sm:rounded-2xl ring-1 ring-slate-900/10 p-3 pb-4 sm:p-6 dark:ring-zinc-300/10 overflow-hidden md:min-w-[400px]">
      <GradientBarVertical className='left-0 invisible sm:visible w-1' />
      {/* <GradientBarHorizontal className='bottom-0 visible sm:invisible h-1' /> */}
      <div>
        <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="ml-1.5 h-6 w-6 flex-none" />
          <span className="ml-3 pt-0.5">Work</span>
        </h2>
        <ol className="mt-6 space-y-4 md:space-y-6">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        {/* <Button href="#" variant="secondary" className="relative group mt-6 w-full overflow-hidden">
          <GradientBarVertical className='left-0 visible sm:invisible w-1' />
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button> */}
      </div>
    </div>
  )
}
