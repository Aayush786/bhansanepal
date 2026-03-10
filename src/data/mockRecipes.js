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
    id: "1", slug: "dal-bhat-tarkari-recipe", title: "Dal Bhat Tarkari", nepaliTitle: "दाल भात तरकारी", category: "Main Dishes", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
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
    id: "2", slug: "gundruk-ko-jhol-recipe", title: "Gundruk ko Jhol", nepaliTitle: "गुन्द्रुक को झोल", category: "Main Dishes", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: true, region: " पहाड (Hills)",
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
    id: "3", slug: "dhido-with-gundruk-recipe", title: "Dhido with Gundruk", nepaliTitle: "ढिंडो र गुन्द्रुक", category: "Main Dishes", prepTime: "40 mins", difficulty: "Hard", isGrandmaRecipe: true, region: " पहाड (Hills)",
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
    id: "4", slug: "thakali-khana-set-recipe", title: "Thakali Khana Set", nepaliTitle: "थकाली खाना", category: "Main Dishes", prepTime: "1.5 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Himalayas",
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
    id: "5", slug: "aloo-tama-recipe", title: "Aloo Tama", nepaliTitle: "आलु तामा", category: "Main Dishes", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
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
    id: "6", slug: "kwati-recipe", title: "Kwati", nepaliTitle: "क्वाँटी", category: "Main Dishes", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
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
    id: "7", slug: "masu-bhat-recipe", title: "Masu Bhat", nepaliTitle: "मासु भात", category: "Main Dishes", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
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
    id: "8", slug: "sukuti-fry-recipe", title: "Sukuti Fry", nepaliTitle: "सुकुटी फ्राई", category: "Main Dishes", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: " पहाड (Hills)",
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
    id: "9", slug: "chicken-choila-recipe", title: "Chicken Choila", nepaliTitle: "कुखुराको छोयला", category: "Main Dishes", prepTime: "40 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Newa (Kathmandu)",
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
    id: "10", slug: "pork-sekuwa-recipe", title: "Pork Sekuwa", nepaliTitle: "बंगुरको सेकुवा", category: "Main Dishes", prepTime: "2 hrs", difficulty: "Medium", isGrandmaRecipe: false, region: "Eastern Nepal",
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
    id: "11", slug: "buff-momo-recipe", title: "Buff Momo", nepaliTitle: "बफ म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
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
    id: "12", slug: "chicken-momo-recipe", title: "Chicken Momo", nepaliTitle: "चिकेन म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "All Nepal",
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
    id: "13", slug: "veg-momo-recipe", title: "Veg Momo", nepaliTitle: "भेज म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "All Nepal",
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
    id: "14", slug: "chatpate-recipe", title: "Chatpate", nepaliTitle: "चटपटे", category: "Snacks / Street Food", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
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
    id: "15", slug: "aloo-chop-recipe", title: "Aloo Chop", nepaliTitle: "आलु चप", category: "Snacks / Street Food", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
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
    id: "16", slug: "pani-puri-recipe", title: "Pani Puri", nepaliTitle: "पानी पुरी", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
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
    id: "17", slug: "samosa-recipe", title: "Samosa", nepaliTitle: "समोसा", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Terai",
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
    id: "18", slug: "bara-recipe", title: "Bara (Wo)", nepaliTitle: "बारा (व:)", category: "Snacks / Street Food", prepTime: "12 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
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
    id: "19", slug: "nepali-pakoda-recipe", title: "Nepali Pakoda", nepaliTitle: "प पकौडा", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
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
    id: "20", slug: "street-chowmein-recipe", title: "Street Chowmein", nepaliTitle: "चाउमिन", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Kathmandu Valley",
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
    id: "21", slug: "sel-roti-recipe", title: "Sel Roti", nepaliTitle: "सेल रोटी", category: "Sweets", prepTime: "2 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
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
    id: "22", slug: "yomari-recipe", title: "Yomari", nepaliTitle: "योमरी", category: "Sweets", prepTime: "1.5 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Yomari_1.jpg", rating: 4.7, reviews: 156, videoUrl: "",
    description: "A Newari delicacy of steamed rice-flour dough filled with sweet chaku (molasses) or khuwa.",
    ingredients: [
      "500g Rice flour",
      "200g Chaku (Molasses) or Khuwa",
      "50g Sesame seeds",
      "Boiling water"
    ],
    nutrition: { calories: 320, protein: "4g", carbs: "65g", fat: "6g" },
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
    id: "23", slug: "rice-kheer-recipe", title: "Rice Kheer", nepaliTitle: "खीर", category: "Sweets", prepTime: "1 hr", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
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
    nutrition: { calories: 410, protein: "10g", carbs: "55g", fat: "18g" },
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
    id: "24", slug: "pua-recipe", title: "Pua", nepaliTitle: "पुवा", category: "Sweets", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: true, region: " पहाड (Hills)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Picturesque_Nepal_%281912%29_%2814779323084%29.jpg", rating: 4.5, reviews: 112, videoUrl: "",
    description: "A quick sweet snack made by roasting rice flour in ghee and boiling it with milk and sugar.",
    ingredients: [
      "2 cups Coarse rice flour",
      "4 tbsp Ghee",
      "1 liter Milk",
      "1/2 cup Sugar"
    ],
    nutrition: { calories: 350, protein: "6g", carbs: "48g", fat: "15g" },
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
    id: "25", slug: "lal-mohan-recipe", title: "Lal Mohan", nepaliTitle: "लाल मोहन", category: "Sweets", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
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
    nutrition: { calories: 380, protein: "8g", carbs: "55g", fat: "16g" },
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
    id: "26", slug: "rasbari-recipe", title: "Rasbari", nepaliTitle: "रसबरी", category: "Sweets", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Rasgullas_from_Odisha_and_Bengal.jpg", rating: 4.6, reviews: 298, videoUrl: "",
    description: "Spongy, white cheese balls boiled in a light sugar syrup. Very popular at weddings.",
    ingredients: [
      "2 liters Milk",
      "2 tbsp Lemon juice",
      "2 cups Sugar",
      "4 cups Water",
      "1 tsp Rose water"
    ],
    nutrition: { calories: 250, protein: "12g", carbs: "45g", fat: "2g" },
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
    id: "27", slug: "gudpak-recipe", title: "Gudpak", nepaliTitle: "गुँदपाक", category: "Sweets", prepTime: "2 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
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
    nutrition: { calories: 650, protein: "15g", carbs: "40g", fat: "55g" },
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
    id: "28", slug: "lakhamari-recipe", title: "Lakhamari", nepaliTitle: "लाखामरी", category: "Sweets", prepTime: "3 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Lakha_Mari_.jpeg", rating: 4.7, reviews: 189, videoUrl: "",
    description: "A highly intricate, crispy, flaky bread coated in sugar syrup. Essential for Newari weddings.",
    ingredients: [
      "500g Flour",
      "100g Black gram flour (Urad dal)",
      "1/2 cup Ghee",
      "2 cups Sugar",
      "1 cup Water"
    ],
    nutrition: { calories: 420, protein: "6g", carbs: "60g", fat: "18g" },
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
    id: "29", slug: "thekua-recipe", title: "Thekua", nepaliTitle: "ठेकुवा", category: "Sweets", prepTime: "1 hr", difficulty: "Easy", isGrandmaRecipe: true, region: "Terai",
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
    nutrition: { calories: 240, protein: "4g", carbs: "35g", fat: "10g" },
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
    id: "30", slug: "peda-recipe", title: "Peda", nepaliTitle: "पेड़ा", category: "Sweets", prepTime: "40 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Terai",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Peda.jpg", rating: 4.8, reviews: 341, videoUrl: "",
    description: "Soft, grainy fudge discs made entirely of milk solids and sugar, infused with cardamom.",
    ingredients: [
      "500g Khuwa (Milk solids)",
      "1/2 cup Sugar",
      "1 tsp Cardamom powder",
      "20g Pistachios"
    ],
    nutrition: { calories: 180, protein: "6g", carbs: "22g", fat: "10g" },
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
    id: "31", slug: "newari-samay-baji-recipe", title: "Newari Samay Baji", nepaliTitle: "समय बजी", category: "Traditional / Ethnic Food", prepTime: "2 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
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
    nutrition: { calories: 850, protein: "40g", carbs: "120g", fat: "25g" },
    baseServings: 4,
    steps: [
      "Prepare each component separately starting with Choila and Bara [1 hr].",
      "Sauté beans and make a spicy potato salad (Aloo ko Achar).",
      "Clean and boil spinach briefly [5 min].",
      "In the center of a leaf plate (Bota), mound a large portion of beaten rice (Chiura).",
      "Arrange the Choila, Bara, eggs, soybeans, and spinach in a deliberate circle.",
      "Serve with a side of local rice wine (Aila) for an authentic experience."
    ],
    nepaliSteps: [
      "छोयला र बाराबाट सुरु गर्दै सबै परिकार छुट्टाछुट्टै बनाउनुहोस् [१ घण्टा]।",
      "गेडागुडी भुट्नुहोस् र आलुको अचार तयार पार्नुहोस्।",
      "सागलाई धोएर हल्का उसिन्नुहोस् वा भुट्नुहोस् [५ मिनेट]।",
      "दुना वा टपरीको बीचमा चिउराको थुप्रो राख्नुहोस्।",
      "वरिपरि छोयला, बारा, अण्डा, भटमास र साग मिलाएर राख्नुहोस्।",
      "परम्परागत स्वादका लागि ऐलासँग पस्कनुहोस्।"
    ],
    tips: ["Mustard oil is the absolute binding flavor across all components of Samay Baji."]
  },
  {
    id: "32", slug: "chatamari-recipe", title: "Chatamari", nepaliTitle: "चतामरी", category: "Traditional / Ethnic Food", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Newa (Kathmandu)",
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
    nutrition: { calories: 420, protein: "22g", carbs: "45g", fat: "15g" },
    baseServings: 4,
    steps: [
      "Mix rice flour with water into a smooth, slightly runny batter [5 min].",
      "Heat a flat non-stick pan, pour a ladle of batter and spread it thin like a crepe.",
      "Add seasoned minced meat, chopped onions, and tomatoes on top immediately.",
      "Crack an egg over the meat filling.",
      "Cover with a lid and steam-cook on low heat until the base is crispy and toppings are cooked [8 min].",
      "Do not flip; slide onto a plate and serve hot."
    ],
    nepaliSteps: [
      "चामलको पिठोमा पानी हालेर पातलो र नरम घोल बनाउनुहोस् [५ मिनेट]।",
      "तातो तावामा घोल हालेर पातलो रोटी जस्तो फैलाउनुहोस्।",
      "माथिबाट मसला मोलेको किमा, प्याज र टमाटर तुरुन्तै राख्नुहोस्।",
      "बीचमा एउटा अण्डा फुटाएर हाल्नुहोस्।",
      "बिर्कोले छोपेर सानो आँचमा बाफले ८ मिनेट पकाउनुहोस् [८ मिनेट]।",
      "नफर्काईकन प्लेटमा निकालेर तातो-तातो पस्कनुहोस्।"
    ],
    tips: ["Do not flip the Chatamari! It cooks entirely through the trapped steam."]
  },
  {
    id: "33", slug: "juju-dhau-recipe", title: "Juju Dhau", nepaliTitle: "जुजु धौ", category: "Traditional / Ethnic Food", prepTime: "12 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Juju_Dhau.jpg", rating: 5.0, reviews: 1102, videoUrl: "",
    description: "The 'King of Yogurt' from Bhaktapur. Incredibly rich, sweet, custard-like yogurt set in a clay pot.",
    ingredients: [
      "2 liters Buffalo milk",
      "1/2 cup Sugar",
      "1 tsp Cardamom",
      "2 tbsp Yogurt starter culture"
    ],
    nutrition: { calories: 150, protein: "6g", carbs: "20g", fat: "8g" },
    baseServings: 4,
    steps: [
      "Boil full-fat buffalo milk in a wide pot until it reduces by half [45 min].",
      "Stir in sugar and cardamom during the reduction process.",
      "Let the milk cool until it is lukewarm.",
      "Pour into unglazed clay pots (Kataaro) and stir in a spoonful of yogurt culture.",
      "Keep the pots in a warm, dark place or wrap in blankets for at least 12 hours [12 hr].",
      "Refrigerate before serving for the best custard-like texture."
    ],
    nepaliSteps: [
      "भैंसीको दूधलाई बाक्लो भाँडोमा आधा नहुन्जेल उमाल्नुहोस् [४५ मिनेट]।",
      "दूध उम्लिँदा चिनी र सुकुमेल हालेर चलाउनुहोस्।",
      "दूधलाई मनतातो हुन दिनुहोस्।",
      "माटोको कतारोमा खन्याउनुहोस् र एक चम्चा दहीको जोत (बीउ) मिसाउनुहोस्।",
      "कम्बलले ओढाएर १२ घण्टासम्म न्यानो ठाउँमा जम्न दिनुहोस् [१२ घण्टा]।",
      "राम्ररी जमेपछि फ्रिजमा राखेर चिसो-चिसो पस्कनुहोस्।"
    ],
    tips: ["The clay pot absorbs excess water, making the yogurt dense enough that it won't fall out if turned upside down!"]
  },
  {
    id: "34", slug: "tharu-fish-curry-recipe", title: "Tharu Fish Curry", nepaliTitle: "थारु माछा को तरकारी", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Tharu (Terai)",
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
    nutrition: { calories: 380, protein: "32g", carbs: "10g", fat: "24g" },
    baseServings: 4,
    steps: [
      "Marinate fish pieces with turmeric and salt for 15 minutes.",
      "Heat mustard oil until smoking, lightly fry the fish and set aside [10 min].",
      "In the same oil, fry mustard-garlic-chili paste until aromatic.",
      "Add water to create a thin, sharp gravy and bring to a boil [5 min].",
      "Add the fried fish back into the broth and simmer gently [10 min].",
      "Garnish with lots of cilantro and serve with rice."
    ],
    nepaliSteps: [
      "माछाका टुक्राहरूमा बेसार र नुन हालेर १५ मिनेट मोल्नुहोस्।",
      "तोरीको तेल तताएर माछालाई हल्का तार्नुहोस् [१० मिनेट]।",
      "सोही तेलमा तोरी, लसुन र खुर्सानीको पेस्ट हालेर भुट्नुहोस्।",
      "पानी हालेर पातलो झोल बनाउनुहोस् र उमाल्नुहोस् [५ मिनेट]।",
      "तारेको माछालाई झोलमा हालेर सानो आँचमा १० मिनेट पकाउनुहोस् [१० मिनेट]।",
      "धनियाँ हालेर भातसँग पस्कनुहोस्।"
    ],
    tips: ["Yellow mustard seeds are preferred, and they must be ground to a very fine paste."]
  },
  {
    id: "35", slug: "sherpa-stew-recipe", title: "Sherpa Stew (Shyakpa)", nepaliTitle: "शेर्पा स्ट्यु", category: "Traditional / Ethnic Food", prepTime: "1.5 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Himalayas",
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
    nutrition: { calories: 580, protein: "28g", carbs: "75g", fat: "20g" },
    baseServings: 4,
    steps: [
      "Knead wheat flour with warm water into a stiff dough and rest for 20 minutes.",
      "Fry yak/mutton and root vegetables in yak butter until browned [15 min].",
      "Add water, ginger, and garlic to the pot and simmer until meat is tender [40 min].",
      "Tear small pieces of dough into thin ribbons directly into the boiling broth.",
      "Simmer the stew until the handmade noodles are cooked through [10 min].",
      "Serve hot in large bowls to combat high-altitude cold."
    ],
    nepaliSteps: [
      "गहुँको पिठोमा तातो पानी हालेर कडा पिठो मुस्नुहोस् र २० मिनेट छोपिदिनुहोस्।",
      "मासु र मूला/आलुलाई घिउमा खैरो नहुन्जेल भुट्नुहोस् [१५ मिनेट]।",
      "पानी, अदुवा र लसुन हालेर मासु नरम नहुन्जेल पकाउनुहोस् [४० मिनेट]।",
      "पिठोलाई पातलो तान्दै वा टुक्रा पार्दै उम्लेको झोलमा हाल्नुहोस्।",
      "चाउचाउ पाकुन्जेल १० मिनेट जति उमाल्नुहोस् [१० मिनेट]।",
      "हिमालको जाडामा तातो-तातो पस्कनुहोस्।"
    ],
    tips: ["The radish is crucial. It adds an earthy sweetness that cuts through the heavy meat broth."]
  },
  {
    id: "36", slug: "kinema-curry-recipe", title: "Kinema Curry", nepaliTitle: "किनेमा तरकारी", category: "Traditional / Ethnic Food", prepTime: "30 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Eastern Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.2, reviews: 145, videoUrl: "",
    description: "A distinctly pungent curry made from fermented soybeans. An acquired taste similar to Japanese Natto.",
    ingredients: [
      "200g Kinema (Fermented soybeans)",
      "1 Onion",
      "1 Tomato",
      "2 Green chilies",
      "1 tsp Turmeric"
    ],
    nutrition: { calories: 210, protein: "15g", carbs: "12g", fat: "12g" },
    baseServings: 4,
    steps: [
      "Clean the pungent fermented beans (Kinema) by removing any grit.",
      "Heat oil, sauté onions, green chilies, and garlic until golden [5 min].",
      "Add tomatoes and spices, cook until they form a soft paste [5 min].",
      "Add Kinema and fry on low heat to release its unique aroma [5 min].",
      "Add half a cup of water, simmer for 10 minutes, and serve with Rice."
    ],
    nepaliSteps: [
      "किनेमालाई राम्ररी सफा गर्नुहोस्।",
      "तेल तताएर प्याज, खुर्सानी र लसुन रातो नहुन्जेल भुट्नुहोस् [५ मिनेट]।",
      "टमाटर र मसला हालेर लेदो बन्ने गरी पकाउनुहोस् [५ मिनेट]।",
      "किनेमा हालेर यसको विशिष्ट वासना नआउन्जेल ५ मिनेट भुट्नुहोस् [५ मिनेट]।",
      "आधा कप पानी हालेर १० मिनेट उमाल्नुहोस् र भातसँग खानुहोस्।"
    ],
    tips: ["The smell is incredibly strong, but the umami flavor is unparalleled once you get used to it."]
  },
  {
    id: "37", slug: "dhikri-recipe", title: "Dhikri", nepaliTitle: "ढिक्री", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Tharu (Terai)",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Dhikri_Tharu_Food.jpg", rating: 4.5, reviews: 201, videoUrl: "",
    description: "Steamed rice flour logs, a staple of the Tharu community, especially during the Maghi festival.",
    ingredients: [
      "500g Rice flour",
      "Warm water"
    ],
    nutrition: { calories: 310, protein: "5g", carbs: "70g", fat: "1g" },
    baseServings: 4,
    steps: [
      "In a bowl, mix rice flour with warm water until a smooth dough is formed [10 min].",
      "Shape the dough into long cylindrical logs or abstract bird-like shapes.",
      "Place the shapes in a traditional steamer (Perungo) over boiling water.",
      "Steam for 20-30 minutes until they are firm and slightly translucent [30 min].",
      "Serve warm with fish curry or spicy chutney."
    ],
    nepaliSteps: [
      "चामलको पिठोमा तातो पानी हालेर नरम पिठो मुस्नुहोस् [१० मिनेट]।",
      "पिठोलाई लामो लठ्ठी वा चरा जस्तो विभिन्न आकार दिनुहोस्।",
      "उम्लेको पानीमाथि स्टिमरमा ढिक्रीहरू राख्नुहोस्।",
      "फिर्म नहुन्जेल २०-३० मिनेटसम्म स्टिम गर्नुहोस् [३० मिनेट]।",
      "माछाको तरकारी वा पिरो अचारसँग तातो-तातो खानुहोस्।"
    ],
    tips: ["Traditionally steamed over clay pots; very bland on its own but perfect for soaking up spicy curries."]
  },
  {
    id: "38", slug: "tama-sadeko-recipe", title: "Tama Sadeko", nepaliTitle: "तामा साधेको", category: "Traditional / Ethnic Food", prepTime: "15 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "Kathmandu Valley",
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
    nutrition: { calories: 110, protein: "3g", carbs: "18g", fat: "6g" },
    baseServings: 4,
    steps: [
      "Boil fermented bamboo shoots (Tama) twice and drain to reduce acidity [15 min].",
      "In a bowl, mix the tama with boiled potato cubes and chili powder.",
      "Heat mustard oil until smoking, fry fenugreek seeds until black [2 min].",
      "Add turmeric to the hot oil and pour it over the salad while sizzling.",
      "Squeeze fresh lemon and toss everything thoroughly.",
      "Serve cold as a refreshing appetizer."
    ],
    nepaliSteps: [
      "तामालाई दुई पटक उमालेर पानी फाल्नुहोस् [१५ मिनेट]।",
      "भाँडोमा तामा, उसिनेको आलु र खुर्सानीको धुलो हाल्नुहोस्।",
      "तोरीको तेल तताएर मेथीलाई कालो हुने गरी डढाउनुहोस् [२ मिनेट]।",
      "तेलमा बेसार हालेर अचारमा झान्नुहोस्।",
      "कागती निचोरेर राम्ररी चलाउनुहोस्।",
      "चिसो खाजाको रूपमा पस्कनुहोस्।"
    ],
    tips: ["A perfect palate cleanser to cut through the fat of heavy meat dishes."]
  },
  {
    id: "39", slug: "phagshapa-recipe", title: "Phagshapa", nepaliTitle: "फगशापा", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Eastern Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.7, reviews: 188, videoUrl: "",
    description: "A fiery pork dish cooked with dry red chilies and radishes, popular in Limbu and Rai communities.",
    ingredients: [
      "1kg Pork belly",
      "1 medium Radish",
      "10 Dry red chilies",
      "1 inch Ginger",
      "5 cloves Garlic"
    ],
    nutrition: { calories: 620, protein: "30g", carbs: "15g", fat: "48g" },
    baseServings: 4,
    steps: [
      "Cut fatty pork belly into strips and boil in water until semi-soft [20 min].",
      "In a wide pan, fry the boiled pork in its own fat with ginger and garlic [10 min].",
      "Add large chunks of radish and plenty of dry red chilies.",
      "Add 2 cups of water and simmer on medium heat until radish and meat are tender [30 min].",
      "Cook until the broth is concentrated and oily. Serve with rice."
    ],
    nepaliSteps: [
      "बंगुरको बोसो भएको मासुलाई टुक्रा पारी २० मिनेट उसिन्नुहोस् [२० मिनेट]।",
      "मासुबाट निस्केको बोसोमा अदुवा र लसुन हालेर १० मिनेट भुट्नुहोस् [१० मिनेट]।",
      "मूलाको टुक्रा र धेरै सुकेको खुर्सानी हाल्नुहोस्।",
      "२ कप पानी हालेर मूला र मासु नरम नहुन्जेल पकाउनुहोस् [३० मिनेट]।",
      "झोल बाक्लो र तेल निस्किएपछि भातसँग पस्कनुहोस्।"
    ],
    tips: ["This dish uses no oil, cooking entirely in the rendered pork fat."]
  },
  {
    id: "40", slug: "kachila-recipe", title: "Kachila", nepaliTitle: "कचिला", category: "Traditional / Ethnic Food", prepTime: "15 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
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
    nutrition: { calories: 350, protein: "45g", carbs: "5g", fat: "18g" },
    baseServings: 4,
    steps: [
      "Ensure the buffalo meat is extremely fresh and finely minced.",
      "Mix meat with garlic-ginger paste, cumin, and finely chopped coriander.",
      "Heat mustard oil until it reaches its smoking point [5 min].",
      "Burn fenugreek seeds in the oil until they are pitch black.",
      "Pour the sizzling oil over the meat and mix rapidly to slightly sear it.",
      "Eat immediately with beaten rice (Chiura)."
    ],
    nepaliSteps: [
      "ताजा राँगाको मासुलाई एकदमै मसिनो गरी किमा पार्नुहोस्।",
      "अदुवा-लसुन पेस्ट, जिरा र हरियो धनियाँ हालेर राम्ररी मोल्नुहोस्।",
      "तोरीको तेललाई धूँवा आउन्जेल ५ मिनेट तताउनुहोस् [५ मिनेट]।",
      "मेथी डढाएर कालो बनाउनुहोस्।",
      "तातो तेल मासुमा खन्याउनुहोस् र छिटो-छिटो चलाउनुहोस्।",
      "चिउरासँग तुरुन्तै पस्कनुहोस्।"
    ],
    tips: ["The meat must be incredibly fresh. Only for the adventurous."]
  },

  // --- DRINKS ---
  {
    id: "41", slug: "masala-chiya-recipe", title: "Masala Chiya", nepaliTitle: "मसाला चिया", category: "Drinks", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
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
    nutrition: { calories: 120, protein: "3g", carbs: "15g", fat: "5g" },
    baseServings: 4,
    steps: [
      "Crush ginger, cardamom, cloves, and peppercorns in a mortar and pestle [2 min].",
      "Boil 2 cups of water and add the crushed spices and black tea leaves.",
      "Let the tea concentrate simmer until it turns a dark, rich brown [5 min].",
      "Add full-fat milk and sugar, and bring back to a boil.",
      "Reduce heat and simmer vigorously for at least 5 minutes until creamy [5 min].",
      "Strain into cups and serve hot."
    ],
    nepaliSteps: [
      "अदुवा, सुकुमेल, ल्वाङ र मरिचलाई खलमा हालेर कुट्नुहोस् [२ मिनेट]।",
      "२ कप पानी उमालेर त्यसमा कुटेको मसला र चियापत्ती हाल्नुहोस्।",
      "पानी गाढा खैरो नहुन्जेल ५ मिनेट सम्म उमाल्नुहोस् [५ मिनेट]।",
      "दूध र चिनी हाल्नुहोस् र फेरि उमाल्नुहोस्।",
      "सानो आँचमा ५ मिनेटसम्म मज्जाले उमाल्नुहोस् [५ मिनेट]।",
      "छानेर तातो-तातो पस्कनुहोस्।"
    ],
    tips: ["Do not rush the boiling process. The longer the milk and tea boil together, the better the chiya."]
  },
  {
    id: "42", slug: "butter-tea-recipe", title: "Butter Tea (Suja)", nepaliTitle: "सुजा (बटर टिया)", category: "Drinks", prepTime: "15 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Himalayas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.4, reviews: 182, videoUrl: "",
    description: "A salty, fatty pink tea made from churned yak butter. Essential for survival in extreme mountain cold.",
    ingredients: [
      "2 tbsp Strong black tea",
      "50g Yak butter (or cow butter)",
      "1 tsp Salt",
      "200ml Milk"
    ],
    nutrition: { calories: 280, protein: "4g", carbs: "8g", fat: "26g" },
    baseServings: 4,
    steps: [
      "Boil specific strong tea leaves or brick tea for a long time until dark [10 min].",
      "Pour the hot concentrate into a blender or traditional churner.",
      "Add a large scoop of butter, salt, and warm milk.",
      "Blend or churn vigorously until the tea is light pink and frothy [1 min].",
      "Serve hot, traditionally with roasted barley flour (Tsampa)."
    ],
    nepaliSteps: [
      "चियापत्तीलाई १० मिनेटसम्म बेस्सरी उमालेर गाढा रङ्ग बनाउनुहोस् [१० मिनेट]।",
      "यो झोललाई ब्लेन्डर वा ठेकीमा हाल्नुहोस्।",
      "प्रसस्त नौनी, नुन र तातो दूध हाल्नुहोस्।",
      "१ मिनेटसम्म मज्जाले फिट्नुहोस् [१ मिनेट]।",
      "तातो-तातो पस्कनुहोस्।"
    ],
    tips: ["It tastes more like a light soup than what foreigners expect of 'tea'."]
  },
  {
    id: "43", slug: "tongba-recipe", title: "Tongba", nepaliTitle: "तोङ्बा", category: "Drinks", prepTime: "5 mins (after fermenting)", difficulty: "Easy", isGrandmaRecipe: true, region: "Eastern Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Tongba_-_Nepalese_fermented_millet_beer.jpg", rating: 4.8, reviews: 491, videoUrl: "",
    description: "A warm, mildly alcoholic millet beer drunk through a bamboo straw. The staple drink of the Limbu people.",
    ingredients: [
      "500g Fermented whole millet seeds",
      "2 liters Boiling hot water"
    ],
    nutrition: { calories: 340, protein: "8g", carbs: "65g", fat: "2g" },
    baseServings: 4,
    steps: [
      "Place fermented millet seeds into a traditional wooden mug (Tongba).",
      "Pour boiling hot water to the top of the mug [1 min].",
      "Allow the millet to steep and release its alcohol for 5 minutes [5 min].",
      "Use a bamboo straw to sip the warm drink from the bottom.",
      "Refill with hot water as soon as the liquid level drops."
    ],
    nepaliSteps: [
      "कोदोको जाँडलाई परम्परागत तोङ्बाको भाँडोमा हाल्नुहोस्।",
      "भाँडोको मुखसम्म उम्लेको तातो पानी हाल्नुहोस् [१ मिनेट]।",
      "५ मिनेटसम्म भिज्न र रक्सी निस्कन दिनुहोस् [५ मिनेट]।",
      "बाँसको पाइप प्रयोग गरेर तातो झोल पिउनुहोस्।",
      "पानी सकिएपछि फेरि थप्दै खानुहोस्।"
    ],
    tips: ["A single serving can be refilled with hot water 5-6 times."]
  },
  {
    id: "44", slug: "sweet-lassi-recipe", title: "Sweet Lassi", nepaliTitle: "लस्सी", category: "Drinks", prepTime: "5 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
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
    nutrition: { calories: 220, protein: "8g", carbs: "35g", fat: "6g" },
    baseServings: 4,
    steps: [
      "Mix thick yogurt, sugar, and cold water in a large jug.",
      "Use a wooden whisk (Madaani) or blender to mix until frothy and light [3 min].",
      "Pour into chilled glasses.",
      "Top with fresh cream (Malai) and a handful of chopped nuts.",
      "Serve chilled immediately."
    ],
    nepaliSteps: [
      "बाक्लो दही, चिनी र चिसो पानी एउटा भाँडोमा मिसाउनुहोस्।",
      "मदानी वा ब्लेन्डरले फिँज नआउन्जेल ३ मिनेट फिट्नुहोस् [३ मिनेट]।",
      "गिलासमा खन्याउनुहोस्।",
      "माथिबाट ताजा तर र काटिएका सुक्खा फलफूल हाल्नुहोस्।",
      "तुरुन्तै चिसो-चिसो पस्कनुहोस्।"
    ],
    tips: ["Use cold milk instead of water for an even thicker, richer lassi."]
  },

  // --- SIMPLE HOME FOODS ---
  {
    id: "45", slug: "egg-curry-recipe", title: "Egg Curry", nepaliTitle: "अण्डा करी", category: "Simple Home Foods", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
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
    nutrition: { calories: 280, protein: "18g", carbs: "10g", fat: "18g" },
    baseServings: 4,
    steps: [
      "Boil eggs until hard and peel them [10 min].",
      "Fry the peeled eggs in oil with salt and turmeric until the skin is crispy [5 min].",
      "Sauté onions and tomatoes until they melt into a thick gravy [10 min].",
      "Add water and spices, then return the fried eggs to the pan.",
      "Simmer for another 5 minutes and garnish with coriander [5 min]."
    ],
    nepaliSteps: [
      "अण्डालाई १० मिनेट उसिन्नुहोस् र बोक्रा छोडाउनुहोस् [१० मिनेट]।",
      "अण्डालाई तेलमा बेसार हालेर ५ मिनेट हल्का तार्नुहोस् [५ मिनेट]।",
      "प्याज र टमाटरको लेदो बन्ने गरी १० मिनेट भुट्नुहोस् [१० मिनेट]।",
      "मसला र पानी हालेर तारेको अण्डालाई ग्रेभीमा हाल्नुहोस्।",
      "थप ५ मिनेट पकाउनुहोस् र धनियाँले सजाउनुहोस् [५ मिनेट]।"
    ],
    tips: ["Frying the boiled eggs gives them a nice chewy exterior that absorbs the gravy."]
  },
  {
    id: "46", slug: "aloo-cauli-tarkari-recipe", title: "Aloo Cauli Tarkari", nepaliTitle: "आलु काउली", category: "Simple Home Foods", prepTime: "25 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
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
    nutrition: { calories: 180, protein: "4g", carbs: "25g", fat: "8g" },
    baseServings: 4,
    steps: [
      "Cut potatoes and cauliflower into equal sized small pieces.",
      "Fry potatoes in hot oil for 5 minutes until edges are golden [5 min].",
      "Add cauliflower florets, turmeric, and cover to steam-fry [10 min].",
      "Add tomatoes and spices, cook until they form a dry coating [5 min].",
      "Serve hot with rotis or as a side with dal bhat."
    ],
    nepaliSteps: [
      "आलु र काउलीलाई ससाना र उस्तै टुक्रामा काट्नुहोस्।",
      "तातो तेलमा आलुलाई ५ मिनेट हल्का खैरो नहुन्जेल भुट्नुहोस् [५ मिनेट]।",
      "काउली र बेसार हालेर बिर्कोले छोपी १० मिनेट पकाउनुहोस् [१० मिनेट]।",
      "टमाटर र मसला हालेर ५ मिनेट सम्म भुट्नुहोस् [५ मिनेट]।",
      "रोटी वा भातसँग तातो-तातो पस्कनुहोस्।"
    ],
    tips: ["Do not add water. Cooking the vegetables in their own steam yields the best taste."]
  },
  {
    id: "47", slug: "tomato-chutney-recipe", title: "Tomato Chutney (Golbheda ko Achar)", nepaliTitle: "गोलभेडाको अचार", category: "Simple Home Foods", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.8, reviews: 1891, videoUrl: "",
    description: "A spicy, tangy, and smoky condiment served alongside almost every Dal Bhat meal.",
    ingredients: [
      "4 large Tomatoes",
      "4 cloves Garlic",
      "3 Green chilies",
      "1 bunch Fresh coriander",
      "1/2 tsp Szechuan pepper (Timur)"
    ],
    nutrition: { calories: 85, protein: "2g", carbs: "12g", fat: "4g" },
    baseServings: 4,
    steps: [
      "Roast whole tomatoes and garlic on an open flame until charred [8 min].",
      "Grind garlic, ginger, and chilies into a paste with a pinch of Timur pepper.",
      "Peel the roasted tomatoes and add them to the paste, crushing them manually [2 min].",
      "Season with salt and a drizzle of raw mustard oil.",
      "Garnish with fresh coriander and serve immediately."
    ],
    nepaliSteps: [
      "टमाटर र लसुनलाई आँचमा ८ मिनेट पोल्नुहोस् [८ मिनेट]।",
      "लसुन, अदुवा, खुर्सानी र टिमुर हालेर खलमा कुट्नुहोस्।",
      "टमाटरको पोलेको बोक्रा फालेर २ मिनेट सम्म मिसाउनुहोस् [२ मिनेट]।",
      "नुन र थोरै तोरीको तेल हाल्नुहोस्।",
      "धनियाँ हालेर भातसँग पस्कनुहोस्।"
    ],
    tips: ["Grinding on a traditional stone silauto is far superior to using an electric blender."]
  },
  {
    id: "48", slug: "saag-tarkari-recipe", title: "Saag Tarkari", nepaliTitle: "साग", category: "Simple Home Foods", prepTime: "15 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg", rating: 4.7, reviews: 632, videoUrl: "",
    description: "Mustard or spinach leaves flash-fried in mustard oil with dry red chilies. Simple and healthy.",
    ingredients: [
      "500g Rayo Saag or Spinach",
      "4 Dry red chilies",
      "6 Garlic cloves",
      "2 tbsp Mustard oil",
      "1 tsp Salt"
    ],
    nutrition: { calories: 80, protein: "3g", carbs: "5g", fat: "6g" },
    baseServings: 4,
    steps: [
      "Wash greens thoroughly and chop into rough large pieces.",
      "Heat mustard oil until it smokes, then fry whole garlic and dry chilies [3 min].",
      "Dump the greens into the pan and toss on high heat [5 min].",
      "Add salt and remove from heat as soon as they wilt to keep the green color.",
      "Serve warm with rice."
    ],
    nepaliSteps: [
      "सागलाई राम्ररी धोएर ठूला टुक्रा पार्नुहोस्।",
      "तोरीको तेल धूँवा आउन्जेल तताएर लसुन र खुर्सानी ३ मिनेट डढाउनुहोस् [३ मिनेट]।",
      "साग हालेर ठूलो आँचमा ५ मिनेट छिटो-छिटो चलाउनुहोस् [५ मिनेट]।",
      "साग ओइलाउने बित्तिकै नुन हालेर आँच निभाउनुहोस्।",
      "भातसँग तातो-तातो खानुहोस्।"
    ],
    tips: ["Do not overcook or cover the pan; the greens will lose their vibrant color and turn mushy."]
  },
  {
    id: "49", slug: "jhaneko-dal-recipe", title: "Jhaneko Dal", nepaliTitle: "झानेको दाल", category: "Simple Home Foods", prepTime: "25 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
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
    nutrition: { calories: 150, protein: "9g", carbs: "20g", fat: "4g" },
    baseServings: 4,
    steps: [
      "Boil lentils with water, turmeric, and salt until completely soft [20 min].",
      "In a small tempering pan, heat ghee or oil until very hot.",
      "Fry cumin, crushed garlic, and dry chilies until the garlic turns dark brown [3 min].",
      "Pour the sizzling oil into the dal and cover with a lid immediately.",
      "Serve hot with rice and a dollop of ghee."
    ],
    nepaliSteps: [
      "दालमा बेसार र नुन हालेर २० मिनेटसम्म गलाउनुहोस् [२० मिनेट]।",
      "पार्श्वपट्टि पन्यूमा घिउ वा तेल मज्जाले तताउनुहोस्।",
      "जिरा, लसुन र खुर्सानी ३ मिनेट रातो-खैरो हुन्जेल भुट्नुहोस् [३ मिनेट]।",
      "तातो झानेको तेल दालमा हालेर तुरुन्तै बिर्कोले छोप्नुहोस्।",
      "भातसँग तातो-तातो खानुहोस्।"
    ],
    tips: ["Trapping the smoke under the lid for a few minutes infuses the entire pot of dal with a rich, smoky flavor."]
  },
  {
    id: "50", slug: "wai-wai-sadeko-recipe", title: "Wai Wai Sadeko", nepaliTitle: "सुख्खा चाउचाउ", category: "Simple Home Foods", prepTime: "5 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg", rating: 4.5, reviews: 890, videoUrl: "",
    description: "The ultimate midnight snack for Nepali youth. Raw Wai Wai instant noodles mixed with raw veggies.",
    ingredients: [
      "2 packs Wai Wai noodles",
      "1 Onion",
      "2 Green Chilies",
      "1 Tomato",
      "1 Lemon"
    ],
    nutrition: { calories: 340, protein: "7g", carbs: "48g", fat: "14g" },
    baseServings: 4,
    steps: [
      "Crush the raw noodles inside the packet before opening.",
      "Chop onion, tomato, and green chilies into very fine pieces [5 min].",
      "In a bowl, mix the crushed noodles with the chopped vegetables.",
      "Add the provided spicy oil and masala packets from the packaging.",
      "Squeeze fresh lemon juice over the mixture and toss well.",
      "Enjoy immediately while crunchy."
    ],
    nepaliSteps: [
      "प्याकेट नखोली चाउचाउलाई भित्रै टुक्रा पार्नुहोस्।",
      "प्याज, टमाटर र खुर्सानी ५ मिनेट लगाएर मसिनो गरी काट्नुहोस् [५ मिनेट]।",
      "एउटा भाँडोमा चाउचाउ र काटेका तरकारीहरू मिसाउनुहोस्।",
      "चाउचाउ भित्रको मसला र तेल हाल्नुहोस्।",
      "कागती निचोरेर राम्ररी चलाउनुहोस्।",
      "नगलिउन्जेल तुरुन्तै खानुहोस्।"
    ],
    tips: ["Do not cook the noodles! The crunch is the entire point of the dish."]
  }
];
