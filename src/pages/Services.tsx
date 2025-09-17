import { Zap, Users, Wrench, GraduationCap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              Services & Future Plans
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Building on our successful solar lamp project, we're expanding our services to provide 
              comprehensive renewable energy solutions and capacity building programs.
            </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                <img src="/services-1.png" alt="Services 1" className="h-40 w-auto rounded-lg shadow-md" />
                <img src="/services-2.png" alt="Services 2" className="h-40 w-auto rounded-lg shadow-md" />
                <img src="/services-3.png" alt="Services 3" className="h-40 w-auto rounded-lg shadow-md" />
              </div>
          </div>
        </div>
      </section>

      {/* Current Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Comprehensive renewable energy solutions designed to meet the diverse needs of rural communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Renewable Energy Distribution */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-emerald-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Renewable Energy Product Distribution
                </h3>
              </div>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                We provide high-quality, affordable renewable energy products including solar lamps, 
                solar home systems, and portable charging solutions designed specifically for rural environments.
              </p>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-3"></div>
                  Solar lamps with mobile phone charging capabilities
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-3"></div>
                  Solar home systems for larger households
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-3"></div>
                  Portable solar charging stations
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-3"></div>
                  Flexible payment and financing options
                </li>
              </ul>
            </div>

            {/* Training & Maintenance */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Wrench className="h-8 w-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Training & Maintenance Programs
                </h3>
              </div>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Comprehensive training programs that ensure communities can properly maintain and maximize 
                the benefits of their renewable energy systems.
              </p>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></div>
                  Basic maintenance and troubleshooting training
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></div>
                  Optimal usage practices workshops
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></div>
                  Local technician certification programs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></div>
                  Ongoing technical support services
                </li>
              </ul>
            </div>

            {/* Community Development */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Rural Capacity-Building Initiatives
                </h3>
              </div>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Empowering communities through education and skill development programs that create 
                sustainable local expertise in renewable energy technologies.
              </p>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 mr-3"></div>
                  Community leader engagement programs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 mr-3"></div>
                  Women's cooperative energy initiatives
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 mr-3"></div>
                  Youth entrepreneurship in clean energy
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 mr-3"></div>
                  Micro-finance program support
                </li>
              </ul>
            </div>

            {/* Education & Awareness */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Education & Awareness Programs
                </h3>
              </div>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Educational initiatives that promote understanding of renewable energy benefits, 
                environmental conservation, and sustainable development practices.
              </p>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                  Climate change awareness workshops
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                  Renewable energy education programs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                  School-based environmental curricula
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                  Community demonstration projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Future Plans & Expansion
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Building on our successful foundation, we're developing comprehensive programs to expand 
              our impact and reach more communities in need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-emerald-700 font-bold text-sm mb-2" style={{ fontFamily: 'Poppins' }}>PHASE 1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Expanded Product Line
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Introduce advanced solar home systems, solar water pumps, and community-scale renewable 
                energy installations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li>• Solar home system packages</li>
                <li>• Agricultural water pumping solutions</li>
                <li>• Community solar grid systems</li>
                <li>• Energy storage solutions</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-amber-600 font-bold text-sm mb-2" style={{ fontFamily: 'Poppins' }}>PHASE 2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Regional Expansion
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Scale operations to reach additional regions and establish partnerships with local 
                organizations and government agencies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li>• Multi-regional presence</li>
                <li>• Government partnerships</li>
                <li>• NGO collaboration networks</li>
                <li>• International funding partnerships</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-green-700 font-bold text-sm mb-2" style={{ fontFamily: 'Poppins' }}>PHASE 3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Innovation Hub
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Establish research and development capabilities to create locally-appropriate renewable 
                energy solutions and training centers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Roboto' }}>
                <li>• Local R&D facility</li>
                <li>• Training center establishment</li>
                <li>• Technology adaptation programs</li>
                <li>• Knowledge sharing platforms</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-emerald-700 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Ready to Partner with Us?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Join us in expanding access to clean, affordable energy solutions. Whether you're an 
              investor, NGO, government agency, or community organization, we welcome partnerships 
              that create lasting impact.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-emerald-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;