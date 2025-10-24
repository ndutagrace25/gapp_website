"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Projects from "./components/Projects";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    console.log("useEffect running");

    const handleScroll = () => {
      console.log("Scroll event triggered");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      console.log("Scroll position:", scrollPosition);
      console.log("Window height:", windowHeight);

      // Simple scroll-based detection - more sensitive threshold
      if (scrollPosition > windowHeight * 0.3) {
        console.log("Setting active tab to Projects");
        setActiveTab("Projects");
      } else {
        console.log("Setting active tab to Home");
        setActiveTab("Home");
      }
    };

    // Add scroll listener with passive: false to ensure it works
    window.addEventListener("scroll", handleScroll, { passive: false });
    console.log("Scroll listener added");

    // Initial check
    handleScroll();

    return () => {
      console.log("Cleaning up scroll listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Also add a simple scroll listener on the document
  useEffect(() => {
    const handleDocumentScroll = () => {
      console.log("Document scroll event triggered");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.3) {
        setActiveTab("Projects");
      } else {
        setActiveTab("Home");
      }
    };

    document.addEventListener("scroll", handleDocumentScroll);

    return () => {
      document.removeEventListener("scroll", handleDocumentScroll);
    };
  }, []);

  return (
    <main className="relative">
      <Navbar activeTab="Home" forceActiveTab={activeTab} />
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
