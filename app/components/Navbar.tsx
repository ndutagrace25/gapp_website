"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  activeTab?: string;
  forceActiveTab?: string;
  setIsManualScrolling?: (value: boolean) => void;
  setActiveTab?: (value: string) => void;
}

export default function Navbar({
  activeTab,
  forceActiveTab,
  setIsManualScrolling,
  setActiveTab,
}: NavbarProps) {
  const currentActiveTab = forceActiveTab || activeTab;
  const [open, setOpen] = useState(false);



  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 md:py-2 text-white z-50">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
          onClick={() => setActiveTab?.("Home")}
        >
          <div className="rounded-lg px-2 md:px-3 flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="GAPP ARCHITECTS + PARTNERS LTD"
              width={80}
              height={80}
              className="h-18 md:h-20 w-auto"
              priority
            />
            <p className="text-white text-sm md:text-base font-light">
              GAPP ARCHITECTS + PARTNERS LTD
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8 text-[20px] font-light">
          <Link
            href="/"
            className={
              currentActiveTab === "Home"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
            onClick={() => setActiveTab?.("Home")}
          >
            Home
          </Link>
          <a
            href="#projects"
            className={
              currentActiveTab === "Projects"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveTab?.("Projects");
              const projectsElement = document.getElementById("projects");
              if (projectsElement) {
                setIsManualScrolling?.(true);
                projectsElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => {
                  setIsManualScrolling?.(false);
                }, 1000);
              }
            }}
          >
            Projects
          </a>
          <a
            href="#principles"
            className={
              currentActiveTab === "Principles"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveTab?.("Principles");
              const principlesElement = document.getElementById("principles");
              if (principlesElement) {
                setIsManualScrolling?.(true);

                // Force scroll with multiple methods
                principlesElement.scrollIntoView({
                  behavior: "instant",
                  block: "start",
                });

                // Additional fallback
                setTimeout(() => {
                  const elementTop =
                    principlesElement.getBoundingClientRect().top +
                    window.pageYOffset;
                  window.scrollTo({
                    top: elementTop - 80,
                    behavior: "smooth",
                  });
                }, 50);

                // Reset flag after longer delay
                setTimeout(() => {
                  setIsManualScrolling?.(false);
                }, 1500);
              }
            }}
          >
            Principles
          </a>
          <a
            href="#about"
            className={
              currentActiveTab === "About"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveTab?.("About");
              const aboutElement = document.getElementById("about");
              if (aboutElement) {
                setIsManualScrolling?.(true);
                aboutElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => {
                  setIsManualScrolling?.(false);
                }, 1000);
              }
            }}
          >
            About
          </a>
        </nav>
        <div className="hidden md:flex gap-6 items-center text-[20px] font-light">
          <a
            href="#contact"
            className={
              currentActiveTab === "Contact"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveTab?.("Contact");
              const contactElement = document.getElementById("contact");
              if (contactElement) {
                // Set manual scrolling flag
                setIsManualScrolling?.(true);

                // Simple approach for Chrome on Samsung S23
                contactElement.scrollIntoView({
                  behavior: "instant",
                  block: "start",
                });
                // Then smooth scroll
                setTimeout(() => {
                  contactElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  // Reset manual scrolling flag after scroll completes
                  setTimeout(() => {
                    setIsManualScrolling?.(false);
                  }, 1000);
                }, 10);
              }
            }}
          >
            Contact Us
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <nav className="flex flex-col items-center space-y-6 text-base font-light">
              <Link
                href="/"
                className={
                  currentActiveTab === "Home"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <a
                href="#projects"
                className={
                  currentActiveTab === "Projects"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const projectsElement = document.getElementById("projects");
                  if (projectsElement) {
                    setIsManualScrolling?.(true);
                    projectsElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setTimeout(() => {
                      setIsManualScrolling?.(false);
                    }, 1000);
                  }
                }}
              >
                Projects
              </a>
              <a
                href="#principles"
                className={
                  currentActiveTab === "Principles"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  // More aggressive approach for Principles on mobile
                  setTimeout(() => {
                    const principlesElement =
                      document.getElementById("principles");
                    if (principlesElement) {
                      setIsManualScrolling?.(true);

                      // Force scroll with multiple methods
                      principlesElement.scrollIntoView({
                        behavior: "instant",
                        block: "start",
                      });

                      // Additional fallback for mobile
                      setTimeout(() => {
                        const elementTop =
                          principlesElement.getBoundingClientRect().top +
                          window.pageYOffset;
                        window.scrollTo({
                          top: elementTop - 80,
                          behavior: "smooth",
                        });
                      }, 50);

                      // Reset flag after longer delay
                      setTimeout(() => {
                        setIsManualScrolling?.(false);
                      }, 1500);
                    }
                  }, 200);
                }}
              >
                Principles
              </a>
              <a
                href="#about"
                className={
                  currentActiveTab === "About"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const aboutElement = document.getElementById("about");
                  if (aboutElement) {
                    setIsManualScrolling?.(true);
                    aboutElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setTimeout(() => {
                      setIsManualScrolling?.(false);
                    }, 1000);
                  }
                }}
              >
                About
              </a>
            </nav>
            <div className="pt-4">
              <a
                href="#contact"
                className={
                  currentActiveTab === "Contact"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  // Simple approach for Chrome on Samsung S23
                  setTimeout(() => {
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      // Set manual scrolling flag
                      setIsManualScrolling?.(true);

                      // Use simple scrollIntoView with instant behavior first
                      contactElement.scrollIntoView({
                        behavior: "instant",
                        block: "start",
                      });
                      // Then smooth scroll
                      setTimeout(() => {
                        contactElement.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        // Reset manual scrolling flag after scroll completes
                        setTimeout(() => {
                          setIsManualScrolling?.(false);
                        }, 1000);
                      }, 10);
                    }
                  }, 100);
                }}
              >
                <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
