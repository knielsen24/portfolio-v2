import centerForAntsImage from "@/public/projects/center-for-kids.webp";
import { StaticImageData } from "next/image";

export const pageHeader = {
  page: "Projects",
  title: "Checkout the web and mobile apps I've made, building enthusiast.",
  intro: "Welcome to my collection of projects.",
};

export type Links = {
  name: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  intro: string;
  industry?: string;
  category?: string;
  links?: Links[];
  description?: string;
  technologies?: string[];
  // challenges?: string[];
  imageUrl: string | StaticImageData;
  bgSize: string;
  bgColor?: string;
  date?: string;
  datetime?: string;
  href: string;
  githubHref?: string;
  iosHref?: string;
  androidHref?: string;
  demoHref?: string;
};

export const initialProjectData: Project = {
  id: "",
  title: "",
  intro: "",
  industry: "",
  category: "",
  links: [
    {
      name: "",
      href: "",
    },
  ],
  href: "",
  description: "",
  technologies: [],
  bgSize: "",
  imageUrl: "",
  bgColor: "",
  date: "",
  datetime: "",
};

export const easterEgg = {
  id: "777",
  title: "Magnum",
  href: "https://youtu.be/NQ-8IuUkJJc?si=v2BDfnHxnyUmctdZ",
  intro:
    "I wasn't like every other kid, you know, who dreams about being an astronaut, I was always more interested in what bark was made out of on a tree. Richard Gere's a real hero of mine. Sting. Sting would be another person who's a hero. The music he's created over the years, I don't really listen to it, but the fact that he's making it, I respect that.",
  bgSize: "object-cover",
  imageUrl: centerForAntsImage,
  industry: "Fashion & Beauty",
};
