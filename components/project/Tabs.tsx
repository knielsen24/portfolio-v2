"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { Project } from "@/constants/projects";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Feature = string[];

export default function Tabs({ props }: { props: Project }) {
  const { technologies } = props;

  const tabs = [
    {
      name: "Technology",
      features: technologies,
    },

    // {
    //   name: "Description",
    //   features: [
    //     {
    //       name: "Helpful around the home",
    //       intro:
    //         "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
    //     },
    //   ],
    // },
  ];

  return (
    <Tab.Group as="div">
      <div className="mx-4 flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-slate-200 dark:border-zinc-700 sm:px-0">
          <Tab.List className="-mb-px flex sm:ml-8 justify-start space-x-10 sm:space-x-16">
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
          <Tab.Panel
            key={tab.name}
            className="mx-5 mt-8 grid grid-cols-1 space-y-16 sm:mx-0"
          >
            <ul className="list-inside list-disc text-base sm:text-lg">
              {tab.features.map((feature: Feature, idx: number) => (
                <li
                  key={idx}
                  className="py-1 text-slate-400/80 dark:text-zinc-600"
                >
                  <span className="text-slate-800 dark:text-zinc-200">{feature}</span>
                </li>
              ))}
            </ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

//               <Tab.Panels as={Fragment}>
//     {tabs.map((tab: any) => (
//       <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
//         {tab.features.map((feature: any) => (
//           <div
//             key={feature.name}
//             className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
//           >
//             <div className="mt-6 lg:col-span-6 lg:mt-0">
//               <h3 className="text-lg font-medium text-slate-900 dark:text-zinc-200">
//                 {feature.name}
//               </h3>

//             </div>
//           </div>
//         ))}
//       </Tab.Panel>
//     ))}
//   </Tab.Panels>
// </Tab.Group>
