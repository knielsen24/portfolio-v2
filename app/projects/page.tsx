
import { type Metadata } from "next";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Project, easterEgg, pageHeader } from "@/constants/projects";
import { getAllProjects } from "@/lib/getProjectsApi";
import Card from "@/components/ui/Card"

export const metadata: Metadata = {
  title: pageHeader.page,
  description: pageHeader.title,
};

export default async function Projects() {
  const projectData: Promise<Project[]> = getAllProjects();
  const projects = await projectData;

  return (
    <SimpleLayout title={pageHeader.title} intro={pageHeader.intro}>
      <div className="grid max-w-2xl snap-y snap-mandatory grid-cols-1 gap-x-20 mx-4 pt-2 sm:grid-cols-2 sm:gap-y-20 sm:mx-0 lg:mx-0 lg:max-w-none">
        {projects?.map((project: Project) => (
          <Card
            key={project.id}
            id={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            bgSize={project.bgSize}
            industry={project.industry}
            href={project.href}
            intro={project.intro}
          />
        ))}
        {/* 
          create child client component that includes
            Show more button - useState≈
            The show more button renders the easter egg card
        */}
        <Card
          key={easterEgg.id}
          id={easterEgg.id}
          imageUrl={easterEgg.imageUrl}
          title={easterEgg.title}
          bgSize={easterEgg.bgSize}
          industry={easterEgg.industry}
          href={easterEgg.href}
          intro={easterEgg.intro}
        />
      </div>
    </SimpleLayout>
  );
}
