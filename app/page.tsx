"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Projects from "./components/Projects";
import Principles from "./components/Principles";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  useEffect(() => {
    console.log("useEffect running");

    const handleScroll = () => {
      // Skip scroll detection during manual scrolling
      if (isManualScrolling) {
        return;
      }

      console.log("Scroll event triggered");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      console.log("Scroll position:", scrollPosition);
      console.log("Window height:", windowHeight);
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
  }, [isManualScrolling]);

  // Also add a simple scroll listener on the document
  useEffect(() => {
    const handleDocumentScroll = () => {
      // Skip scroll detection during manual scrolling
      if (isManualScrolling) {
        return;
      }

      console.log("Document scroll event triggered");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 3.5) {
        setActiveTab("Contact");
      } else if (scrollPosition > windowHeight * 2.5) {
        setActiveTab("About");
      } else if (scrollPosition > windowHeight * 1.5) {
        setActiveTab("Principles");
      } else if (scrollPosition > windowHeight * 0.3) {
        setActiveTab("Projects");
      } else {
        setActiveTab("Home");
      }
    };

    document.addEventListener("scroll", handleDocumentScroll);

    return () => {
      document.removeEventListener("scroll", handleDocumentScroll);
    };
  }, [isManualScrolling]);

  return (
    <main className="relative">
      <Navbar
        activeTab={activeTab}
        forceActiveTab={activeTab}
        setIsManualScrolling={setIsManualScrolling}
        setActiveTab={setActiveTab}
      />
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

          {/* Principles section */}
          <Principles />

          {/* About section */}
          <About />

          {/* Contact section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
