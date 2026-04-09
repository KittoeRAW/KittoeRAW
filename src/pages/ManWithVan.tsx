import React from 'react';
import { Link } from 'react-router-dom';
import { User, CheckCircle, Clock, Zap } from 'lucide-react';

const ManWithVan = () => {
  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Man With Van</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible, affordable, and reliable transport for smaller jobs in Nottingham.
          </p>
        </div>
      </section>

      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6">Perfect for Smaller Jobs</h2>
          <p className="text-lg text-gray-600 mb-6">
            Not every job requires a full removal team. Our Man With Van service is designed for those smaller tasks where you just need a reliable van and a helping hand.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Whether it's a single item purchase from Facebook Marketplace, a student move, or a store pickup from IKEA, we provide a cost-effective solution without compromising on quality.
          </p>

          <h3 className="text-2xl font-bold mb-4">Service Highlights:</h3>
          <ul className="space-y-4 mb-10">
            {[
              "Single item collections and deliveries",
              "Store pickups (IKEA, B&Q, etc.)",
              "Student moves and small flat moves",
              "Office equipment transport",
              "Last-minute availability often possible",
              "Help with loading and unloading"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-accent" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">Book Now</Link>
            <a href="tel:07884576020" className="btn-secondary">Call 07884576020</a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
            alt="Man with van service"
            className="rounded-2xl shadow-xl"
            referrerPolicy="no-referrer"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="card flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-primary-accent mb-4" />
              <h4 className="font-bold">Hourly Rates</h4>
              <p className="text-sm text-gray-500">Pay only for the time you need</p>
            </div>
            <div className="card flex flex-col items-center text-center">
              <Zap className="w-10 h-10 text-primary-accent mb-4" />
              <h4 className="font-bold">Quick Response</h4>
              <p className="text-sm text-gray-500">Fast booking and arrival</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 border-t border-light-accent/20">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Man With Van?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3">Affordable</h4>
              <p className="text-gray-600">Competitive hourly or fixed rates to suit your budget.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3">Flexible</h4>
              <p className="text-gray-600">Available for evenings and weekends to fit your schedule.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3">Professional</h4>
              <p className="text-gray-600">Experienced driver who knows Nottingham inside out.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManWithVan;
