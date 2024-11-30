// src/pages/CarValuation.jsx
import LeadForm from "../components/LeadForm";

export default function CarValuation() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
          Accurate Car Valuation Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Discover the true value of your car with our expert valuation service. 
          Get an accurate estimate based on market trends and vehicle condition.
        </p>
      </div>

      {/* Valuation Process Section */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {valuationSteps.map((step) => (
          <div
            key={step.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-indigo-500">
              {step.title}
            </h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Why Choose Our Car Valuation Service?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-lg">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Lead Form Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Get a Free Car Valuation Today
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Submit your details, and we’ll provide you with an accurate estimate.
        </p>
        <LeadForm service="Car Valuation" />
      </div>
    </div>
  );
}

// Data for Valuation Process Steps
const valuationSteps = [
  {
    id: 1,
    title: "Step 1: Enter Vehicle Details",
    description:
      "Provide information such as the car’s make, model, year, and mileage for an initial estimate."
  },
  {
    id: 2,
    title: "Step 2: Expert Review",
    description:
      "Our experts analyze the details and consider market trends to determine an accurate valuation."
  },
  {
    id: 3,
    title: "Step 3: Get Your Valuation Report",
    description:
      "Receive a detailed report with your car’s current market value and insights."
  }
];

// List of Benefits
const benefits = [
  "Accurate and reliable market-based valuation.",
  "Easy process with quick results.",
  "Expert review for the most precise value.",
  "Free of cost with no hidden fees.",
];
