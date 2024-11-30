// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import Contact from "./ContactUs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 w-full p-4 shadow-lg">
       
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
        <h1 className="text-3xl font-extrabold text-blue-500 tracking-wide">
          Auto<span className="text-white">Care</span>
        </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" label="Home" />
          <NavLink to="/services/pre-purchase" label="Pre-Purchase Inspection" />
          <NavLink to="/services/car-insurance" label="Car Insurance" />
          <NavLink to="/services/sell-car" label="Sell Your Car" />
          <NavLink to="/services/car-valuation" label="Car Valuation" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 p-8 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-2xl mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <nav className="space-y-6 flex-col flex ml-8">
          <NavLink to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
          <NavLink
            to="/services/pre-purchase"
            label="Pre-Purchase Inspection"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            to="/services/car-insurance"
            label="Car Insurance"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            to="/services/sell-car"
            label="Sell Your Car"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            to="/services/car-valuation"
            label="Car Valuation"
            onClick={() => setIsMenuOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
}

// Reusable NavLink Component with Styling
function NavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white hover:text-blue-400 transition duration-300 text-xl"
    >
      {label}
    </Link>
  );
}
