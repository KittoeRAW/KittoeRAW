import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import WasteClearance from './pages/WasteClearance';
import PropertyClearance from './pages/PropertyClearance';
import HouseRemovals from './pages/HouseRemovals';
import ManWithVan from './pages/ManWithVan';
import Pricing from './pages/Pricing';
import Areas from './pages/Areas';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/waste-clearance" element={<WasteClearance />} />
            <Route path="/property-clearance" element={<PropertyClearance />} />
            <Route path="/house-removals" element={<HouseRemovals />} />
            <Route path="/man-with-van" element={<ManWithVan />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
