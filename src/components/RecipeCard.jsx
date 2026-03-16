import { Clock, BarChart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.slug}`} className="group hover-lift block bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100">
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
              {recipe.title}
            </h3>
            <p className="text-sm font-medium text-brand-500 mt-1">{recipe.nepaliTitle}</p>
          </div>
          <span className="text-xs font-semibold bg-brand-100 text-brand-700 px-2.5 py-1 rounded-full whitespace-nowrap">
            {recipe.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {recipe.description}
        </p>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500">
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
            <Clock className="w-4 h-4 text-brand-500" />
            {recipe.prepTime}
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
            <BarChart className="w-4 h-4 text-brand-500" />
            {recipe.difficulty}
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
            <MapPin className="w-4 h-4 text-brand-500" />
            {recipe.region}
          </div>
        </div>
      </div>
    </Link>
  );
}
