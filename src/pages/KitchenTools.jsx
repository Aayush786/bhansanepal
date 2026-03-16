import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../utils/LanguageContext';
import { ArrowLeft, BookOpen, Sparkles, UtensilsCrossed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TOOLS = [
  {
    id: "tawa",
    name: "Tawa",
    nameNp: "तावा",
    description: "A flat or slightly concave circular griddle, usually made of cast iron or aluminum, used for making flatbreads.",
    useCase: "Perfect for Sel Roti, Chapati, and Marini.",
    features: ["Heat retention", "Non-stick seasoning", "Heavy-duty"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tawa_Iron_Pan.jpg/800px-Tawa_Iron_Pan.jpg"
  },
  {
    id: "karai",
    name: "Karai (Kadhai)",
    nameNp: "कराई",
    description: "A deep, thick-walled cooking pot similar to a wok but with steeper sides. Essential for deep frying and curries.",
    useCase: "Used for deep-frying Sel Roti, making Goat Curry, and sautéing vegetables.",
    features: ["Distributes heat evenly", "Deep volume", "Strong handles"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kadai_cooking_pot.jpg/800px-Kadai_cooking_pot.jpg"
  },
  {
    id: "chakla-belan",
    name: "Chakla Belan",
    nameNp: "चकला बेलन",
    description: "The pair of a circular rolling board (Chakla) and a rolling pin (Belan). Usually made of wood or marble.",
    useCase: "Used to roll out dough for Roti, Sel Roti, and various snacks.",
    features: ["Smooth surface", "Ergonomic pin", "Durable wood"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chakla_belan.jpg/800px-Chakla_belan.jpg"
  },
  {
    id: "khal-musal",
    name: "Khal Musal (Okhli)",
    nameNp: "खल मुसल",
    description: "A traditional mortar and pestle used for crushing spices and making fresh ginger-garlic paste.",
    useCase: "Essential for fresh masalas in every Nepali curry.",
    features: ["Coarse grinding", "Stone or Metal", "Heavy base"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stone_mortar_and_pestle_01.jpg/800px-Stone_mortar_and_pestle_01.jpg"
  },
  {
    id: "deka",
    name: "Deka / Kasaundi",
    nameNp: "डेक्ची / कसौंडी",
    description: "Large brass or copper pots used for slow-cooking rice, dals, or large quantities of meat during feasts.",
    useCase: "Ideal for slow-simmered dishes and cultural gatherings.",
    features: ["Brass construction", "Heat retention", "Large capacity"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Copper_pot_India.jpg/800px-Copper_pot_India.jpg"
  }
];

export default function KitchenTools() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 animate-in fade-in duration-700">
      <Helmet>
        <title>Traditional Nepali Kitchen Tools Guide | Bhansa Nepal</title>
        <meta name="description" content="Learn about Tawa, Karai, Chakla Belan and other traditional tools used in Nepali cooking. A guide for beginners and enthusiasts." />
      </Helmet>

      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-gray-500 hover:text-brand-700 font-semibold transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
        {t('back')}
      </button>

      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-4">
          <UtensilsCrossed className="w-4 h-4" />
          <span>The Traditional Kitchen</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
          Nepali <span className="text-brand-600">Kitchen Tools</span> Encyclopedia
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Mastering Nepali cuisine starts with understanding our traditional tools. Discover the heart of the Nepali kitchen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TOOLS.map((tool) => (
          <div key={tool.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-50 hover:shadow-2xl hover:border-brand-200 transition-all group flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={tool.image} 
                alt={tool.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-display font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {tool.name}
                </h2>
                <span className="text-brand-600 font-display font-bold bg-brand-50 px-3 py-1 rounded-lg">
                  {tool.nameNp}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed flex-1 italic text-sm font-medium">
                "{tool.description}"
              </p>

              <div className="bg-brand-50 rounded-2xl p-5 mb-6">
                <h3 className="text-xs font-bold text-brand-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" /> Best Used For
                </h3>
                <p className="text-sm font-semibold text-brand-700">
                  {tool.useCase}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tool.features.map((feature, fIdx) => (
                  <span key={fIdx} className="bg-white px-3 py-1 rounded-full text-[10px] font-black text-gray-400 border border-gray-100 uppercase tracking-wider">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Tip Section */}
      <div className="mt-20 bg-gradient-to-br from-brand-900 to-brand-800 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3">
               <h2 className="text-3xl md:text-4xl font-display font-black mb-6">Pro Tip for Foreign Cooks</h2>
               <p className="text-brand-100 text-lg font-medium leading-relaxed mb-8">
                 While modern equivalents like woks or standard frying pans work, using cast-iron tools like a thick **Karai** ensures the high-heat retention needed for that authentic charred and spiced flavor characteristic of Himalayan cooking.
               </p>
               <div className="flex gap-4">
                  <span className="bg-brand-700 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10 italic">Traditional Mastery</span>
                  <span className="bg-brand-700 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10 italic">Heritage Flavors</span>
               </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/10 flex items-center justify-center p-4">
                  <UtensilsCrossed className="w-16 h-16 md:w-24 md:h-24 text-brand-300 opacity-50" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
