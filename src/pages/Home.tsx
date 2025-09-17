import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Users, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              Lighting Up Rural Communities with 
              <span className="text-emerald-700"> Sustainable Energy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Dungo Energy Solutions combats energy poverty by delivering innovative solar power solutions 
              to rural communities, creating lasting impact through sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="bg-emerald-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-emerald-800 transition-colors duration-200 flex items-center justify-center"
                style={{ fontFamily: 'Poppins' }}
              >
                See Our Impact <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Poppins' }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              To provide sustainable energy access to underserved communities through innovative solar solutions, 
              community engagement, and capacity building programs that create lasting positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Project Highlights
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Roboto' }}>
              Transforming communities through sustainable energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Solar Lamp Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <Lightbulb className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Solar Lamp Distribution Project
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                  Our flagship initiative (2013-2015) provided portable, durable, and affordable solar lamps 
                  to rural households with flexible payment options.
                </p>
                <Link 
                  to="/projects" 
                  className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Community Impact */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Community Engagement
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                  Building stronger communities through energy access, enabling evening education, 
                  extended clinic hours, and safer nighttime environments.
                </p>
                <Link 
                  to="/impact" 
                  className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center"
                  style={{ fontFamily: 'Poppins' }}
                >
                  See Impact <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Sustainability */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Leaf className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Environmental Impact
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                  Promoting clean energy solutions that reduce carbon emissions while providing 
                  reliable, affordable power to communities in need.
                </p>
                <Link 
                  to="/services" 
                  className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Latest Stories
            </h2>
                    {/* Dungo Logo Hero Image */}
                    <div className="flex justify-center mb-8">
                      <img src="/dungo-logo.png" alt="Dungo Logo" className="h-32 w-auto" />
                    </div>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Roboto' }}>
              Read about our impact and insights on sustainable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="/blog-main.png" alt="Lighting Up Rural Ethiopia" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Lighting Up Rural Ethiopia – One Lamp at a Time
                </h3>
                <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'Roboto' }}>
                  For many rural families, evenings once meant darkness or dangerous kerosene lamps. 
                  Discover how solar energy has transformed their daily lives...
                </p>
                <Link 
                  to="/blog/lighting-up-rural-ethiopia"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 text-sm"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Read More
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="/impact-01.jpg" alt="Why Solar Energy Matters for Climate Action" className="w-full h-48 object-cover" />
              <div className="p-6">

                    {/* Home Slider Gallery */}
                    <section className="py-10 bg-white">
                      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <img src="/home-slider-1.png" alt="Home Slider 1" className="rounded-lg shadow-md" />
                        <img src="/home-slider-main.png" alt="Home Slider Main" className="rounded-lg shadow-md" />
                        <img src="/home-slider-3.png" alt="Home Slider 3" className="rounded-lg shadow-md" />
                      </div>
                    </section>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Why Solar Energy Matters for Climate Action
                </h3>
                <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'Roboto' }}>
                  Solar power isn't just about convenience — it's about climate resilience. 
                  Learn how communities are cutting emissions while saving money...
                </p>
                <Link 
                  to="/blog/solar-energy-climate-action"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 text-sm"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Read More
                </Link>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="/projects-outside-3.jpg" alt="Building Stronger Communities" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Building Stronger Communities Through Energy Access
                </h3>
                <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'Roboto' }}>
                  Energy access empowers more than homes; it strengthens communities. 
                  See how solar lamps enable evening classes and extended clinic hours...
                </p>
                <Link 
                  to="/blog/building-stronger-communities"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 text-sm"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Read More
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800"
              style={{ fontFamily: 'Poppins' }}
            >
              View All Posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat' }}>
            Join Our Mission for Sustainable Energy Access
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
            Partner with us to bring clean, affordable energy solutions to communities that need them most. 
            Together, we can create lasting positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Partner With Us
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-emerald-700 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Support Clean Energy Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;