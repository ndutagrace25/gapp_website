"use client";
import Image from "next/image";
import { projects } from "../data/projects";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div id="projects" className="relative z-10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our latest architectural achievements and design
            innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 border border-gray-700 cursor-pointer"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 text-xs px-2 py-1 rounded-full font-medium">
                    {project.location}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                  {project.intro}
                </p>
                <p className="text-sm text-gray-400">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
