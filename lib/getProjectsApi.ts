import { promises as fs } from "fs";
import { Project } from "@/constants/projects";

export async function getAllProjects() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const projects: Project[] = JSON.parse(file).projects;
  if (!projects) throw new Error("Failed to fetch data");
  return projects;
}

export async function getProject(projectId: string) {
  const projectsData = getAllProjects();
  const projects = await projectsData;

  const project = projects.find((proj) => proj.id === projectId);
  if (!project) throw new Error("Failed to fetch data");

  return project;
}
