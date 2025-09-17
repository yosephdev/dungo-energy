import { Award, Target, Users, Zap, CheckCircle } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              Our Impact & Skills
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Leveraging our expertise in sustainable development and renewable energy to create 
              measurable impact in rural communities across Ethiopia.
            </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                <img src="/impact-01.jpg" alt="Impact 01" className="h-40 w-auto rounded-lg shadow-md" />
                <img src="/impact-30.jpg" alt="Impact 30" className="h-40 w-auto rounded-lg shadow-md" />
              </div>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Years of experience in sustainable development have equipped us with comprehensive 
              skills to address energy poverty effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sustainable Development */}
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                Sustainable Development
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                Comprehensive understanding of sustainable development principles and community-centered approaches.
              </p>
            </div>

            {/* Solar Energy */}
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                Solar Power & Solar Energy
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                Technical expertise in solar technology implementation and optimization for rural environments.
              </p>
            </div>

            {/* Rural Development */}
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                Rural Development
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                Deep experience in rural community engagement and culturally appropriate development strategies.
              </p>
            </div>

            {/* Climate Action */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>
                Climate Change Action
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                Knowledge of climate resilience strategies and environmental conservation practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Technical & Program Management Skills
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-emerald-700 mb-3" style={{ fontFamily: 'Montserrat' }}>
                    Training & Capacity Building
                  </h3>
                  <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Community education program development
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Technical training curriculum design
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Local technician mentoring programs
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Knowledge transfer methodologies
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-emerald-700 mb-3" style={{ fontFamily: 'Montserrat' }}>
                    Program Planning & Management
                  </h3>
                  <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Strategic project planning and implementation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Budget development and financial management
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Impact assessment and reporting
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Stakeholder engagement and coordination
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Environmental & Social Skills */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Environmental & Social Impact
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-emerald-700 mb-3" style={{ fontFamily: 'Montserrat' }}>
                    Environmental Awareness & Conservation
                  </h3>
                  <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Climate change mitigation strategies
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Renewable energy advocacy and education
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Environmental impact assessment
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Sustainable resource management
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-emerald-700 mb-3" style={{ fontFamily: 'Montserrat' }}>
                    Community Engagement & Development
                  </h3>
                  <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Participatory development approaches
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Cultural sensitivity and local adaptation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Women's empowerment and inclusion
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-700 mt-0.5 mr-2 flex-shrink-0" />
                      Youth engagement and leadership development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Measurable Impact Achieved
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Our work has created tangible, positive changes in the communities we serve, 
              demonstrating the effectiveness of our approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>500+</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Households Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>2,000+</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>85%</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Reduction in Kerosene Use</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Montserrat' }}>18</div>
              <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Months of Operation</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Social Impact */}
            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Social Impact
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li>• Improved safety and security in rural homes</li>
                <li>• Enhanced educational opportunities for children</li>
                <li>• Extended operational hours for health clinics</li>
                <li>• Strengthened community social activities</li>
                <li>• Increased mobile phone connectivity</li>
              </ul>
            </div>

            {/* Economic Impact */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Economic Impact
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li>• 60% average savings on lighting costs</li>
                <li>• Increased productivity through extended work hours</li>
                <li>• Support for women's cooperative activities</li>
                <li>• Enhanced income generation opportunities</li>
                <li>• Reduced healthcare costs from kerosene-related issues</li>
              </ul>
            </div>

            {/* Environmental Impact */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Environmental Impact
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li>• Significant reduction in carbon emissions</li>
                <li>• Decreased reliance on fossil fuels</li>
                <li>• Improved indoor air quality</li>
                <li>• Reduced environmental pollution</li>
                <li>• Promoted sustainable energy practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
              What Makes Us Effective
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Our success comes from combining technical expertise with deep community understanding 
              and sustainable development principles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Community-Centered Approach
                </h3>
                <p className="text-emerald-100 text-sm" style={{ fontFamily: 'Roboto' }}>
                  We work with communities, not for them, ensuring local ownership and sustainability.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Results-Oriented Focus
                </h3>
                <p className="text-emerald-100 text-sm" style={{ fontFamily: 'Roboto' }}>
                  Every initiative is designed with clear objectives and measurable outcomes in mind.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Continuous Learning
                </h3>
                <p className="text-emerald-100 text-sm" style={{ fontFamily: 'Roboto' }}>
                  We adapt our strategies based on community feedback and project outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;