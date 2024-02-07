import centerForAntsImage from "@/public/projects/center-for-kids.webp";
import { StaticImageData } from "next/image";

export const pageHeader = {
  page: "Projects",
  title:
    "Checkout the applications I've made from scratch, building enthusiast.",
  intro: "These projects are a testimony of my creativity with technology.",
};

export type Links = {
  label: string;
  href: string;
};

export type Labels = {
  label: string;
  desc: string;
};

export type Project = {
  id: string;
  title: string;
  intro: string;
  industry: string;
  category: string;
  features?: Labels[];
  technologies?: Labels[];
  description?: string;
  // challenges?: string[];
  imageUrl: string | StaticImageData;
  bgSize: string;
  bgColor?: string;
  href: string;
  githubHref?: string;
  demoHref?: string;
  iosHref?: string;
  androidHref?: string;
  date?: string;
  datetime?: string;
};

export const initialProjectData: Project = {
  id: "",
  title: "",
  intro: "",
  industry: "",
  category: "",
  features: [{ label: "", desc: "" }],
  technologies: [{ label: "", desc: "" }],
  description: "",
  imageUrl: "",
  bgSize: "",
  bgColor: "",
  href: "",
  githubHref: "",
  demoHref: "",
  iosHref: "",
  androidHref: "",
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
