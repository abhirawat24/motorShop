// src/components/ServiceCard.jsx
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, link }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <Link to={link} className="text-blue-500 mt-4 block">Learn More</Link>
    </div>
  );
}
