import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, Shield, Clock, Trash2 } from 'lucide-react';

const PropertyClearance = () => {
  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Property Clearance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional and sensitive property clearance services for homes, estates, and commercial properties in Nottingham.
          </p>
        </div>
      </section>

      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6">Comprehensive Property Solutions</h2>
          <p className="text-lg text-gray-600 mb-6">
            Clearing a property can be a daunting task, whether it's due to a bereavement, a move, or simply a need to reclaim space. At Kittoe Removals and Waste, we provide a professional, respectful, and efficient property clearance service tailored to your specific situation.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our team handles everything from single rooms to full estates, ensuring that all items are sorted, transported, and disposed of responsibly. We pride ourselves on our sensitive approach to probate and bereavement clearances.
          </p>

          <h3 className="text-2xl font-bold mb-4">Our Property Clearance Includes:</h3>
          <ul className="space-y-4 mb-10">
            {[
              "Full house and flat clearances",
              "Bereavement and probate clearances handled with care",
              "End-of-tenancy clearances for landlords",
              "Loft, basement, and garage clear-outs",
              "Removal of carpets, curtains, and general fixtures",
              "Responsible recycling and disposal of all items"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-accent" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">Request a Clearance Quote</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing Guide</Link>
          </div>
        </div>

        <div className="space-y-8">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800"
            alt="Property clearance service"
            className="rounded-2xl shadow-xl"
            referrerPolicy="no-referrer"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center p-6">
              <Shield className="w-8 h-8 text-primary-accent mx-auto mb-3" />
              <h4 className="font-bold">Fully Licensed</h4>
            </div>
            <div className="card text-center p-6">
              <Home className="w-8 h-8 text-primary-accent mx-auto mb-3" />
              <h4 className="font-bold">All Property Types</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-bg text-white py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us for Your Clearance?</h2>
            <p className="text-gray-300">We provide a service that is both efficient and compassionate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-accent w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Prompt Service</h4>
              <p className="text-gray-300">We work to your timeline, offering quick turnarounds for urgent clearances.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-accent w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <Trash2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Eco-Conscious</h4>
              <p className="text-gray-300">We sort through items to ensure maximum recycling and minimal landfill.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-accent w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Professionalism</h4>
              <p className="text-gray-300">Our team is uniformed, respectful, and fully insured for all property work.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyClearance;
