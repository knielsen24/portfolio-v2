import { projects } from "@/lib/data";

export const getAllProjects = () => projects;

export const getById = (id: number) => {
  return projects.find((proj) => proj.id === id);
};
