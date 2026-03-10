import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../utils/LanguageContext';
import { mockRecipes, RECIPE_CATEGORIES } from '../data/mockRecipes';
import RecipeCard from '../components/RecipeCard';
import IngredientSearch from '../components/IngredientSearch';
import { UtensilsCrossed, Sparkles, Dices, Flame, TrendingUp } from 'lucide-react';

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
      </Helmet>
      
      {/* Hero Section */}
      <div className="text-center mt-12 mb-16 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200/40 via-transparent to-transparent opacity-70"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-6 border border-brand-200 shadow-sm">
          <span className="text-brand-900 drop-shadow-sm">🌶️</span>
          <span>{t('hero_sparkle') || "Bhansa Nepal - Best Traditional Recipes"}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 drop-shadow-sm leading-tight">
          {t('hero_title_1')} <br className="hidden md:block"/> 
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
              <h2 className="text-3xl font-display font-bold text-gray-900">🔥 {t('trending_today') || "Trending Today"}</h2>
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

        {/* Featured Festival Dish Spotlight */}
        {!isSearching && (
          <section className="relative group cursor-pointer" onClick={() => navigate('/festivals')}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-brand-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-white border border-brand-100 rounded-[3rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-widest mb-6">
                    <Sparkles className="w-3 h-3" /> Cultural Spotlight
                  </div>
                  <h2 className="text-4xl font-display font-black text-slate-900 mb-6 leading-tight">
                    Taste the <span className="text-orange-600">Tradition</span>
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-8 leading-relaxed">
                    Every Nepali festival is defined by its flavors. From the crispy <span className="text-brand-700 font-bold">Sel Roti</span> of Tihar to the spicy <span className="text-brand-700 font-bold">Choila</span> of Indra Jatra.
                  </p>
                  <button className="bg-brand-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-brand-600/20 hover:scale-105 transition-all">
                    Explore Festival Guide
                  </button>
                </div>
                
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                   <div className="space-y-4 pt-8">
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sel-roti-nepali-food.jpg/800px-Sel-roti-nepali-food.jpg" className="w-full h-full object-cover" alt="Sel Roti"/>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tal_Kachila.JPG/800px-Tal_Kachila.JPG" className="w-full h-full object-cover" alt="Festive Food"/>
                      </div>
                      <div className="aspect-square bg-brand-50 rounded-3xl flex items-center justify-center p-6 text-center shadow-inner">
                         <p className="text-brand-800 font-display font-black text-xl leading-none">50+ <br/> <span className="text-sm font-bold text-brand-600 uppercase tracking-tighter">Festive Dishes</span></p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Grandma's Recipe Spotlight */}
        {!isSearching && (
          <section className="bg-gradient-to-tr from-brand-900 via-brand-800 to-brand-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="flex-1 z-10 text-white">
              <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm shadow-sm">
                {t('grandma_ribbon')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 drop-shadow-md text-white">
                {t('grandma_title')}
              </h2>
              <p className="text-brand-100 font-medium text-lg leading-relaxed mb-6 max-w-xl">
                {t('grandma_desc')}
              </p>
              <button onClick={() => {
                setActiveCategory('All');
                setFilteredRecipes(mockRecipes.filter(r => r.isGrandmaRecipe));
                setIsSearching(true);
              }} className="bg-white text-brand-900 font-extrabold px-6 py-3 rounded-xl hover:bg-brand-50 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                {t('btn_traditional')}
              </button>
            </div>
            
            <div className="w-full md:w-1/3 relative z-10 hidden md:block group-hover:rotate-3 transition-transform duration-500">
               <div className="aspect-square bg-brand-900/50 rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-50">🔥</div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg" className="w-full h-full object-cover mix-blend-overlay opacity-80" alt="Traditional cooking"/>
               </div>
            </div>
          </section>
        )}

        {/* Regional Explore Section */}
        {!isSearching && (
           <section>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">{t('region_title')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {['Kathmandu Valley', 'Terai', 'Himalayas', ' पहाड (Hills)'].map((region, idx) => (
                    <button 
                      key={idx}
                      onClick={() => {
                        setActiveCategory('All');
                        setFilteredRecipes(mockRecipes.filter(r => r.region === region));
                        setIsSearching(true);
                      }}
                      className="group relative h-32 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-brand-800 transition-colors group-hover:bg-brand-600"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                         <span className="text-white font-bold font-display text-lg">{region}</span>
                         <span className="text-brand-200 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
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
                  className={`snap-start whitespace-nowrap px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-sm ${
                    activeCategory === 'All' 
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
                    className={`snap-start whitespace-nowrap px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-sm ${
                      activeCategory === category 
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
                    <RecipeCard recipe={{...recipe, displayTitle: language === 'np' ? recipe.nepaliTitle : recipe.title}}/>
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
      </div>
    </div>
  );
}
