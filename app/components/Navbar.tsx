"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  activeTab?: string;
  forceActiveTab?: string;
}

export default function Navbar({ activeTab, forceActiveTab }: NavbarProps) {
  const currentActiveTab = forceActiveTab || activeTab;
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 md:py-6 text-white z-50">
        <Link
          href="/"
          className="text-lg md:text-2xl font-light tracking-widest hover:text-gray-300 transition-colors cursor-pointer"
        >
          GAPP ARCHITECTS + PARTNERS LTD
        </Link>
        <nav className="hidden md:flex gap-8 text-[20px] font-light">
          <Link
            href="/"
            className={
              currentActiveTab === "Home"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
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
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Projects
          </a>
          <a
            href="#"
            className={
              activeTab === "Ideas"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
          >
            Ideas
          </a>
          <a
            href="#"
            className={
              activeTab === "Culture"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
          >
            Culture
          </a>
          <a
            href="#"
            className={
              activeTab === "About"
                ? "text-yellow-400 border-b border-yellow-400 pb-1"
                : "hover:text-gray-300 transition-colors"
            }
          >
            About
          </a>
        </nav>
        <div className="hidden md:flex gap-6 items-center text-[20px] font-light">
          <button>Contact Us</button>
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
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Projects
              </a>
              <a
                href="#"
                className={
                  activeTab === "Ideas"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={() => setOpen(false)}
              >
                Ideas
              </a>
              <a
                href="#"
                className={
                  activeTab === "Culture"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={() => setOpen(false)}
              >
                Culture
              </a>
              <a
                href="#"
                className={
                  activeTab === "About"
                    ? "text-yellow-400"
                    : "hover:text-gray-300 transition-colors"
                }
                onClick={() => setOpen(false)}
              >
                About
              </a>
            </nav>
            <div className="pt-4">
              <button
                className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
