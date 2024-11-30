// src/pages/SellCar.jsx
import LeadForm from "../components/LeadForm";

export default function SellCar() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          Sell Your Car with Ease
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ready to sell your car? We provide a simple, hassle-free process. 
          Get a fair price and quick offers by following our easy steps.
        </p>
      </div>

      {/* Process Section */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sellProcessSteps.map((step) => (
          <div
            key={step.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-500">
              {step.title}
            </h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Lead Form Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Get Started with Selling Your Car
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Provide your details and we’ll get in touch to offer you the best deal.
        </p>
        <LeadForm service="Sell Your Car" />
      </div>
    </div>
  );
}

// Data for Sell Process Steps
const sellProcessSteps = [
  {
    id: 1,
    title: "Step 1: Submit Your Car Details",
    description:
      "Provide essential details such as your car's make, model, year, and condition to get started."
  },
  {
    id: 2,
    title: "Step 2: Get a Free Valuation",
    description:
      "Our experts will assess your car and provide you with a fair and transparent offer."
  },
  {
    id: 3,
    title: "Step 3: Complete the Sale",
    description:
      "Once you accept the offer, we’ll handle the paperwork and you’ll get paid quickly."
  }
];
