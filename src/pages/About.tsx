import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your local Nottingham experts in removals and waste management.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Kittoe Removals and Waste was founded with a simple mission: to provide the people of Nottingham with a removal and waste clearance service they can truly rely on. We saw a need for a professional, transparent, and eco-conscious company that treats every job—no matter how small—with the same level of care and respect.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, we've built a reputation for being hard-working, honest, and efficient. Our team is composed of local professionals who take pride in helping our community transition to new homes or clear out unwanted clutter.
            </p>
            <p className="text-lg text-gray-600">
              We are more than just a man with a van; we are a dedicated team committed to excellence in service and environmental responsibility.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
              alt="Our team"
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Trustworthy", desc: "Fully licensed and insured for your peace of mind." },
            { icon: Users, title: "Customer Focused", desc: "We tailor our services to meet your specific needs." },
            { icon: Heart, title: "Careful", desc: "We treat your belongings as if they were our own." },
            { icon: Award, title: "Professional", desc: "High standards of service on every single job." }
          ].map((item, i) => (
            <div key={i} className="card text-center">
              <div className="bg-light-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary-accent" />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 border-t border-light-accent/20">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-bold mb-12">Our Commitment to the Environment</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              As a licensed waste carrier, we take our environmental responsibilities seriously. We don't just dump waste; we sort through it to ensure that as much as possible is recycled or repurposed. Our goal is to minimize the amount of waste that ends up in landfill, helping to keep Nottingham green.
            </p>
            <div className="inline-block bg-primary-accent text-white px-8 py-4 rounded-2xl font-bold">
              Licensed Waste Carrier: CBDU607088
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
