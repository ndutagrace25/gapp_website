"use client";
import Image from "next/image";
import { projects } from "../data/projects";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 1; // Show 1 project per page on mobile
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

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
          {/* Mobile: Show paginated projects */}
          <div className="md:hidden">
            {currentProjects.map((project) => (
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
                    priority={currentPage === 0}
                    sizes="(max-width: 768px) 100vw"
                    quality={85}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-900 text-xs px-2 py-1 rounded-full font-medium">
                      {project.location}
                    </span>
                  </div>
                </div>
                <div className="p-6 projects-card-content">
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

          {/* Desktop: Show all projects */}
          <div className="hidden md:contents">
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
                    sizes="(max-width: 1200px) 50vw, 25vw"
                    quality={85}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-900 text-xs px-2 py-1 rounded-full font-medium">
                      {project.location}
                    </span>
                  </div>
                </div>
                <div className="p-6 projects-card-content">
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

        {/* Pagination Controls - Mobile Only */}
        <div className="md:hidden flex items-center justify-between mt-8">
          <div className="text-white text-sm">
            {String(currentPage + 1).padStart(2, "0")}/
            {String(totalPages).padStart(2, "0")}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
