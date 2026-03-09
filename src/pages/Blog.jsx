import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: "top-20-nepali-foods",
    title: "Top 20 Nepali Foods You Must Try",
    excerpt: "From the steaming plates of Dal Bhat to the fiery street-side Momo, discover the essential authentic Nepali dishes everyone needs to taste.",
    category: "Food Guides",
    readTime: "8 min read",
    date: "Aug 15, 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg"
  },
  {
    id: "best-street-foods-nepal",
    title: "Best Street Foods in Nepal",
    excerpt: "Explore the bustling streets of Kathmandu and the Terai plains. Learn how to make Chatpate, Pani Puri, and authentic Street Chowmein at home.",
    category: "Street Food",
    readTime: "5 min read",
    date: "Sep 02, 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg"
  },
  {
    id: "traditional-newari-dishes",
    title: "Traditional Newari Dishes: A Deep Dive",
    excerpt: "The Newa people of the Kathmandu Valley possess one of the most complex culinary traditions in South Asia. Dive into Samay Baji, Yomari, and Choila.",
    category: "Culture",
    readTime: "12 min read",
    date: "Sep 28, 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg"
  },
  {
    id: "nepali-food-for-festivals",
    title: "Nepali Food for Festivals: Sel Roti & Beyond",
    excerpt: "Dashain, Tihar, and Chhath aren't just religious events; they are feasts. Learn about the ceremonial foods that define Nepali celebrations.",
    category: "Festivals",
    readTime: "6 min read",
    date: "Oct 10, 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];
  
  const displayedPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <Helmet>
        <title>Nepali Food Blog | Articles on Recipes, Culture & Cooking - Bhansa Nepal</title>
        <meta name="description" content="Read articles about authentic Nepali recipes, traditional food culture, Kathmandu street food, and festival delicacies on the Bhansa Nepal blog." />
        <meta name="keywords" content="Nepali food blog, traditional Nepali food articles, Best Street foods in Nepal, Top 20 Nepali foods, Newari dishes" />
      </Helmet>

      {/* Blog Header */}
      <div className="bg-brand-900 rounded-3xl p-12 text-center mb-16 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/94/Lunch_Platter%2C_Nepali_Lunch%2C_La_Cocina_Food_Conference.jpg')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="relative z-10">
          <BookOpen className="w-12 h-12 text-brand-300 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            The Flavor Journal
          </h1>
          <p className="text-xl text-brand-200 max-w-2xl mx-auto font-medium">
            Stories, deep dives, and cultural history behind the incredible flavors of Nepal.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold transition-all ${
              activeCategory === cat 
                ? 'bg-brand-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-brand-50 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Latest Post */}
      {displayedPosts.length > 0 && activeCategory === 'All' && (
        <div className="mb-16">
          <Link to={`/blog/${displayedPosts[0].id}`} className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-3/5 relative overflow-hidden h-64 md:h-96">
                <img 
                  src={displayedPosts[0].image} 
                  alt={displayedPosts[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-12 w-full md:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">
                  <span>{displayedPosts[0].category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-300"></span>
                  <span className="text-gray-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {displayedPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {displayedPosts[0].title}
                </h2>
                <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                  {displayedPosts[0].excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-brand-600 font-bold group-hover:translate-x-2 transition-transform w-fit">
                  Read Article <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Standard Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeCategory === 'All' ? displayedPosts.slice(1) : displayedPosts).map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-brand-700 font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-3">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5"/> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {post.readTime}</span>
              </div>
              <h3 className="text-xl font-display font-extrabold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 font-medium line-clamp-2 mb-6 flex-1">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between font-bold text-sm">
                <span className="text-brand-600">Read More</span>
                <ChevronRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
