"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Building } from "lucide-react";

const contactInfo = {
  address: {
    poBox: "P.O. BOX 369, KIKUYU",
    street: "WAIYAKI WAY",
    building: "HOUSE NO",
    locality: "SIGONA",
    district: "KABETE DISTRICT",
    county: "KIAMBU",
  },
  phone: "+254710342129",
  email: "ARCHGATONYEMWAURA@GMAIL.COM",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="relative z-10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for your architectural needs. We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 contact-card-content">
              <h3 className="text-2xl font-medium text-white mb-6">
                Get In Touch
              </h3>

              {/* Address */}
              <div className="flex items-start mb-6">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium text-white mb-2">Address</p>
                  <p>{contactInfo.address.poBox}</p>
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.building}</p>
                  <p>{contactInfo.address.locality}</p>
                  <p>{contactInfo.address.district}</p>
                  <p>{contactInfo.address.county}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-6">
                <Phone className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium text-white mb-2">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium text-white mb-2">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-yellow-400 transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 contact-card-content">
            <h3 className="text-2xl font-medium text-white mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
