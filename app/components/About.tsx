"use client";

const aboutContent = {
  introduction:
    "GAPP Architects + Partners Ltd is a distinguished architectural firm known for its comprehensive architectural, interior design, and project management consultancy services across the East and Central Africa Region. With over 5 years of experience, we have established ourselves as a trusted partner in creating exceptional built environments that inspire, innovate, and endure.",

  team: "Our dedicated team of professionals brings together expertise, creativity, and technical proficiency. We are committed to delivering tailored solutions from conceptualization to completion, exceeding client expectations while adhering to high standards of quality and excellence.",

  specializations:
    "We specialize in a wide range of project types, including residential, commercial, institutional, and hospitality developments. Our reputation is built on translating vision into reality, with a portfolio showcasing diverse projects characterized by thoughtful design, meticulous attention to detail, and a deep understanding of local context and culture.",

  services: [
    {
      title: "Interior Design Services",
      description:
        "In addition to architectural prowess, GAPP Architects + Partners offers comprehensive interior design services, ensuring spaces are aesthetically pleasing, functional, ergonomic, and reflective of the client's unique identity and vision.",
    },
    {
      title: "Project Management",
      description:
        "Our project management consultancy services ensure seamless execution and timely delivery, guiding clients through every stage of the project lifecycle with professionalism, transparency, and integrity.",
    },
    {
      title: "Sustainability & Innovation",
      description:
        "We are committed to sustainability, innovation, and community engagement, dedicated to shaping built environments that enrich lives, foster creativity, and promote sustainable development.",
    },
  ],

  conclusion:
    "GAPP Architects + Partners Ltd brings expertise and excellence to the architectural landscape of the East and Central Africa Region, offering unparalleled architectural, interior design, and project management consultancy services that set the standard for excellence and innovation in the industry.",
};

export default function About() {
  return (
    <div id="about" className="relative z-10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            About Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn about our journey, expertise, and commitment to architectural
            excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 about-card-content">
            <p className="text-gray-300 leading-relaxed">
              {aboutContent.introduction}
            </p>
          </div>

          {/* Team & Approach */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 about-card-content">
            <p className="text-gray-300 leading-relaxed">{aboutContent.team}</p>
          </div>

          {/* Specializations */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 about-card-content">
            <p className="text-gray-300 leading-relaxed">
              {aboutContent.specializations}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 about-card-content"
              >
                <h3 className="text-xl font-medium text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 about-card-content">
            <p className="text-gray-300 leading-relaxed">
              {aboutContent.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
