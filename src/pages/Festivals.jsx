import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../utils/LanguageContext';
import { ArrowLeft, Calendar, Utensils, Info } from 'lucide-react';

const festivalsData = [
  {
    name: "Dashain",
    nameNp: "दशैं",
    description: "The biggest Hindu festival in Nepal, celebrating the victory of good over evil.",
    foods: [
      { name: "Mutton Curry (Masu)", desc: "Slow-cooked goat meat with rich spices." },
      { name: "Sel Roti", desc: "Ring-shaped sweet fried rice bread." },
      { name: "Chiura", desc: "Beaten rice served with meat and curries." }
    ]
  },
  {
    name: "Tihar",
    nameNp: "तिहार",
    description: "The festival of lights, honoring animals and the bond between siblings.",
    foods: [
      { name: "Sel Roti", desc: "Crispy and sweet, essential for Tihar." },
      { name: "Anarsa", desc: "Traditional sweet biscuit made of rice flour and sugar." },
      { name: "Fini Roti", desc: "Multi-layered flaky bread, often colorful." }
    ]
  },
  {
    name: "Maghe Sankranti",
    nameNp: "माघे संक्रान्ति",
    description: "Marks the end of the winter solstice and the beginning of warmer days.",
    foods: [
      { name: "Til Laddoo", desc: "Sesame seed balls bonded with jaggery." },
      { name: "Chaku", desc: "Concentrated sugarcane juice, boiled and hardened." },
      { name: "Ghiu & Chaku", desc: "Clarified butter and molasses, eaten for warmth." },
      { name: "Tarul", desc: "Boiled yam, a staple for this day." }
    ]
  },
  {
    name: "Indra Jatra",
    nameNp: "इन्द्र जात्रा",
    description: "A major festival of the Newar community in Kathmandu Valley.",
    foods: [
      { name: "Samay Baji", desc: "A traditional platter with chiura, choila, bara, and more." },
      { name: "Aila", desc: "Traditional home-brewed rice wine." },
      { name: "Haku Choila", desc: "Roasted spicy black meat." }
    ]
  },
  {
    name: "Janai Purnima",
    nameNp: "जनै पूर्णिमा",
    description: "The festival where sacred threads are changed and family bonds are celebrated.",
    foods: [
      { name: "Kwati", desc: "A nutritious soup made of 9 types of sprouted beans." }
    ]
  },
  {
    name: "Yomari Punhi",
    nameNp: "योमरी पुन्ही",
    description: "A Newari festival marking the end of the rice harvest.",
    foods: [
      { name: "Yomari", desc: "Steamed rice flour dumplings filled with chaku or khuwa." }
    ]
  }
];

export default function Festivals() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      <Helmet>
        <title>Nepali Festival Food Guide | Bhansa Nepal</title>
        <meta name="description" content="Discover the traditional foods tied to Nepal's vibrant festivals, from Dashain Mutton Curry to Tihar Sel Roti." />
      </Helmet>

      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-gray-500 hover:text-brand-700 font-semibold transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
        {t('back')}
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-6 border border-brand-200">
            <Calendar className="w-4 h-4" />
            <span>Traditional Celebrations</span>
          </div>
          <h1 className="text-5xl font-display font-extrabold text-gray-900 mb-6">
            Nepal's <span className="text-brand-600">Festival Food</span> Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            In Nepal, every celebration is incomplete without its signature dish. Explore the rich culinary traditions of our festivals.
          </p>
        </div>

        <div className="space-y-12">
          {festivalsData.map((festival, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="md:flex">
                <div className="bg-brand-900 md:w-1/3 p-8 text-white flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                   <h2 className="text-3xl font-display font-bold mb-2 relative z-10">{festival.name}</h2>
                   <p className="text-brand-200 font-bold text-xl mb-4 relative z-10">{festival.nameNp}</p>
                   <p className="text-sm text-brand-100 relative z-10 leading-relaxed italic">
                     {festival.description}
                   </p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-brand-600" />
                    Festive Dishes
                  </h3>
                  
                  <div className="grid gap-4">
                    {festival.foods.map((food, fidx) => (
                      <div key={fidx} className="flex items-start gap-4 p-4 rounded-2xl bg-brand-50/50 border border-brand-100 hover:bg-brand-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brand-600 mt-2.5"></div>
                        <div>
                          <h4 className="font-bold text-gray-900">{food.name}</h4>
                          <p className="text-sm text-gray-600 font-medium">{food.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-brand-900 to-brand-800 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
           <Info className="w-12 h-12 text-brand-300 mx-auto mb-6" />
           <h2 className="text-3xl font-display font-bold mb-4">Did we miss something?</h2>
           <p className="text-brand-100 max-w-lg mx-auto mb-8 font-medium">
             Nepal's diversity means countless local festivals and dishes. Suggest a festival food to our community!
           </p>
           <button 
             onClick={() => navigate('/add-recipe')}
             className="bg-white text-brand-900 font-extrabold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-xl"
           >
             Submit a Festive Recipe
           </button>
        </div>
      </div>
    </div>
  );
}
