import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Projects from "./components/Projects";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar activeTab="Projects" />
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
