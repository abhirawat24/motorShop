// src/components/LeadForm.jsx
export default function LeadForm({ service }) {
    return (
      <form className="bg-white shadow-lg p-8 rounded-xl mt-8 w-full md:w-2/3 lg:w-1/2 mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Get in Touch for <span className="text-blue-600">{service}</span>
        </h3>
  
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <input
            type="phone"
            placeholder="Phone Number"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          ></textarea>
        </div>
  
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-6 w-full sm:w-auto sm:self-center mx-auto flex justify-center transition duration-300"
        >
          Submit
        </button>
      </form>
    );
  }
  