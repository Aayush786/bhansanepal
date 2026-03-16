import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../utils/LanguageContext';
import { mockRecipes } from '../data/mockRecipes';
import { ArrowLeft, Clock, BarChart, MapPin, CheckCircle2, Lightbulb, ShoppingCart, MessageSquare, PlayCircle, Star, Timer, Activity, Zap, Droplet, ArrowRight, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useState, useMemo } from 'react';
import RecipeCard from '../components/RecipeCard';
import { SUBSTITUTIONS } from '../data/substitutions';

export default function RecipeDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const recipe = mockRecipes.find(r => r.slug === slug);
  
  // Calculate related recipes
  const relatedRecipes = useMemo(() => {
    if (!recipe) return [];
    return mockRecipes
      .filter(r => r.category === recipe.category && r.id !== recipe.id)
      .slice(0, 3);
  }, [recipe]);

  // Track checked steps for interactive cooking
  const [checkedSteps, setCheckedSteps] = useState(new Set());
  const [addedItems, setAddedItems] = useState(new Set());
  const [servings, setServings] = useState(recipe.baseServings || 4);
  const [activeSubstitution, setActiveSubstitution] = useState(null);
  
  // Consolidated Timer State
  const [activeTimer, setActiveTimer] = useState(null); // { seconds: number, stepIndex: number }
  const [timeLeft, setTimeLeft] = useState(0);

  // Review State
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({ rating: 5, name: '', comment: '' });

  // Load reviews from localStorage
  useEffect(() => {
    if (recipe) {
      const storageKey = `reviews-${recipe.slug}`;
      const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
      setReviews(stored);
    }
  }, [recipe]);

  const submitReview = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const newReview = {
      id: Date.now(),
      rating: reviewForm.rating,
      name: reviewForm.name,
      comment: reviewForm.comment,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    
    // Save to localStorage
    const storageKey = `reviews-${recipe.slug}`;
    localStorage.setItem(storageKey, JSON.stringify(updatedReviews));
    
    // Reset form
    setReviewForm({ rating: 5, name: '', comment: '' });
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  useEffect(() => {
    let interval;
    if (activeTimer && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && activeTimer) {
      setActiveTimer(null);
      alert(`${t('timer_done') || 'Timer Done!'} for step ${activeTimer.stepIndex + 1}`);
    }
    return () => clearInterval(interval);
  }, [activeTimer, timeLeft, t]);

  const startTimer = (seconds, index) => {
    setActiveTimer({ seconds, stepIndex: index });
    setTimeLeft(seconds);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const parseTimer = (text) => {
    const match = text.match(/\[(\d+)\s*(min|hr)\]/);
    if (!match) return null;
    const value = parseInt(match[1]);
    const unit = match[2];
    return unit === 'hr' ? value * 3600 : value * 60;
  };

  const cleanStepText = (text) => {
    return text.replace(/\[(\d+)\s*(min|hr)\]/, '').trim();
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [recipe]);

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
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in slide-in-from-top-20 duration-700 ease-out">
      <Helmet>
        <title>{recipe.seoTitle || `${recipe.title} Recipe - Authentic Nepali Cuisine | Bhansa Nepal`}</title>
        <meta name="description" content={recipe.seoDescription || `Authentic ${recipe.title} recipe from Nepal. ${recipe.description} Learn how to make ${recipe.title} with step-by-step instructions and cooking timers.`} />
        <meta name="keywords" content={recipe.seoKeywords || `${recipe.title} recipe, Nepali ${recipe.category}, how to make ${recipe.title}, authentic Nepali food, ${recipe.region} cuisine, Nepali cooking, traditional recipes`} />
        <meta name="author" content="Bhansa Nepal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://bhansanepal.com/recipe/${recipe.slug}`} />
        <meta name="language" content="English" />
        <meta property="og:title" content={recipe.seoTitle || `${recipe.title} Recipe - Authentic Nepali Cuisine | Bhansa Nepal`} />
        <meta property="og:description" content={recipe.seoDescription || `Learn how to cook ${recipe.title} with this authentic Nepali recipe. Step-by-step instructions for traditional ${recipe.category}.`} />
        <meta property="og:image" content={recipe.image} />
        <meta property="og:url" content={`https://bhansanepal.com/recipe/${recipe.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={recipe.seoTitle || `${recipe.title} Recipe - Authentic Nepali Cuisine | Bhansa Nepal`} />
        <meta name="twitter:description" content={recipe.seoDescription || `Learn how to cook ${recipe.title} with this authentic Nepali recipe.`} />
        <meta name="twitter:image" content={recipe.image} />
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "name": recipe.title,
            "image": [recipe.image],
            "author": {
              "@type": "Person",
              "name": "Bhansa Nepal"
            },
            "datePublished": "2026-03-10",
            "description": recipe.description,
            "prepTime": "PT15M", 
            "totalTime": "PT" + (recipe.prepTime.includes('hr') ? recipe.prepTime.split(' ')[0] + 'H' : recipe.prepTime.split(' ')[0] + 'M'),
            "aggregateRating": reviews.length > 0 ? {
              "@type": "AggregateRating",
              "ratingValue": calculateAverageRating(),
              "reviewCount": reviews.length
            } : undefined,
            "keywords": `${recipe.title} recipe, Nepali food`,
            "recipeYield": `${recipe.baseServings} servings`,
            "recipeCategory": recipe.category,
            "recipeCuisine": "Nepali",
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": `${recipe.nutrition?.calories || 300} calories`,
              "proteinContent": recipe.nutrition?.protein || "10g"
            },
            "recipeIngredient": recipe.ingredients,
            "recipeInstructions": recipe.steps.map(s => ({
              "@type": "HowToStep",
              "text": s
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://bhansanepal.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": recipe.category,
              "item": `https://bhansanepal.com/sitemap#${recipe.category}`
            },{
              "@type": "ListItem",
              "position": 3,
              "name": recipe.title,
              "item": `https://bhansanepal.com/recipe/${recipe.slug}`
            }]
          })}
        </script>
      </Helmet>
      
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 text-gray-500 hover:text-brand-700 font-semibold transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
        {t('back')}
      </button>

      {/* SEO Breadcrumbs UI */}
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 bg-white/50 w-max px-4 py-2 rounded-full border border-brand-100/50">
        <a href="/" className="hover:text-brand-600 transition-colors">Home</a>
        <ArrowRight className="w-3 h-3" />
        <a href={`/sitemap#${recipe.category}`} className="hover:text-brand-600 transition-colors">{recipe.category}</a>
        <ArrowRight className="w-3 h-3" />
        <span className="text-brand-600 truncate max-w-[150px]">{recipe.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="relative h-80 md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl mb-8 group">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2 drop-shadow-lg">
            {recipe.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-200 font-medium drop-shadow-md mb-4">
            {recipe.nepaliTitle}
          </p>
        </div>
      </div>

      {/* Meta Info Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-10 flex flex-wrap justify-center md:justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-gray-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {t('prep_time')}</span>
            <span className="text-base md:text-lg font-bold text-gray-900">{recipe.prepTime}</span>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-gray-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"><BarChart className="w-3.5 h-3.5"/> {t('difficulty')}</span>
            <span className="text-base md:text-lg font-bold text-gray-900">{t(recipe.difficulty) || recipe.difficulty}</span>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-gray-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5"/> {t('region')}</span>
            <span className="text-base md:text-lg font-bold text-brand-600">{recipe.region}</span>
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

      <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8 px-2 border-l-4 border-brand-500 pl-6 italic bg-brand-50 py-4 rounded-r-2xl">
        {recipe.description}
      </p>

      {/* Nutrition Bar */}
      {recipe.nutrition && (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-brand-50 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
           <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
              <div className="bg-orange-500 p-2.5 rounded-xl text-white shadow-lg shadow-orange-500/30">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-orange-900 uppercase tracking-tighter">Calories</span>
                <span className="text-xl font-black text-orange-600">{recipe.nutrition.calories}</span>
              </div>
           </div>
           <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl">
              <div className="bg-blue-500 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/30">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-blue-900 uppercase tracking-tighter">Protein</span>
                <span className="text-xl font-black text-blue-600">{recipe.nutrition.protein}</span>
              </div>
           </div>
           <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl">
              <div className="bg-green-500 p-2.5 rounded-xl text-white shadow-lg shadow-green-500/30">
                <Droplet className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-green-900 uppercase tracking-tighter">Carbs</span>
                <span className="text-xl font-black text-green-600">{recipe.nutrition.carbs}</span>
              </div>
           </div>
           <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
              <div className="bg-purple-500 p-2.5 rounded-xl text-white shadow-lg shadow-purple-500/30">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-purple-900 uppercase tracking-tighter">Fat</span>
                <span className="text-xl font-black text-purple-600">{recipe.nutrition.fat || '5g'}</span>
              </div>
           </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-12">
        {/* Sidebar: Ingredients */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-brand-100/50 border border-brand-100 sticky top-24">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-brand-600">🛒</span> {t('ingredients')}
            </h2>
            <ul className="space-y-4">
              {(language === 'np' && recipe.nepaliIngredients ? recipe.nepaliIngredients : recipe.ingredients).map((ing, idx) => {
                const isAdded = addedItems.has(ing);
                const subKey = Object.keys(SUBSTITUTIONS).find(key => ing.toLowerCase().includes(key));
                const substitution = subKey ? SUBSTITUTIONS[subKey] : null;

                return (
                  <li key={idx} className="relative">
                    <div className="flex items-start justify-between gap-3 group p-2 rounded-xl hover:bg-brand-50/50 transition-all">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-2 h-2 rounded-full bg-brand-300 mt-2 group-hover:bg-brand-600 transition-colors"></div>
                        <div className="flex flex-col">
                          <span className="text-gray-700 font-medium">{scaleIngredient(ing)}</span>
                          {language === 'np' && recipe.ingredients[idx] && (
                            <span className="text-gray-500 text-sm">{recipe.ingredients[idx]}</span>
                          )}
                          {substitution && (
                            <button 
                              onClick={() => setActiveSubstitution(activeSubstitution === ing ? null : ing)}
                              className="text-[10px] uppercase tracking-widest font-bold text-brand-600 flex items-center gap-1 mt-1 hover:text-brand-800 transition-colors"
                            >
                              <HelpCircle className="w-3 h-3" /> {t('sub_no_ingredient')}
                            </button>
                          )}
                        </div>
                      </div>
                      {!isAdded ? (
                        <button onClick={() => addIngredientToList(ing)} className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 p-1.5 text-brand-600 hover:bg-brand-50 rounded-lg transition-all" title="Add to Shopping List">
                          <ShoppingCart className="w-4 h-4"/>
                        </button>
                      ) : (
                        <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">{t('added')}</span>
                      )}
                    </div>
                    
                    {/* Substitution Card */}
                    {activeSubstitution === ing && substitution && (
                      <div className="mt-2 ml-5 p-4 bg-gradient-to-br from-brand-900 to-brand-800 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-2 duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8"></div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-300 mb-2">{t('sub_title')}</h4>
                        <p className="text-xs font-bold mb-1 opacity-80">{t('sub_try_instead')}</p>
                        <p className="text-sm font-black text-white mb-2">{language === 'np' ? substitution.np : substitution.en}</p>
                        {substitution.note && (
                          <p className="text-[10px] italic text-brand-200 border-t border-white/10 pt-2">{substitution.note}</p>
                        )}
                        <button 
                          onClick={() => setActiveSubstitution(null)}
                          className="absolute top-2 right-2 text-white/50 hover:text-white"
                        >
                          ×
                        </button>
                      </div>
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
                const stepTimerSeconds = parseTimer(step);
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col p-5 rounded-2xl transition-all duration-300 border ${
                      isChecked 
                        ? 'bg-brand-50 border-brand-200 opacity-60' 
                        : 'bg-white border-transparent shadow-sm hover:shadow-md hover:border-brand-100'
                    }`}
                  >
                    <div className="flex gap-4 cursor-pointer" onClick={() => toggleStep(idx)}>
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
                        {cleanStepText(step)}
                      </p>
                    </div>

                    {/* Timer Integration */}
                    {stepTimerSeconds && !isChecked && (
                      <div className="mt-4 ml-12">
                        {activeTimer?.stepIndex === idx ? (
                          <div className="flex items-center gap-4 bg-brand-900 text-white px-4 py-2 rounded-xl w-max shadow-lg animate-pulse">
                            <Timer className="w-5 h-5" />
                            <span className="font-mono text-xl font-bold">{formatTime(timeLeft)}</span>
                            <button 
                              onClick={() => {setActiveTimer(null); setTimeLeft(0);}}
                              className="bg-white/20 hover:bg-white/30 p-1 rounded-lg text-xs font-bold"
                            >
                              STOP
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => startTimer(stepTimerSeconds, idx)}
                            className="flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-xl hover:bg-brand-600 hover:text-white transition-all font-bold text-sm"
                          >
                            <Timer className="w-4 h-4" />
                            Start Timer ({step.match(/\[(.*?)\]/)[1]})
                          </button>
                        )}
                      </div>
                    )}
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

          {/* Reviews Section */}
          <div className="mt-12 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-brand-600" />
                {t('community_reviews') || 'Community Reviews'}
              </h3>
              {reviews.length > 0 && (
                <div className="flex items-center gap-2 bg-brand-50 px-4 py-2 rounded-full border border-brand-200">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-gray-900">{calculateAverageRating()}</span>
                  <span className="text-xs text-gray-500">({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})</span>
                </div>
              )}
            </div>

            {/* Review Submission Form */}
            <form onSubmit={submitReview} className="bg-gradient-to-br from-brand-50 to-white rounded-3xl p-8 border border-brand-100/50 mb-8 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Share Your Experience</h4>
              
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-brand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-600 transition-all"
                  />
                </div>

                {/* Rating Selector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Rating</label>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        className={`p-2 rounded-lg transition-all ${
                          reviewForm.rating >= star
                            ? 'text-yellow-400 bg-yellow-50'
                            : 'text-gray-300 hover:text-gray-400'
                        }`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review</label>
                  <textarea
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    placeholder="Share what you think about this recipe..."
                    rows="4"
                    className="w-full px-4 py-2 border border-brand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-600 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg active:scale-95"
                >
                  Submit Review
                </button>
              </div>
            </form>

            {/* Reviews List */}
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-lg shrink-0">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{review.name}</p>
                          <p className="text-xs text-gray-400">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No reviews yet. Be the first to share your experience!</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Internal Linking: Related Recipes */}
      {relatedRecipes.length > 0 && (
        <div className="mt-20 pt-16 border-t border-brand-100">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                {t('more_like_this') || 'More Like This'}
              </h2>
              <p className="text-gray-500 font-medium">Discover more authentic flavors from the {recipe.category} category.</p>
            </div>
            <a href="/sitemap" className="text-brand-600 font-bold flex items-center gap-2 hover:text-brand-800 transition-colors">
              {t('view_all') || 'View All Recipes'} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedRecipes.map(related => (
              <RecipeCard key={related.id} recipe={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

