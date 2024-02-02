import { createContext, useContext } from "react";

type projectContextType = {
  id: number;
  title: string;
  href: string;
  githubHref: string;
  iosHref: string;
  androidHref: string;
  demoHref: string;
  intro: string;
  description: string;
  bgSize: string;
  imageUrl: string;
  bgColor: string;
  industry: string;
  category: string;
  date: string;
  datetime: string;
};

const projectDefaultValues: projectContextType = {
  id: 0,
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

const ProjectContext = createContext<projectContextType>(projectDefaultValues);

export function useProject() {
  return useContext(ProjectContext);
}

type Props = {
  children: ReactNode;
};

export function ProjectProvider({ children }: Props) {
  const value = {};
  return (
    <>
      <ProjectContext.Provider value={value}>
        {children}
      </ProjectContext.Provider>
    </>
  );
}
