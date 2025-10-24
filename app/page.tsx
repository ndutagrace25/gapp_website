"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Projects from "./components/Projects";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const projectsSection = document.getElementById("projects");

    if (!projectsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab("Projects");
          } else {
            // Only switch back to Home if we're scrolling up past the projects section
            if (window.scrollY < window.innerHeight * 0.5) {
              setActiveTab("Home");
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the projects section is visible
        rootMargin: "-20% 0px -20% 0px", // Add some margin for better UX
      }
    );

    observer.observe(projectsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative">
      <Navbar activeTab={activeTab} />
      <div className="relative">
        {/* Fixed background with HeroSlider */}
        <div className="fixed inset-0 z-0">
          <HeroSlider />
        </div>

        {/* Scrollable content that overlays the background */}
        <div className="relative z-10">
          {/* Spacer to push content below the fold */}
          <div className="h-screen"></div>

          {/* Projects section that scrolls over the background */}
          <Projects />

          {/* Additional content can go here */}
          <div className="h-screen bg-white/95 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-light text-gray-800 mb-4">
                More Content
              </h2>
              <p className="text-gray-600">
                This section demonstrates the layered scrolling effect
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
