// src/pages/Contact.jsx
import LeadForm from "../components/LeadForm";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We’re here to help! Fill out the form below or reach us through our contact details.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
        <ul className="text-lg text-gray-600 space-y-2">
          <li>Email: support@autocare.com</li>
          <li>Phone: +1 (234) 567-8901</li>
          <li>Address: 123 AutoCare Lane, Car City, CA 90210</li>
        </ul>
      </div>

      {/* Lead Form Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
        <LeadForm service="Contact Us" />
      </div>

      {/* Social Media Links Section */}
      <div className="max-w-5xl mx-auto mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h3>
        <div className="space-x-4">
          <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800 transition duration-300">Facebook</a>
          <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600 transition duration-300">Twitter</a>
          <a href="https://www.instagram.com" className="text-pink-600 hover:text-pink-800 transition duration-300">Instagram</a>
        </div>
      </div>
    </div>
  );
}
