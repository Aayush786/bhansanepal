import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../utils/LanguageContext';
import { mockRecipes } from '../data/mockRecipes';
import { ArrowLeft, Clock, BarChart, MapPin, CheckCircle2, Lightbulb, ShoppingCart, MessageSquare, PlayCircle, Star } from 'lucide-react';
import { useState } from 'react';

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const recipe = mockRecipes.find(r => r.id === id);
  
  // Track checked steps for interactive cooking
  const [checkedSteps, setCheckedSteps] = useState(new Set());
  const [addedItems, setAddedItems] = useState(new Set());
  const [servings, setServings] = useState(recipe.baseServings || 4);

  const scaleIngredient = (ingredient) => {
    const factor = servings / (recipe.baseServings || 4);
    return ingredient.replace(/(\d+(\.\d+)?)/g, (match) => {
      const num = parseFloat(match);
      const scaled = num * factor;
      return Math.round(scaled * 10) / 10;
    });
  };

  const addIngredientToList = (ingredient) => {
    const list = JSON.parse(localStorage.getItem('bhansaShoppingList') || '[]');
    list.push({ name: ingredient, recipeTitle: recipe.title, checked: false });
    localStorage.setItem('bhansaShoppingList', JSON.stringify(list));
    
    // UI Feedback
    const newAdded = new Set(addedItems);
    newAdded.add(ingredient);
    setAddedItems(newAdded);
  };

  if (!recipe) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-display font-bold text-gray-900">Recipe not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-brand-600 hover:text-brand-800 font-semibold gap-2 flex items-center justify-center mx-auto">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>
    );
  }

  const toggleStep = (index) => {
    const newSteps = new Set(checkedSteps);
    if (newSteps.has(index)) {
      newSteps.delete(index);
    } else {
      newSteps.add(index);
    }
    setCheckedSteps(newSteps);
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <Helmet>
        <title>Authentic {recipe.title} Recipe | Bhansa Nepal</title>
        <meta name="description" content={`Learn how to cook authentic ${recipe.title}. Detailed step-by-step ${recipe.category} recipe from Nepal.`} />
        <meta name="keywords" content={`${recipe.title} recipe, Nepali ${recipe.category}, how to make ${recipe.title}, Nepali food`} />
      </Helmet>
      
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 text-gray-500 hover:text-brand-700 font-semibold transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
        {t('back')}
      </button>

      {/* Hero Header */}
      <div className="relative h-80 md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl mb-8 group">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-8 w-full">
          {recipe.isGrandmaRecipe && (
            <span className="inline-block bg-brand-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-md border border-white/20">
              👵 Grandma's Secret Recipe
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2 drop-shadow-lg">
            {recipe.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-200 font-medium drop-shadow-md mb-4">
            {recipe.nepaliTitle}
          </p>
          
          {recipe.rating && (
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md w-max px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-bold">{recipe.rating}</span>
              <span className="text-brand-200 text-sm">({recipe.reviews} reviews)</span>
            </div>
          )}
        </div>
      </div>

      {/* Meta Info Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-10 flex flex-wrap justify-between items-center gap-6">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {t('prep_time')}</span>
            <span className="text-lg font-bold text-gray-900">{recipe.prepTime}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"><BarChart className="w-3.5 h-3.5"/> {t('difficulty')}</span>
            <span className="text-lg font-bold text-gray-900">{t(recipe.difficulty) || recipe.difficulty}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5"/> {t('region')}</span>
            <span className="text-lg font-bold text-brand-600">{recipe.region}</span>
          </div>
        </div>

        {/* Servings Selector */}
        <div className="flex flex-col items-center md:items-end gap-2 bg-brand-50 p-4 rounded-xl border border-brand-100">
           <span className="text-brand-900 text-xs font-bold uppercase tracking-widest">{t('servings')}</span>
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="w-10 h-10 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-700 font-bold hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              >
                -
              </button>
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-2xl font-display font-black text-brand-900">{servings}</span>
                <span className="text-[10px] font-bold text-brand-600 uppercase">{t('people')}</span>
              </div>
              <button 
                onClick={() => setServings(servings + 1)}
                className="w-10 h-10 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-700 font-bold hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              >
                +
              </button>
           </div>
        </div>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed font-medium mb-12 px-2 border-l-4 border-brand-500 pl-6 italic bg-brand-50 py-4 rounded-r-2xl">
        {recipe.description}
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Sidebar: Ingredients */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-brand-100/50 border border-brand-100 sticky top-24">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-brand-600">🛒</span> {t('ingredients')}
            </h2>
            <ul className="space-y-4">
              {recipe.ingredients.map((ing, idx) => {
                const isAdded = addedItems.has(ing);
                return (
                  <li key={idx} className="flex items-start justify-between gap-3 group">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-2 h-2 rounded-full bg-brand-300 mt-2 group-hover:bg-brand-600 transition-colors"></div>
                      <span className="text-gray-700 font-medium">{scaleIngredient(ing)}</span>
                    </div>
                    {!isAdded ? (
                      <button onClick={() => addIngredientToList(ing)} className="opacity-0 group-hover:opacity-100 p-1.5 text-brand-600 hover:bg-brand-50 rounded-lg transition-all" title="Add to Shopping List">
                        <ShoppingCart className="w-4 h-4"/>
                      </button>
                    ) : (
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">{t('added')}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Main Content: Steps & Tips */}
        <div className="md:col-span-2 space-y-10">
          
          {/* Instructions */}
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="text-brand-600">👨‍🍳</span> {t('instructions')}
            </h2>
            <div className="space-y-6">
              {(language === 'np' && recipe.nepaliSteps ? recipe.nepaliSteps : recipe.steps).map((step, idx) => {
                const isChecked = checkedSteps.has(idx);
                return (
                  <div 
                    key={idx} 
                    onClick={() => toggleStep(idx)}
                    className={`flex gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isChecked 
                        ? 'bg-brand-50 border-brand-200 opacity-60' 
                        : 'bg-white border-transparent shadow-sm hover:shadow-md hover:border-brand-100'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {isChecked ? (
                        <CheckCircle2 className="w-8 h-8 text-brand-500" />
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-brand-300 flex items-center justify-center font-bold text-brand-500 bg-brand-50">
                          {idx + 1}
                        </div>
                      )}
                    </div>
                    <p className={`text-lg transition-all duration-300 flex-1 pt-1 ${isChecked ? 'text-gray-400 line-through decoration-brand-300' : 'text-gray-800 font-medium'}`}>
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
            
            {recipe.videoUrl && (
              <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-900 group relative">
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-sm font-semibold">
                  <PlayCircle className="w-4 h-4 text-brand-400" /> {t('watch_tutorial')}
                </div>
                {/* Embedded Video Placeholder */}
                <iframe 
                  className="w-full aspect-video opacity-90 group-hover:opacity-100 transition-opacity"
                  src={recipe.videoUrl} 
                  title="Recipe Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Tips Section */}
          {recipe.tips && recipe.tips.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200/50 shadow-inner">
              <h3 className="text-xl font-display font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                {t('chef_tips')}
              </h3>
              <ul className="space-y-3">
                {recipe.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-amber-800 font-medium text-sm">
                    <span className="text-amber-500 mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Comments Section */}
          <div className="mt-12 mb-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-brand-600" />
              {t('community_reviews')}
            </h3>
            
            {recipe.comments && recipe.comments.length > 0 ? (
              <div className="space-y-5">
                {recipe.comments.map((comment, idx) => (
                   <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold shrink-0">
                       {comment.user.charAt(0)}
                     </div>
                     <div>
                       <div className="flex items-baseline gap-2 mb-1">
                         <span className="font-bold text-gray-900">{comment.user}</span>
                         <span className="text-xs text-gray-400">{comment.date}</span>
                       </div>
                       <p className="text-gray-700">{comment.text}</p>
                     </div>
                   </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-gray-500">
                Be the first to review this recipe!
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
