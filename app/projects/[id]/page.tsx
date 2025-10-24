import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import Navbar from "../../components/Navbar";
import ProjectDetail from "../../components/ProjectDetail";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar activeTab="Projects" />
      <ProjectDetail project={project} />
    </main>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}
