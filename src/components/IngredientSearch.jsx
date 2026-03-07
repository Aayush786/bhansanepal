import { useState, useMemo } from 'react';
import { Search, X, ChefHat } from 'lucide-react';

export default function IngredientSearch({ recipes, onFilter }) {
  const [query, setQuery] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Extract unique ingredients from all recipes
  const allIngredients = useMemo(() => {
    const ingSet = new Set();
    recipes.forEach(r => r.ingredients.forEach(i => ingSet.add(i.toLowerCase())));
    return Array.from(ingSet).sort();
  }, [recipes]);

  // Handle adding an ingredient filter
  const addIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      const newSelected = [...selectedIngredients, ingredient];
      setSelectedIngredients(newSelected);
      applyFilter(newSelected);
    }
    setQuery('');
  };

  // Handle removing an ingredient filter
  const removeIngredient = (ingredient) => {
    const newSelected = selectedIngredients.filter(i => i !== ingredient);
    setSelectedIngredients(newSelected);
    applyFilter(newSelected);
  };

  const applyFilter = (ingredients) => {
    if (ingredients.length === 0) {
      onFilter(recipes); // Reset
      return;
    }
    
    // Suggest recipes that contain ALL selected ingredients
    const filtered = recipes.filter(recipe => {
      const recipeIngs = recipe.ingredients.map(i => i.toLowerCase());
      return ingredients.every(selected => 
        recipeIngs.some(ri => ri.includes(selected) || selected.includes(ri))
      );
    });
    
    onFilter(filtered);
  };

  // Filter suggestions based on query
  const suggestions = query.trim() === '' 
    ? [] 
    : allIngredients.filter(i => i.includes(query.toLowerCase()) && !selectedIngredients.includes(i)).slice(0, 5);

  return (
    <div className="w-full max-w-3xl mx-auto my-12 bg-white rounded-3xl shadow-xl border border-brand-100 p-2 overflow-visible relative z-20">
      <div className="relative flex items-center bg-gray-50 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-brand-500 transition-all">
        <ChefHat className="w-6 h-6 text-brand-600 mr-3" />
        
        <div className="flex flex-wrap gap-2 flex-1 items-center">
          {selectedIngredients.map(ing => (
            <span key={ing} className="flex items-center gap-1 bg-brand-600 text-white text-sm px-3 py-1.5 rounded-full font-medium shadow-sm animate-in fade-in zoom-in duration-200">
              {ing.charAt(0).toUpperCase() + ing.slice(1)}
              <button onClick={() => removeIngredient(ing)} className="hover:text-brand-200 focus:outline-none ml-1 p-0.5 rounded-full hover:bg-white/20 transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
          
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-400 min-w-[150px] text-lg font-medium py-1"
            placeholder={selectedIngredients.length === 0 ? "What ingredients do you have? (e.g., Potato, Rice...)" : "Add more ingredients..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim() !== '') {
                // Find closest match or just add literal string
                const match = suggestions[0] || query.toLowerCase().trim();
                addIngredient(match);
              }
            }}
          />
        </div>
      </div>

      {/* Autocomplete Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 overflow-hidden z-30">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50/50">
            Suggested Ingredients
          </div>
          {suggestions.map(s => (
            <button
              key={s}
              className="w-full text-left px-6 py-3 hover:bg-brand-50 focus:bg-brand-50 transition-colors flex items-center gap-3 group"
              onClick={() => addIngredient(s)}
            >
              <Search className="w-4 h-4 text-gray-400 group-hover:text-brand-500" />
              <span className="text-gray-800 font-medium capitalize">{s}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
