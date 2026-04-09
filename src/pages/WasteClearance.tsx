import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, CheckCircle, AlertCircle } from 'lucide-react';

const WasteClearance = () => {
  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Waste Clearance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fast, reliable, and eco-friendly waste disposal services in Nottingham.
          </p>
        </div>
      </section>

      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6">Professional Waste Disposal</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Kittoe Removals and Waste, we provide a comprehensive waste clearance service for both domestic and commercial clients. Whether you're clearing out a garage, renovating a house, or need regular commercial waste disposal, our team is here to help.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We are fully licensed waste carriers, meaning you can trust us to dispose of your waste responsibly and legally. We aim to recycle as much as possible to minimize environmental impact.
          </p>

          <h3 className="text-2xl font-bold mb-4">What's Included:</h3>
          <ul className="space-y-4 mb-10">
            {[
              "Full loading and sweeping up afterwards",
              "Disposal fees included in the quote",
              "Licensed waste transfer notes provided",
              "Eco-friendly recycling of materials",
              "Same-day or next-day service often available",
              "No skip permit required"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-accent" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-light-accent/10 p-6 rounded-xl border-l-4 border-primary-accent">
            <div className="flex gap-3 mb-2">
              <AlertCircle className="w-6 h-6 text-primary-accent" />
              <h4 className="font-bold">Important Note</h4>
            </div>
            <p className="text-gray-700">
              We cannot dispose of certain hazardous materials such as asbestos, chemicals, or medical waste. Please contact us if you're unsure about any items.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
            alt="Waste clearance service"
            className="rounded-2xl shadow-xl"
            referrerPolicy="no-referrer"
          />
          <div className="card bg-primary-dark text-white">
            <h3 className="text-2xl font-bold mb-4">Get a Waste Quote</h3>
            <p className="mb-6 opacity-80">Send us a photo of your waste for a quick and accurate estimate.</p>
            <Link to="/contact" className="btn-primary w-full">Contact Us Now</Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 border-t border-light-accent/20">
        <div className="section-padding">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of Waste We Clear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Household Waste", items: "Furniture, appliances, general clutter" },
              { title: "Garden Waste", items: "Green waste, soil, old sheds, fencing" },
              { title: "Builders Waste", items: "Rubble, wood, plasterboard, tiles" },
              { title: "Office Waste", items: "Desks, chairs, electronics, paper" }
            ].map((type, i) => (
              <div key={i} className="card text-center">
                <h4 className="font-bold text-xl mb-2">{type.title}</h4>
                <p className="text-gray-600">{type.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WasteClearance;
