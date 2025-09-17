import { Calendar, MapPin, Users, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Transforming communities through innovative solar energy solutions and sustainable development initiatives.
            </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                <img src="/projects-advert.jpg" alt="Projects Advert" className="h-40 w-auto rounded-lg shadow-md" />
                <img src="/projects-outside-2.jpg" alt="Projects Outside 2" className="h-40 w-auto rounded-lg shadow-md" />
                <img src="/projects-outside-3.jpg" alt="Projects Outside 3" className="h-40 w-auto rounded-lg shadow-md" />
              </div>
          </div>
        </div>
      </section>

      {/* Main Project Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-700 to-green-600 rounded-lg text-white p-8 lg:p-12 mb-12">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-12 w-12 text-amber-400 mr-4" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>
                  Dungo Solar Lamp Distribution Project
                </h2>
                <div className="flex items-center text-emerald-100">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span style={{ fontFamily: 'Roboto' }}>October 2013 - May 2015</span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-emerald-100 mb-6 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Our flagship initiative that brought sustainable lighting solutions to rural households, 
              replacing dangerous kerosene lamps with clean, affordable solar technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Montserrat' }}>500+</div>
                <div className="text-emerald-100" style={{ fontFamily: 'Roboto' }}>Households Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Montserrat' }}>18</div>
                <div className="text-emerald-100" style={{ fontFamily: 'Roboto' }}>Months Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Montserrat' }}>100%</div>
                <div className="text-emerald-100" style={{ fontFamily: 'Roboto' }}>Clean Energy</div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Project Objective
              </h3>
              <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                The primary objective was to provide sustainable energy access to rural communities by 
                distributing portable, durable, and affordable solar lamps. Our goal was to replace 
                dangerous and expensive kerosene lighting with clean, renewable energy solutions.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Key Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    High-quality, durable solar lamps designed for rural environments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    Affordable pricing with flexible discount and installment payment plans
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    Comprehensive training on maintenance and optimal usage
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    Mobile phone charging capabilities for enhanced connectivity
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Implementation Model
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-emerald-700 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                      Community Engagement
                    </h4>
                  </div>
                  <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    We worked directly with village leaders and community groups to understand local needs 
                    and ensure cultural sensitivity in our approach.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-emerald-700 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                      Flexible Payment Options
                    </h4>
                  </div>
                  <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    Offered discount schemes and installment payment plans to make solar lamps accessible 
                    to families with varying income levels.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-emerald-700 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                      Local Distribution Network
                    </h4>
                  </div>
                  <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    Established distribution points in strategic locations to ensure easy access and 
                    provide ongoing support to lamp users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Community Adoption Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Real stories from families whose lives were transformed by access to clean, reliable lighting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  The Haile Family
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: 'Roboto' }}>Rural Ethiopia</p>
              </div>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                "Before the solar lamp, our children couldn't study after sunset. Now they have bright, 
                safe light to do their homework, and we can charge our phone to stay connected with family."
              </p>
              <div className="text-emerald-700 font-semibold text-sm" style={{ fontFamily: 'Poppins' }}>
                Impact: Improved education opportunities
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Local Health Clinic
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: 'Roboto' }}>Rural Health Center</p>
              </div>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                "The solar lamps allowed us to extend our clinic hours and provide emergency care after dark. 
                The reliable lighting has improved our ability to serve the community's healthcare needs."
              </p>
              <div className="text-emerald-700 font-semibold text-sm" style={{ fontFamily: 'Poppins' }}>
                Impact: Extended healthcare services
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Women's Cooperative
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: 'Roboto' }}>Rural Village Group</p>
              </div>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                "Solar lamps enabled our evening meetings and craft work. We can now produce goods after dark, 
                increasing our income and strengthening our cooperative's economic impact."
              </p>
              <div className="text-emerald-700 font-semibold text-sm" style={{ fontFamily: 'Poppins' }}>
                Impact: Economic empowerment
              </div>
            </div>

            {/* Story 4 - Dungo Solar Lamp Project: Abebe Doyo kebele */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img src="/P1190018k.jpg" alt="Dungo Solar Lamp - Abebe Doyo" className="w-full h-40 object-cover rounded-md mb-4" />
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Dungo Solar Lamp - Abebe Doyo kebele
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: 'Roboto' }}>Abebe Doyo kebele, near Ambo Town — Oromia Region</p>
              </div>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                The Dungo Solar Lamp project supported households in Abebe Doyo kebele with durable
                portable solar lamps. Residents reported improved study time for children and safer
                homes after sunset.
              </p>
              <div className="text-emerald-700 font-semibold text-sm" style={{ fontFamily: 'Poppins' }}>
                Impact: Lighting for households in Abebe Doyo kebele
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Project Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              The measurable outcomes of our solar lamp distribution initiative demonstrate the 
              transformative power of sustainable energy access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>85%</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Reduction in kerosene usage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>70%</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Increase in evening study time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>60%</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Savings on lighting costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>95%</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>User satisfaction rate</div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Montserrat' }}>
              Long-term Benefits Achieved
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Social Impact
                </h4>
                <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                  <li>• Safer homes with reduced fire hazards from kerosene lamps</li>
                  <li>• Improved quality of life for families</li>
                  <li>• Enhanced community gathering spaces</li>
                  <li>• Increased mobile phone connectivity</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Economic Impact
                </h4>
                <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                  <li>• Reduced monthly spending on kerosene fuel</li>
                  <li>• Increased productivity through extended working hours</li>
                  <li>• Enhanced educational opportunities for children</li>
                  <li>• Support for local micro-enterprises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;