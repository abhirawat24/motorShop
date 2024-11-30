// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Link */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <NavLink to="/services/contact-us" className="inline-block">
            <p className="text-lg font-medium bg-black text-red-600 px-4 py-2 rounded-md shadow-lg hover:scale-105 transform transition">
              Contact Us
            </p>
          </NavLink>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide premium automotive services ranging from inspections to insurance. Drive with confidence, knowing we’ve got you covered.
          </p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6 mx-4"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500">
        <p>&copy; 2024 AutoCare. All rights reserved.</p>
        
      </div>
    </footer>
  );
}
