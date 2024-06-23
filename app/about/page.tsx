import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next";
import baliBeach from "@/public/bali-beach.jpg";
import { SimpleLayout } from "@/components/SimpleLayout";
import { MailIcon } from "@/components/icons/About";
import { iconsObj } from "@/components/icons/Home";
import {
  stats,
  timeline,
  pageHeader,
  imageQuote,
  loveCoding,
  timelineHeader,
  excitement,
} from "@/constants/about";
import clsx from "clsx";

export const metadata: Metadata = {
  title: pageHeader.page,
  description: pageHeader.title,
};

type Props = {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function SocialLink(props: Props) {
  const { className, href, children, icon: Icon, } = props

  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        target="_blank"
        className="group flex items-center text-sm font-medium text-slate-500 transition hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
      >
        <Icon className="h-6 w-6 flex-none group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function AboutImage() {
  return (
    <div className="relative -z-10 overflow-hidden rounded-xl px-4 pb-6 pt-24 shadow-2xl ring-1 ring-slate-900/20 dark:ring-zinc-500 sm:rounded-3xl sm:px-8 sm:pb-8 sm:pt-36 lg:pt-52">
      <Image
        src={baliBeach}
        alt="Kevin looking over bali coast"
        priority={true}
        className="saturate-75 absolute inset-0 aspect-[16/9] h-full w-full object-cover brightness-125 sm:aspect-[4/3] "
      />

      <div className="absolute inset-0 bg-slate-400/80 mix-blend-multiply dark:bg-zinc-500/50 " />
      <div
        className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[78.5625rem] bg-gradient-to-tr from-indigo-600 to-indigo-400 opacity-90 dark:opacity-90"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <figure className="relative isolate">
        <svg
          viewBox="0 0 162 128"
          fill="none"
          aria-hidden="true"
          className="absolute -left-2 -top-12 -z-10 h-20 stroke-white/20 sm:-top-20 sm:h-28"
        >
          <path
            id="0ef284b8-28c2-426e-9442-8655d393522e"
            d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
          />
          <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
        </svg>
        <blockquote className="text-md mt-8 font-semibold text-white dark:text-zinc-50 sm:mt-20 sm:text-lg sm:leading-8">
          <p>{imageQuote.quote}</p>
        </blockquote>
        <figcaption className="mt-4 text-xs leading-6 text-zinc-300 sm:text-sm">
          <strong className="font-semibold text-white">
            {imageQuote.name}
          </strong>{" "}
          {imageQuote.slogan}
        </figcaption>
      </figure>
    </div>
  );
}

function SocialLinks() {
  return (
    <ul role="list">
      {iconsObj.map((icon) => (
        <SocialLink
          key={icon.name}
          href={icon.href}
          icon={icon.icon}
          className="mt-4"
        >
          Follow on {icon.name}
        </SocialLink>
      ))}
      <SocialLink
        href="mailto:knielsen24@gmail.com"
        icon={MailIcon}
        className="mt-6 border-t border-slate-200/80 pt-6 dark:border-zinc-700/60 sm:mt-8 sm:pt-8"
      >
        knielsen24@gmail.com
      </SocialLink>
    </ul>
  );
}

function FunStats() {
  return (
    <dl className="grid grid-cols-2 gap-y-8 sm:gap-x-8 lg:grid-cols-4">
      {stats.map((stat, statIdx) => (
        <div
          key={statIdx}
          className="ml-4 border-l border-slate-200/80 pl-3 dark:border-zinc-700/60 sm:ml-0 sm:pl-6"
        >
          <dd className="text-2xl font-bold leading-10 tracking-tight text-slate-800 dark:text-zinc-200 sm:text-3xl">
            {stat.value}
          </dd>
          <dt className="mt-3 text-xs font-semibold leading-6 text-slate-600 dark:text-zinc-500 sm:text-sm">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

function Timeline() {
  return (
    <>
      <h1 className="text-xl font-semibold leading-7 text-slate-600 dark:text-zinc-200">
        {timelineHeader.name}
      </h1>
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden sm:mx-0 sm:max-w-none lg:grid-cols-4">
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center pl-3 text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 sm:pl-0"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-3 h-1 w-1 flex-none sm:mr-4"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-slate-900/10 dark:bg-zinc-300/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900 dark:text-zinc-200">
              {item.name}
            </p>
            <p className="mt-1 text-base leading-7 text-slate-600 dark:text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function About() {
  return (
    <SimpleLayout title={pageHeader.title} intro={pageHeader.intro}>
      <div className="sm:min-h-content mx-4 grid grid-cols-1 gap-8 sm:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-0 xl:gap-x-12">
        <div className="order-1 sm:order-2 lg:pl-8 xl:pl-16">
          <AboutImage />
        </div>
        <div className="order-2 sm:mx-0 lg:order-1 lg:row-span-2">
          <div className="text-base leading-7 text-slate-600 dark:text-zinc-400">
            <h1 className=" text-lg font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              {loveCoding.header}
            </h1>
            <p className="mt-4 sm:mt-6">{loveCoding.firstP}</p>
            <p className="mt-4 sm:mt-6">{loveCoding.secondP}</p>
            <h1 className="mt-4 font-semibold leading-7 text-indigo-600 dark:text-indigo-400 sm:mt-8 sm:text-lg">
              {excitement.header}
            </h1>
            <p className="mt-4 sm:mt-6">{excitement.firstP}</p>
            <p className="mt-4 sm:mt-6">{excitement.secondP}</p>
          </div>
        </div>

        <div className="order-last pt-2 text-slate-600 dark:text-zinc-400 sm:pt-0 lg:pl-10 xl:pl-20">
          <SocialLinks />
        </div>
      </div>
      <div className="mx-0 mt-16 sm:order-3 sm:mt-28">
        <FunStats />
      </div>
      <div className="overflow w/screen relative mt-16 bg-indigo-100 px-4 py-10 ring-1 ring-slate-900/10 dark:bg-zinc-800 dark:ring-zinc-300/10 sm:mt-32 sm:rounded-3xl sm:px-8">
        <Timeline />
      </div>
    </SimpleLayout>
  );
}
