// src/pages/Home.jsx
import { NavLink } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "Pre-Purchase Inspection",
      description: "Get your car inspected before buying.",
      link: "/services/pre-purchase",
    },
    {
      title: "Car Insurance",
      description: "Explore insurance options.",
      link: "/services/car-insurance",
    },
    {
      title: "Sell Your Car",
      description: "Sell your car with ease.",
      link: "/services/sell-car",
    },
    {
      title: "Car Valuation",
      description: "Know your car’s value.",
      link: "/services/car-valuation",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/bg.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="relative p-8 text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fadeInUp">
            Drive into the Future with Confidence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fadeInUp delay-100">
            From pre-purchase inspections to car valuations, explore our
            services and simplify your automotive journey.
          </p>
          <a
            href="#services"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <h2 className="text-3xl font-bold text-center col-span-full mb-8">
          Our Services
        </h2>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Amazing service!", "Smooth experience!", "Highly recommended!"].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-lg text-center"
                >
                  <p className="text-lg text-gray-700">"{testimonial}"</p>
                  <p className="mt-4 text-sm text-gray-500">- Satisfied Client</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-8">
            Have questions or need assistance? Reach out to us, and we’ll get
            back to you soon!
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border-none focus:outline-none text-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border-none focus:outline-none text-gray-800"
            />
            <textarea
              placeholder="Your Message"
              className="md:col-span-2 p-3 rounded-lg border-none focus:outline-none text-gray-800 h-32"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
