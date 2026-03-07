import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-50 w-full overflow-x-hidden">
        {/* Simple Navbar */}
        <nav className="glass-panel sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-display font-bold text-brand-700 flex items-center gap-2">
            <span className="text-brand-900">🌶️</span> Bhansa Nepal
          </div>
          <div className="flex gap-6 font-medium text-brand-800 items-center">
            <a href="/" className="hover:text-brand-900 transition-colors">Discover</a>
            <a href="/add-recipe" className="hover:text-brand-900 transition-colors">Submit Recipe</a>
            <a href="/shopping-list" className="hover:text-brand-900 transition-colors flex items-center gap-1">
               <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full text-xs font-bold">🛒 List</span>
            </a>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
