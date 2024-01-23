import { Container } from "@/components/Container";
import { SimpleLayout } from "@/components/SimpleLayout";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Projects() {
  return (
    <SimpleLayout
      title="These are projects that demonstrate my skills"
      intro="I’ve worked on toons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-slate-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/15" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.datetime}
                  className="text-slate-500 dark:text-slate-300"
                >
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600 dark:text-indigo-400 dark:group-hover:text-indigo-500">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-slate-100"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SimpleLayout>
  );
}
