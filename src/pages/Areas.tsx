import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const Areas = () => {
  const mainAreas = [
    "Newark",
    "Ashfield",
    "Mansfield",
    "Gedling",
    "Broxtowe",
    "Rushcliffe",
    "Sherwood",
    "Bulwell",
    "Long Eaton",
    "Ilkeston",
    "Leicestershire",
    "Derbyshire"
  ];

  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Areas We Cover</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Providing reliable removals and waste clearance across Nottinghamshire and surrounding areas.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Local Service, Local Knowledge</h2>
            <p className="text-lg text-gray-600 mb-6">
              Based in Nottingham, we have extensive knowledge of the local area, allowing us to provide a prompt and efficient service. We don't just cover the city centre; we serve all the surrounding towns and villages.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're in a busy residential street in Arnold or a commercial unit in Mansfield, our team can reach you quickly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mainAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-light-accent/20">
                  <MapPin className="w-5 h-5 text-primary-accent" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-light-accent/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-primary-accent" />
                <h4 className="font-bold">Not on the list?</h4>
              </div>
                <p className="text-gray-700 mb-6">
                Not on the list? No problem — we also cover surrounding areas including Basford, Old Basford, New Basford, Highbury Vale, Cinderhill, Top Valley, Bestwood, Bestwood Park, Rise Park, Hempshill Vale, Snape Wood, Sellers Wood, Bulwell Forest, Moorbridge, Strelley, Aspley, Broxtowe, Bilborough, Nuthall, Kimberley and Hucknall, along with nearby locations across Nottinghamshire
              </p>
              <p className="text-gray-700">
                We often travel further for larger removal jobs. If your location isn't listed, please get in touch to see if we can help.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-light-accent/20 rounded-full absolute -z-10 w-full scale-110 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800"
              alt="Map area"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-primary-accent/20 text-center">
              <MapPin className="w-12 h-12 text-primary-accent mx-auto mb-2" />
              <p className="font-bold text-xl">Serving All of Nottinghamshire</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-bg text-white py-16">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-bold mb-6">Need a hand outside Nottingham?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            While we are based in Nottingham, we provide long-distance removal and waste services to anywhere in the UK. Contact us for a custom quote.
          </p>
          <a href="tel:07884576020" className="btn-primary">Call for Availability</a>
        </div>
      </section>
    </div>
  );
};

export default Areas;
