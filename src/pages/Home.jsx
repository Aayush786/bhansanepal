import { useState, useMemo } from 'react';
import { mockRecipes, RECIPE_CATEGORIES } from '../data/mockRecipes';
import RecipeCard from '../components/RecipeCard';
import IngredientSearch from '../components/IngredientSearch';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Home() {
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
      
      {/* Hero Section */}
      <div className="text-center mt-12 mb-16 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200/40 via-transparent to-transparent opacity-70"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-6 border border-brand-200 shadow-sm">
          <Sparkles className="w-4 h-4" />
          <span>Discover Authentic Nepali Flavors</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 drop-shadow-sm leading-tight">
          What's cooking in <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-900">Bhansa Nepal?</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
          From mountain delicacies to street food classics, tell us what ingredients you have, and we'll tell you what to cook.
        </p>

        <IngredientSearch recipes={mockRecipes} onFilter={handleSearchResults} />
      </div>

      {/* Category Navigation */}
      <div className="mb-12">
        
        {/* Grandma's Recipe Spotlight */}
        {!isSearching && (
          <div className="mb-16 bg-gradient-to-tr from-brand-900 via-brand-800 to-brand-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="flex-1 z-10 text-white">
              <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm shadow-sm">
                👵 Passed Down Generations
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 drop-shadow-md text-white">
                Grandma's Secret Recipes
              </h2>
              <p className="text-brand-100 font-medium text-lg leading-relaxed mb-6 max-w-xl">
                Discover the authentic, unwritten cooking methods straight from the villages of Nepal. Real flavor, zero shortcuts.
              </p>
              <button onClick={() => {
                setActiveCategory('All');
                setFilteredRecipes(mockRecipes.filter(r => r.isGrandmaRecipe));
                setIsSearching(true); // Treat as a special filtered view
              }} className="bg-white text-brand-900 font-extrabold px-6 py-3 rounded-xl hover:bg-brand-50 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                Explore Traditional Menu
              </button>
            </div>
            
            <div className="w-full md:w-1/3 relative z-10 hidden md:block group-hover:rotate-3 transition-transform duration-500">
               {/* Decorative traditional element */}
               <div className="aspect-square bg-brand-900/50 rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-50">🔥</div>
                  <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover mix-blend-overlay opacity-80" alt="Traditional cooking"/>
               </div>
            </div>
          </div>
        )}

        {/* Regional Map Stub */}
        {!isSearching && (
           <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-display font-bold text-gray-900">Explore by Region</h2>
              </div>
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
           </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-brand-600" />
            {isSearching ? 'Search Results' : 'Explore by Category'}
          </h2>
          <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
            {displayRecipes.length} recipes
          </span>
        </div>

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
              All Recipes
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

      {/* Recipe Grid */}
      {displayRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRecipes.map(recipe => (
             <div key={recipe.id} className="relative group">
                {/* Decorative background blur for cards */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-300 to-brand-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <RecipeCard recipe={recipe}/>
             </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">No recipes found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Try adjusting your search ingredients or check back soon for more authentic recipes.
          </p>
          <button 
            onClick={() => handleSearchResults(mockRecipes)}
            className="mt-6 px-6 py-2 bg-brand-100 text-brand-700 font-semibold rounded-full hover:bg-brand-200 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}

    </div>
  );
}
