import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json();
        setError(errData.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-primary-dark text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a free, no-obligation quote for your removals or waste clearance today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-10">
              Whether you have a quick question or need a detailed quote, we're here to help. Fill out the form or use one of our direct contact methods.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary-accent/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call or Text</h4>
                  <p className="text-gray-600">07884576020</p>
                  <p className="text-sm text-gray-500">Available Mon-Sat, 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-accent/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-gray-600">hello@kittoeraw.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-accent/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Service Area</h4>
                  <p className="text-gray-600">Nottingham, Hucknall, Mansfield, Arnold & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary-bg text-white rounded-2xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary-accent" />
                WhatsApp Us
              </h4>
              <p className="mb-6 opacity-80">The quickest way to get a quote! Send us photos of your waste or items to be moved.</p>
              <a 
                href="https://wa.me/447884576020" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-light-accent/20">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-primary-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-primary-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for contacting us. We'll get back to you as soon as possible, usually within a few hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-bold text-sm uppercase tracking-wider text-gray-500">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-bold text-sm uppercase tracking-wider text-gray-500">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 outline-none transition-all"
                      placeholder="07123 456 789"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="font-bold text-sm uppercase tracking-wider text-gray-500">Service Required</label>
                  <select 
                    id="service" 
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 outline-none transition-all bg-white"
                  >
                    <option value="Waste Clearance">Waste Clearance</option>
                    <option value="Property Clearance">Property Clearance</option>
                    <option value="House Removals">House Removals</option>
                    <option value="Man With Van">Man With Van</option>
                    <option value="Other / Multiple">Other / Multiple</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-bold text-sm uppercase tracking-wider text-gray-500">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements (e.g. items to be moved, amount of waste, locations)..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Quote Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
