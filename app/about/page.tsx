import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next";
import clsx from "clsx";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import { SimpleLayout } from "@/components/SimpleLayout";
import {
  stats,
  timeline,
  pageHeader,
  imageQuote,
  loveCoding,
  timelineHeader,
} from "@/constants/about";
import baliBeach from "@/images/photos/bali-beach.jpg";

export const metadata: Metadata = {
  title: "About",
  description: "Kevin Nielsen, professional coach to coder.",
};

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

function AboutImage() {
  return (
    <div className="relative overflow-hidden border border-slate-900/20 px-5 pb-8 pt-20 shadow-2xl dark:border-zinc-100/20 sm:rounded-3xl sm:px-8 sm:pt-32 lg:max-w-lg">
      <Image
        src={baliBeach}
        alt="Kevin looking over bali coast"
        priority={true}
        className="saturate-75 absolute inset-0 aspect-square h-full w-full object-cover brightness-125 "
      />

      <div className="absolute inset-0 bg-slate-400/80 mix-blend-multiply dark:bg-zinc-500/70 " />
      <div
        className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[78.5625rem] bg-gradient-to-tr from-indigo-800 to-indigo-300 opacity-90 dark:opacity-90"
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
          className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
        >
          <path
            id="0ef284b8-28c2-426e-9442-8655d393522e"
            d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
          />
          <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
        </svg>
        <blockquote className="mt-6 text-xl font-semibold leading-8 text-slate-50 sm:mt-20">
          <p>{imageQuote.quote}</p>
        </blockquote>
        <figcaption className="mt-6 text-sm leading-6 text-zinc-300">
          <strong className="font-semibold text-white">
            {imageQuote.name}
          </strong>{" "}
          {imageQuote.slogan}
        </figcaption>
      </figure>
    </div>
  );
}

function SocialSection() {
  return {
    /* <div className="order-last lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div> */
  };
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
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
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
      <div className="grid max-w-2xl grid-cols-1 items-start justify-items-center gap-x-8 gap-y-12 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="order-1 sm:order-2 lg:pl-6">
          <AboutImage />
        </div>
        <div className="order-2 px-5 pb-12 sm:px-0 sm:pb-24 lg:order-1">
          <div className="text-base leading-7 text-slate-700 dark:text-zinc-400 lg:max-w-lg">
            <h1 className=" text-xl font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              {loveCoding.header}
            </h1>
            <p className="mt-6">{loveCoding.firstP}</p>
            <p className="mt-6">{loveCoding.secondP}</p>
          </div>
        </div>
        {/* social links section */}
      </div>
      <div className="order-3 mx-5 border-y border-zinc-700/70 py-16 sm:mx-0">
        <dl className=" grid grid-cols-2 gap-x-8 gap-y-12  sm:gap-y-16 lg:grid-cols-4">
          {stats.map((stat, statIdx) => (
            <div key={statIdx} className="gap-y-6">
              <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-zinc-500">
                {stat.label}
              </dt>
              <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-slate-900 dark:text-zinc-200">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="overflow w/screen relative mt-16 bg-indigo-100 px-5 py-10 dark:bg-zinc-800 sm:mt-24 sm:rounded-3xl sm:px-8">
        <Timeline />
      </div>
      {/* <div className="mt-12 flex px-5 sm:mt-20 sm:px-0">
        <Link
          href="/experience"
          className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"
        >
          Check out my experience <span aria-hidden="true">&rarr;</span>
        </Link>
      </div> */}
    </SimpleLayout>
  );
}
