import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, CheckCircle2, Circle, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bhansaShoppingList') || '[]');
    setItems(stored);
  }, []);

  const toggleItem = (idx) => {
    const newItems = [...items];
    newItems[idx].checked = !newItems[idx].checked;
    setItems(newItems);
    localStorage.setItem('bhansaShoppingList', JSON.stringify(newItems));
  };

  const removeItem = (idx) => {
    const newItems = items.filter((_, i) => i !== idx);
    setItems(newItems);
    localStorage.setItem('bhansaShoppingList', JSON.stringify(newItems));
  };

  const clearCompleted = () => {
    const newItems = items.filter(i => !i.checked);
    setItems(newItems);
    localStorage.setItem('bhansaShoppingList', JSON.stringify(newItems));
  };

  return (
    <div className="max-w-2xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Helmet>
        <title>Shopping List | Organize Your Nepali Recipe Ingredients - Bhansa Nepal</title>
        <meta name="description" content="Keep track of ingredients for your favorite Nepali recipes. Create and manage your shopping list for authentic Nepali cooking." />
        <link rel="canonical" href="https://bhansanepal.com/shopping-list" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Link to="/" className="mb-6 flex items-center gap-2 text-gray-500 hover:text-brand-700 font-semibold transition-colors group">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
        Back to Home
      </Link>
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-100">
        <div className="bg-brand-600 p-8 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <ShoppingCart className="w-32 h-32 rotate-12" />
          </div>
          <h1 className="text-3xl font-display font-extrabold mb-2 relative z-10">Your Grocery List</h1>
          <p className="text-brand-100 font-medium relative z-10 flex items-center gap-2">
            <span>{items.filter(i => !i.checked).length} items remaining</span>
            {items.some(i => i.checked) && (
              <>
                 <span>•</span>
                 <button onClick={clearCompleted} className="underline hover:text-white transition-colors">Clear completed</button>
              </>
            )}
          </p>
        </div>

        <div className="p-6 md:p-8 min-h-[400px]">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 py-20">
              <ShoppingCart className="w-16 h-16 mb-4 opacity-50" />
              <p className="font-medium text-lg text-gray-500">Your shopping list is empty.</p>
              <p className="text-sm">Find a recipe and click "Add to List"!</p>
              <Link to="/" className="mt-6 px-6 py-2 bg-brand-100 text-brand-700 font-semibold rounded-full hover:bg-brand-200 transition-colors">
                Browse Recipes
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    item.checked ? 'bg-gray-50 border-transparent opacity-60' : 'bg-white border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md'
                  }`}
                >
                  <div 
                    className="flex items-center gap-4 flex-1 cursor-pointer"
                    onClick={() => toggleItem(idx)}
                  >
                    {item.checked ? (
                      <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300 shrink-0 group-hover:text-brand-300" />
                    )}
                    <div>
                      <span className={`text-lg transition-all ${item.checked ? 'text-gray-400 line-through decoration-brand-300' : 'text-gray-800 font-medium'}`}>
                        {item.name}
                      </span>
                      {item.recipeTitle && (
                         <div className="text-xs text-gray-400 mt-0.5">
                           from <span className="italic">{item.recipeTitle}</span>
                         </div>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(idx)}
                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors ml-4 shrink-0"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
