import { mockRecipes } from '../data/mockRecipes';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Book } from 'lucide-react';

export default function Sitemap() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 pb-32">
      <Helmet>
        <title>Sitemap | All Authentic Nepali Recipes Index | Bhansa Nepal</title>
        <meta name="description" content="Browse our complete list of authentic Nepali recipes. From Dal Bhat to Momos, find every traditional dish here." />
        <link rel="canonical" href="https://bhansanepal.com/sitemap" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="relative mb-16 p-12 rounded-[3rem] overflow-hidden bg-brand-900 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700/50 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-800/50 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">
            Recipe <span className="text-brand-400 italic">Sitemap</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto font-medium">
            A complete collection of authentic Nepali flavors, structured for discovery and tradition.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* We group by category for better organization */}
        {Array.from(new Set(mockRecipes.map(r => r.category))).map(category => (
          <div key={category} className="group hover-lift bg-white rounded-[2.5rem] p-8 shadow-sm border border-brand-100/50 hover:border-brand-300 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shadow-inner group-hover:bg-brand-600 group-hover:text-white transition-colors duration-500">
                <Book className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900">
                {category}
              </h2>
            </div>
            
            <ul className="space-y-4">
              {mockRecipes.filter(r => r.category === category).map(recipe => (
                <li key={recipe.id}>
                  <Link 
                    to={`/recipe/${recipe.slug}`}
                    className="flex justify-between items-center group/item text-gray-700 hover:text-brand-700 transition-all"
                  >
                    <span className="font-semibold text-[15px]">{recipe.title}</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover/item:opacity-100 group-hover/item:bg-brand-100 transition-all -translate-x-2 group-hover/item:translate-x-0">
                      <ArrowRight className="w-4 h-4 text-brand-600" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

