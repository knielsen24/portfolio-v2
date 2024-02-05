import { promises as fs } from "fs";
import path from "path";
import { Project } from "@/constants/projects";

export async function getAllProjects() {
  const filePath = path.join(process.cwd(), "app", "data.json");
  const file = await fs.readFile(filePath, "utf8");
  const projects: Project[] = JSON.parse(file).projects;
  
  if (!projects) throw new Error("Failed to fetch data");
  
  return projects;
}

export async function getProject(projectId: string) {
  const projectsData = getAllProjects();
  const projects = await projectsData;

  const project = projects.find((proj) => proj.id === projectId);
  if (!project) return

  return project;
}
