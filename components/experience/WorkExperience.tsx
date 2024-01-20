import Image, { type ImageProps } from "next/image";
import logoAirbnb from "@/public/logos/airbnb.svg";
import logoFacebook from "@/public/logos/facebook.svg";
import logoPlanetaria from "@/public/logos/planetaria.svg";
import logoStarbucks from "@/public/logos/starbucks.svg";
import { Button } from "@/components/Button";

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
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
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-300 dark:stroke-slate-400"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-slate-400 dark:stroke-slate-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-800/5 dark:border dark:border-slate-700/50 dark:bg-indigo-600">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-slate-900 dark:text-slate-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-slate-500 dark:text-slate-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-slate-400 dark:text-slate-400"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

export default function WorkExperience() {
  let resume: Array<Role> = [
    {
      company: "Xalt",
      title: "React Native Developer",
      logo: logoPlanetaria,
      start: "Mar 2023",
      end: {
        label: "Oct 2023",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Canyons Aquatic Club",
      title: "Head Coach, Team Director",
      logo: logoAirbnb,
      start: "Oct 2015",
      end: "Jan 2022",
    },
    {
      company: "Class Aquatics",
      title: "Associate Head Coach",
      logo: logoFacebook,
      start: "Apr 2011",
      end: "Oct 2015",
    },
    {
      company: "Starbucks",
      title: "Shift Supervisor",
      logo: logoStarbucks,
      start: "2008",
      end: "2011",
    },
  ];

  return (
    <div className="rounded-tl-lg border border-slate-200 bg-indigo-100 p-6 dark:border-slate-600/40 dark:bg-indigo-800">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mb-6 mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button variant="secondary" size="auto">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-slate-400 transition group-active:stroke-slate-600 dark:stroke-slate-200 dark:group-hover:stroke-slate-50 dark:group-active:stroke-slate-50" />
      </Button>
    </div>
  );
}
