import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const blogPosts = {
  'lighting-up-rural-ethiopia': {
    title: 'Lighting Up Rural Ethiopia – One Lamp at a Time',
    content: `For many rural families in Ethiopia, evenings once meant darkness or the dangerous glow of kerosene lamps. The transition from day to night brought not just the end of productive hours, but also increased risks and limitations that affected every aspect of daily life.

**The Challenge of Darkness**

Before the Dungo Solar Lamp Project, families relied heavily on kerosene lamps for evening lighting. These lamps, while providing some illumination, came with significant drawbacks: they were expensive to maintain, posed fire hazards, produced harmful fumes, and provided inadequate lighting for important activities like studying or working.

Children would struggle to complete their homework in dim, flickering light. Women found it difficult to continue household tasks after sunset. Small business owners had to close early, missing opportunities for additional income. The entire rhythm of community life was constrained by the limitations of traditional lighting methods.

**Solar Power as a Game Changer**

Through our solar lamp distribution project, families now enjoy safe, clean, and affordable lighting that has fundamentally transformed their evening routines. These portable solar lamps provide bright, reliable light that lasts for hours, dramatically improving quality of life for entire households.

The lamps charge during the day using free solar energy and provide consistent lighting throughout the evening. Unlike kerosene lamps, they produce no harmful fumes, eliminate fire hazards, and require no ongoing fuel purchases.

**Beyond Illumination: Expanding Opportunities**

The impact of clean lighting extends far beyond simple illumination. Solar energy has opened up new opportunities that were previously impossible:

**Educational Advancement**: Children can now study effectively after dark, leading to improved academic performance and better future prospects. Evening study groups have become common, fostering collaborative learning within communities.

**Economic Empowerment**: Small business owners can extend their operating hours, artisans can continue their crafts into the evening, and women's cooperatives can hold productive meetings after household duties are complete.

**Communication and Connectivity**: Many of our solar lamps include mobile phone charging capabilities, helping families stay connected with relatives, access important information, and participate in the digital economy.

**Health and Safety**: Clinics can now provide emergency care after dark, and families feel safer in well-lit homes and communities.

**Community Stories of Transformation**

The Tadesse family in rural Oromia region represents countless households whose lives have been transformed by access to clean lighting. "Our three children used to struggle with their schoolwork because the kerosene lamp was too dim and made them cough," explains mother Almaz. "Now they study comfortably every evening, and their grades have improved significantly."

Similarly, local entrepreneur Bekele has been able to expand his small repair shop's hours. "I can now work on electronics and small appliances in the evening, which has nearly doubled my income," he shares. "The precise work requires good light, which the solar lamp provides perfectly."

**A Model for Sustainable Development**

Our approach to solar lamp distribution demonstrates how appropriate technology, combined with community engagement and flexible financing, can create lasting positive change. By making clean energy accessible and affordable, we're not just providing a product – we're enabling communities to build brighter futures for themselves.

The success of this project has laid the foundation for our expanded vision of comprehensive renewable energy access across rural Ethiopia. Every lamp distributed represents a step toward energy independence and community empowerment.`,
    date: '2024-03-15',
    author: 'Dungo Team',
    category: 'Community Impact',
    readTime: '5 min read',
  image: '/blog-main.png'
  },
  'solar-energy-climate-action': {
    title: 'Why Solar Energy Matters for Climate Action',
    content: `Solar power represents far more than a convenient energy source – it's a cornerstone of climate resilience and a pathway to sustainable development that addresses both local needs and global challenges simultaneously.

**The Climate Connection**

Climate change poses unprecedented threats to communities worldwide, with rural populations often bearing the greatest burden despite contributing least to the problem. By transitioning to clean energy sources like solar power, these communities can reduce their carbon footprint while building resilience against climate impacts.

Traditional energy sources like kerosene for lighting and diesel for power generation contribute significantly to greenhouse gas emissions. A single kerosene lamp can produce approximately 100 kg of CO2 annually. When multiplied across millions of households worldwide, the cumulative impact is substantial.

**Local Benefits, Global Impact**

Our solar lamp project demonstrates how local energy solutions create ripple effects that extend far beyond individual households:

**Emission Reductions**: Each solar lamp replaces kerosene consumption, directly reducing carbon emissions. Over the lifetime of our project, we estimate preventing over 50,000 kg of CO2 emissions – equivalent to taking several cars off the road for an entire year.

**Health Improvements**: Eliminating kerosene combustion removes harmful pollutants from indoor air, reducing respiratory illness and improving family health. This indoor air pollution is a significant health risk, particularly for women and children who spend more time in homes.

**Economic Sustainability**: While the upfront cost of solar technology may seem higher, the long-term economics strongly favor renewable energy. Families save money previously spent on kerosene, creating resources for other essential needs like education and healthcare.

**Energy Independence**: Solar power reduces dependence on imported fossil fuels and volatile fuel markets, creating more stable and predictable energy costs for communities.

**Building Climate Resilience**

Solar energy systems offer particular advantages in building community resilience against climate change:

**Reliability During Extreme Weather**: Unlike centralized power grids that can fail during storms or extreme weather events, distributed solar systems provide energy security at the household level.

**Adaptation Support**: Reliable lighting and communication capabilities help communities adapt to changing conditions, access weather information, and coordinate responses to climate challenges.

**Sustainable Development Pathway**: By leapfrogging traditional energy infrastructure, communities can build resilience while avoiding the carbon-intensive development path followed by industrialized nations.

**Ethiopia's Renewable Energy Potential**

Ethiopia is blessed with abundant renewable energy resources, receiving some of the world's highest levels of solar radiation. This natural advantage makes solar energy particularly viable and cost-effective for addressing energy poverty while supporting climate goals.

The country's commitment to renewable energy development, including ambitious hydroelectric and wind projects, creates a supportive policy environment for distributed solar solutions. Our work contributes to this broader national vision of clean energy transition.

**Scaling Up Impact**

The success of our pilot project demonstrates the potential for scaling up solar energy access across rural Ethiopia and beyond. Key factors for successful expansion include:

**Community Ownership**: Ensuring local communities are partners in planning and implementing renewable energy projects, not just recipients.

**Appropriate Technology**: Selecting solar solutions designed for local conditions, user needs, and maintenance capabilities.

**Financial Accessibility**: Developing innovative financing mechanisms that make clean energy affordable for low-income households.

**Capacity Building**: Training local technicians and entrepreneurs to support, maintain, and expand renewable energy systems.

**A Model for Global Action**

Ethiopia's experience with distributed solar energy offers valuable lessons for climate action worldwide. Small-scale, community-centered renewable energy projects can deliver immediate benefits while contributing to global emission reduction goals.

By proving that clean energy solutions can be economically viable, socially beneficial, and environmentally necessary, projects like ours help build momentum for the global energy transition required to address climate change.

**The Path Forward**

Climate action requires solutions that work for both people and the planet. Solar energy exemplifies this integration by providing essential services, improving quality of life, and reducing environmental impact simultaneously.

Our commitment to expanding renewable energy access represents both a local development strategy and a global climate solution. Every solar lamp, home system, and community installation brings us closer to a sustainable energy future that serves all communities while protecting our shared planet.`,
    date: '2024-02-20',
    author: 'Dungo Team',
    category: 'Environmental Impact',
    readTime: '4 min read',
  image: '/impact-01.jpg'
  },
  'building-stronger-communities': {
    title: 'Building Stronger Communities Through Energy Access',
    content: `Energy access extends far beyond individual households – it's a community development catalyst that strengthens social bonds, enhances collective capabilities, and creates opportunities for shared progress. Our experience with solar lamp distribution has revealed how energy empowers entire communities, not just individual families.

**Energy as Community Infrastructure**

When we think about community infrastructure, we typically envision roads, schools, and health facilities. However, energy access serves as the foundation that makes all other infrastructure more effective and accessible. Reliable lighting transforms how communities function after dark, extending the useful hours of public spaces and enabling activities that were previously impossible.

**Educational Transformation at Community Scale**

The impact of solar lighting on education extends well beyond individual students doing homework by lamplight. Entire communities have reorganized their educational activities around newly available evening hours:

**Adult Education Programs**: Village elders and adults who missed formal education opportunities can now attend evening literacy classes. Community halls lit by solar lamps host these programs, creating intergenerational learning spaces.

**Community Libraries**: Solar-powered reading rooms allow residents to access books, newspapers, and educational materials during evening hours. These spaces become social hubs where knowledge is shared and discussed.

**Skills Training Workshops**: Technical training programs can extend into evening hours, accommodating farmers and workers who are busy during the day. Solar lighting enables hands-on training in crafts, repairs, and small business skills.

**Healthcare Access After Dark**

Perhaps no community service benefits more dramatically from extended hours than healthcare:

**Emergency Care**: Health clinics can now provide urgent care during evening and night hours. Solar lighting enables medical professionals to perform examinations, administer treatments, and assist with emergency births under adequate illumination.

**Extended Clinic Hours**: Regular health services can extend beyond traditional daylight hours, accommodating working adults who previously couldn't access care during their most productive hours.

**Community Health Education**: Evening health education sessions address topics like maternal health, child nutrition, and disease prevention. Solar-lit community spaces make these programs accessible to entire families.

**Economic Development Through Collective Action**

Energy access catalyzes community-wide economic development in several ways:

**Market Extensions**: Village markets can operate into evening hours, creating additional income opportunities for traders and vendors. Extended market hours also provide working families more convenient access to goods and services.

**Cooperative Enterprises**: Women's cooperatives and farmer groups can meet during evening hours to plan activities, share resources, and develop collective enterprises. Solar lighting makes these crucial organizational meetings possible.

**Communication and Coordination**: Mobile phone charging capabilities enable better coordination of economic activities. Farmers can access market prices, coordinate transportation, and communicate with buyers more effectively.

**Cultural and Social Strengthening**

Communities use newly available evening hours to strengthen their social and cultural fabric:

**Traditional Gatherings**: Story-telling sessions, cultural celebrations, and community meetings can extend into evening hours. Solar lighting preserves these important cultural practices while making them more inclusive.

**Youth Programs**: Young people can participate in organized activities, sports, and cultural programs during evening hours. This provides positive alternatives to activities that might otherwise lead them away from their communities.

**Religious and Spiritual Activities**: Evening prayer gatherings, religious education, and spiritual ceremonies benefit from reliable lighting, strengthening the religious and spiritual life of communities.

**Safety and Security Through Collective Action**

Well-lit communities are safer communities, and this safety extends beyond individual households:

**Community Policing**: Neighborhood watch programs and community security initiatives are more effective with adequate lighting. Well-lit public spaces deter criminal activity and make residents feel more secure.

**Women's Safety**: Women can participate more freely in community activities during evening hours, knowing that well-lit paths and gathering spaces provide security for their travel and participation.

**Emergency Response**: Communities can respond more effectively to emergencies when adequate lighting enables coordination and communication during night hours.

**Building Social Capital**

Regular evening gatherings and activities build social capital – the networks of relationships that make communities resilient and effective:

**Information Sharing**: Community meetings and informal gatherings enable residents to share important information about opportunities, challenges, and solutions.

**Collective Problem-Solving**: Communities can address shared challenges more effectively when they have regular opportunities to meet and discuss issues together.

**Leadership Development**: Evening programs create opportunities for emerging leaders to develop skills and gain experience in community organizing and governance.

**Environmental Stewardship as Community Action**

The transition to clean energy often becomes a community-wide environmental initiative:

**Collective Environmental Awareness**: Communities that adopt solar energy together often develop broader environmental consciousness, leading to other conservation initiatives like tree planting and water protection.

**Knowledge Sharing**: Community members share experiences and techniques for maximizing the benefits of solar energy, creating informal networks of technical knowledge and support.

**Environmental Education**: Evening programs can include environmental education components, helping communities understand their role in broader environmental conservation efforts.

**Creating Sustainable Development Models**

Communities that successfully integrate renewable energy access often become models for sustainable development more broadly:

**Demonstration Effects**: Successful communities inspire and guide neighboring areas in adopting similar approaches, creating ripple effects of development.

**Innovation and Adaptation**: Communities develop locally appropriate innovations and adaptations that can be shared with other areas facing similar challenges.

**Leadership in Regional Development**: Energy-empowered communities often become leaders in regional development initiatives, contributing to broader economic and social progress.

**The Multiplier Effect**

Perhaps most importantly, energy access creates multiplier effects where initial investments generate expanding benefits over time. A solar lamp provides immediate lighting benefits, but its long-term impact includes educational advancement, health improvements, economic opportunities, and strengthened social bonds that continue generating benefits for years.

Our experience demonstrates that sustainable development happens most effectively when entire communities are empowered together, rather than when benefits accrue only to individual households. Energy access serves as a catalyst for this community-wide transformation, proving that development initiatives succeed best when they strengthen collective capacity alongside individual opportunity.`,
    date: '2024-01-10',
    author: 'Dungo Team',
    category: 'Community Development',
    readTime: '6 min read',
    image: '/projects-outside-3.jpg'
  }
};

