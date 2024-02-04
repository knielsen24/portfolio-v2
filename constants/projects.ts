import portfolioV2Image from "@/public/projects/portfoliov2.png";
import xaltAppImage from "@/public/projects/xalt-challenge-home.png";
import linkTreeImage from "@/public/projects/linktree.png";
import southWellsImage from "@/public/projects/300south-wells.png";
import wheresWizardImage from "@/public/projects/wheresWizard.png";
import webflowImage from "@/public/projects/webflow.png";
import tripleStampDashImage from "@/public/projects/triplestamp-dashboard.jpg";
import pixabayImage from "@/public/projects/pixabay-clone.webp";
import centerForAntsImage from  "@/public/projects/center-for-kids.webp"
import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  href: string;
  githubHref?: string;
  iosHref?: string;
  androidHref?: string;
  demoHref?: string;
  intro: string;
  description?: string;
  bgSize: string;
  imageUrl: string | StaticImageData;
  bgColor?: string;
  industry?: string;
  category?: string;
  date?: string;
  datetime?: string;
};
export const initialProjectData: Project = {
  id: "",
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
