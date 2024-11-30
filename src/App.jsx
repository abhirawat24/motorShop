// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrePurchase from './pages/PrePurchase';
import CarInsurance from './pages/CarInsurance';
import SellCar from './pages/SellCar';
import CarValuation from './pages/CarValuation';
import Contact from './components/ContactUs';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/pre-purchase" element={<PrePurchase />} />
          <Route path="/services/car-insurance" element={<CarInsurance />} />
          <Route path="/services/sell-car" element={<SellCar />} />
          <Route path="/services/car-valuation" element={<CarValuation />} />
          <Route path="/services/contact-us" element={<Contact />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
