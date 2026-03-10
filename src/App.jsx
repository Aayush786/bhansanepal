import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import ShoppingList from "./pages/ShoppingList";
import Blog from "./pages/Blog";
import Festivals from "./pages/Festivals";
import Sitemap from "./pages/Sitemap";
import KitchenTools from "./pages/KitchenTools";
import { useLanguage } from "./utils/LanguageContext";
import { UtensilsCrossed, PlusCircle, ShoppingCart, BookOpen, Globe, List } from 'lucide-react';

function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-50 w-full overflow-x-hidden flex flex-col">
        {/* Simple Navbar */}
        <nav className="glass-panel sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-display font-bold text-brand-700 flex items-center gap-2">
            <span className="text-brand-900">🌶️</span> Bhansa Nepal
          </div>
          <div className="flex gap-6 font-medium text-brand-800 items-center">
            <a href="/" className="hover:text-brand-900 transition-colors">{t('nav_discover')}</a>
            <a href="/festivals" className="hover:text-brand-900 transition-colors">{t('nav_festivals') || "Festivals"}</a>
            <a href="/kitchen-tools" className="hover:text-brand-900 transition-colors">{t('nav_tools') || "Kitchen Tools"}</a>
            <a href="/blog" className="hover:text-brand-900 transition-colors">{t('nav_blog')}</a>
            <a href="/add-recipe" className="hover:text-brand-900 transition-colors">{t('nav_submit_recipe')}</a>
            <a href="/shopping-list" className="hover:text-brand-900 transition-colors flex items-center gap-1">
               <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full text-xs font-bold">🛒 {t('nav_shopping_list')}</span>
            </a>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 ml-2 px-3 py-1.5 bg-brand-100/50 text-brand-800 font-bold rounded-lg border border-brand-200 hover:bg-brand-200 transition-colors shadow-sm"
            >
              <Globe className="w-4 h-4 text-brand-600" />
              {language === 'en' ? 'NP' : 'EN'}
            </button>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:slug" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/kitchen-tools" element={<KitchenTools />} />
          </Routes>
        </main>

        {/* Footer with Sitemap */}
        <footer className="glass-panel mt-20 py-8 border-t border-brand-100">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center transition-all">
            <div className="text-brand-900 font-display font-bold">© 2026 Bhansa Nepal</div>
            <div className="flex gap-6 text-sm font-medium text-brand-600">
              <a href="/sitemap" className="hover:text-brand-900 flex items-center gap-1.5">
                <List className="w-4 h-4" /> Recipes Index (Sitemap)
              </a>
              <a href="/blog" className="hover:text-brand-900">Articles</a>
              <a href="/festivals" className="hover:text-brand-900">Cultural Guide</a>
              <a href="/kitchen-tools" className="hover:text-brand-900">Kitchen Tools</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
