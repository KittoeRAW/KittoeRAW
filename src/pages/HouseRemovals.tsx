import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle, Shield, Clock } from 'lucide-react';

const HouseRemovals = () => {
  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">House Removals</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional, stress-free moving services in Nottingham and beyond.
          </p>
        </div>
      </section>

      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
            alt="House removal service"
            className="rounded-2xl shadow-xl mb-8"
            referrerPolicy="no-referrer"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center p-6">
              <Shield className="w-8 h-8 text-primary-accent mx-auto mb-3" />
              <h4 className="font-bold">Fully Insured</h4>
            </div>
            <div className="card text-center p-6">
              <Clock className="w-8 h-8 text-primary-accent mx-auto mb-3" />
              <h4 className="font-bold">Reliable</h4>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-6">Your Move, Handled with Care</h2>
          <p className="text-lg text-gray-600 mb-6">
            Moving house is one of life's most stressful events. Our goal is to make your transition as smooth and worry-free as possible. From small apartments to large family homes, we have the experience and equipment to handle your move efficiently.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We treat your belongings as if they were our own, ensuring everything is securely packed and transported safely to your new home.
          </p>

          <h3 className="text-2xl font-bold mb-4">Our Removal Services Include:</h3>
          <ul className="space-y-4 mb-10">
            {[
              "Full house and flat removals",
              "Furniture dismantling and reassembly",
              "Protective covers for sofas and mattresses",
              "Careful handling of fragile items",
              "Local Nottingham moves and long-distance",
              "Optional packing service available"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-accent" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">Request a Moving Quote</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing Guide</Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary-bg text-white py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Moving Process</h2>
            <p className="text-gray-300">How we ensure a smooth moving day for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Free Quote", desc: "Contact us for a detailed estimate based on your specific requirements." },
              { step: "2", title: "Planning", desc: "We confirm dates and details, providing advice on how to prepare for the move." },
              { step: "3", title: "Moving Day", desc: "Our team arrives on time, loads efficiently, and gets you into your new home." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-accent rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseRemovals;
