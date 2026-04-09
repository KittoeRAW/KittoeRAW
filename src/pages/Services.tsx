import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, Truck, User, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'waste-clearance',
      title: 'Waste Clearance',
      description: 'Professional waste disposal for homes and businesses. We handle everything from garden waste to commercial site clearances.',
      icon: Trash2,
      features: ['Household waste', 'Garden clearance', 'Commercial waste', 'Sofa & appliance disposal'],
      link: '/waste-clearance'
    },
    {
      id: 'property-clearance',
      title: 'Property Clearance',
      description: 'Full property clear-outs for homes, estates, and commercial spaces. Sensitive and professional service.',
      icon: Home,
      features: ['Full house clearance', 'Bereavement/Probate', 'End of tenancy', 'Garage & loft clear-outs'],
      link: '/property-clearance'
    },
    {
      id: 'house-removals',
      title: 'House Removals',
      description: 'Full-service moving solutions. We take the stress out of moving house with our careful and efficient removal team.',
      icon: Truck,
      features: ['Full house moves', 'Packing services', 'Furniture dismantling', 'Local & long distance'],
      link: '/house-removals'
    },
    {
      id: 'man-with-van',
      title: 'Man With Van',
      description: 'Perfect for smaller moves, single item collections, or store pickups. Flexible and cost-effective.',
      icon: User,
      features: ['Single items', 'Store pickups (IKEA, etc)', 'Student moves', 'Small office moves'],
      link: '/man-with-van'
    }
  ];

  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive removals and waste management solutions tailored to your needs in Nottingham and surrounding areas.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="space-y-24">
          {services.map((service, i) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="bg-light-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="btn-primary">View Details</Link>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1532996122724-e3c354a0b15b' : i === 1 ? '1584622650111-993a426fbf0a' : '1519003722824-194d4455a60c'}?auto=format&fit=crop&q=80&w=800`}
                  alt={service.title}
                  className="rounded-2xl shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary-bg text-white py-20">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            If you have a specific requirement that isn't listed above, get in touch. We're happy to provide bespoke quotes for unique jobs.
          </p>
          <Link to="/contact" className="btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
