import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import ShoppingList from "./pages/ShoppingList";
import Blog from "./pages/Blog";
import Festivals from "./pages/Festivals";
import Sitemap from "./pages/Sitemap";
import KitchenTools from "./pages/KitchenTools";
import ScrollToTop from "./components/ScrollToTop";
import { useLanguage } from "./utils/LanguageContext";
import { UtensilsCrossed, PlusCircle, ShoppingCart, BookOpen, Globe, List, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-brand-900 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav_discover')}</Link>
      <Link to="/festivals" className="hover:text-brand-900 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav_festivals') || "Festivals"}</Link>
      <Link to="/kitchen-tools" className="hover:text-brand-900 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav_tools') || "Kitchen Tools"}</Link>
      <Link to="/blog" className="hover:text-brand-900 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav_blog')}</Link>
      <Link to="/add-recipe" className="hover:text-brand-900 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav_submit_recipe')}</Link>
      <Link to="/shopping-list" className="hover:text-brand-900 transition-colors flex items-center gap-1" onClick={() => setIsMenuOpen(false)}>
         <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">🛒 {t('nav_shopping_list')}</span>
      </Link>
    </>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-50 w-full overflow-x-hidden flex flex-col">
        {/* Responsive Navbar */}
        <nav className="glass-panel sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg">
          <Link to="/" className="text-xl md:text-2xl font-display font-bold text-brand-700 flex items-center gap-2 hover:scale-105 transition-transform shrink-0">
            <span className="text-brand-900">🌶️</span> Bhansa Nepal
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 font-semibold text-brand-800 items-center">
            <NavLinks />
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 ml-2 px-3 py-1.5 bg-brand-100/50 text-brand-800 font-bold rounded-lg border border-brand-200 hover:bg-brand-200 transition-colors shadow-sm shrink-0"
            >
              <Globe className="w-4 h-4 text-brand-600" />
              {language === 'en' ? 'NP' : 'EN'}
            </button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="px-2 py-1 bg-brand-100 text-brand-800 font-bold rounded border border-brand-200 text-xs"
              >
                {language === 'en' ? 'NP' : 'EN'}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-700 p-1 hover:bg-brand-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Slide-down Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-b border-brand-100 shadow-2xl flex flex-col p-6 gap-6 lg:hidden animate-in slide-in-from-top-4 duration-300 font-bold text-lg text-brand-800">
              <NavLinks />
            </div>
          )}
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
        <footer className="glass-panel mt-20 py-8 border-t border-brand-100 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 transition-all text-center md:text-left">
            <div className="text-brand-900 font-display font-bold">© 2026 Bhansa Nepal</div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-600">
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
