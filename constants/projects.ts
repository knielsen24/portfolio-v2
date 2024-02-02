import portfolioV2Image from "@/public/projects/portfoliov2.png";
import xaltAppImage from "@/public/projects/xalt-challenge-home.png";
import linkTreeImage from "@/public/projects/linkree.png";
import southWellsImage from "@/public/projects/300south-wells.png";
import wheresWizardImage from "@/public/projects/wheresWizard.png";
import webflowImage from "@/public/projects/webflow.png";

export const pageHeader = {
  page: "Projects",
  title: "Apps I've made. Building enthusiast",
  intro:
    "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
};

export const projects = [
  {
    id: 8,
    title: "Portfolio v2",
    href: "https://kevinnielsen.dev",
    githubHref: "https://github.com/knielsen24/portfolio-v2",
    iosHref: "",
    androidHref: "",
    demoHref: "",
    intro:
      "Take a deep dive into the development process of this portfolio website build with Next.js, TypeScript, and TailwindCSS. ",
    description: "",
    bgSize: "object-cover",
    imageUrl: portfolioV2Image,
    bgColor: "",

    industry: "Technology",
    category: "Portfolio",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 7,
    title: "Xalt Challenge App",
    href: "https://www.xalt.fit/",
    githubHref: "",
    demoHref: "",
    iosHref:
      "https://apps.apple.com/us/app/xalt-challenge/id6451156212?platform=iphone",
    androidHref:
      "https://play.google.com/store/apps/details?id=com.challenges.xalt",
    intro:
      "Mobile application available on iOS and Android. Create and join challenges to help improve fitness, nutrition, sleep, stress, sense of community, and behavioral habits",
    description: "",
    bgSize: "object-contain",
    bgColor: "pink-200",
    imageUrl: xaltAppImage,

    industry: "Health & Fitness",
    category: "Professional",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },

  {
    id: 6,
    title: "TripleStamp",
    href: "",
    githubHref: "https://github.com/knielsen24/triple-stamp",
    demoHref: "",
    iosHref: "",
    androidHref: "",
    intro:
      "Full stack web application designed to facilitate property management for managers, landlords and owners.",
    description: "",
    bgSize: "object-cover",
    bgColor: null,
    imageUrl:
      "https://github.com/knielsen24/triple-stamp/blob/main/client/src/assets/ts-landing-page.jpg?raw=true",
    industry: "Real Estate",
    category: "Capstone",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 5,
    title: "Pixabay Clone with Autocorrect",
    href: "",
    githubHref: "https://github.com/knielsen24/rn-dev-proto",
    iosHref: "",
    androidHref: "",
    demoHref: "",
    intro:
      "Simple stock photography image search mobile application with a spellchecker feature connected to the Pixabay API.",
    description: "",
    bgSize: "object-contain",
    imageUrl: "https://i.ytimg.com/vi_webp/IFq71H03zI8/oar2.webp",
    bgColor: "bg-pink-200",
    industry: "Media",
    category: "Fun",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },

  {
    id: 4,
    title: "LinkTree Clone",
    href: "https://kevinnielsen-treeelink-clone.vercel.app/",
    githubHref: "https://github.com/knielsen24/linktree-clone",
    iosHref: "",
    androidHref: "",
    demoHref: "",
    intro:
      "Created a LinkTree clone to learn the fundamentals of Next.js and TailwindCSS. Includes links to my projects and socials.",
    imageUrl: linkTreeImage,
    bgColor: "",

    industry: "Social",
    category: "Fun",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "300 South Wells",
    href: "https://3swtest.netlify.app/",
    githubHref: "https://github.com/knielsen24/sw-test",
    iosHref: "",
    androidHref: "",
    demoHref: "",
    intro:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    description: "",
    bgSize: "object-cover",
    imageUrl: southWellsImage,
    bgColor: "",

    industry: "Commercial Real Estate",
    category: "Pro Bono",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Portfolio v1",
    href: "https://kevin-nielsen.webflow.io/",
    githubHref: "",
    iosHref: "",
    androidHref: "",
    demoHref: "",
    intro:
      "My first edition of the portfolio website built with speed and no code using a powerful visual canvas platform, Webflow.",
    description:
      "Portfolio within a portfolio...Dreams feel real while we're in them. It's only when we wake up that we realize something was actually strange.",
    bgSize: "object-cover",
    imageUrl: webflowImage,
    bgColor: "",

    industry: "Technology",
    category: "Portfolio",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 1,
    title: "Where's Wizard",
    href: "#",
    githubHref: "",
    iosHref: "",
    androidHref: "",
    demoHref: "",
    intro:
      "The OG of my technical projects. This is a Where's Waldo rendition game application built with Scratch, a visual block coding IDE.",
    description: "",
    bgSize: "object-cover",
    imageUrl: wheresWizardImage,
    bgColor: "",
    industry: "Beauty",
    category: "Creative",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 777,
    title: "Magnum",
    href: "https://youtu.be/NQ-8IuUkJJc?si=v2BDfnHxnyUmctdZ",
    intro:
      "I wasn't like every other kid, you know, who dreams about being an astronaut, I was always more interested in what bark was made out of on a tree. Richard Gere's a real hero of mine. Sting. Sting would be another person who's a hero. The music he's created over the years, I don't really listen to it, but the fact that he's making it, I respect that.",
    description: "",
    bgSize: "object-cover",
    imageUrl:
      "https://preview.redd.it/sykkxuqfypra1.png?width=3840&format=png&auto=webp&s=be2282f1033427cace6d987a357840cf454d1e22",
    bgColor: "",
    industry: "Beauty",
    category: "Creative",
  },
];

export const tabs = [
  {
    name: "Technology",
    features: [
      {
        name: "Adaptive and modular",
        intro:
          "The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.",
      },
    ],
  },

  {
    name: "intro",
    features: [
      {
        name: "Helpful around the home",
        intro:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
      },
    ],
  },
  {
    name: "Challenges",
    features: [
      {
        name: "Everything you'll need",
        intro:
          "The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.",
      },
    ],
  },
];
