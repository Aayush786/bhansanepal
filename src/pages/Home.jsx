import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../utils/LanguageContext';
import { mockRecipes, RECIPE_CATEGORIES } from '../data/mockRecipes';
import RecipeCard from '../components/RecipeCard';
import IngredientSearch from '../components/IngredientSearch';
import { UtensilsCrossed, Dices, Flame, TrendingUp } from 'lucide-react';

const regionalSpots = [
  {
    name: 'Kathmandu Valley',
    matchNames: ['Kathmandu Valley', 'Newa (Kathmandu)'],
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Terai',
    matchNames: ['Terai', 'Tharu (Terai)'],
    image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Himalayas',
    matchNames: ['Himalayas'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: ' पहाड (Hills)',
    matchNames: [' पहाड (Hills)', 'Eastern Nepal'],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80',
  }
];

export default function Home() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes);

  // Track if search is active to override category tabs if necessary
  const [isSearching, setIsSearching] = useState(false);

  // Filter logic combining both Category and Search
  const displayRecipes = useMemo(() => {
    if (activeCategory === 'All') return filteredRecipes;
    return filteredRecipes.filter(r => r.category === activeCategory);
  }, [activeCategory, filteredRecipes]);

  const handleSearchResults = (results) => {
    setFilteredRecipes(results);
    // Automatically switch to 'All' if they are searching to avoid confusion
    if (results.length !== mockRecipes.length) {
      setActiveCategory('All');
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Authentic Nepali Recipes & Traditional Food | Bhansa Nepal</title>
        <meta name="description" content="Discover the best traditional Nepali food, from Momos to Thakali Khana. Search thousands of Nepali recipes by ingredient." />
        <meta name="keywords" content="Nepali recipes, Nepali food recipes, traditional Nepali food, momo recipe Nepal, sel roti recipe" />
        <link rel="canonical" href="https://bhansanepal.com/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mt-12 mb-16 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200/40 via-transparent to-transparent opacity-70"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-6 border border-brand-200 shadow-sm">
          <span className="text-brand-900 drop-shadow-sm">🌶️</span>
          <span>{t('hero_sparkle') || "Bhansa Nepal - Best Traditional Recipes"}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 drop-shadow-sm leading-tight">
          {t('hero_title_1')} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-900">{t('hero_title_2')}</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
          {t('hero_subtitle')}
        </p>

        <button
          onClick={() => {
            const randomIdx = Math.floor(Math.random() * mockRecipes.length);
            navigate(`/recipe/${mockRecipes[randomIdx].slug}`);
          }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-600 to-brand-800 text-white font-extrabold px-8 py-4 rounded-full shadow-xl shadow-brand-600/30 hover:scale-105 hover:shadow-2xl hover:shadow-brand-600/40 transition-all duration-300 mb-10 group"
        >
          <Dices className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          {t('btn_random')}
        </button>

        <IngredientSearch recipes={mockRecipes} onFilter={handleSearchResults} />
      </div>

      <div className="mt-8 md:mt-0 space-y-20">
        {/* Trending Today Section */}
        {!isSearching && (
          <section>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-orange-100 p-2 rounded-xl">
                <Flame className="w-6 h-6 text-orange-600 animate-pulse" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900">🔥 {t('Trending_Today') || "Trending Today"}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockRecipes.filter(r => r.trending).map(recipe => (
                <button
                  key={recipe.id}
                  onClick={() => navigate(`/recipe/${recipe.slug}`)}
                  className="group relative h-48 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                      <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Trending Now</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">
                      {language === 'np' ? recipe.nepaliTitle : recipe.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    <span className="text-white text-xs font-bold">★ {recipe.rating}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}


        {/* Regional Explore Section */}
        {!isSearching && (
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">{t('region_title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regionalSpots.map((spot, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory('All');
                    setFilteredRecipes(mockRecipes.filter(r => spot.matchNames.includes(r.region)));
                    setIsSearching(true);
                  }}
                  className="group relative h-32 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
                >
                  <img 
                    src={spot.image} 
                    alt={spot.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                    <span className="text-white font-bold font-display text-base md:text-lg drop-shadow">{spot.name}</span>
                    <span className="text-white/80 bg-white/20 backdrop-blur-sm p-1 px-2.5 rounded-full group-hover:bg-brand-600 group-hover:text-white transition-all text-sm">→</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Main Feed Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-2">
              <UtensilsCrossed className="w-6 h-6 text-brand-600" />
              {isSearching ? t('search_results') : t('cat_explore')}
            </h2>
            <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              {displayRecipes.length} {t('recipes_count')}
            </span>
          </div>

          <div className="relative mb-10">
            {!isSearching && (
              <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar snap-x">
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`snap-start whitespace-nowrap px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-sm ${activeCategory === 'All'
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 scale-105'
                    : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-700 border border-transparent hover:border-brand-200'
                    }`}
                >
                  {t('cat_all')}
                </button>
                {RECIPE_CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`snap-start whitespace-nowrap px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-sm ${activeCategory === category
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 scale-105'
                      : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-700 border border-transparent hover:border-brand-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {displayRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayRecipes.map(recipe => (
                <div key={recipe.id} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-300 to-brand-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <RecipeCard recipe={{ ...recipe, displayTitle: language === 'np' ? recipe.nepaliTitle : recipe.title }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{t('no_recipes')}</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Try adjusting your search ingredients or check back soon for more authentic recipes.
              </p>
              <button
                onClick={() => handleSearchResults(mockRecipes)}
                className="px-6 py-2 bg-brand-100 text-brand-700 font-semibold rounded-full hover:bg-brand-200 transition-colors"
              >
                {t('clear_search')}
              </button>
            </div>
          )}
        </section>

        <section className="mt-20 bg-brand-50 border border-brand-100 rounded-[2rem] p-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Learn more about Nepali cuisine</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Explore trusted culinary resources to deepen your understanding of traditional ingredients, festival plates, and regional Nepali food culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://en.wikipedia.org/wiki/Nepalese_cuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-100 transition"
            >
              Nepalese cuisine on Wikipedia
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Momo_(dish)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-100 transition"
            >
              Learn about Nepali momo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
