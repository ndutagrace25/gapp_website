"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "hover:text-pink-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
    color: "hover:text-blue-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "hover:text-blue-500",
  },
];

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Principles", href: "#principles" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Architectural Design",
  "Interior Design",
  "Project Management",
  "Construction Consultancy",
  "Property Development",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-light text-white mb-4 tracking-widest">
              GAPP ARCHITECTS + PARTNERS LTD
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Distinguished architectural firm delivering comprehensive design
              solutions across East and Central Africa Region.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>P.O. BOX 369, KIKUYU</p>
                  <p>WAIYAKI WAY, SIGONA</p>
                  <p>KABETE DISTRICT, KIAMBU</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+254710342129"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  +254710342129
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:ARCHGATONYEMWAURA@GMAIL.COM"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm break-all"
                >
                  ARCHGATONYEMWAURA@GMAIL.COM
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} GAPP Architects + Partners Ltd. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
