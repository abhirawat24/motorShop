// src/pages/CarInsurance.jsx
import LeadForm from "../components/LeadForm";

export default function CarInsurance() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Car Insurance Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Get the best car insurance coverage tailored to your needs. 
          Whether you’re looking for comprehensive protection or third-party insurance, 
          we’ve got you covered. Request a quote today!
        </p>
      </div>

      {/* Insurance Options Section */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {insuranceOptions.map((option) => (
          <div
            key={option.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-500">
              {option.title}
            </h2>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Lead Form Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Get a Customized Insurance Quote
        </h2>
        <LeadForm service="Car Insurance" />
      </div>
    </div>
  );
}

// Insurance Options Data
const insuranceOptions = [
  {
    id: 1,
    title: "Comprehensive Insurance",
    description:
      "Protect your vehicle against damage, theft, and third-party liabilities with full coverage."
  },
  {
    id: 2,
    title: "Third-Party Insurance",
    description:
      "Covers damages to third parties caused by your vehicle, as required by law."
  },
  {
    id: 3,
    title: "Personal Accident Cover",
    description:
      "Get financial protection in case of personal injury due to an accident involving your vehicle."
  }
];
