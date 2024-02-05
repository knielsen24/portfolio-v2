import type { Metadata } from "next";
import { getProject } from "@/lib/getProjectsApi";
import { Project } from "@/constants/projects";

type Params = {
  params: {
    projectId: string;
  };
};

export async function generateMetadata({
  params: { projectId },
}: Params): Promise<Metadata> {
  const projectData: Promise<Project | undefined> = getProject(projectId);
  const project: Project | undefined = await projectData;

  if (!project) {
    return {
      title: "Project not found",
      description: "project not found",
    };
  }

  return {
    title: {
      absolute: `${project.title} - Projects`,
      default: project.title,
    },
  };
}

type LayoutProps = {
  children: React.ReactNode;
};

export default function ProjectDetails({ children }: LayoutProps) {
  return <div className="mt-28 sm:mt-44 mb-16">{children}</div>;
}
