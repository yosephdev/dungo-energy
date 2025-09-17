import { Calendar, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              About Dungo Energy Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              We are a solar social enterprise dedicated to combating energy poverty through innovative, 
              sustainable solutions that empower communities and protect the environment.
            </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                <img src="/about-website.jpg" alt="About Website" className="h-40 w-auto rounded-lg shadow-md" />
                <img src="/about-brightbox.png" alt="BrightBox" className="h-40 w-auto rounded-lg shadow-md" />
              </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Our History
              </h2>
              <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Founded with a vision to address energy poverty in rural communities, Dungo Energy Solutions 
                emerged from a deep understanding of the challenges faced by underserved populations who lack 
                access to reliable, clean energy.
              </p>
              <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Roboto' }}>
                Our flagship initiative, the Dungo Solar Lamp Distribution Project, ran from October 2013 to 
                May 2015 and demonstrated the transformative power of sustainable energy access. Through this 
                project, we provided portable, durable, and affordable solar lamps to rural households, 
                implementing innovative discount and installment payment plans to ensure accessibility.
              </p>
              <p className="text-lg text-gray-600" style={{ fontFamily: 'Roboto' }}>
                The success of this initiative laid the foundation for our continued commitment to bringing 
                clean energy solutions to communities that need them most.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-emerald-700 mr-3" />
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Project Timeline
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-700 pl-4">
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>October 2013</p>
                  <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Launch of Solar Lamp Distribution Project</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>2013-2015</p>
                  <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Community engagement and lamp distribution</p>
                </div>
                <div className="border-l-4 border-emerald-700 pl-4">
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>May 2015</p>
                  <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Project completion and impact assessment</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>Present</p>
                  <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Continued mission for sustainable energy access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Strategic Partnership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Our collaboration with Villageboom GmbH strengthens our ability to deliver impactful 
              sustainable energy solutions to rural communities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-emerald-700 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                    Partnership with Villageboom GmbH
                  </h3>
                </div>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>
                  Our partnership with Villageboom GmbH combines local expertise with international 
                  experience in sustainable development. This collaboration enhances our capacity 
                  to design and implement effective energy access programs.
                </p>
                <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                  Together, we leverage shared resources, knowledge, and networks to maximize the 
                  impact of our initiatives and ensure the long-term sustainability of our projects.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-lg p-8 text-white">
                <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Partnership Benefits
                </h4>
                <ul className="space-y-3" style={{ fontFamily: 'Roboto' }}>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Enhanced technical expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Expanded funding opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    International network access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Sustainable project implementation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our Vision & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Guided by our core values, we work towards a world where everyone has access to clean, 
              affordable, and reliable energy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-8 text-center">
              <Target className="h-12 w-12 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Our Vision
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                A world where energy poverty is eliminated, and every community has access to sustainable, 
                clean energy that empowers people and protects the environment.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 text-center">
              <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Our Mission
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                To provide sustainable energy access to underserved communities through innovative solar 
                solutions, community engagement, and capacity building programs.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center">
              <Users className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                Our Values
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                Sustainability, community empowerment, innovation, affordability, and environmental 
                responsibility guide every decision we make and every project we implement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online presence & Press Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Online presence & Press
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Dungo Energy Solutions has been featured and listed on several platforms. Find our profiles,
              mentions and press coverage here.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 lg:p-12">
            <ul className="space-y-4 text-left max-w-3xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              <li>
                <a href="https://www.f6s.com/dungo" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold">
                  F6S — Dungo profile
                </a>
                <p className="text-sm text-gray-600">Startup profile and funding/networking information.</p>
              </li>

              <li>
                <a href="https://twitter.com/intent/tweet?text=Dungo+Energy+Solutions" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold">
                  Twitter — social mentions
                </a>
                <p className="text-sm text-gray-600">Recent social posts and community engagement on Twitter.</p>
              </li>

              <li>
                <a href="https://www.startupranking.org/profile/dungo-energy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold">
                  StartupRanking — organization ranking
                </a>
                <p className="text-sm text-gray-600">Independent ranking and profile information.</p>
              </li>

              <li>
                <a href="https://www.fairobserver.com/tag/dungo-energy/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold">
                  Fair Observer — press mentions
                </a>
                <p className="text-sm text-gray-600">Editorial coverage and articles mentioning Dungo Energy.</p>
              </li>

              <li>
                <a href="https://www.sun-connect.org/dungo-energy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold">
                  Sun Connect — project listing
                </a>
                <p className="text-sm text-gray-600">Project listings and partner network entries.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;