import React from 'react';
import { Link } from 'react-router-dom';
import { Info, CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Guide</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent and competitive pricing for all our services. No hidden fees, just honest value.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-light-accent/20 mb-12">
            <div className="bg-primary-accent text-white p-6 text-center">
              <h2 className="text-2xl font-bold">Estimated Price Guide</h2>
              <p className="opacity-90">Prices may vary based on specific requirements</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 font-bold text-primary-dark">Service</th>
                    <th className="px-6 py-4 font-bold text-primary-dark">Starting From</th>
                    <th className="px-6 py-4 font-bold text-primary-dark">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-medium">Man With Van</td>
                    <td className="px-6 py-4 text-primary-accent font-bold">£35 / hour</td>
                    <td className="px-6 py-4 text-gray-600">Minimum 2 hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Small Waste Clearance</td>
                    <td className="px-6 py-4 text-primary-accent font-bold">£60</td>
                    <td className="px-6 py-4 text-gray-600">Single items or small loads</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Medium Waste Clearance</td>
                    <td className="px-6 py-4 text-primary-accent font-bold">£120</td>
                    <td className="px-6 py-4 text-gray-600">Half van load approx.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Full Van Waste Clearance</td>
                    <td className="px-6 py-4 text-primary-accent font-bold">£220</td>
                    <td className="px-6 py-4 text-gray-600">Full van load</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">House Removals</td>
                    <td className="px-6 py-4 text-primary-accent font-bold">Quote Required</td>
                    <td className="px-6 py-4 text-gray-600">Based on house size & distance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-primary-accent" />
                <h3 className="text-xl font-bold">Transparent Pricing</h3>
              </div>
              <p className="text-gray-600">
                We believe in being upfront about our costs. The prices above are a guide to help you budget. For an exact quote, we recommend contacting us with details of your job.
              </p>
            </div>
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-primary-accent" />
                <h3 className="text-xl font-bold">What's Included</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Fuel and travel within Nottingham</li>
                <li>• Loading and unloading assistance</li>
                <li>• Waste disposal fees (for clearance)</li>
                <li>• Full insurance coverage</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary-bg text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Need an exact quote?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Every job is unique. Contact us today for a personalized quote tailored to your specific needs.
            </p>
            <Link to="/contact" className="btn-primary">Get Your Free Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
