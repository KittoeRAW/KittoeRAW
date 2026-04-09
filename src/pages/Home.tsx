import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Armchair, Trash2, Truck, User, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import homeImage from '../img/kittoeraw_home_1.png';
import headerImage from '../img/hero.png';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white pt-12 pb-32 md:pt-12 md:pb-48">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ headerImage }
            alt="Moving truck"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent"></div>
        </div>

        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Reliable <span className="text-primary-accent">Removals</span>, <span className="text-primary-accent">Waste Disposal</span> and <span className="text-primary-accent">Property Clearance</span> services in Nottingham
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Professional, efficient, and affordable solutions for your home or business. From full house moves to single item waste disposal, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-lg px-8">Get a Quote</Link>
              <a href="tel:07884576020" className="btn-secondary text-lg px-8 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Waste Clearance",
              desc: "Fast and responsible disposal of household and commercial waste.",
              icon: Trash2,
              link: "/waste-clearance"
            },
            {
              title: "Property Clearance",
              desc: "Fast, reliable property clearance, leaving your space clean and ready to use.",
              icon: Armchair,
              link: "/property-clearance"
            },
            {
              title: "House Removals",
              desc: "Stress-free moving services tailored to your specific needs.",
              icon: Truck,
              link: "/house-removals"
            },
            {
              title: "Man With Van",
              desc: "Flexible and affordable transport for single items or small moves.",
              icon: User,
              link: "/man-with-van"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="bg-light-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary-accent group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <Link to={service.link} className="text-primary-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary-bg text-white py-24">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Kittoe Removals?</h2>
            <div className="space-y-6">
              {[
                { title: "Fully Licensed & Insured", desc: "We are registered waste carriers and fully insured for your peace of mind." },
                { title: "Professional Team", desc: "Our experienced team handles your belongings with the utmost care." },
                { title: "Eco-Friendly Disposal", desc: "We aim to recycle as much waste as possible, minimising landfill impact." },
                { title: "Competitive Pricing", desc: "Transparent, honest quotes with no hidden fees." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={homeImage}
              alt="Professional team"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary-accent p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-sm font-medium uppercase tracking-wider">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our local Nottingham customers have to say about our services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Rozie Jackson", text: "Thomas and Ruben were just brilliant from start to finish when moving the contents of our home and some garden things. They agreed a time and date, kept us informed that all was on track for the day and arrived dead on time so 10 out of 10 for peace of mind.\n\nIt was pouring with rain but they were so efficient and careful that nothing got wet. They are incredibly polite, hard working team. Nothing was too much trouble and I would highly recommend them to anyone looking for a punctual, reliable and trust worthy removal company", location: "Newark" },
            { name: "Lee Chinns", text: "Very professional and friendly young man Thomas came to do the job! Everything was done well and swiftly! I would recommend this company to anyone! Very satisfied with their services!", location: "Mansfield" },
            { name: "John Brown", text: "Couldn’t be happier with the service. The team were friendly, fast, and took great care of all my belongings. They went above and beyond to make sure everything was in place at my new home. Five stars!", location: "Hucknall" }
          ].map((testimonial, i) => (
            <div key={i} className="card italic">
              <div className="flex text-primary-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 whitespace-pre-line">"{testimonial.text}"</p>
              <div>
                <p className="font-bold not-italic">{testimonial.name}</p>
                <p className="text-sm text-gray-500 not-italic">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-accent py-16">
        <div className="section-padding text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-10 opacity-90">Contact us today for a free, no-obligation quote for your removal or waste clearance needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors">Get a Quote</Link>
            <a href="tel:07884576020" className="bg-primary-dark text-white hover:bg-opacity-90 px-8 py-4 rounded-lg font-bold text-lg transition-colors">Call 07884576020</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
