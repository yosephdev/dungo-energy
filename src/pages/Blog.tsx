import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'lighting-up-rural-ethiopia',
    title: 'Lighting Up Rural Ethiopia – One Lamp at a Time',
    excerpt: 'For many rural families, evenings once meant darkness or the dangerous glow of kerosene lamps. Through the Dungo Solar Lamp Project, households now enjoy safe, clean, and affordable lighting. Beyond illumination, solar energy has opened new opportunities for studying, working, and staying connected by charging mobile phones.',
    date: '2024-03-15',
    author: 'Dungo Team',
    category: 'Community Impact',
    readTime: '5 min read',
    image: '/blog-main.png'
  },
  {
    id: 2,
    slug: 'solar-energy-climate-action',
    title: 'Why Solar Energy Matters for Climate Action',
    excerpt: 'Solar power isn\'t just about convenience — it\'s about climate resilience. By reducing reliance on fossil fuels, communities cut carbon emissions while saving money. Clean energy is both a local and global solution, and Dungo is proud to contribute to Ethiopia\'s transition toward sustainability.',
    date: '2024-02-20',
    author: 'Dungo Team',
    category: 'Environmental Impact',
    readTime: '4 min read',
  image: '/impact-01.jpg'
  },
  {
    id: 3,
    slug: 'building-stronger-communities',
    title: 'Building Stronger Communities Through Energy Access',
    excerpt: 'Energy access empowers more than homes; it strengthens communities. With solar lamps, schools can host evening classes, health clinics stay open longer, and families feel safer at night. Energy is development, and solar energy is the sustainable pathway forward.',
    date: '2024-01-10',
    author: 'Dungo Team',
    category: 'Community Development',
    readTime: '6 min read',
  image: '/projects-outside-3.jpg'
  }
];
  // Blog page images
  const blogImages = [
    { src: '/blog-main.png', alt: 'Blog Main', className: 'h-40 w-auto rounded-lg shadow-md' },
    { src: '/blog-advert.jpg', alt: 'Blog Advert', className: 'h-40 w-auto rounded-lg shadow-md' }
  ];

const Blog: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
  <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
              Stories & Insights
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Read about our impact, community stories, and insights on sustainable energy and 
              rural development from the field.
            </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                {blogImages.map(img => (
                  <img key={img.src} src={img.src} alt={img.alt} className={img.className} />
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            {/* Featured post */}
            <article className="rounded-lg overflow-hidden shadow-lg grid md:grid-cols-3 gap-6">
              <img src="/blog-main.png" alt="Featured" className="w-full h-64 object-cover md:col-span-1 rounded-t-lg md:rounded-l-lg" />
              <div className="p-6 md:col-span-2 bg-white">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-semibold mr-3">Community Impact</span>
                  <span>6 min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>Lighting Up Rural Ethiopia – One Lamp at a Time</h2>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' }}>A look at the Dungo Solar Lamp Project and how it transformed lives in remote communities by providing safe, reliable light and new opportunities for education and income generation.</p>
                <Link to="/blog/lighting-up-rural-ethiopia" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors duration-200" style={{ fontFamily: 'Poppins' }}>Read Full Story <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3" style={{ fontFamily: 'Roboto' }}>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-semibold mr-3">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2" style={{ fontFamily: 'Montserrat' }}>
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3" style={{ fontFamily: 'Roboto' }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4" style={{ fontFamily: 'Roboto' }}>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors duration-200"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-700 rounded-lg p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Stay Updated on Our Impact
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Get the latest stories and updates about our projects, community impact, and 
              sustainable energy initiatives delivered to your inbox.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-emerald-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Contact Us for Updates <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;