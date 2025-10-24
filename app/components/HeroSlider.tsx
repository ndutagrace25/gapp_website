"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/Astra.png",
    title:
      "Architectural Record Spotlights Sustainability at 500 County Center",
  },
  {
    image: "/images/Njuguna.jpg",
    title: "Designing for the Future of Urban Living",
  },
  {
    image: "/images/Victoria.jpg",
    title: "Innovating Through Architectural Excellence",
  },
];

export default function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen w-full" ref={emblaRef}>
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${selected * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-none w-full h-full relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-16 md:bottom-24 left-4 md:left-16 text-white max-w-2xl">
              <p className="text-xs md:text-sm font-light mb-2 md:mb-3">
                In the Press
              </p>
              <h1 className="text-2xl md:text-5xl font-light leading-snug">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-4 md:left-16 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              index === selected ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
