import { useState } from 'react';
import { Mail, MapPin, Send, Users, Handshake } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Ready to partner with us or learn more about our sustainable energy initiatives? 
              We'd love to hear from you.
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                <img src="/contact-mug.jpg" alt="Contact Mug" className="h-40 w-auto rounded-lg shadow-md" />
                <img src="/contact-sign.jpg" alt="Contact Sign" className="h-40 w-auto rounded-lg shadow-md" />
              </div>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Roboto' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      style={{ fontFamily: 'Roboto' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Roboto' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      style={{ fontFamily: 'Roboto' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Roboto' }}>
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="funding">Funding & Investment</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Roboto' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    style={{ fontFamily: 'Roboto' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Roboto' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Tell us about your interest in our work, partnership ideas, or any questions you have..."
                    style={{ fontFamily: 'Roboto' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-emerald-800 transition-colors duration-200 flex items-center justify-center"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-2" style={{ fontFamily: 'Roboto' }}>
                      For general inquiries and partnership opportunities:
                    </p>
                    <a href="mailto:info@dungo.yoseph.dev" className="text-emerald-700 hover:text-emerald-800 font-medium">
                      info@dungo.yoseph.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                      Our Location
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                      Ethiopia<br />
                      Serving rural communities across the region
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-emerald-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                      Partnership with Villageboom GmbH
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                      We work in partnership with Villageboom GmbH to enhance our capacity for 
                      sustainable development initiatives and community engagement programs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Opportunities */}
              <div className="mt-12 bg-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Partnership Opportunities
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                  We welcome partnerships with organizations that share our commitment to sustainable 
                  energy access and rural development.
                </p>
                <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                  <li className="flex items-center">
                    <Handshake className="h-4 w-4 text-emerald-700 mr-2" />
                    International development organizations
                  </li>
                  <li className="flex items-center">
                    <Handshake className="h-4 w-4 text-emerald-700 mr-2" />
                    Government agencies and NGOs
                  </li>
                  <li className="flex items-center">
                    <Handshake className="h-4 w-4 text-emerald-700 mr-2" />
                    Impact investors and funding partners
                  </li>
                  <li className="flex items-center">
                    <Handshake className="h-4 w-4 text-emerald-700 mr-2" />
                    Technology providers and innovators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
            Ready to Make an Impact Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
            Whether you're interested in funding our projects, partnering with us, or simply learning more 
            about our work, we'd love to connect and explore how we can work together to expand sustainable 
            energy access in rural communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@dungo.yoseph.dev"
              className="bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-800 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Email Us Directly
            </a>
            <a
              href="/projects"
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Learn About Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;