function renderContentToHtml(content: string) {
  // Split on double newlines into blocks
  const blocks = content.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const html = blocks.map(block => {
    // Headings that are a whole block wrapped in **text**
    const headingMatch = block.match(/^\*\*(.+?)\*\*$/s);
    if (headingMatch) {
      return `<h3 class="text-xl font-semibold text-gray-900" style="font-family: Montserrat;">${headingMatch[1]}</h3>`;
    }

    // Inline bold **text**
    const withBold = block.replace(/\*\*(.*?)\*\*/g, '<strong style="font-family: Montserrat; font-weight:600; color:#1f2937;">$1</strong>');

    // Convert simple bullet lines starting with - or • into <li>
    if (/^(?:[-•]\s+)/m.test(withBold)) {
      const items = withBold.split(/\n/).map(l => l.replace(/^[-•]\s+/, '').trim()).filter(Boolean);
      return `<ul class="list-disc pl-6 space-y-2 text-gray-700" style="font-family: Roboto;">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    }

    return `<p class="text-gray-700 mb-4" style="font-family: Roboto;">${withBold}</p>`;
  }).join('');

  return html;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-emerald-700 hover:text-emerald-800">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 mb-8"
            style={{ fontFamily: 'Poppins' }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Montserrat' }}>
            {post.title}
          </h1>

          <div className="flex items-center justify-between text-gray-600 mb-8" style={{ fontFamily: 'Roboto' }}>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            <button className="flex items-center text-emerald-700 hover:text-emerald-800">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </button>
          </div>

          {/* Featured Image */}
          <div className={`${post.image} rounded-lg h-64 md:h-80 mb-8`}></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed" 
              style={{ fontFamily: 'Roboto' }}
              dangerouslySetInnerHTML={{ __html: renderContentToHtml(post.content) }}
            />
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto' }}>
            Learn more about our projects and how you can support sustainable energy access in rural communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-800 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Explore Our Projects
            </Link>
            <Link
              to="/contact"
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;