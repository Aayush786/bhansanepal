import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import { mockRecipes } from '../data/mockRecipes';
import { Calendar, Sparkles, Utensils, ArrowRight } from 'lucide-react';

const FESTIVALS = [
  {
    name: "Dashain",
    nameNp: "दशैं",
    description: "The biggest Hindu festival in Nepal, celebrating the victory of good over evil. Families gather for blessings and feast on various meat dishes.",
    foods: ["Goat Curry (Khasi ko Masu)", "Sel Roti", "Mutton Pakku", "Aloo Dum", "Phulpati special Thali"],
    icon: "🏮"
  },
  {
    name: "Tihar",
    nameNp: "तिहार",
    description: "The festival of lights. It's famous for sweet dishes and honoring animals and brothers.",
    foods: ["Sel Roti", "Anarsa", "Fini Roti", "Chini Roti", "Kheer"],
    icon: "🪔"
  },
  {
    name: "Maghe Sankranti",
    nameNp: "माघे संक्रान्ति",
    description: "Marking the end of the winter solstice. This festival is all about energy-giving foods.",
    foods: ["Til Laddoo", "Chaku (Molasses)", "Ghyu (Ghee)", "Tarul (Yam)", "Khichadi"],
    icon: "❄️"
  },
  {
    name: "Indra Jatra / Yenya",
    nameNp: "इन्द्र जात्रा",
    description: "One of the most exciting Newari festivals in Kathmandu, featuring masked dances and the chariot of the Living Goddess Kumari.",
    foods: ["Samay Baji", "Aila (Local Wine)", "Choila", "Bara", "Chatamari"],
    icon: "🎭"
  },
  {
    name: "Janai Purnima",
    nameNp: "जनै पूर्णिमा",
    description: "The festival of sacred threads and bonds. It is traditionally celebrated by eating a special sprout soup.",
    foods: ["Kwati (9-bean sprout soup)", "Sel Roti", "Aloo ko Achar"],
    icon: "📿"
  },
  {
    name: "Holi",
    nameNp: "होली",
    description: "The festival of colors and spring. People celebrate with water, colors, and various snacks.",
    foods: ["Malpua", "Guidia", "Thandai", "Dahi Vada"],
    icon: "🎨"
  },
  {
    name: "Yomari Punhi",
    nameNp: "योमरी पुन्ही",
    description: "A Newari festival marking the end of the rice harvest.",
    foods: ["Yomari (Chaku or Khuwa filling)", "Bean soup"],
    icon: "🥟"
  }
];

export default function Festivals() {
  const { language, t } = useLanguage();

  // Helper to find recipe slug by title (fuzzy match)
  const getRecipeSlug = (foodName) => {
    const cleanName = foodName.toLowerCase().split('(')[0].trim();
    const recipe = mockRecipes.find(r => 
      r.title.toLowerCase().includes(cleanName) || 
      r.nepaliTitle.includes(cleanName)
    );
    return recipe ? recipe.slug : null;
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 animate-in fade-in duration-700">
      <Helmet>
        <title>Nepali Festival Food Guide | Bhansa Nepal</title>
        <meta name="description" content="Discover the traditional foods tied to Nepal's vibrant festivals. From Dashain meats to Tihar sweets." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-4">
          <Calendar className="w-4 h-4" />
          <span>Cultural Food Guide</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6">
          Nepal's <span className="text-brand-600">Festival Food</span> Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          In Nepal, every festival has its own signature dish. Explore the diverse flavors that celebrate our heritage.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {FESTIVALS.map((festival, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-brand-50 hover:shadow-2xl hover:border-brand-200 transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-4xl mb-4 block">{festival.icon}</span>
                <h2 className="text-3xl font-display font-bold text-gray-900">
                  {language === 'np' ? festival.nameNp : festival.name}
                </h2>
              </div>
              <Sparkles className="text-brand-300 group-hover:text-brand-500 transition-colors" />
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed font-semibold">
              {festival.description}
            </p>

            <div className="bg-brand-50 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Utensils className="w-4 h-4" /> Traditional Foods
              </h3>
              <div className="flex flex-wrap gap-2">
                {festival.foods.map((food, fIdx) => {
                  const slug = getRecipeSlug(food);
                  return slug ? (
                    <Link 
                      key={fIdx}
                      to={`/recipe/${slug}`}
                      className="bg-white px-4 py-1.5 rounded-full text-brand-700 text-sm font-bold shadow-sm border border-brand-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white transition-all flex items-center gap-2 group/food"
                    >
                      {food} <ArrowRight className="w-3 h-3 opacity-0 group-hover/food:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <span key={fIdx} className="bg-white/50 px-4 py-1.5 rounded-full text-gray-500 text-sm font-bold border border-gray-100">
                      {food}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Section */}
      <div className="mt-20 bg-gradient-to-r from-brand-900 to-brand-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-8 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
         </div>
         <h2 className="text-3xl md:text-4xl font-display font-black mb-6 relative z-10">Celebrating Through Cuisine</h2>
         <p className="text-brand-100 text-lg max-w-xl mx-auto mb-8 relative z-10 leading-relaxed">
           Food is the soul of Nepali culture. These dishes aren't just meals; they are stories of ancestors, harvest, and community.
         </p>
         <button 
           onClick={() => window.location.href = '/'}
           className="bg-white text-brand-900 font-extrabold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl relative z-10"
         >
           Explore All Recipes
         </button>
      </div>
    </div>
  );
}
