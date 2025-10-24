"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  location: string;
  title: string;
  date: string;
  image: string;
  intro: string;
  description: string;
  client: string;
  project_cost: string;
  project_status: string;
  project_images: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "bg-green-500";
      case "ongoing":
        return "bg-blue-500";
      case "scheme design":
        return "bg-yellow-500";
      case "statutory approvals":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-white/90 text-gray-900 text-sm px-3 py-1 rounded-full font-medium">
                {project.location}
              </span>
              <span
                className={`${getStatusColor(
                  project.project_status
                )} text-white text-sm px-3 py-1 rounded-full font-medium`}
              >
                {project.project_status}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-light text-white mb-4">
              {project.title}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">{project.intro}</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-light text-white mb-6">
                Project Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Project Images Gallery */}
              <div className="space-y-6">
                <h3 className="text-xl font-light text-white mb-4">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.project_images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        fill
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Client</span>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Project Cost</span>
                    <p className="text-white font-medium">
                      {project.project_cost}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Duration</span>
                    <p className="text-white font-medium">{project.date}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Location</span>
                    <p className="text-white font-medium">{project.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Status</span>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getStatusColor(
                          project.project_status
                        )}`}
                      />
                      <p className="text-white font-medium">
                        {project.project_status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <button
                onClick={() => router.back()}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 border border-gray-700"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
