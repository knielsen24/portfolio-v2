import type { Metadata } from "next";
import { Container } from "@/components/Container";
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
  
  const projectData: Promise<Project> = getProject(projectId);
  const project: Project = await projectData;

  if (!project) {
    return {
      title: "Project not found",
      description: "project not found",
    };
  }

  return {
    title: project.title,
    description: project.intro,
  };
}

type LayoutProps = {
  children: React.ReactNode;
};

export default function ProjectDetails({ children }: LayoutProps) {
  return <Container className="py-12 sm:py-20">{children}</Container>;
}
