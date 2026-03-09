export const RECIPE_CATEGORIES = [
  "Main Dishes",
  "Snacks / Street Food",
  "Sweets",
  "Traditional / Ethnic Food",
  "Drinks",
  "Simple Home Foods"
];

export const REGIONS = [
  "Kathmandu Valley",
  "Terai",
  "Himalayas",
  " पहाड (Hills)",
  "All Nepal",
  "Newa (Kathmandu)",
  "Tharu (Terai)"
];

// 50 Extensive Nepali Recipes Database
export const mockRecipes = [
  // --- MAIN DISHES ---
  {
    id: "1", title: "Dal Bhat Tarkari", nepaliTitle: "दाल भात तरकारी", category: "Main Dishes", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dal_Bhat_Tarkari_2.jpg", rating: 4.9, reviews: 1042, videoUrl: "",
    description: "The ultimate everyday Nepali meal consisting of steamed rice, lentil soup, and vegetable curry.",
    ingredients: [
  "500g Rice",
  "200g Yellow lentils (Dal)",
  "300g Seasonal vegetable (Cauliflower/Potato)",
  "1 tsp Turmeric",
  "1 tsp Cumin seeds",
  "1 tbsp Ghee"
],
    nutrition: { calories: 350, protein: "8g", carbs: "65g", fat: "6g" },
    baseServings: 4,
    steps: [
      "Wash rice thoroughly and boil in a pot with water ratio 1:2 until fluffy [20 min].",
      "Wash yellow lentils and pressure cook with turmeric and salt until soft [15 min].",
      "Heat ghee in a small pan, add cumin seeds until they splutter, and pour over the cooked lentils (Tadka).",
      "Chop seasonal vegetables and sauté with spices (turmeric, cumin, coriander) until tender [15 min].",
      "Serve hot rice, dal, and vegetable curry together on a traditional thali."
    ],
    nepaliSteps: [
      "चामललाई राम्ररी धोएर १:२ को अनुपातमा पानी राखेर नरम नहुन्जेल पकाउनुहोस् [२० मिनेट]।",
      "दाललाई धोएर बेसार र नुन हाली प्रेसर कुकरमा गलाउनुहोस् [१५ मिनेट]।",
      "सानो तावामा घिउ तताएर जिरा पड्काउनुहोस् र पाकेको दालमा झान्नुहोस्।",
      "मौसमी तरकारीलाई काटेर मसला (बेसार, जिरा, धनियाँ) हाली मध्यम आँचमा पकाउनुहोस् [१५ मिनेट]।",
      "भात, दाल र तरकारीलाई थालीमा सजाएर तातो-तातो पस्कनुहोस्।"
    ],
    tips: ["A dollop of ghee on the rice changes everything."]
  },
  {
    id: "2", title: "Gundruk ko Jhol", nepaliTitle: "गुन्द्रुक को झोल", category: "Main Dishes", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: true, region: " पहाड (Hills)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.8, reviews: 412, videoUrl: "",
    description: "A fermented leafy green soup, tangy and rich, a staple in the hilly regions.",
    ingredients: [
  "100g Gundruk (Fermented greens)",
  "1 medium Onion",
  "2 Tomatoes",
  "4 cloves Garlic",
  "50g Soybean",
  "3 Dry chilies"
],
    nutrition: { calories: 120, protein: "4g", carbs: "15g", fat: "5g" },
    baseServings: 4,
    steps: [
      "Soak gundruk in warm water for 10 minutes to soften it.",
      "Roast soybeans in a dry pan until they start to pop and turn brown [5 min].",
      "Heat mustard oil, fry chopped onions, garlic, and ginger until fragrant.",
      "Add chopped tomatoes and turmeric, cook until soft [5 min].",
      "Add soaked gundruk, roasted soybeans, and 3 cups of water. Simmer on medium heat [15 min].",
      "Serve hot with Dhido or steamed rice."
    ],
    nepaliSteps: [
      "गुन्द्रुकलाई नरम बनाउन १० मिनेट मनतातो पानीमा भिजाउनुहोस्।",
      "भटमासलाई सुक्खा कराामा रङ्ग बदलिउन्जेल भुट्नुहोस् [५ मिनेट]।",
      "तोरीको तेल तताएर प्याज, लसुन र अदुवा वासना आउन्जेल भुट्नुहोस्।",
      "टमाटर र बेसार हालेर नरम नहुन्जेल पकाउनुहोस् [५ मिनेट]।",
      "भिजाएको गुन्द्रुक, भुटेको भटमास र ३ कप पानी हालेर मध्यम आँचमा उमाल्नुहोस् [१५ मिनेट]।",
      "ढिँडो वा भातसँग तातो-तातो खानुहोस्।"
    ],
    tips: ["Roasted soybeans add a necessary crunch."]
  },
  {
    id: "3", title: "Dhido with Gundruk", nepaliTitle: "ढिंडो र गुन्द्रुक", category: "Main Dishes", prepTime: "40 mins", difficulty: "Hard", isGrandmaRecipe: true, region: " पहाड (Hills)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.7, reviews: 523, videoUrl: "",
    description: "Traditional porridge-like food made from buckwheat or millet flour, usually eaten hot without chewing.",
    ingredients: [
  "250g Millet or Buckwheat flour",
  "1 liter Water",
  "2 tbsp Ghee",
  "1 tsp Salt"
],
    nutrition: { calories: 450, protein: "12g", carbs: "80g", fat: "10g" },
    baseServings: 4,
    steps: [
      "Bring 1 liter of water to a rolling boil in a heavy-bottomed pan [10 min].",
      "Gradually add millet or buckwheat flour while continuously stirring with a spatula (Dabilo) to avoid lumps.",
      "Add a pinch of salt and a tablespoon of ghee for richness.",
      "Keep stirring and mashing the dough against the sides of the pan until it thickens and pulls away [15 min].",
      "Serve immediately with hot ghee and a side of Gundruk Jhol."
    ],
    nepaliSteps: [
      "बाक्लो भाँडोमा १ लिटर पानी मज्जाले उमाल्नुहोस् [१० मिनेट]।",
      "उम्लेको पानीमा कोदो वा फापरको पिठो अलि-अलि गर्दै हाल्नुहोस् र डबिलाले निरन्तर चलाइरहनुहोस्।",
      "स्वादका लागि थोरै नुन र एक चम्चा घिउ हाल्नुहोस्।",
      "पिठो बाक्लो भएर भाँडोको भित्ताबाट नछुटुन्जेल मज्जाले चलाइरहनुहोस् [१५ मिनेट]।",
      "तातो घिउ र गुन्द्रुकको झोलसँग तुरुन्तै पस्कनुहोस्।"
    ],
    tips: ["Requires immense arm strength to stir properly! Do not chew dhido, just swallow."]
  },
  {
    id: "4", title: "Thakali Khana Set", nepaliTitle: "थकाली खाना", category: "Main Dishes", prepTime: "1.5 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Himalayas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 5.0, reviews: 2041, videoUrl: "",
    description: "An iconic, meticulously prepared platter of rice, black dal, curries, and pickles from the Mustang region.",
    ingredients: [
  "500g Rice",
  "200g Black lentils",
  "1 tsp Jimbu (Himalayan herb)",
  "2 tbsp Ghee",
  "300g Mustang potatoes",
  "1/2 tsp Timur (Szechuan pepper)"
],
    nutrition: { calories: 600, protein: "25g", carbs: "90g", fat: "18g" },
    baseServings: 4,
    steps: [
      "Cook Sona Mansuli rice until perfectly fluffy and non-sticky [25 min].",
      "Soak black lentils for 2 hours, then slow cook until creamy [40 min].",
      "Heat ghee, add Jimbu herb until dark, and pour over the lentils for that signature aroma.",
      "Sauté Mustang potatoes with cumin, turmeric, and local spices until crispy [20 min].",
      "Prepare tomato and timur (Szechuan pepper) chutney by grinding them together.",
      "Arrange everything neatly on a brass thali with a dollop of fresh butter."
    ],
    nepaliSteps: [
      "चामललाई राम्ररी पखालेर भुसभुसे हुने गरी पकाउनुहोस् [२५ मिनेट]।",
      "कालो दाललाई २ घण्टा भिजाएर बाक्लो नहुन्जेल बिस्तारै पकाउनुहोस् [४० मिनेट]।",
      "घिउ तताएर जिम्बु डढाउनुहोस् र दालमा झान्नुहोस्।",
      "मुस्ताङे आलुलाई जिरा र स्थानीय मसला हालेर कुरकुरे हुने गरी भुट्नुहोस् [२० मिनेट]।",
      "टमाटर र टिमुरलाई सिलौटामा पिसेर अचार बनाउनुहोस्।",
      "काँसको थालीमा सबै परिकार सजाएर ताजा मख्खनसँग पस्कनुहोस्।"
    ],
    tips: ["The distinct flavor comes entirely from the Jimbu herb."]
  },
  {
    id: "5", title: "Aloo Tama", nepaliTitle: "आलु तामा", category: "Main Dishes", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Aloo_Bodi_Tama.jpg", rating: 4.6, reviews: 341, videoUrl: "",
    description: "A classic acidic and spicy curry made of bamboo shoots, potatoes, and black-eyed peas.",
    ingredients: [
  "150g Fermented bamboo shoots (Tama)",
  "3 medium Potatoes",
  "100g Black-eyed peas (Bodi)",
  "2 tbsp Mustard oil",
  "1 tsp Turmeric"
],
    nutrition: { calories: 180, protein: "8g", carbs: "25g", fat: "6g" },
    baseServings: 4,
    steps: [
      "Boil black-eyed peas and potatoes separately until tender [20 min].",
      "Heat mustard oil until smoking, fry bamboo shoots (Tama) for 5 minutes to reduce bitterness.",
      "Add cumin seeds, ginger-garlic paste, and chopped onions to the oil.",
      "Combine boiled potatoes, peas, and fried tama; add water to create a sour stew [15 min].",
      "Simmer with turmeric, chili powder, and salt until flavors meld."
    ],
    nepaliSteps: [
      "बोडी र आलुलाई छुट्टाछुट्टै नरम नहुन्जेल उसिन्नुहोस् [२० मिनेट]।",
      "तोरीको तेल तताएर तामालाई ५ मिनेट भुट्नुहोस् ताकि यसको कडा गन्ध हटोस्।",
      "तेलमा जिरा, अदुवा-लसुन पेस्ट र प्याज हालेर भुट्नुहोस्।",
      "उसिनेको आलु, बोडी र तामा मिसाउनुहोस् र झोल बनाउन पानी हाल्नुहोस् [१५ मिनेट]।",
      "बेसार, खुर्सानी र नुन हालेर स्वाद नमिलेसम्म उमाल्नुहोस्।"
    ],
    tips: ["Always fry the tama first; otherwise, the soup will be too bitter."]
  },
  {
    id: "6", title: "Kwati", nepaliTitle: "क्वाँटी", category: "Main Dishes", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Kwati_01.jpg", rating: 4.8, reviews: 189, videoUrl: "",
    description: "A hearty soup of 9 different sprouted beans, traditionally consumed during the Janai Purnima festival.",
    ingredients: [
  "500g 9 varieties of beans (sprouted)",
  "1 tsp Lovage seeds (Jwano)",
  "2 tbsp Ghee",
  "1 tbsp Ginger garlic paste"
],
    nutrition: { calories: 250, protein: "18g", carbs: "40g", fat: "4g" },
    baseServings: 4,
    steps: [
      "Soak 9 varieties of beans for 2-3 days until they sprout [72 hr].",
      "Pressure cook the sprouted beans with turmeric and ginger-garlic paste until soft [30 min].",
      "In a small pan, heat ghee and fry lovage seeds (jwano) until aromatic.",
      "Pour the hot ghee over the bean soup and simmer until the broth is thick and creamy [10 min].",
      "Serve hot, traditionally with a piece of roasted meat or beaten rice."
    ],
    nepaliSteps: [
      "९ थरिका गेडागुडीलाई २-३ दिनसम्म भिजाएर टुसा उमार्नुहोस् [७२ घण्टा]।",
      "टुसा उम्रेको क्वाँटीलाई बेसार र अदुवा-लसुन पेस्ट हालेर प्रेसर कुकरमा पकाउनुहोस् [३० मिनेट]।",
      "सानो कराहीमा घिउ तताएर ज्वानो फुराउनुहोस्।",
      "ज्वानो फुराएको घिउलाई क्वाँटीमा झान्नुहोस् र झोल बाक्लो नहुन्जेल उमाल्नुहोस् [१० मिनेट]।",
      "तातो-तातो पस्कनुहोस्।"
    ],
    tips: ["The longer the beans sprout, the sweeter the soup tastes."]
  },
  {
    id: "7", title: "Masu Bhat", nepaliTitle: "मासु भात", category: "Main Dishes", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Masu_Bhat.jpg", rating: 4.9, reviews: 932, videoUrl: "",
    description: "The beloved weekend special: rich mutton or chicken curry served over a mountain of white rice.",
    ingredients: [
  "1kg Mutton or Chicken (bone-in)",
  "500g Rice",
  "3 medium Onions",
  "2 Tomatoes",
  "2 tbsp Meat Masala",
  "4 tbsp Mustard oil"
],
    baseServings: 4,
    steps: ["Marinate meat with turmeric and salt.", "Fry onions in mustard oil until deeply caramelized brown.", "Add meat and fry until browned.", "Add tomatoes and spices, cook until oil separates.", "Add water to make a gravy and pressure cook until tender."],
    nepaliSteps: [
  "मासुमा बेसार र नुन हालेर मोल्नुहोस्।",
  "तोरीको तेलमा प्याज रातो/खैरो नहुन्जेल भुट्नुहोस्।",
  "मासु हालेर रङ्ग नबदलिउन्जेल भुट्नुहोस्।",
  "टमाटर र मसला हालेर तेल नछुटुन्जेल पकाउनुहोस्।",
  "पानी हालेर प्रेसर कुकरमा मासु नरम नहुन्जेल पकाउनुहोस् र भातसँग पस्कनुहोस्।"
],
    tips: ["Bone-in meat makes for a much more flavorful gravy."]
  },
  {
    id: "8", title: "Sukuti Fry", nepaliTitle: "सुकुटी फ्राई", category: "Main Dishes", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: " पहाड (Hills)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.7, reviews: 402, videoUrl: "",
    description: "Spicy and chewy dry buffalo meat pan-fried with tomatoes, onions, and heavy spices.",
    ingredients: [
  "200g Dry meat (Sukuti)",
  "2 Tomatoes",
  "1 large Onion",
  "3 Green chilies",
  "1 bunch Coriander"
],
    baseServings: 4,
    steps: ["Soak the dry meat in warm water for 10 minutes to soften slightly.", "Pound the meat lightly with a mortar.", "Fry chopped onions and chilies.", "Add the meat and fry on high heat.", "Add tomatoes and stir-fry until the moisture evaporates."],
    nepaliSteps: [
  "सुकुटीलाई नरम बनाउन १० मिनेट मनतातो पानीमा भिजाउनुहोस्।",
  "सुकुटीलाई खलमा राखेर अलि-अलि कुट्नुहोस्।",
  "प्याज र खुर्सानी तेलमा भुट्नुहोस्।",
  "सुकुटी हालेर ठूलो आँचमा भुट्नुहोस्।",
  "टमाटर हालेर पानी सुकुन्जेल राम्ररी चलाउनुहोस्।"
],
    tips: ["Pairs perfectly with puffed rice (Bhuja) or as a side to drinks."]
  },
  {
    id: "9", title: "Chicken Choila", nepaliTitle: "कुखुराको छोयला", category: "Main Dishes", prepTime: "40 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Nepali_Cuisine.jpg", rating: 4.8, reviews: 671, videoUrl: "",
    description: "A spectacularly spicy and smoky grilled chicken dish heavily seasoned with garlic, ginger, and mustard oil.",
    ingredients: [
  "500g Chicken breast/thigh",
  "3 tbsp Mustard oil",
  "1 tsp Fenugreek seeds (Methi)",
  "5 cloves Garlic",
  "1 inch Ginger",
  "4 Red dry chilies"
],
    baseServings: 4,
    steps: ["Boil or grill the chicken until cooked, then shred it into bite-sized pieces.", "Make a paste of roasted tomatoes, lots of garlic, and ginger.", "Mix the chicken with the paste.", "Heat mustard oil, fry fenugreek seeds until black, and pour the smoking oil over the chicken.", "Mix well and garnish with cilantro."],
    nepaliSteps: [
  "कुखुराको मासु उसिन्नुहोस् वा सेकाउनुहोस् र ससाना टुक्रा बनाउनुहोस्।",
  "पोलेको टमाटर, धेरै लसुन र अदुवाको पेस्ट बनाउनुहोस्।",
  "मासुलाई उक्त पेस्टसँग राम्ररी मोल्नुहोस्।",
  "तोरीको तेल तताएर मेथी कालो नहुन्जेल डढाउनुहोस् र मासुमा झान्नुहोस्।",
  "धनियाँ हालेर राम्ररी चलाउनुहोस्।"
],
    tips: ["The fenugreek must be completely blackened in the oil to get the authentic flavor."]
  },
  {
    id: "10", title: "Pork Sekuwa", nepaliTitle: "बंगुरको सेकुवा", category: "Main Dishes", prepTime: "2 hrs", difficulty: "Medium", isGrandmaRecipe: false, region: "Eastern Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Street_Food-_Sekuwa.jpg", rating: 4.7, reviews: 512, videoUrl: "",
    description: "Nepali style BBQ. Fatty pork marinated in a blend of Himalayan spices and roasted over a wood fire.",
    ingredients: [
  "1kg Pork belly/shoulder",
  "1 tbsp Garlic paste",
  "1 tbsp Ginger paste",
  "1 tsp Cumin powder",
  "1/2 tsp Szechuan pepper (Timur)",
  "1 tbsp Lemon juice"
],
    nutrition: { calories: 650, protein: "28g", carbs: "12g", fat: "55g" },
    baseServings: 4,
    steps: [
      "Cut pork into medium cubes and clean thoroughly.",
      "Mix with garlic paste, ginger paste, cumin powder, and timur. Marinate for at least 2 hours.",
      "Thread the meat onto wooden or metal skewers.",
      "Grill slowly over a natural charcoal fire, turning occasionally until charred and juicy [30 min].",
      "Brush with mustard oil while grilling for extra shine and flavor."
    ],
    nepaliSteps: [
      "बंगुरको मासुलाई मध्यम टुक्रामा काट्नुहोस् र राम्ररी धुनुहोस्।",
      "लसुन, अदुवाको पेस्ट, जिराको धुलो र टिमुर हालेर कम्तीमा २ घण्टा मोल्नुहोस्।",
      "मासुलाई सिकबामा उन्दै जानुहोस्।",
      "कोइलाको आँचमा बाहिर कुरकुरे र भित्र नरम हुने गरी बिस्तारै पोल्नुहोस् [३० मिनेट]।",
      "स्वाद र चमकका लागि पोल्दापोल्दै अलिअलि तोरीको तेल लगाउनुहोस्।"
    ],
    tips: ["Fatty cuts work best as the melting fat keeps the meat moist on the grill."]
  },

  // --- SNACKS / STREET FOOD ---
  {
    id: "11", title: "Buff Momo", nepaliTitle: "बफ म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Buff_Momo_1.jpg", rating: 5.0, reviews: 3102, videoUrl: "",
    description: "The undisputed king of Nepali street food. Steamed dumplings filled with spiced minced buffalo meat.",
    ingredients: [
  "500g Flour",
  "500g Minced buffalo meat",
  "2 Onions",
  "1 tbsp Cumin",
  "1 bunch Coriander",
  "2 tbsp Momo Masala"
],
    nutrition: { calories: 320, protein: "18g", carbs: "45g", fat: "9g" },
    baseServings: 4,
    trending: true,
    steps: [
      "Mix minced meat with chopped onions, momo masala, and oil. Let it rest for 20 minutes.",
      "Knead a smooth dough with flour and water, let it rest [30 min].",
      "Roll dough into small thin circles and place a spoonful of filling.",
      "Pleat the edges to seal the momo into traditional round or half-moon shapes.",
      "Layer momos in a steamer and steam over boiling water [15 min].",
      "Serve with spicy sesame and tomato chutney."
    ],
    nepaliSteps: [
      "किमामा मसिनो प्याज, म:म मसला र तेल हालेर मोल्नुहोस् र २० मिनेट राख्नुहोस्।",
      "पिठो मुछेर ३० मिनेटसम्म छोपेर राख्नुहोस्।",
      "पिठोलाई ससाना रोटी जस्तो बेलेर बीचमा किमा राख्नुहोस्।",
      "छेउ छेउबाट मोलेर म:मको आकार दिनुहोस्।",
      "म:म स्टिमरमा राखेर १५ मिनेटसम्म पकाउनुहोस् [१५ मिनेट]।",
      "पिरो गोलभेडा र तिलको अचारसँग पस्कनुहोस्।"
    ],
    tips: ["A fatty ratio in the minced meat makes the momos incredibly juicy."]
  },
  {
    id: "12", title: "Chicken Momo", nepaliTitle: "चिकेन म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Chicken_Momo_2.jpg", rating: 4.9, reviews: 2841, videoUrl: "",
    description: "Steamed chicken dumplings. Universally loved and lighter than buff momos.",
    ingredients: [
  "500g Flour",
  "500g Minced chicken",
  "2 Onions",
  "1 tbsp Ginger paste",
  "1 tbsp Garlic paste",
  "1 tbsp Soy sauce"
],
    baseServings: 4,
    steps: ["Prepare dough.", "Mix minced chicken with aromatics and soy sauce.", "Wrap the momos.", "Steam for 15 minutes.", "Serve smoking hot."],
    nepaliSteps: [
  "पिठो तयार पार्नुहोस्।",
  "कुखुराको किमामा अदुवा-लसुन पेस्ट र सोया सस हालेर मोल्नुहोस्।",
  "म:म बनाउनुहोस्।",
  "स्टिमरमा १५ मिनेट पकाउनुहोस्।",
  "तातो-तातो पस्कनुहोस्।"
],
    tips: ["Add a tablespoon of oil to the chicken mixture since chicken mince is usually lean."]
  },
  {
    id: "13", title: "Veg Momo", nepaliTitle: "भेज म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Veg_Momos_.jpg", rating: 4.6, reviews: 954, videoUrl: "",
    description: "Delicious steamed dumplings filled with finely chopped cabbage, carrots, paneer, and onions.",
    ingredients: [
  "500g Flour",
  "1/2 head Cabbage",
  "2 Carrots",
  "200g Paneer",
  "1 Onion",
  "2 tbsp Butter"
],
    baseServings: 4,
    steps: ["Finely chop all vegetables and squeeze out excess water.", "Mix veggies with crumbled paneer, melted butter, salt, and pepper.", "Wrap into dough balls.", "Steam for 10-12 minutes."],
    nepaliSteps: [
  "बन्दा र गाँजरलाई मसिनो गरी काट्नुहोस् र पानी निचोर्नुहोस्।",
  "तरकारीमा पनीर, घिउ, नुन र मरिच हालेर मोल्नुहोस्।",
  "म:म मोल्नुहोस्।",
  "१०-१२ मिनेटसम्म स्टिम गर्नुहोस्।"
],
    tips: ["Squeezing the water out of the cabbage is crucial, otherwise the momos will tear."]
  },
  {
    id: "14", title: "Chatpate", nepaliTitle: "चटपटे", category: "Snacks / Street Food", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Chatpate_7.jpg", rating: 4.8, reviews: 1120, videoUrl: "",
    description: "Explosively spicy, tangy, and crunchy street salad made with puffed rice and instant noodles.",
    ingredients: [
  "200g Puffed rice (Bhuja)",
  "1 pack Wai Wai noodles",
  "2 Boiled potatoes",
  "1 Onion",
  "1 Tomato",
  "2 Green chilies",
  "1 Lemon",
  "1 tbsp Mustard oil"
],
    nutrition: { calories: 280, protein: "6g", carbs: "50g", fat: "8g" },
    baseServings: 4,
    trending: true,
    steps: [
      "Chop potatoes, onions, tomatoes, and chilies into tiny cubes.",
      "In a large bowl, crush instant noodles (Wai Wai) into small pieces.",
      "Add puffed rice (Bhuja), chickpeas, and the chopped vegetables.",
      "Pour in raw mustard oil, lemon juice, chili powder, and black salt.",
      "Toss aggressively for 1 minute to ensure everything is coated evenly.",
      "Serve immediately in a paper cone while it's still crunchy."
    ],
    nepaliSteps: [
      "आलु, प्याज, टमाटर र खुर्सानीलाई ससाना टुक्रामा काट्नुहोस्।",
      "एउटा ठूलो भाँडोमा वाइवाइ चाउचाउलाई फुटाउनुहोस्।",
      "भुजा, चना र काटेका तरकारीहरू मिसाउनुहोस्।",
      "तोरीको तेल, कागतीको रस, खुर्सानी र बिरेनुन हाल्नुहोस्।",
      "सबै मसला मिल्ने गरी १ मिनेटसम्म मज्जाले हल्लाउनुहोस् वा चलाउनुहोस्।",
      "कुरकुरे हुँदै कागजको कोनीमा पस्कनुहोस्।"
    ],
    tips: ["A dash of raw mustard oil gives it the signature street food kick."]
  },
  {
    id: "15", title: "Aloo Chop", nepaliTitle: "आलु चप", category: "Snacks / Street Food", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Aloo_Fritters_-_Howrah_2015-04-26_8540.JPG", rating: 4.5, reviews: 432, videoUrl: "",
    description: "Spiced mashed potato patties, dipped in batter and deep-fried to crispy perfection.",
    ingredients: [
  "4 medium Potatoes",
  "1 Onion",
  "2 Green chillies",
  "1 cup Besan (Gram flour)",
  "1 tsp Cumin powder",
  "1/2 tsp Turmeric",
  "Oil for frying"
],
    baseServings: 4,
    steps: ["Boil and mash the potatoes.", "Mix with chopped onions, chillies, cumin, and salt.", "Form small flat patties.", "Make a thick batter using besan, water, and turmeric.", "Dip patties into batter and deep fry until golden."],
    nepaliSteps: [
  "आलुलाई उसिन्नुहोस् र मुछ्नुहोस्।",
  "काटेको प्याज, खुर्सानी, जिरा र नुन मिसाउनुहोस्।",
  "ससाना गोलो वा चेप्टो आकार बनाउनुहोस्।",
  "बेसार, पानी र बेसन हालेर बाक्लो घोल बनाउनुहोस्।",
  "आलुको टिकियालाई घोलमा चोपेर तातो तेलमा रातो हुन्जेल तार्नुहोस्।"
],
    tips: ["Serve with a sour tamarind chutney."]
  },
  {
    id: "16", title: "Pani Puri", nepaliTitle: "पानी पुरी", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Aloo_Tikki_Chaat.JPG", rating: 4.9, reviews: 1421, videoUrl: "",
    description: "Hollow, crispy fried dough balls stuffed with spicy potatoes and filled with tangy tamarind water.",
    ingredients: [
  "1 pack Puris (store-bought)",
  "3 Boiled potatoes",
  "100g White peas (Matar)",
  "2 tbsp Tamarind",
  "1 bunch Mint leaves",
  "1 tbsp Pani Puri Masala"
],
    baseServings: 4,
    steps: ["Mash boiled potatoes and peas with salt and chili powder.", "Prepare the spiced water by blending mint, tamarind paste, and masala.", "Crack a small hole in a puri, fill with potato mixture, and dunk in the spiced water.", "Eat it whole in one bite!"],
    nepaliSteps: [
  "उसिनेको आलु र मटरमा नुन र खुर्सानी हालेर मुछ्नुहोस्।",
  "पुदिना, अमिलो र मसला मिसाएर पानी तयार पार्नुहोस्।",
  "पुरीको बीचमा सानो प्वाल पारेर आलु भर्नुहोस् र पानीमा डुबाउनुहोस्।",
  "एकै पटकमा मुखमा हालेर खानुहोस्!"
],
    tips: ["The spiced water must be served ice cold."]
  },
  {
    id: "17", title: "Samosa", nepaliTitle: "समोसा", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Samosa_Nepal.jpg", rating: 4.7, reviews: 631, videoUrl: "",
    description: "Triangular pastry crust filled with savory spiced potatoes and green peas, deep fried.",
    ingredients: [
  "2 cups All-purpose flour",
  "3 Potatoes",
  "1/2 cup Green peas",
  "1 tsp Cumin seeds",
  "1 tsp Garam masala",
  "Oil for frying"
],
    baseServings: 4,
    steps: ["Knead flour with oil and water into a stiff dough.", "Cook mashed potatoes and peas with cumin and spices.", "Roll dough, cut in half, and fold into cones.", "Fill the cones with potato mix and seal the edges with water.", "Deep fry on low-medium heat until flaky and brown."],
    nepaliSteps: [
  "मैदामा तेल र पानी हालेर अलि कडा पिठो मुस्नुहोस्।",
  "आलु र केराउमा जिरा र मसला हालेर पकाउनुहोस्।",
  "पिठोलाई बेलेर बीचबाट आधा काट्नुहोस् र सोली (cone) जस्तो बनाउनुहोस्।",
  "भित्र आलु भरेर किनारामा पानी लगाई बन्द गर्नुहोस्।",
  "सानो आँचमा रातो र कुरकुरे नहुन्जेल तार्नुहोस्।"
],
    tips: ["Frying on high heat will cause the crust to blister and turn soft. Fry on low heat."]
  },
  {
    id: "18", title: "Bara (Wo)", nepaliTitle: "बारा (व:)", category: "Snacks / Street Food", prepTime: "12 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Bara_%2833428%29.jpg", rating: 4.6, reviews: 312, videoUrl: "",
    description: "A thick, savory pancake made from ground black lentils, crispy on the outside and spongy inside.",
    ingredients: [
  "250g Black lentils",
  "1 inch Ginger",
  "1 tsp Cumin powder",
  "4 tbsp Mustard oil",
  "2 Eggs"
],
    baseServings: 4,
    steps: ["Soak black lentils overnight and remove the skins.", "Grind into a thick, fluffy paste with ginger.", "Heat mustard oil in a flat pan.", "Pour a ladle of batter and spread into a thick circle.", "Cook both sides. Can top with an egg or minced meat before flipping."],
    nepaliSteps: [
  "मासको दाललाई रातभरि भिजाउनुहोस् र बोक्रा निकाल्नुहोस्।",
  "अदुवा हालेर बाक्लो र नरम हुने गरी पिस्नुहोस्।",
  "समथर तावामा तोरीको तेल तताउनुहोस्।",
  "दालको पेस्टलाई तावामा राखेर रोटी जस्तो फैलाउनुहोस्।",
  "दुवैतिर पकाउनुहोस्। माथिबाट फुल वा मासु पनि थप्न सकिन्छ।"
],
    tips: ["Whisking the batter vigorously traps air, making the Bara incredibly soft."]
  },
  {
    id: "19", title: "Nepali Pakoda", nepaliTitle: "प पकौडा", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.4, reviews: 290, videoUrl: "",
    description: "Onion and vegetable fritters made with gram flour, widely eaten during rainy days with tea.",
    ingredients: [
  "3 large Onions",
  "1.5 cups Besan (Gram flour)",
  "3 Green chilies",
  "1/2 tsp Turmeric",
  "1 tsp Carom seeds (Ajwain)"
],
    baseServings: 4,
    steps: ["Mix thinly sliced onions with besan, spices, and a tiny bit of water to form a sticky mass.", "Drop spoonfuls into hot oil.", "Deep fry until dark golden and crispy."],
    nepaliSteps: [
  "मसिनो गरी काटेको प्याजमा बेसन, मसला र थोरै पानी हालेर च्यापच्यापे बनाउनुहोस्।",
  "सानो सानो डल्ला पारेर तातो तेलमा हाल्नुहोस्।",
  "कडा र रातो नहुन्जेल तार्नुहोस्।"
],
    tips: ["Don't add too much water; the moisture from the onions is usually enough."]
  },
  {
    id: "20", title: "Street Chowmein", nepaliTitle: "चाउमिन", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Fried_Chowmein.jpg", rating: 4.8, reviews: 1432, videoUrl: "",
    description: "Nepali style stir-fried noodles, loaded with cabbage, carrots, soy sauce, and a distinct Momo masala flavor.",
    ingredients: [
  "250g Egg noodles",
  "1/4 head Cabbage",
  "1 Carrot",
  "1 Onion",
  "2 tbsp Soy sauce",
  "2 tbsp Ketchup",
  "1 tsp Momo Masala",
  "200g Chicken (optional)"
],
    baseServings: 4,
    steps: ["Boil the noodles until al dente.", "Stir fry chicken pieces and remove.", "Stir fry julienned vegetables on extremely high heat.", "Add the noodles, chicken, soy sauce, ketchup, and masala.", "Toss vigorously and serve hot."],
    nepaliSteps: [
  "चाउमिनलाई ठिक्क हुने गरी उसिन्नुहोस्।",
  "यदि मासु हाल्ने हो भने पहिले भुटेर निकाल्नुहोस्।",
  "धेरै तातो आँचमा तरकारीहरू भुट्नुहोस्।",
  "चाउमिन, मासु, सोया सस, केचप र म:म मसला हाल्नुहोस्।",
  "मज्जाले चलाउनुहोस् र तातो-तातो खानुहोस्।"
],
    tips: ["The ketchup adds that distinct sweet-tangy flavor found in Nepali street stalls."]
  },

  // --- SWEETS ---
  {
    id: "21", title: "Sel Roti", nepaliTitle: "सेल रोटी", category: "Sweets", prepTime: "2 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sel_roti%2C_Nepalese_food.jpg", rating: 4.8, reviews: 124, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Traditional Nepali festival bread made during Tihar. Sweet, crispy on the outside, soft inside.",
    ingredients: [
  "500g Rice flour",
  "1 cup Sugar",
  "2 tbsp Ghee",
  "2 ripe Bananas",
  "4 pods Cardamom",
  "Water"
],
    nutrition: { calories: 280, protein: "3g", carbs: "45g", fat: "12g" },
    baseServings: 4,
    trending: true,
    steps: [
      "Soak rice overnight, then grind into a slightly grainy, thick paste [12 hr].",
      "In a bowl, mix sugar, mashed bananas, and ghee into the rice paste until smooth.",
      "Heat a generous amount of oil or ghee in a deep flat-bottomed pan.",
      "Pour the batter in a continuous circular ring shape using your hands or a funnel.",
      "Deep fry on medium heat until the roti is reddish-brown and crispy [5 min].",
      "Flip and cook the other side, then drain and cool."
    ],
    nepaliSteps: [
      "चामललाई रातभरि भिजाउनुहोस् र पिसेर दानेदार लेदो बनाउनुहोस् [१२ घण्टा]।",
      "पिठोमा चिनी, मुछेको कोसेरा र घिउ हालेर राम्ररी फिट्नुहोस्।",
      "बाक्लो कराउमा पर्याप्त तेल वा घिउ तताउनुहोस्।",
      "हात वा सोलीको सहायताले गोलो घेरा बनाएर तातो तेलमा हाल्नुहोस्।",
      "मध्यम आँचमा रातो-खैरो र कुरकुरे नहुन्जेल ५ मिनेट तार्नुहोस् [५ मिनेट]।",
      "दुवैतिर पाकेपछि तेल निथारेर निकाल्नुहोस्।"
    ],
    tips: ["Batter consistency is key. If too thick, the roti is hard. If too thin, it loses shape."]
  },
  {
    id: "22", title: "Yomari", nepaliTitle: "योमरी", category: "Sweets", prepTime: "1.5 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Yomari_1.jpg", rating: 4.7, reviews: 156, videoUrl: "",
    description: "A Newari delicacy of steamed rice-flour dough filled with sweet chaku (molasses) or khuwa.",
    ingredients: [
  "500g Rice flour",
  "200g Chaku (Molasses) or Khuwa",
  "50g Sesame seeds",
  "Boiling water"
],
    baseServings: 4,
    steps: ["Make a smooth, soft dough using rice flour and boiling water.", "Melt chaku and mix with roasted sesame seeds.", "Mold a small piece of dough into a fig-like cone shape.", "Fill with the sweet mixture and pinch to seal the tail.", "Steam for 15-20 minutes."],
    nepaliSteps: [
  "चामलको पिठोमा उम्लेको पानी हालेर नरम पिठो मुस्नुहोस्।",
  "चाकुलाई पगालेर भुटेको तिलसँग मिसाउनुहोस्।",
  "पिठोलाई माथि चुच्चो भएको आकार (fig-like shape) दिनुहोस्।",
  "भित्र चाकुको मिश्रण भरेर राम्ररी बन्द गर्नुहोस्।",
  "१५-२० मिनेटसम्म स्टिम गर्नुहोस्।"
],
    tips: ["The water for the dough MUST be boiling hot to make the flour pliable."]
  },
  {
    id: "23", title: "Rice Kheer", nepaliTitle: "खीर", category: "Sweets", prepTime: "1 hr", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Kheer_Khane_Din_.jpg", rating: 4.9, reviews: 542, videoUrl: "",
    description: "A creamy, slow-cooked rice pudding enriched with milk, cashews, cardamom, and coconut.",
    ingredients: [
  "1 cup Taichin Rice",
  "2 liters Full-fat milk",
  "1/2 cup Sugar",
  "4 pods Cardamom",
  "50g Cashews",
  "25g Raisins",
  "2 tbsp Coconut flakes"
],
    baseServings: 4,
    steps: ["Wash the rice and fry it slightly in ghee.", "Boil the milk in a heavy bottomed pot.", "Add the rice to the boiling milk and lower the heat.", "Simmer for 45 minutes, stirring frequently until it thickens.", "Add sugar and dry fruits at the end."],
    nepaliSteps: [
  "चामललाई धोएर घिउमा हल्का भुट्नुहोस्।",
  "बाक्लो भाँडोमा दूध उमाल्नुहोस्।",
  "उम्लेको दूधमा चामल हालेर आँच सानो पार्नुहोस्।",
  "४५ मिनेटसम्म चलाउँदै पकाउनुहोस्।",
  "अन्त्यमा चिनी र सुक्खा फलफूल (काजु, किसमिस) हाल्नुहोस्।"
],
    tips: ["Cooking on low heat for a long time gives it a slightly pinkish hue and rich caramel flavor."]
  },
  {
    id: "24", title: "Pua", nepaliTitle: "पुवा", category: "Sweets", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: true, region: " पहाड (Hills)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Picturesque_Nepal_%281912%29_%2814779323084%29.jpg", rating: 4.5, reviews: 112, videoUrl: "",
    description: "A quick sweet snack made by roasting rice flour in ghee and boiling it with milk and sugar.",
    ingredients: [
  "2 cups Coarse rice flour",
  "4 tbsp Ghee",
  "1 liter Milk",
  "1/2 cup Sugar"
],
    baseServings: 4,
    steps: ["Heat a generous amount of ghee in a pan.", "Roast the coarse rice flour until golden brown and aromatic.", "Add sugar and pour warm milk over it.", "Cook until the liquid is absorbed and the mixture becomes crumbly and soft."],
    nepaliSteps: [
  "कराइमा प्रसस्त घिउ तताउनुहोस्।",
  "चामलको पिठोलाई रातो हुन्जेल र वासना आउन्जेल भुट्नुहोस्।",
  "चिनी हाल्नुहोस् र माथिबाट तातो दूध खन्याउनुहोस्।",
  "दूध सबै सोसिएर फुसफुसे वा नरम नहुन्जेल पकाउनुहोस्।"
],
    tips: ["Use coarse rice flour (not fine powder) to get the right texture."]
  },
  {
    id: "25", title: "Lal Mohan", nepaliTitle: "लाल मोहन", category: "Sweets", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Lal_Mohan.jpg", rating: 4.8, reviews: 432, videoUrl: "",
    description: "The Nepali version of Gulab Jamun. Deep fried milk-solid spheres soaked in cardamom sugar syrup.",
    ingredients: [
  "500g Khuwa (Milk solids)",
  "1/2 cup Flour",
  "1/2 tsp Baking powder",
  "2 cups Sugar",
  "2 cups Water",
  "4 pods Cardamom"
],
    baseServings: 4,
    steps: ["Make a sugar syrup with water and cardamom, keep it warm.", "Knead khuwa with a little flour and baking powder until completely smooth.", "Roll into crack-free balls.", "Deep fry on very low heat until dark brown.", "Immediately drop the hot balls into the warm syrup and let soak for hours."],
    nepaliSteps: [
  "पानी, चिनी र सुकुमेल हालेर चास्नी बनाउनुहोस् र मनतातो राख्नुहोस्।",
  "खुवामा थोरै पिठो र बेकिङ पाउडर हालेर नरम हुने गरी मुछ्नुहोस्।",
  "चिरा नपर्ने गरी साना गोलाहरू बनाउनुहोस्।",
  "धेरै सानो आँचमा गाढा खैरो नहुन्जेल तार्नुहोस्।",
  "तुरुन्तै चास्नीमा हाल्नुहोस् र केही घण्टा भिज्न दिनुहोस्।"
],
    tips: ["If the balls have cracks, they will break apart while frying."]
  },
  {
    id: "26", title: "Rasbari", nepaliTitle: "रसबरी", category: "Sweets", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Rasgullas_from_Odisha_and_Bengal.jpg", rating: 4.6, reviews: 298, videoUrl: "",
    description: "Spongy, white cheese balls boiled in a light sugar syrup. Very popular at weddings.",
    ingredients: [
  "2 liters Milk",
  "2 tbsp Lemon juice",
  "2 cups Sugar",
  "4 cups Water",
  "1 tsp Rose water"
],
    baseServings: 4,
    steps: ["Boil milk and curdle it with lemon juice.", "Drain the whey using a cheesecloth to get fresh paneer (Chhena).", "Knead the chhena vigorously for 10 minutes until it feels like butter.", "Roll into small balls.", "Boil in a light sugar syrup for 15 minutes. The balls will double in size."],
    nepaliSteps: [
  "दूध उमालेर कागतीको रसले फटाउनुहोस्।",
  "पातलो कपडामा राखेर पानी निचोर्नुहोस् र पनीर (छैना) निकाल्नुहोस्।",
  "पनीरलाई १० मिनेटसम्म हातले मज्जाले माड्नुहोस्।",
  "साना गोलाहरू बनाउनुहोस्।",
  "चिनीको पातलो चास्नीमा १५ मिनेटसम्म उमाल्नुहोस्।"
],
    tips: ["Washing the chhena under cold water removes the lemon flavor and stops the cooking process."]
  },
  {
    id: "27", title: "Gudpak", nepaliTitle: "गुँदपाक", category: "Sweets", prepTime: "2 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Dalbath.jpg", rating: 4.9, reviews: 312, videoUrl: "",
    description: "An incredibly rich, fudge-like sweet made of milk, ghee, edible gum, and nuts. Given to new mothers for strength.",
    ingredients: [
  "2 liters Milk",
  "1/2 cup Ghee",
  "1 cup Sugar",
  "50g Edible gum (Gond)",
  "50g Almonds",
  "50g Pistachios",
  "1 tsp Cardamom"
],
    baseServings: 4,
    steps: ["Slowly boil down milk until it solidifies into Khuwa (takes hours).", "Fry the edible gum in ghee until puffed, then crush it.", "Mix the khuwa, sugar, copious amounts of ghee, and crushed gum.", "Cook until the mixture turns deep brown and starts leaving the sides of the pan.", "Mix in dry fruits and serve hot or cold."],
    nepaliSteps: [
  "दूधलाई धेरै बेरसम्म पकाएर खुवा बनाउनुहोस्।",
  "गूँदलाई घिउमा भुटेर फुलाउनुहोस् र कुट्नुहोस्।",
  "खुवा, चिनी, धेरै घिउ र कुटेको गूँद मिसाउनुहोस्।",
  "मिश्रण गाढा खैरो नहुन्जेल र भाँडोको भित्ता नछोडुन्जेल पकाउनुहोस्।",
  "सुक्खा फलफूल मिसाएर तातो वा चिसो पस्कनुहोस्।"
],
    tips: ["Requires immense patience to boil down the milk properly."]
  },
  {
    id: "28", title: "Lakhamari", nepaliTitle: "लाखामरी", category: "Sweets", prepTime: "3 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Lakha_Mari_.jpeg", rating: 4.7, reviews: 189, videoUrl: "",
    description: "A highly intricate, crispy, flaky bread coated in sugar syrup. Essential for Newari weddings.",
    ingredients: [
  "500g Flour",
  "100g Black gram flour (Urad dal)",
  "1/2 cup Ghee",
  "2 cups Sugar",
  "1 cup Water"
],
    baseServings: 4,
    steps: ["Make a dough using flour and lentil paste.", "Pipe it through a cloth into complex, interlacing star or wheel patterns into hot oil.", "Deep fry until extremely crispy and dry.", "Dip quickly into a thick sugar syrup and set aside to cool and crystallize."],
    nepaliSteps: [
  "मैदा र मासको दालको पिठो हालेर पिठो तयार पार्नुहोस्।",
  "कपडाको सहायताले तातो तेलमा विभिन्न बुट्टा बनाउँदै पिठो हाल्नुहोस्।",
  "एकदमै कडा र कुरकुरे नहुन्जेल तार्नुहोस्।",
  "चिनीको बाक्लो चास्नीमा एकछिन डुबाएर निकाल्नुहोस्।"
],
    tips: ["Can be kept for months without spoiling."]
  },
  {
    id: "29", title: "Thekua", nepaliTitle: "ठेकुवा", category: "Sweets", prepTime: "1 hr", difficulty: "Easy", isGrandmaRecipe: true, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Thekua_Prasadam_of_Chhath_Puja.jpg", rating: 4.6, reviews: 212, videoUrl: "",
    description: "A hard, crunchy, rustic cookie made during the Chhath festival, deeply flavored with jaggery and fennel.",
    ingredients: [
  "500g Wheat flour",
  "200g Jaggery (Gud)",
  "4 tbsp Ghee",
  "1 tbsp Fennel seeds (Saunf)",
  "50g Dry coconut",
  "Water"
],
    baseServings: 4,
    steps: ["Dissolve jaggery in warm water.", "Rub ghee into the wheat flour until it resembles breadcrumbs.", "Add chopped coconut and fennel seeds.", "Use the jaggery water to make a very stiff dough.", "Press into wooden molds (or by hand) and deep fry on low heat."],
    nepaliSteps: [
  "तातो पानीमा सक्खर (गुँड) पगाल्नुहोस्।",
  "गहुँको पिठोमा घिउ हालेर राम्ररी मोल्नुहोस्।",
  "नारिवल र सुप मिसाउनुहोस्।",
  "सक्खरको पानी हालेर कडा पिठो मुस्नुहोस्।",
  "फर्मा वा हातले आकार दिएर सानो आँचमा तार्नुहोस्।"
],
    tips: ["Low heat is crucial so the inside cooks before the jaggery outside burns."]
  },
  {
    id: "30", title: "Peda", nepaliTitle: "पेड़ा", category: "Sweets", prepTime: "40 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Peda.jpg", rating: 4.8, reviews: 341, videoUrl: "",
    description: "Soft, grainy fudge discs made entirely of milk solids and sugar, infused with cardamom.",
    ingredients: [
  "500g Khuwa (Milk solids)",
  "1/2 cup Sugar",
  "1 tsp Cardamom powder",
  "20g Pistachios"
],
    baseServings: 4,
    steps: ["Crumble the khuwa in a pan.", "Roast it on low heat until it changes color slightly.", "Add sugar; it will melt and make the mixture liquid.", "Cook until the mixture forms a mass and leaves the pan.", "Let it cool slightly, roll into discs, and press a pistachio on top."],
    nepaliSteps: [
  "एउका भाँडोमा खुवालाई भुट्नुहोस्।",
  "हल्का रङ्ग बदलिउन्जेल सानो आँचमा चलाइरहनुहोस्।",
  "चिनी हाल्नुहोस्; यो पग्लिएर मिश्रण अलि पातलो हुनेछ।",
  "मिश्रणले भाँडो छोड्न थालेपछि आँच निभाउनुहोस्।",
  "सेलाएपछि सानो चाक जस्तो आकार दिएर माथिबाट पस्ता राख्नुहोस्।"
],
    tips: ["Do not overcook the sugar, or the peda will become chewy and hard."]
  },

  // --- TRADITIONAL / ETHNIC DISHES ---
  {
    id: "31", title: "Newari Samay Baji", nepaliTitle: "समय बजी", category: "Traditional / Ethnic Food", prepTime: "2 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 5.0, reviews: 890, videoUrl: "",
    description: "A monumental festival platter representing a balanced diet, gods, and cosmos. The heart of Newari cuisine.",
    ingredients: [
  "4 cups Beaten rice (Chiura)",
  "500g Choila (Spicy meat)",
  "100g Black soybeans",
  "200g Potato salad",
  "4 Boiled eggs",
  "4 Bara (Lentil pancake)",
  "1 bunch Spinach",
  "2 inch Ginger garlic chunks"
],
    baseServings: 4,
    steps: ["Prepare each item separately.", "Make the spicy potato and soybean pickles.", "Prepare the Choila and Bara.", "Arrange the beaten rice in the center of a leaf plate (Bota).", "Arrange all the side dishes in a circle around the rice.", "Serve with Aila (traditional rice wine)."],
    nepaliSteps: [
  "सबै परिकारलाई छुट्टाछुट्टै तयार पार्नुहोस्।",
  "आलु र भटमासको अचार बनाउनुहोस्।",
  "छोयला र बारा तयार पार्नुहोस्।",
  "दुना वा टपरीको बीचमा चिउरा राख्नुहोस्।",
  "वरिपरि सबै साइड डिशहरू मिलाएर राख्नुहोस्।",
  "ऐला (कोदोको रक्सी) सँग पस्कनुहोस्।"
],
    tips: ["Mustard oil is the absolute binding flavor across all components of Samay Baji."]
  },
  {
    id: "32", title: "Chatamari", nepaliTitle: "चतामरी", category: "Traditional / Ethnic Food", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Meat_Chatamari.jpg", rating: 4.7, reviews: 521, videoUrl: "",
    description: "Often called the 'Nepali Pizza'. A thin, crispy rice flour crepe topped with minced meat and an egg.",
    ingredients: [
  "2 cups Rice flour",
  "1 cup Water",
  "250g Minced meat",
  "2 Eggs",
  "1 Tomato",
  "1 Onion",
  "1 tsp Cumin powder"
],
    baseServings: 4,
    steps: ["Make a watery batter out ofrice flour.", "Pour a ladle of batter onto a hot covered pan, spreading it thin.", "Add the seasoned raw minced meat, tomatoes, and onions on top.", "Crack an egg over the meat.", "Cover with a lid and steam-cook on low heat until the base is crispy and the meat is done."],
    nepaliSteps: [
  "चामलको पिठोमा पानी हालेर अलि पातलो घोल बनाउनुहोस्।",
  "तातो तावामा घोल हालेर पातलो रोटी जस्तो फैलाउनुहोस्।",
  "माथिबाट किमा, टमाटर र प्याज राख्नुहोस्।",
  "माथिबाट एउटा अण्डा फुटाएर हाल्नुहोस्।",
  "बिर्कोले छोपेर सानो आँचमा बाफले पकाउनुहोस्।"
],
    tips: ["Do not flip the Chatamari! It cooks entirely through the trapped steam."]
  },
  {
    id: "33", title: "Juju Dhau", nepaliTitle: "जुजु धौ", category: "Traditional / Ethnic Food", prepTime: "12 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Juju_Dhau.jpg", rating: 5.0, reviews: 1102, videoUrl: "",
    description: "The 'King of Yogurt' from Bhaktapur. Incredibly rich, sweet, custard-like yogurt set in a clay pot.",
    ingredients: [
  "2 liters Buffalo milk",
  "1/2 cup Sugar",
  "1 tsp Cardamom",
  "2 tbsp Yogurt starter culture"
],
    baseServings: 4,
    steps: ["Boil buffalo milk until it reduces and thickens significantly.", "Add sugar and cardamom while boiling.", "Pour the lukewarm milk into porous unglazed clay bowls (Kataaro).", "Add a spoonful of starter culture.", "Wrap the bowls in thick blankets in a warm room for 12 hours to set."],
    nepaliSteps: [
  "भैंसीको दूधलाई उमालेर धेरै बाक्लो बनाउनुहोस्।",
  "चिनी र सुकुमेल हाल्नुहोस्।",
  "दूध मनतातो भएपछि माटोको कतारोमा खन्याउनुहोस्।",
  "अलिकति बीउ (दहीको जोत) हाल्नुहोस्।",
  "न्यानो ठाउँमा कम्बलले ओढाएर १२ घण्टासम्म जम्न दिनुहोस्।"
],
    tips: ["The clay pot absorbs excess water, making the yogurt dense enough that it won't fall out if turned upside down!"]
  },
  {
    id: "34", title: "Tharu Fish Curry", nepaliTitle: "थारु माछा को तरकारी", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Tharu (Terai)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.8, reviews: 432, videoUrl: "",
    description: "A spicy, rustic fish curry from the indigenous Tharu community, heavily reliant on mustard paste.",
    ingredients: [
  "1kg River fish",
  "2 tbsp Mustard seeds",
  "4 cloves Garlic",
  "3 Green chilies",
  "1 tsp Turmeric",
  "4 tbsp Mustard oil"
],
    baseServings: 4,
    steps: ["Marinate the fish in turmeric and salt.", "Lightly fry the fish in mustard oil and set aside.", "In the same oil, add the mustard-garlic paste and fry heavily.", "Add water to make a thin, sharp broth.", "Add the fish back in and simmer for 10 minutes.", "Garnish with coriander."],
    nepaliSteps: [
  "माछालाई बेसार र नुन हालेर मोल्नुहोस्।",
  "तोरीको तेलमा माछालाई हल्का तार्नुहोस्।",
  "सोही तेलमा तोरीको पेस्ट हालेर मज्जाले भुट्नुहोस्।",
  "पानी हालेर पातलो झोल बनाउनुहोस्।",
  "माछा हालेर १० मिनेटसम्म पकाउनुहोस् र धनियाँले सजाउनुहोस्।"
],
    tips: ["Yellow mustard seeds are preferred, and they must be ground to a very fine paste."]
  },
  {
    id: "35", title: "Sherpa Stew (Shyakpa)", nepaliTitle: "शेर्पा स्ट्यु", category: "Traditional / Ethnic Food", prepTime: "1.5 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Himalayas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.7, reviews: 312, videoUrl: "",
    description: "A thick, hearty, calorie-dense noodle and vegetable stew meant to warm the body in freezing high altitudes.",
    ingredients: [
  "500g Wheat flour",
  "2 medium Potatoes",
  "1 Radish",
  "500g Meat (Yak or Mutton)",
  "4 cloves Garlic",
  "1 Onion",
  "2 tbsp Butter"
],
    baseServings: 4,
    steps: ["Make a stiff dough and hand-pull/tear pieces into hot boiling water to make fresh noodles.", "In a separate pot, fry meat and root vegetables in butter.", "Add water to the meat and boil until tender to create a rich broth.", "Combine the cooked noodles with the broth and simmer together."],
    nepaliSteps: [
  "पिठो मुछेर हातले तान्दै उम्लेको पानीमा हालेर ताजा चाउचाउ बनाउनुहोस्।",
  "अर्को भाँडोमा मासु र तरकारीहरू घिउमा भुट्नुहोस्।",
  "मासु पाकेपछि पानी हालेर बाक्लो झोल बनाउनुहोस्।",
  "पकाएको चाउचाउ र झोल मिसाएर एकछिन उमाल्नुहोस्।"
],
    tips: ["The radish is crucial. It adds an earthy sweetness that cuts through the heavy meat broth."]
  },
  {
    id: "36", title: "Kinema Curry", nepaliTitle: "किनेमा तरकारी", category: "Traditional / Ethnic Food", prepTime: "30 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Eastern Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.2, reviews: 145, videoUrl: "",
    description: "A distinctly pungent curry made from fermented soybeans. An acquired taste similar to Japanese Natto.",
    ingredients: [
  "200g Kinema (Fermented soybeans)",
  "1 Onion",
  "1 Tomato",
  "2 Green chilies",
  "1 tsp Turmeric"
],
    baseServings: 4,
    steps: ["Soak the sticky kinema beans in warm water briefly.", "Fry finely chopped onions, chilies, and tomatoes.", "Add the kinema and turmeric, frying for a few minutes.", "Add a little water to make a thick gravy.", "Serve hot with rice."],
    nepaliSteps: [
  "किनेमालाई थोरै मनतातो पानीमा भिजाउनुहोस्।",
  "प्याज, खुर्सानी र टमाटर भुट्नुहोस्।",
  "किनेमा र बेसार हालेर केही मिनेट भुट्नुहोस्।",
  "थोरै पानी हालेर बाक्लो ग्रेभी बनाउनुहोस्।",
  "भातसँग तातो-तातो खानुहोस्।"
],
    tips: ["The smell is incredibly strong, but the umami flavor is unparalleled once you get used to it."]
  },
  {
    id: "37", title: "Dhikri", nepaliTitle: "ढिक्री", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Tharu (Terai)",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Dhikri_Tharu_Food.jpg", rating: 4.5, reviews: 201, videoUrl: "",
    description: "Steamed rice flour logs, a staple of the Tharu community, especially during the Maghi festival.",
    ingredients: [
  "500g Rice flour",
  "Warm water"
],
    baseServings: 4,
    steps: ["Make a pliable dough by mixing rice flour with warm water.", "Roll the dough between your palms to form long, cylindrical stick shapes.", "Place in a steamer layered with straw or cloth.", "Steam for 20-30 minutes until thoroughly cooked.", "Serve with spicy chutney or fish curry."],
    nepaliSteps: [
  "चामलको पिठोमा तातो पानी हालेर नरम पिठो मुस्नुहोस्।",
  "हातले लामो लामो लठ्ठी जस्तो आकार दिनुहोस्।",
  "स्टिमरमा पराल वा कपडा राखेर त्यसमाथि ढिक्री राख्नुहोस्।",
  "२०-३० मिनेटसम्म स्टिम गर्नुहोस्।",
  "चटनी वा माछाको तरकारीसँग खानुहोस्।"
],
    tips: ["Traditionally steamed over clay pots; very bland on its own but perfect for soaking up spicy curries."]
  },
  {
    id: "38", title: "Tama Sadeko", nepaliTitle: "तामा साधेको", category: "Traditional / Ethnic Food", prepTime: "15 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "Kathmandu Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.6, reviews: 211, videoUrl: "",
    description: "A sharp, highly acidic cold salad of fermented bamboo shoots, mixed with raw mustard oil.",
    ingredients: [
  "200g Fermented bamboo shoots (Tama)",
  "2 Boiled potatoes",
  "1 tsp Red chili powder",
  "2 tbsp Mustard oil",
  "1 tsp Fenugreek seeds",
  "1/2 tsp Turmeric"
],
    baseServings: 4,
    steps: ["Boil the tama for 10 minutes to remove the extreme bitterness, then drain.", "Cut boiled potatoes into cubes.", "Mix tama, potatoes, and chili powder in a bowl.", "Heat raw mustard oil, fry fenugreek seeds until black, add turmeric, and pour over the salad.", "Toss well and serve."],
    nepaliSteps: [
  "तामालाई १० मिनेट उमालेर पानी फाल्नुहोस्।",
  "उसिनेको आलुलाई टुक्रा पार्नुहोस्।",
  "तामा, आलु र खुर्सानीको धुलो एउटा भाँडोमा मिसाउनुहोस्।",
  "तोरीको तेलमा मेथी कालो हुने गरी डढाउनुहोस् र बेसार हालेर अचारमा झान्नुहोस्।",
  "राम्ररी चलाएर खानुहोस्।"
],
    tips: ["A perfect palate cleanser to cut through the fat of heavy meat dishes."]
  },
  {
    id: "39", title: "Phagshapa", nepaliTitle: "फगशापा", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Eastern Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.7, reviews: 188, videoUrl: "",
    description: "A fiery pork dish cooked with dry red chilies and radishes, popular in Limbu and Rai communities.",
    ingredients: [
  "1kg Pork belly",
  "1 medium Radish",
  "10 Dry red chilies",
  "1 inch Ginger",
  "5 cloves Garlic"
],
    baseServings: 4,
    steps: ["Boil the fatty pork belly strips until half cooked.", "In a pan, cook the pork in its own rendered fat along with ginger and garlic.", "Add large chunks of radish and handfuls of dry red chilies.", "Add water and simmer until the meat and radish are extremely tender and the broth is reduced."],
    nepaliSteps: [
  "सुँगुरको बोसो भएको मासुलाई आधा पाकुन्जेल उसिन्नुहोस्।",
  "मासुबाट निस्केको बोसोमा अदुवा र लसुन हालेर भुट्नुहोस्।",
  "मूलाको ठूला टुक्रा र धेरै सुकेको खुर्सानी हाल्नुहोस्।",
  "पानी हालेर मासु र मूला एकदमै नरम नहुन्जेल पकाउनुहोस्।"
],
    tips: ["This dish uses no oil, cooking entirely in the rendered pork fat."]
  },
  {
    id: "40", title: "Kachila", nepaliTitle: "कचिला", category: "Traditional / Ethnic Food", prepTime: "15 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Tal_Kachila.JPG", rating: 4.1, reviews: 299, videoUrl: "",
    description: "A daring delicacy of raw minced buffalo meat marinated heavily in spices and mustard oil.",
    ingredients: [
  "500g Minced buffalo meat",
  "1 tbsp Garlic paste",
  "1 tbsp Ginger paste",
  "1 bunch Coriander",
  "1 tsp Cumin powder",
  "3 tbsp Mustard oil",
  "1 tsp Fenugreek seeds"
],
    baseServings: 4,
    steps: ["Mix the raw meat thoroughly with ginger, garlic, cumin, and coriander.", "Heat mustard oil to smoking point.", "Fry fenugreek seeds until completely black.", "Pour the boiling hot oil over the raw meat mix. This slightly cooks the outside.", "Mix vigorously and serve immediately."],
    nepaliSteps: [
  "ताजा मासुमा अदुवा-लसुन पेस्ट र मसलाहरू हालेर राम्ररी मोल्नुहोस्।",
  "तोरीको तेल धेरै तताउनुहोस्।",
  "मेथीका दाना कालो नहुन्जेल डढाउनुहोस्।",
  "तातो तेल मासुमा खन्याउनुहोस् (यसले मासुलाई हल्का पकाउँछ)।",
  "मज्जाले चलाएर तुरुन्तै पस्कनुहोस्।"
],
    tips: ["The meat must be incredibly fresh. Only for the adventurous."]
  },

  // --- DRINKS ---
  {
    id: "41", title: "Masala Chiya", nepaliTitle: "मसाला चिया", category: "Drinks", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Puri_with_Chiya.jpg", rating: 4.9, reviews: 3102, videoUrl: "",
    description: "The fuel of Nepal. Heavily spiced, milk-rich tea boiled aggressively to extract maximum flavor.",
    ingredients: [
  "2 tbsp CTC Black Tea leaves",
  "500ml Full fat milk",
  "4 tsp Sugar",
  "4 Green cardamom",
  "1 inch Fresh ginger",
  "3 Cloves",
  "4 Black peppercorns"
],
    baseServings: 4,
    steps: ["Crush ginger, cardamom, cloves, and pepper in a mortar.", "Boil water and add the crushed spices and tea leaves.", "Let it boil until the water turns dark.", "Add milk and sugar.", "Reduce heat and simmer vigorously for 5 minutes until the tea turns a deep tan color."],
    nepaliSteps: [
  "अदुवा, सुकुमेल, ल्वाङ र मरिचलाई अलिअलि कुट्नुहोस्।",
  "पानी उमालेर त्यसमा कुटेको मसला र चियापत्ती हाल्नुहोस्।",
  "पानी गाढा रङ्गको नहुन्जेल उमाल्नुहोस्।",
  "दूध र चिनी हाल्नुहोस्।",
  "सानो आँचमा ५ मिनेटसम्म मज्जाले उमाल्नुहोस्।"
],
    tips: ["Do not rush the boiling process. The longer the milk and tea boil together, the better the chiya."]
  },
  {
    id: "42", title: "Butter Tea (Suja)", nepaliTitle: "सुजा (बटर टिया)", category: "Drinks", prepTime: "15 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Himalayas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.4, reviews: 182, videoUrl: "",
    description: "A salty, fatty pink tea made from churned yak butter. Essential for survival in extreme mountain cold.",
    ingredients: [
  "2 tbsp Strong black tea",
  "50g Yak butter (or cow butter)",
  "1 tsp Salt",
  "200ml Milk"
],
    baseServings: 4,
    steps: ["Boil the tea leaves in water for a long time to make a dark, strong concentrate (Chaku).", "Pour the concentrate into a traditional wooden cylinder (Chandong) or blender.", "Add salt, milk, and a large chunk of butter.", "Churn/blend vigorously until a thick foam forms.", "Serve piping hot in wooden bowls."],
    nepaliSteps: [
  "चियापत्तीलाई धेरै बेरसम्म उमालेर गाढा रङ्ग (चाकु) बनाउनुहोस्।",
  "यसलाई परम्परागत काठको ठेकी वा ब्लेन्डरमा हाल्नुहोस्।",
  "नुन, दूध र प्रसस्त मख्खन (नौनी) हाल्नुहोस्।",
  "फिँज नआउन्जेल मज्जाले चलाउनुहोस् वा फिट्नुहोस्।",
  "काठको कचौरामा तातो-तातो खानुहोस्।"
],
    tips: ["It tastes more like a light soup than what foreigners expect of 'tea'."]
  },
  {
    id: "43", title: "Tongba", nepaliTitle: "तोङ्बा", category: "Drinks", prepTime: "5 mins (after fermenting)", difficulty: "Easy", isGrandmaRecipe: true, region: "Eastern Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Tongba_-_Nepalese_fermented_millet_beer.jpg", rating: 4.8, reviews: 491, videoUrl: "",
    description: "A warm, mildly alcoholic millet beer drunk through a bamboo straw. The staple drink of the Limbu people.",
    ingredients: [
  "500g Fermented whole millet seeds",
  "2 liters Boiling hot water"
],
    baseServings: 4,
    steps: ["Place a generous handful of the fermented millet mush into a large wooden or bamboo mug (the Tongba).", "Pour boiling hot water to the brim.", "Let it steep for 5 minutes.", "Use a specialized bamboo straw with slits at the bottom to sip the warm alcohol without swallowing the seeds.", "Continually top up with hot water until the alcohol is exhausted."],
    nepaliSteps: [
  "कोदोको जाँडलाई एउटा काठ वा बाँसको भाँडो (तोङ्बा) मा हाल्नुहोस्।",
  "माथिबाट उम्लेको तातो पानी भर्नुहोस्।",
  "५ मिनेटसम्म भिज्न दिनुहोस्।",
  "विशेष बाँसको भित्र प्वाल भएको पाइप (पिप्सा) प्रयोग गरेर तान्नुहोस्।",
  "पानी सकिएपछि फेरि तातो पानी थप्दै खानुहोस्।"
],
    tips: ["A single serving can be refilled with hot water 5-6 times."]
  },
  {
    id: "44", title: "Sweet Lassi", nepaliTitle: "लस्सी", category: "Drinks", prepTime: "5 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lassi_Sweet_or_Salted.JPG", rating: 4.7, reviews: 631, videoUrl: "",
    description: "A thick, refreshing yogurt-based drink, generously topped with cream and dry fruits.",
    ingredients: [
  "500ml Thick curd (Yogurt)",
  "4 tbsp Sugar",
  "200ml Ice water",
  "1 tsp Rose water",
  "20g Cashews and Raisins",
  "4 tbsp Fresh cream (Malai)"
],
    baseServings: 4,
    steps: ["In a large pitcher, blend yogurt, sugar, a dash of rose water, and ice water using a wooden whisk (Madaani).", "Whisk until frothy and smooth.", "Pour into a tall glass.", "Top with a thick layer of fresh malai and chopped nuts."],
    nepaliSteps: [
  "एउटा भाँडोमा दही, चिनी र थोरै पानी हालेर मदानीले फिट्नुहोस्।",
  "फिँज नआउन्जेल फिटिरहनुहोस्।",
  "लामो गिलासमा हाल्नुहोस्।",
  "माथिबाट ताजा तर (मलाई) र सुक्खा फलफूल हाल्नुहोस्।"
],
    tips: ["Use cold milk instead of water for an even thicker, richer lassi."]
  },

  // --- SIMPLE HOME FOODS ---
  {
    id: "45", title: "Egg Curry", nepaliTitle: "अण्डा करी", category: "Simple Home Foods", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Egg_Soup_Curry.jpg", rating: 4.6, reviews: 812, videoUrl: "",
    description: "A quick, comforting weekday curry made by frying hard-boiled eggs and cooking them in a tomato-onion gravy.",
    ingredients: [
  "6 Eggs",
  "1 large Onion",
  "2 Tomatoes",
  "1 tbsp Garlic ginger paste",
  "1/2 tsp Turmeric",
  "1 tsp Cumin powder"
],
    baseServings: 4,
    steps: ["Hard boil the eggs and peel them.", "Pierce the eggs slightly with a fork and fry them in oil with a pinch of turmeric until a blistered skin forms.", "Remove eggs. In the same oil, fry onions and tomatoes to make a thick gravy.", "Add water to reach desired consistency, add the eggs back, and simmer for 5 mins."],
    nepaliSteps: [
  "अण्डा उसिन्नुहोस् र बोक्रा छोडाउनुहोस्।",
  "अण्डामा काँटाले ससाना प्वाल पार्नुहोस् र तेलमा बेसार हालेर हल्का तार्नुहोस्।",
  "अण्डा निकालेर त्यही तेलमा प्याज र टमाटरको ग्रेभी बनाउनुहोस्।",
  "अण्डा हालेर थोरै पानी राखी ५ मिनेटसम्म पकाउनुहोस्।"
],
    tips: ["Frying the boiled eggs gives them a nice chewy exterior that absorbs the gravy."]
  },
  {
    id: "46", title: "Aloo Cauli Tarkari", nepaliTitle: "आलु काउली", category: "Simple Home Foods", prepTime: "25 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.9, reviews: 1021, videoUrl: "",
    description: "The most common vegetable side dish in Nepal pairing potato and cauliflower with simple spices.",
    ingredients: [
  "2 medium Potatoes",
  "1/2 head Cauliflower",
  "1 large Tomato",
  "1 tsp Cumin seeds",
  "1/2 tsp Turmeric",
  "1 tsp Coriander powder"
],
    baseServings: 4,
    steps: ["Cut potatoes into cubes and break cauliflower into florets.", "Heat oil and splutter cumin seeds.", "Add potatoes and fry for 5 minutes.", "Add cauliflower, turmeric, and salt. Cover and steam-fry on low heat.", "Once half cooked, add chopped tomatoes and spices. Cook until tomatoes melt into a dry coating."],
    nepaliSteps: [
  "आलु र काउलीलाई ससाना टुक्रामा काट्नुहोस्।",
  "तेल तताएर जिरा पड्काउनुहोस्।",
  "आलु हालेर ५ मिनेट भुट्नुहोस्।",
  "काउली, बेसार र नुन हालेर बिर्कोले छोपी सानो आँचमा पकाउनुहोस्।",
  "आधा पाकेपछि टमाटर र मसला हालेर टमाटर नगलिउन्जेल पकाउनुहोस्।"
],
    tips: ["Do not add water. Cooking the vegetables in their own steam yields the best taste."]
  },
  {
    id: "47", title: "Tomato Chutney (Golbheda ko Achar)", nepaliTitle: "गोलभेडाको अचार", category: "Simple Home Foods", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.8, reviews: 1891, videoUrl: "",
    description: "A spicy, tangy, and smoky condiment served alongside almost every Dal Bhat meal.",
    ingredients: [
  "4 large Tomatoes",
  "4 cloves Garlic",
  "3 Green chilies",
  "1 bunch Fresh coriander",
  "1/2 tsp Szechuan pepper (Timur)"
],
    baseServings: 4,
    steps: ["Roast the whole tomatoes and garlic cloves over an open flame or in a dry pan until the skin chars.", "Peel the charred skin off the tomatoes.", "In a mortar, grind the garlic, chilies, cilantro, and timur into a paste.", "Add the roasted tomatoes and crush everything together into a chunky salsa.", "Add salt and a few drops of raw mustard oil."],
    nepaliSteps: [
  "टमाटर र लसुनलाई आँचमा पोल्नुहोस्।",
  "पोलेको बोक्रा निकाल्नुहोस्।",
  "खलमा लसुन, खुर्सानी, धनियाँ र टिमुर हालेर थिच्नुहोस्।",
  "पोलेको टमाटर हालेर सबैलाई मज्जाले कुट्नुहोस्।",
  "नुन र थोरै काँचो तोरीको तेल हालेर चलाउनुहोस्।"
],
    tips: ["Grinding on a traditional stone silauto is far superior to using an electric blender."]
  },
  {
    id: "48", title: "Saag Tarkari", nepaliTitle: "साग", category: "Simple Home Foods", prepTime: "15 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg", rating: 4.7, reviews: 632, videoUrl: "",
    description: "Mustard or spinach leaves flash-fried in mustard oil with dry red chilies. Simple and healthy.",
    ingredients: [
  "500g Rayo Saag or Spinach",
  "4 Dry red chilies",
  "6 Garlic cloves",
  "2 tbsp Mustard oil",
  "1 tsp Salt"
],
    baseServings: 4,
    steps: ["Wash the greens thoroughly and chop roughly.", "Heat mustard oil in a wide pan until smoking.", "Crush whole garlic cloves and fry until golden, followed by tearing the dry red chilies into the oil.", "Immediately dump the greens into the hot oil. They will crackle aggressively.", "Toss quickly, add salt, and remove from heat as soon as they wilt."],
    nepaliSteps: [
  "सागलाई राम्ररी धोएर काट्नुहोस्।",
  "कराइमा तोरीको तेल तताउनुहोस्।",
  "लसुन र सुकेको खुर्सानी डढाउनुहोस्।",
  "साग हाल्नुहोस् र रङ्ग नबिग्रियोस् भनेर ठूलो आँचमा छिटो छिटो चलाउनुहोस्।",
  "नुन हालेर साग ओइलाउने बित्तिकै आँच निभाउनुहोस्।"
],
    tips: ["Do not overcook or cover the pan; the greens will lose their vibrant color and turn mushy."]
  },
  {
    id: "49", title: "Jhaneko Dal", nepaliTitle: "झानेको दाल", category: "Simple Home Foods", prepTime: "25 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.8, reviews: 1102, videoUrl: "",
    description: "Everyday lentil soup made extraordinary with a volatile hot oil tempering poured over it at the last second.",
    ingredients: [
  "1 cup Yellow or Red Lentils",
  "2 tbsp Ghee or Mustard Oil",
  "4 cloves Garlic",
  "1 tsp Cumin seeds",
  "1 tsp Jimbu",
  "2 Dry red chilies"
],
    baseServings: 4,
    steps: ["Boil the lentils with a pinch of turmeric and salt until completely dissolved.", "In a separate small pan, heat a large spoonful of ghee.", "Add cumin seeds, heavily crushed garlic, and dry chilies to the very hot ghee.", "Once the garlic turns dark brown, immediately dump the sizzling oil into the pot of cooked lentils and slam the lid shut quickly to trap the smoke.", "Serve over rice."],
    nepaliSteps: [
  "दालमा बेसार र नुन हालेर राम्ररी लेदो नहुन्जेल पकाउनुहोस्।",
  "एउटा सानो पन्यूमा घिउ तताउनुहोस्।",
  "जिरा, लसुन र खुर्सानी खैरो हुने गरी भुट्नुहोस्।",
  "तातो घिउलाई दालमा खन्याउनुहोस् र तुरुन्तै बिर्कोले छोप्नुहोस् ताकि वासना भित्रै रहोस्।"
],
    tips: ["Trapping the smoke under the lid for a few minutes infuses the entire pot of dal with a rich, smoky flavor."]
  },
  {
    id: "50", title: "Wai Wai Sadeko", nepaliTitle: "सुख्खा चाउचाउ", category: "Simple Home Foods", prepTime: "5 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.5, reviews: 890, videoUrl: "",
    description: "The ultimate midnight snack for Nepali youth. Raw Wai Wai instant noodles mixed with raw veggies.",
    ingredients: [
  "2 packs Wai Wai noodles",
  "1 Onion",
  "2 Green Chilies",
  "1 Tomato",
  "1 Lemon"
],
    baseServings: 4,
    steps: ["Without opening the packet, crush the noodles into small bites.", "Pour the crushed noodles into a bowl.", "Finely chop the onion, tomato, and chilies.", "Mix the veggies with the noodles.", "Empty the flavor packets from the noodle wrapper into the bowl.", "Squeeze a lemon and toss everything together.", "Eat raw."],
    nepaliSteps: [
  "चाउचाउलाई नफोडी प्याकेट बाहिरबाटै टुक्रा पार्नुहोस्।",
  "एउटा कचौरामा चाउचाउ खन्याउनुहोस्।",
  "प्याज, टमाटर र खुर्सानी मसिनो गरी काटेर हाल्नुहोस्।",
  "चाउचाउ भित्रको मसला र तेल हाल्नुहोस्।",
  "कागती निचोरेर सबै राम्ररी चलाउनुहोस् र खानुहोस्।"
],
    tips: ["Do not cook the noodles! The crunch is the entire point of the dish."]
  }
];
