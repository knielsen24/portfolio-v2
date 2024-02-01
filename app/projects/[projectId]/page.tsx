"use client";
import { Fragment } from "react";
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


function TabDetails() {
  return (
    <Tab.Group as="div" className="mt-12">
      <div className="-mx-4 flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-slate-200 dark:border-zinc-700 px-4 sm:px-0">
          <Tab.List className="-mb-px flex justify-center space-x-10 sm:justify-start sm:space-x-16">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-indigo-500 text-indigo-500 dark:border-indigo-400 dark:text-indigo-400"
                      : "border-transparent text-slate-500 dark:text-zinc-400 hover:border-slate-300 hover:text-slate-700 dark:hover:border-zinc-700 dark:hover:text-zinc-200",
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

export default function ProjectDetails({
  params,
}: {
  params: { projectId: number };
}) {
  const project = params?.projectId
    ? projects.find((proj) => proj.id === params.projectId)
    : null;
  console.log(project);
  return (
    <Container className="bg-slate-50 dark:bg-transparent">
      <div className="mx-auto py-24 sm:py-32">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                We built our business on great customer service{" "}
                {params.projectId}
              </h2>
              <p className="mt-4 text-slate-500 dark:text-zinc-300">
                At the beginning at least, but then we realized we could make a
                lot more money if we kinda stopped caring about that. Our new
                strategy is to write a bunch of things that look really good in
                the headlines, then clarify in the small print but hope people
                don't actually read it.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-slate-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          {/* <HighLights /> */}
          <TabDetails />
        <div className="mx-auto max-w-2xl lg:max-w-none">
        </div>
      </div>
    </Container>
  );
}
