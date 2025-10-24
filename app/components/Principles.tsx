"use client";

const sections = [
  {
    id: 1,
    title: "VALUES",
    content:
      "Our vision is to be the leading, reputable and unswerving architecture, design, property development and construction company globally. We focus on delivering value-added products that exceed client expectations. We aspire to inspire greatness within our reach and beyond. We value creative design processes and strategies during problem solving. Not only do we aspire to be great at what we do, we also aim to pioneer work at an international level.",
  },
  {
    id: 2,
    title: "MISSION",
    content:
      "To provide the best service that exceeds our client's expectations by leveraging on our team's combined capabilities that are centered on Passion, Creativity and design Innovation.",
  },
  {
    id: 3,
    title: "PHILOSOPHY",
    content:
      "Our business philosophy is that the customer is the centre of every action that we take. Here are some of your philosophies:",
    list: [
      "We advise our clients and empower them to make decisions.",
      "We are transparent.",
      "We are abreast with applicable industry standards.",
      "We value our clients.",
      "Staff training is key to our success.",
      "We value business partnerships and joint execution.",
    ],
  },
];

export default function Principles() {
  return (
    <div id="principles" className="relative z-10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Principles
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our core values, mission, and philosophy that guide our
            architectural practice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-700"
            >
              {/* Trapezoidal Banner */}
              <div className="bg-gray-800 px-6 py-4 relative">
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[40px] border-t-gray-700"></div>
                <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 principles-card-content">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {section.content}
                </p>

                {/* Bullet points for Philosophy section */}
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-yellow-400 font-bold mr-2">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
