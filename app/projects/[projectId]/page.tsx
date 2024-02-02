"use client";
import { Fragment, useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { projects, tabs } from "@/constants/projects";
import { Tab } from "@headlessui/react";
import {
  ArrowPathIcon,
  CalendarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

type tab = {
  name: string;
};

const perks = [
  {
    name: "10-year all-inclusive warranty",
    description: "We’ll replace it with a new one",
    icon: CalendarIcon,
  },
  {
    name: "Free shipping on returns",
    description: "Send it back for free",
    icon: ArrowPathIcon,
  },
  {
    name: "Free, contactless delivery",
    description: "The shipping is on us",
    icon: TruckIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function HighLights() {
  return (
    <div className="mt-16 bg-indigo-100  px-0 ring-1 ring-slate-900/10 dark:bg-zinc-800 dark:ring-zinc-300/10 sm:mt-28 sm:rounded-3xl">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl lg:flex lg:justify-center lg:py-12">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <perk.icon
                className="h-8 w-8 flex-shrink-0 text-indigo-500 dark:text-indigo-400"
                aria-hidden="true"
              />
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-slate-900  dark:text-zinc-100">
                  {perk.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                  {perk.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabDetails() {
  return (
    <Tab.Group as="div" className="mt-12 sm:mt-28">
      <div className="-mx-4 flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-slate-200 dark:border-zinc-700 sm:px-0">
          <Tab.List className="-mb-px flex justify-center space-x-10 sm:justify-start sm:space-x-16">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-indigo-500 text-indigo-500 dark:border-indigo-400 dark:text-indigo-400"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-200",
                    "whitespace-nowrap border-b-2 py-6 text-sm font-medium",
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        {tabs.map((tab: any) => (
          <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
            {tab.features.map((feature: any) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-6 lg:mt-0">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-zinc-200">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

type project = {
  id: number;
  title: string;
  href: string;
  githubHref: string;
  iosHref: string;
  androidHref: string;
  demoHref: string;
  intro: string;
  description: string;
  bgSize: string;
  imageUrl: string;
  bgColor: string;
  industry: string;
  category: string;
  date: string;
  datetime: string;
};

export default function ProjectDetails({
  params,
}: {
  params: { projectId: number };
}) {
  const [project, setProject] = useState<project | undefined>({
    id: 0,
    title: "",
    href: "",
    githubHref: "",
    iosHref: "",
    androidHref: "",
    demoHref: "",
    intro: "",
    description: "",
    bgSize: "",
    imageUrl: "",
    bgColor: "",
    industry: "",
    category: "",
    date: "",
    datetime: "",
  });
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   if (params.projectId) {
  //     const foundProject = projects?.find((proj) => proj.id === params.projectId);
  //     console.log("project", foundProject)
  //     setProject(foundProject);
  //   }
  //   setLoading(false);
  // }, [project]);

  console.log("project:", project)
  return (
    <Container className="py-12 sm:py-20">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 px-5 sm:px-0 lg:grid-cols-2">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-5xl">
            We built our business on great customer service {params.projectId}
          </h2>
          <p className="mt-4 text-slate-500 dark:text-zinc-300">
            At the beginning at least, but then we realized we could make a lot
            more money if we kinda stopped caring about that. Our new strategy
            is to write a bunch of things that look really good in the
            headlines, then clarify in the small print but hope people don't
            actually read it.
          </p>
        </div>
        <div className="aspect-h-2 aspect-w-3 relative overflow-hidden rounded-xl bg-slate-100">
          <img
            src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
            alt=""
            className="object-cover object-center"
          />
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/15" />
        </div>
      </div>
      <div>
        <HighLights />
      </div>
      <div className="px-5 sm:px-0 ">
        <TabDetails />
      </div>
    </Container>
  );
}
