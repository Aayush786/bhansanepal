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
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 1042, videoUrl: "",
    description: "The ultimate everyday Nepali meal consisting of steamed rice, lentil soup, and vegetable curry.",
    ingredients: ["Rice", "Yellow lentils (Dal)", "Seasonal vegetable (Cauliflower/Potato)", "Turmeric", "Cumin seeds", "Ghee"],
    steps: ["Boil rice.", "Pressure cook lentils with turmeric and salt.", "Temper lentils with ghee and cumin seeds.", "Cook mixed vegetables with spices until tender.", "Serve hot together on a thali."],
    tips: ["A dollop of ghee on the rice changes everything."]
  },
  {
    id: "2", title: "Gundruk ko Jhol", nepaliTitle: "गुन्द्रुक को झोल", category: "Main Dishes", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: true, region: " पहाड (Hills)",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 412, videoUrl: "",
    description: "A fermented leafy green soup, tangy and rich, a staple in the hilly regions.",
    ingredients: ["Gundruk (Fermented greens)", "Onion", "Tomato", "Garlic", "Soybean", "Dry chilies"],
    steps: ["Soak gundruk in warm water for 10 mins.", "Roast soybeans and set aside.", "Fry onions, garlic, and tomato until soft.", "Add gundruk, soybeans, and water. Boil for 15 minutes.", "Serve hot with Dhido or Rice."],
    tips: ["Roasted soybeans add a necessary crunch."]
  },
  {
    id: "3", title: "Dhido with Gundruk", nepaliTitle: "ढिंडो र गुन्द्रुक", category: "Main Dishes", prepTime: "40 mins", difficulty: "Hard", isGrandmaRecipe: true, region: " पहाड (Hills)",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 523, videoUrl: "",
    description: "Traditional porridge-like food made from buckwheat or millet flour, usually eaten hot without chewing.",
    ingredients: ["Millet or Buckwheat flour", "Water", "Ghee", "Salt"],
    steps: ["Boil water in a heavy-bottomed pan.", "Gradually pour flour while continuously stirring vigorously with a spatula (Dabilo) to avoid lumps.", "Cook until the mixture pulls away from the pan walls.", "Serve immediately with a generous amount of hot ghee and Gundruk."],
    tips: ["Requires immense arm strength to stir properly! Do not chew dhido, just swallow."]
  },
  {
    id: "4", title: "Thakali Khana Set", nepaliTitle: "थकाली खाना", category: "Main Dishes", prepTime: "1.5 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Himalayas",
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", rating: 5.0, reviews: 2041, videoUrl: "",
    description: "An iconic, meticulously prepared platter of rice, black dal, curries, and pickles from the Mustang region.",
    ingredients: ["Rice", "Black lentils", "Jimbu (Himalayan herb)", "Ghee", "Mustang potatoes", "Timur (Szechuan pepper)"],
    steps: ["Cook rice until fluffy.", "Slow cook black lentils until creamy. Temper with ghee and jimbu.", "Prepare spicy potato curry.", "Make tomato and timur achar.", "Serve neatly arranged on a brass plate."],
    tips: ["The distinct flavor comes entirely from the Jimbu herb."]
  },
  {
    id: "5", title: "Aloo Tama", nepaliTitle: "आलु तामा", category: "Main Dishes", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.6, reviews: 341, videoUrl: "",
    description: "A classic acidic and spicy curry made of bamboo shoots, potatoes, and black-eyed peas.",
    ingredients: ["Fermented bamboo shoots (Tama)", "Potatoes", "Black-eyed peas (Bodi)", "Mustard oil", "Turmeric"],
    steps: ["Boil the black-eyed peas and potatoes.", "Fry the bamboo shoots in mustard oil to reduce the raw smell.", "Add boiled potatoes, peas, and water to create a broth.", "Simmer with spices for 20 minutes."],
    tips: ["Always fry the tama first; otherwise, the soup will be too bitter."]
  },
  {
    id: "6", title: "Kwati", nepaliTitle: "क्वाँटी", category: "Main Dishes", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 189, videoUrl: "",
    description: "A hearty soup of 9 different sprouted beans, traditionally consumed during the Janai Purnima festival.",
    ingredients: ["9 varieties of beans (sprouted)", "Lovage seeds (Jwano)", "Ghee", "Ginger garlic paste"],
    steps: ["Sprout the beans for 2-3 days prior.", "Pressure cook the sprouted beans until soft.", "Temper ghee with ajwain/jwano and pour over the soup.", "Simmer until the broth is thick."],
    tips: ["The longer the beans sprout, the sweeter the soup tastes."]
  },
  {
    id: "7", title: "Masu Bhat", nepaliTitle: "मासु भात", category: "Main Dishes", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 932, videoUrl: "",
    description: "The beloved weekend special: rich mutton or chicken curry served over a mountain of white rice.",
    ingredients: ["Mutton or Chicken (bone-in)", "Rice", "Onion", "Tomato", "Meat Masala", "Mustard oil"],
    steps: ["Marinate meat with turmeric and salt.", "Fry onions in mustard oil until deeply caramelized brown.", "Add meat and fry until browned.", "Add tomatoes and spices, cook until oil separates.", "Add water to make a gravy and pressure cook until tender."],
    tips: ["Bone-in meat makes for a much more flavorful gravy."]
  },
  {
    id: "8", title: "Sukuti Fry", nepaliTitle: "सुकुटी फ्राई", category: "Main Dishes", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: " पहाड (Hills)",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 402, videoUrl: "",
    description: "Spicy and chewy dry buffalo meat pan-fried with tomatoes, onions, and heavy spices.",
    ingredients: ["Dry meat (Sukuti)", "Tomato", "Onion", "Green chilies", "Coriander"],
    steps: ["Soak the dry meat in warm water for 10 minutes to soften slightly.", "Pound the meat lightly with a mortar.", "Fry chopped onions and chilies.", "Add the meat and fry on high heat.", "Add tomatoes and stir-fry until the moisture evaporates."],
    tips: ["Pairs perfectly with puffed rice (Bhuja) or as a side to drinks."]
  },
  {
    id: "9", title: "Chicken Choila", nepaliTitle: "कुखुराको छोयला", category: "Main Dishes", prepTime: "40 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 671, videoUrl: "",
    description: "A spectacularly spicy and smoky grilled chicken dish heavily seasoned with garlic, ginger, and mustard oil.",
    ingredients: ["Chicken breast/thigh", "Mustard oil", "Fenugreek seeds (Methi)", "Garlic", "Ginger", "Red dry chilies"],
    steps: ["Boil or grill the chicken until cooked, then shred it into bite-sized pieces.", "Make a paste of roasted tomatoes, lots of garlic, and ginger.", "Mix the chicken with the paste.", "Heat mustard oil, fry fenugreek seeds until black, and pour the smoking oil over the chicken.", "Mix well and garnish with cilantro."],
    tips: ["The fenugreek must be completely blackened in the oil to get the authentic flavor."]
  },
  {
    id: "10", title: "Pork Sekuwa", nepaliTitle: "बंगुरको सेकुवा", category: "Main Dishes", prepTime: "2 hrs", difficulty: "Medium", isGrandmaRecipe: false, region: "Eastern Nepal",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 512, videoUrl: "",
    description: "Nepali style BBQ. Fatty pork marinated in a blend of Himalayan spices and roasted over a wood fire.",
    ingredients: ["Pork belly/shoulder", "Garlic paste", "Ginger paste", "Cumin powder", "Szechuan pepper (Timur)", "Lemon juice"],
    steps: ["Cut pork into medium cubes.", "Marinate overnight with all spices, ginger, garlic, and lemon.", "Skewer the meat.", "Grill slowly over a charcoal fire until charred on the outside and juicy inside."],
    tips: ["Fatty cuts work best as the melting fat keeps the meat moist on the grill."]
  },

  // --- SNACKS / STREET FOOD ---
  {
    id: "11", title: "Buff Momo", nepaliTitle: "बफ म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e80ad63?auto=format&fit=crop&q=80&w=800", rating: 5.0, reviews: 3102, videoUrl: "",
    description: "The undisputed king of Nepali street food. Steamed dumplings filled with spiced minced buffalo meat.",
    ingredients: ["Flour", "Minced buffalo meat", "Onions", "Cumin", "Coriander", "Momo Masala"],
    steps: ["Knead flour and water into a soft dough.", "Mix the minced meat with finely chopped onion and heavy spices.", "Roll dough into small circles, place a spoonful of filling, and pleat the edges to seal.", "Steam for 12-15 minutes.", "Serve with spicy tomato/sesame chutney."],
    tips: ["A fatty ratio in the minced meat makes the momos incredibly juicy."]
  },
  {
    id: "12", title: "Chicken Momo", nepaliTitle: "चिकेन म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e80ad63?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 2841, videoUrl: "",
    description: "Steamed chicken dumplings. Universally loved and lighter than buff momos.",
    ingredients: ["Flour", "Minced chicken", "Onions", "Ginger paste", "Garlic paste", "Soy sauce"],
    steps: ["Prepare dough.", "Mix minced chicken with aromatics and soy sauce.", "Wrap the momos.", "Steam for 15 minutes.", "Serve smoking hot."],
    tips: ["Add a tablespoon of oil to the chicken mixture since chicken mince is usually lean."]
  },
  {
    id: "13", title: "Veg Momo", nepaliTitle: "भेज म:म", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e80ad63?auto=format&fit=crop&q=80&w=800", rating: 4.6, reviews: 954, videoUrl: "",
    description: "Delicious steamed dumplings filled with finely chopped cabbage, carrots, paneer, and onions.",
    ingredients: ["Flour", "Cabbage", "Carrot", "Paneer", "Onion", "Butter"],
    steps: ["Finely chop all vegetables and squeeze out excess water.", "Mix veggies with crumbled paneer, melted butter, salt, and pepper.", "Wrap into dough balls.", "Steam for 10-12 minutes."],
    tips: ["Squeezing the water out of the cabbage is crucial, otherwise the momos will tear."]
  },
  {
    id: "14", title: "Chatpate", nepaliTitle: "चटपटे", category: "Snacks / Street Food", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 1120, videoUrl: "",
    description: "Explosively spicy, tangy, and crunchy street salad made with puffed rice and instant noodles.",
    ingredients: ["Puffed rice (Bhuja)", "Wai Wai noodles", "Boiled potato", "Onion", "Tomato", "Green chilies", "Lemon juice", "Mustard oil"],
    steps: ["Chop potatoes, onions, tomatoes, and chilies.", "Crush the Wai Wai noodles in a large steel bowl.", "Add puffed rice and the chopped veggies.", "Add mustard oil, massive squeeze of lemon, and spices.", "Toss aggressively and serve in a paper cone."],
    tips: ["A dash of raw mustard oil gives it the signature street food kick."]
  },
  {
    id: "15", title: "Aloo Chop", nepaliTitle: "आलु चप", category: "Snacks / Street Food", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.5, reviews: 432, videoUrl: "",
    description: "Spiced mashed potato patties, dipped in batter and deep-fried to crispy perfection.",
    ingredients: ["Potato", "Onion", "Green chillies", "Besan (Gram flour)", "Cumin powder", "Turmeric", "Oil for frying"],
    steps: ["Boil and mash the potatoes.", "Mix with chopped onions, chillies, cumin, and salt.", "Form small flat patties.", "Make a thick batter using besan, water, and turmeric.", "Dip patties into batter and deep fry until golden."],
    tips: ["Serve with a sour tamarind chutney."]
  },
  {
    id: "16", title: "Pani Puri", nepaliTitle: "पानी पुरी", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 1421, videoUrl: "",
    description: "Hollow, crispy fried dough balls stuffed with spicy potatoes and filled with tangy tamarind water.",
    ingredients: ["Puris (store-bought)", "Boiled potato", "White peas (Matar)", "Tamarind", "Mint leaves", "Pani Puri Masala"],
    steps: ["Mash boiled potatoes and peas with salt and chili powder.", "Prepare the spiced water by blending mint, tamarind paste, and masala.", "Crack a small hole in a puri, fill with potato mixture, and dunk in the spiced water.", "Eat it whole in one bite!"],
    tips: ["The spiced water must be served ice cold."]
  },
  {
    id: "17", title: "Samosa", nepaliTitle: "समोसा", category: "Snacks / Street Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Terai",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 631, videoUrl: "",
    description: "Triangular pastry crust filled with savory spiced potatoes and green peas, deep fried.",
    ingredients: ["All-purpose flour", "Potatoes", "Green peas", "Cumin seeds", "Garam masala", "Oil"],
    steps: ["Knead flour with oil and water into a stiff dough.", "Cook mashed potatoes and peas with cumin and spices.", "Roll dough, cut in half, and fold into cones.", "Fill the cones with potato mix and seal the edges with water.", "Deep fry on low-medium heat until flaky and brown."],
    tips: ["Frying on high heat will cause the crust to blister and turn soft. Fry on low heat."]
  },
  {
    id: "18", title: "Bara (Wo)", nepaliTitle: "बारा (व:)", category: "Snacks / Street Food", prepTime: "12 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.6, reviews: 312, videoUrl: "",
    description: "A thick, savory pancake made from ground black lentils, crispy on the outside and spongy inside.",
    ingredients: ["Black lentils", "Ginger", "Cumin powder", "Mustard oil", "Egg/Minced meat (optional toppings)"],
    steps: ["Soak black lentils overnight and remove the skins.", "Grind into a thick, fluffy paste with ginger.", "Heat mustard oil in a flat pan.", "Pour a ladle of batter and spread into a thick circle.", "Cook both sides. Can top with an egg or minced meat before flipping."],
    tips: ["Whisking the batter vigorously traps air, making the Bara incredibly soft."]
  },
  {
    id: "19", title: "Nepali Pakoda", nepaliTitle: "प पकौडा", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.4, reviews: 290, videoUrl: "",
    description: "Onion and vegetable fritters made with gram flour, widely eaten during rainy days with tea.",
    ingredients: ["Onions (sliced thin)", "Besan (Gram flour)", "Green chilies", "Turmeric", "Carom seeds (Ajwain)"],
    steps: ["Mix thinly sliced onions with besan, spices, and a tiny bit of water to form a sticky mass.", "Drop spoonfuls into hot oil.", "Deep fry until dark golden and crispy."],
    tips: ["Don't add too much water; the moisture from the onions is usually enough."]
  },
  {
    id: "20", title: "Street Chowmein", nepaliTitle: "चाउमिन", category: "Snacks / Street Food", prepTime: "20 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 1432, videoUrl: "",
    description: "Nepali style stir-fried noodles, loaded with cabbage, carrots, soy sauce, and a distinct Momo masala flavor.",
    ingredients: ["Egg noodles", "Cabbage", "Carrot", "Onion", "Soy sauce", "Ketchup", "Momo Masala", "Chicken (optional)"],
    steps: ["Boil the noodles until al dente.", "Stir fry chicken pieces and remove.", "Stir fry julienned vegetables on extremely high heat.", "Add the noodles, chicken, soy sauce, ketchup, and masala.", "Toss vigorously and serve hot."],
    tips: ["The ketchup adds that distinct sweet-tangy flavor found in Nepali street stalls."]
  },

  // --- SWEETS ---
  {
    id: "21", title: "Sel Roti", nepaliTitle: "सेल रोटी", category: "Sweets", prepTime: "2 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 124, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Traditional Nepali festival bread made during Tihar. Sweet, crispy on the outside, soft inside.",
    ingredients: ["Rice flour", "Sugar", "Ghee", "Banana", "Cardamom", "Water"],
    steps: ["Soak rice overnight, grind into a slightly grainy paste.", "Mix sugar, mashed banana, and ghee into the paste.", "Heat a deep pan with oil/ghee.", "Pour the batter in a continuous circular ring shape into the hot oil by hand.", "Deep fry until reddish-brown."],
    tips: ["Batter consistency is key. If too thick, the roti is hard. If too thin, it loses shape."]
  },
  {
    id: "22", title: "Yomari", nepaliTitle: "योमरी", category: "Sweets", prepTime: "1.5 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e80ad63?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 156, videoUrl: "",
    description: "A Newari delicacy of steamed rice-flour dough filled with sweet chaku (molasses) or khuwa.",
    ingredients: ["Rice flour", "Chaku (Molasses) or Khuwa", "Sesame seeds", "Boiling water"],
    steps: ["Make a smooth, soft dough using rice flour and boiling water.", "Melt chaku and mix with roasted sesame seeds.", "Mold a small piece of dough into a fig-like cone shape.", "Fill with the sweet mixture and pinch to seal the tail.", "Steam for 15-20 minutes."],
    tips: ["The water for the dough MUST be boiling hot to make the flour pliable."]
  },
  {
    id: "23", title: "Rice Kheer", nepaliTitle: "खीर", category: "Sweets", prepTime: "1 hr", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 542, videoUrl: "",
    description: "A creamy, slow-cooked rice pudding enriched with milk, cashews, cardamom, and coconut.",
    ingredients: ["Taichin Rice", "Full-fat milk", "Sugar", "Cardamom", "Cashews", "Raisins", "Coconut flakes"],
    steps: ["Wash the rice and fry it slightly in ghee.", "Boil the milk in a heavy bottomed pot.", "Add the rice to the boiling milk and lower the heat.", "Simmer for 45 minutes, stirring frequently until it thickens.", "Add sugar and dry fruits at the end."],
    tips: ["Cooking on low heat for a long time gives it a slightly pinkish hue and rich caramel flavor."]
  },
  {
    id: "24", title: "Pua", nepaliTitle: "पुवा", category: "Sweets", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: true, region: " पहाड (Hills)",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.5, reviews: 112, videoUrl: "",
    description: "A quick sweet snack made by roasting rice flour in ghee and boiling it with milk and sugar.",
    ingredients: ["Coarse rice flour", "Ghee", "Milk", "Sugar"],
    steps: ["Heat a generous amount of ghee in a pan.", "Roast the coarse rice flour until golden brown and aromatic.", "Add sugar and pour warm milk over it.", "Cook until the liquid is absorbed and the mixture becomes crumbly and soft."],
    tips: ["Use coarse rice flour (not fine powder) to get the right texture."]
  },
  {
    id: "25", title: "Lal Mohan", nepaliTitle: "लाल मोहन", category: "Sweets", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 432, videoUrl: "",
    description: "The Nepali version of Gulab Jamun. Deep fried milk-solid spheres soaked in cardamom sugar syrup.",
    ingredients: ["Khuwa (Milk solids)", "Flour", "Baking powder", "Sugar", "Water", "Cardamom"],
    steps: ["Make a sugar syrup with water and cardamom, keep it warm.", "Knead khuwa with a little flour and baking powder until completely smooth.", "Roll into crack-free balls.", "Deep fry on very low heat until dark brown.", "Immediately drop the hot balls into the warm syrup and let soak for hours."],
    tips: ["If the balls have cracks, they will break apart while frying."]
  },
  {
    id: "26", title: "Rasbari", nepaliTitle: "रसबरी", category: "Sweets", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.6, reviews: 298, videoUrl: "",
    description: "Spongy, white cheese balls boiled in a light sugar syrup. Very popular at weddings.",
    ingredients: ["Milk", "Lemon juice", "Sugar", "Water", "Rose water"],
    steps: ["Boil milk and curdle it with lemon juice.", "Drain the whey using a cheesecloth to get fresh paneer (Chhena).", "Knead the chhena vigorously for 10 minutes until it feels like butter.", "Roll into small balls.", "Boil in a light sugar syrup for 15 minutes. The balls will double in size."],
    tips: ["Washing the chhena under cold water removes the lemon flavor and stops the cooking process."]
  },
  {
    id: "27", title: "Gudpak", nepaliTitle: "गुँदपाक", category: "Sweets", prepTime: "2 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 312, videoUrl: "",
    description: "An incredibly rich, fudge-like sweet made of milk, ghee, edible gum, and nuts. Given to new mothers for strength.",
    ingredients: ["Milk", "Ghee", "Sugar", "Edible gum (Gond)", "Almonds", "Pistachios", "Cardamom"],
    steps: ["Slowly boil down milk until it solidifies into Khuwa (takes hours).", "Fry the edible gum in ghee until puffed, then crush it.", "Mix the khuwa, sugar, copious amounts of ghee, and crushed gum.", "Cook until the mixture turns deep brown and starts leaving the sides of the pan.", "Mix in dry fruits and serve hot or cold."],
    tips: ["Requires immense patience to boil down the milk properly."]
  },
  {
    id: "28", title: "Lakhamari", nepaliTitle: "लाखामरी", category: "Sweets", prepTime: "3 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 189, videoUrl: "",
    description: "A highly intricate, crispy, flaky bread coated in sugar syrup. Essential for Newari weddings.",
    ingredients: ["Flour", "Black gram flour (Urad dal)", "Ghee", "Sugar", "Water"],
    steps: ["Make a dough using flour and lentil paste.", "Pipe it through a cloth into complex, interlacing star or wheel patterns into hot oil.", "Deep fry until extremely crispy and dry.", "Dip quickly into a thick sugar syrup and set aside to cool and crystallize."],
    tips: ["Can be kept for months without spoiling."]
  },
  {
    id: "29", title: "Thekua", nepaliTitle: "ठेकुवा", category: "Sweets", prepTime: "1 hr", difficulty: "Easy", isGrandmaRecipe: true, region: "Terai",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.6, reviews: 212, videoUrl: "",
    description: "A hard, crunchy, rustic cookie made during the Chhath festival, deeply flavored with jaggery and fennel.",
    ingredients: ["Wheat flour", "Jaggery (Gud)", "Ghee", "Fennel seeds (Saunf)", "Dry coconut", "Water"],
    steps: ["Dissolve jaggery in warm water.", "Rub ghee into the wheat flour until it resembles breadcrumbs.", "Add chopped coconut and fennel seeds.", "Use the jaggery water to make a very stiff dough.", "Press into wooden molds (or by hand) and deep fry on low heat."],
    tips: ["Low heat is crucial so the inside cooks before the jaggery outside burns."]
  },
  {
    id: "30", title: "Peda", nepaliTitle: "पेड़ा", category: "Sweets", prepTime: "40 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Terai",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 341, videoUrl: "",
    description: "Soft, grainy fudge discs made entirely of milk solids and sugar, infused with cardamom.",
    ingredients: ["Khuwa (Milk solids)", "Sugar", "Cardamom powder", "Pistachios"],
    steps: ["Crumble the khuwa in a pan.", "Roast it on low heat until it changes color slightly.", "Add sugar; it will melt and make the mixture liquid.", "Cook until the mixture forms a mass and leaves the pan.", "Let it cool slightly, roll into discs, and press a pistachio on top."],
    tips: ["Do not overcook the sugar, or the peda will become chewy and hard."]
  },

  // --- TRADITIONAL / ETHNIC DISHES ---
  {
    id: "31", title: "Newari Samay Baji", nepaliTitle: "समय बजी", category: "Traditional / Ethnic Food", prepTime: "2 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", rating: 5.0, reviews: 890, videoUrl: "",
    description: "A monumental festival platter representing a balanced diet, gods, and cosmos. The heart of Newari cuisine.",
    ingredients: ["Beaten rice (Chiura)", "Choila (Spicy meat)", "Black soybeans (Bhatmas ko Achar)", "Potato salad (Aloo ko Achar)", "Boiled egg", "Bara (Lentil pancake)", "Spinach", "Ginger garlic chunks"],
    steps: ["Prepare each item separately.", "Make the spicy potato and soybean pickles.", "Prepare the Choila and Bara.", "Arrange the beaten rice in the center of a leaf plate (Bota).", "Arrange all the side dishes in a circle around the rice.", "Serve with Aila (traditional rice wine)."],
    tips: ["Mustard oil is the absolute binding flavor across all components of Samay Baji."]
  },
  {
    id: "32", title: "Chatamari", nepaliTitle: "चतामरी", category: "Traditional / Ethnic Food", prepTime: "45 mins", difficulty: "Medium", isGrandmaRecipe: false, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 521, videoUrl: "",
    description: "Often called the 'Nepali Pizza'. A thin, crispy rice flour crepe topped with minced meat and an egg.",
    ingredients: ["Rice flour", "Water", "Minced meat (Buff/Chicken)", "Egg", "Tomato", "Onion", "Cumin powder"],
    steps: ["Make a watery batter out ofrice flour.", "Pour a ladle of batter onto a hot covered pan, spreading it thin.", "Add the seasoned raw minced meat, tomatoes, and onions on top.", "Crack an egg over the meat.", "Cover with a lid and steam-cook on low heat until the base is crispy and the meat is done."],
    tips: ["Do not flip the Chatamari! It cooks entirely through the trapped steam."]
  },
  {
    id: "33", title: "Juju Dhau", nepaliTitle: "जुजु धौ", category: "Traditional / Ethnic Food", prepTime: "12 hrs", difficulty: "Hard", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", rating: 5.0, reviews: 1102, videoUrl: "",
    description: "The 'King of Yogurt' from Bhaktapur. Incredibly rich, sweet, custard-like yogurt set in a clay pot.",
    ingredients: ["Buffalo milk", "Sugar", "Cardamom", "Yogurt starter culture"],
    steps: ["Boil buffalo milk until it reduces and thickens significantly.", "Add sugar and cardamom while boiling.", "Pour the lukewarm milk into porous unglazed clay bowls (Kataaro).", "Add a spoonful of starter culture.", "Wrap the bowls in thick blankets in a warm room for 12 hours to set."],
    tips: ["The clay pot absorbs excess water, making the yogurt dense enough that it won't fall out if turned upside down!"]
  },
  {
    id: "34", title: "Tharu Fish Curry", nepaliTitle: "थारु माछा को तरकारी", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Tharu (Terai)",
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 432, videoUrl: "",
    description: "A spicy, rustic fish curry from the indigenous Tharu community, heavily reliant on mustard paste.",
    ingredients: ["River fish", "Mustard seeds (ground into paste)", "Garlic", "Green chilies", "Turmeric", "Mustard oil"],
    steps: ["Marinate the fish in turmeric and salt.", "Lightly fry the fish in mustard oil and set aside.", "In the same oil, add the mustard-garlic paste and fry heavily.", "Add water to make a thin, sharp broth.", "Add the fish back in and simmer for 10 minutes.", "Garnish with coriander."],
    tips: ["Yellow mustard seeds are preferred, and they must be ground to a very fine paste."]
  },
  {
    id: "35", title: "Sherpa Stew (Shyakpa)", nepaliTitle: "शेर्पा स्ट्यु", category: "Traditional / Ethnic Food", prepTime: "1.5 hrs", difficulty: "Medium", isGrandmaRecipe: true, region: "Himalayas",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 312, videoUrl: "",
    description: "A thick, hearty, calorie-dense noodle and vegetable stew meant to warm the body in freezing high altitudes.",
    ingredients: ["Wheat flour (for hand-pulled noodles)", "Potatoes", "Radish", "Meat (Yak or Mutton)", "Garlic", "Onion", "Butter"],
    steps: ["Make a stiff dough and hand-pull/tear pieces into hot boiling water to make fresh noodles.", "In a separate pot, fry meat and root vegetables in butter.", "Add water to the meat and boil until tender to create a rich broth.", "Combine the cooked noodles with the broth and simmer together."],
    tips: ["The radish is crucial. It adds an earthy sweetness that cuts through the heavy meat broth."]
  },
  {
    id: "36", title: "Kinema Curry", nepaliTitle: "किनेमा तरकारी", category: "Traditional / Ethnic Food", prepTime: "30 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Eastern Nepal",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.2, reviews: 145, videoUrl: "",
    description: "A distinctly pungent curry made from fermented soybeans. An acquired taste similar to Japanese Natto.",
    ingredients: ["Kinema (Fermented soybeans)", "Onion", "Tomato", "Green chilies", "Turmeric"],
    steps: ["Soak the sticky kinema beans in warm water briefly.", "Fry finely chopped onions, chilies, and tomatoes.", "Add the kinema and turmeric, frying for a few minutes.", "Add a little water to make a thick gravy.", "Serve hot with rice."],
    tips: ["The smell is incredibly strong, but the umami flavor is unparalleled once you get used to it."]
  },
  {
    id: "37", title: "Dhikri", nepaliTitle: "ढिक्री", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: true, region: "Tharu (Terai)",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e80ad63?auto=format&fit=crop&q=80&w=800", rating: 4.5, reviews: 201, videoUrl: "",
    description: "Steamed rice flour logs, a staple of the Tharu community, especially during the Maghi festival.",
    ingredients: ["Rice flour", "Warm water"],
    steps: ["Make a pliable dough by mixing rice flour with warm water.", "Roll the dough between your palms to form long, cylindrical stick shapes.", "Place in a steamer layered with straw or cloth.", "Steam for 20-30 minutes until thoroughly cooked.", "Serve with spicy chutney or fish curry."],
    tips: ["Traditionally steamed over clay pots; very bland on its own but perfect for soaking up spicy curries."]
  },
  {
    id: "38", title: "Tama Sadeko", nepaliTitle: "तामा साधेको", category: "Traditional / Ethnic Food", prepTime: "15 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.6, reviews: 211, videoUrl: "",
    description: "A sharp, highly acidic cold salad of fermented bamboo shoots, mixed with raw mustard oil.",
    ingredients: ["Fermented bamboo shoots (Tama)", "Boiled potatoes", "Red chili powder", "Mustard oil", "Fenugreek seeds", "Turmeric"],
    steps: ["Boil the tama for 10 minutes to remove the extreme bitterness, then drain.", "Cut boiled potatoes into cubes.", "Mix tama, potatoes, and chili powder in a bowl.", "Heat raw mustard oil, fry fenugreek seeds until black, add turmeric, and pour over the salad.", "Toss well and serve."],
    tips: ["A perfect palate cleanser to cut through the fat of heavy meat dishes."]
  },
  {
    id: "39", title: "Phagshapa", nepaliTitle: "फगशापा", category: "Traditional / Ethnic Food", prepTime: "1 hr", difficulty: "Medium", isGrandmaRecipe: false, region: "Eastern Nepal",
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 188, videoUrl: "",
    description: "A fiery pork dish cooked with dry red chilies and radishes, popular in Limbu and Rai communities.",
    ingredients: ["Pork belly", "Radish", "Dry red chilies", "Ginger", "Garlic"],
    steps: ["Boil the fatty pork belly strips until half cooked.", "In a pan, cook the pork in its own rendered fat along with ginger and garlic.", "Add large chunks of radish and handfuls of dry red chilies.", "Add water and simmer until the meat and radish are extremely tender and the broth is reduced."],
    tips: ["This dish uses no oil, cooking entirely in the rendered pork fat."]
  },
  {
    id: "40", title: "Kachila", nepaliTitle: "कचिला", category: "Traditional / Ethnic Food", prepTime: "15 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Newa (Kathmandu)",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.1, reviews: 299, videoUrl: "",
    description: "A daring delicacy of raw minced buffalo meat marinated heavily in spices and mustard oil.",
    ingredients: ["Extremely fresh minced buffalo meat", "Garlic paste", "Ginger paste", "Coriander", "Cumin powder", "Mustard oil", "Fenugreek seeds"],
    steps: ["Mix the raw meat thoroughly with ginger, garlic, cumin, and coriander.", "Heat mustard oil to smoking point.", "Fry fenugreek seeds until completely black.", "Pour the boiling hot oil over the raw meat mix. This slightly cooks the outside.", "Mix vigorously and serve immediately."],
    tips: ["The meat must be incredibly fresh. Only for the adventurous."]
  },

  // --- DRINKS ---
  {
    id: "41", title: "Masala Chiya", nepaliTitle: "मसाला चिया", category: "Drinks", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 3102, videoUrl: "",
    description: "The fuel of Nepal. Heavily spiced, milk-rich tea boiled aggressively to extract maximum flavor.",
    ingredients: ["CTC Black Tea leaves", "Full fat milk", "Sugar", "Green cardamom", "Fresh ginger", "Cloves", "Black peppercorn"],
    steps: ["Crush ginger, cardamom, cloves, and pepper in a mortar.", "Boil water and add the crushed spices and tea leaves.", "Let it boil until the water turns dark.", "Add milk and sugar.", "Reduce heat and simmer vigorously for 5 minutes until the tea turns a deep tan color."],
    tips: ["Do not rush the boiling process. The longer the milk and tea boil together, the better the chiya."]
  },
  {
    id: "42", title: "Butter Tea (Suja)", nepaliTitle: "सुजा (बटर टिया)", category: "Drinks", prepTime: "15 mins", difficulty: "Medium", isGrandmaRecipe: true, region: "Himalayas",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800", rating: 4.4, reviews: 182, videoUrl: "",
    description: "A salty, fatty pink tea made from churned yak butter. Essential for survival in extreme mountain cold.",
    ingredients: ["Pu-erh tea bricks or strong black tea", "Yak butter (or cow butter)", "Salt", "Milk"],
    steps: ["Boil the tea leaves in water for a long time to make a dark, strong concentrate (Chaku).", "Pour the concentrate into a traditional wooden cylinder (Chandong) or blender.", "Add salt, milk, and a large chunk of butter.", "Churn/blend vigorously until a thick foam forms.", "Serve piping hot in wooden bowls."],
    tips: ["It tastes more like a light soup than what foreigners expect of 'tea'."]
  },
  {
    id: "43", title: "Tongba", nepaliTitle: "तोङ्बा", category: "Drinks", prepTime: "5 mins (after fermenting)", difficulty: "Easy", isGrandmaRecipe: true, region: "Eastern Nepal",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 491, videoUrl: "",
    description: "A warm, mildly alcoholic millet beer drunk through a bamboo straw. The staple drink of the Limbu people.",
    ingredients: ["Fermented whole millet seeds", "Boiling hot water"],
    steps: ["Place a generous handful of the fermented millet mush into a large wooden or bamboo mug (the Tongba).", "Pour boiling hot water to the brim.", "Let it steep for 5 minutes.", "Use a specialized bamboo straw with slits at the bottom to sip the warm alcohol without swallowing the seeds.", "Continually top up with hot water until the alcohol is exhausted."],
    tips: ["A single serving can be refilled with hot water 5-6 times."]
  },
  {
    id: "44", title: "Sweet Lassi", nepaliTitle: "लस्सी", category: "Drinks", prepTime: "5 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "Terai",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 631, videoUrl: "",
    description: "A thick, refreshing yogurt-based drink, generously topped with cream and dry fruits.",
    ingredients: ["Thick curd (Yogurt)", "Sugar", "Ice water", "Rose water", "Cashews and Raisins for garnish", "Fresh cream (Malai)"],
    steps: ["In a large pitcher, blend yogurt, sugar, a dash of rose water, and ice water using a wooden whisk (Madaani).", "Whisk until frothy and smooth.", "Pour into a tall glass.", "Top with a thick layer of fresh malai and chopped nuts."],
    tips: ["Use cold milk instead of water for an even thicker, richer lassi."]
  },

  // --- SIMPLE HOME FOODS ---
  {
    id: "45", title: "Egg Curry", nepaliTitle: "अण्डा करी", category: "Simple Home Foods", prepTime: "30 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", rating: 4.6, reviews: 812, videoUrl: "",
    description: "A quick, comforting weekday curry made by frying hard-boiled eggs and cooking them in a tomato-onion gravy.",
    ingredients: ["Eggs", "Onion", "Tomato", "Garlic ginger paste", "Turmeric", "Cumin powder"],
    steps: ["Hard boil the eggs and peel them.", "Pierce the eggs slightly with a fork and fry them in oil with a pinch of turmeric until a blistered skin forms.", "Remove eggs. In the same oil, fry onions and tomatoes to make a thick gravy.", "Add water to reach desired consistency, add the eggs back, and simmer for 5 mins."],
    tips: ["Frying the boiled eggs gives them a nice chewy exterior that absorbs the gravy."]
  },
  {
    id: "46", title: "Aloo Cauli Tarkari", nepaliTitle: "आलु काउली", category: "Simple Home Foods", prepTime: "25 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.9, reviews: 1021, videoUrl: "",
    description: "The most common vegetable side dish in Nepal pairing potato and cauliflower with simple spices.",
    ingredients: ["Potato", "Cauliflower", "Tomato", "Cumin seeds", "Turmeric", "Coriander powder"],
    steps: ["Cut potatoes into cubes and break cauliflower into florets.", "Heat oil and splutter cumin seeds.", "Add potatoes and fry for 5 minutes.", "Add cauliflower, turmeric, and salt. Cover and steam-fry on low heat.", "Once half cooked, add chopped tomatoes and spices. Cook until tomatoes melt into a dry coating."],
    tips: ["Do not add water. Cooking the vegetables in their own steam yields the best taste."]
  },
  {
    id: "47", title: "Tomato Chutney (Golbheda ko Achar)", nepaliTitle: "गोलभेडाको अचार", category: "Simple Home Foods", prepTime: "10 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 1891, videoUrl: "",
    description: "A spicy, tangy, and smoky condiment served alongside almost every Dal Bhat meal.",
    ingredients: ["Tomatoes", "Garlic", "Green chilies", "Fresh coriander", "Szechuan pepper (Timur)"],
    steps: ["Roast the whole tomatoes and garlic cloves over an open flame or in a dry pan until the skin chars.", "Peel the charred skin off the tomatoes.", "In a mortar, grind the garlic, chilies, cilantro, and timur into a paste.", "Add the roasted tomatoes and crush everything together into a chunky salsa.", "Add salt and a few drops of raw mustard oil."],
    tips: ["Grinding on a traditional stone silauto is far superior to using an electric blender."]
  },
  {
    id: "48", title: "Saag Tarkari", nepaliTitle: "साग", category: "Simple Home Foods", prepTime: "15 mins", difficulty: "Easy", isGrandmaRecipe: true, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.7, reviews: 632, videoUrl: "",
    description: "Mustard or spinach leaves flash-fried in mustard oil with dry red chilies. Simple and healthy.",
    ingredients: ["Rayo Saag (Mustard Greens) or Spinach", "Dry red chilies", "Garlic cloves", "Mustard oil", "Salt"],
    steps: ["Wash the greens thoroughly and chop roughly.", "Heat mustard oil in a wide pan until smoking.", "Crush whole garlic cloves and fry until golden, followed by tearing the dry red chilies into the oil.", "Immediately dump the greens into the hot oil. They will crackle aggressively.", "Toss quickly, add salt, and remove from heat as soon as they wilt."],
    tips: ["Do not overcook or cover the pan; the greens will lose their vibrant color and turn mushy."]
  },
  {
    id: "49", title: "Jhaneko Dal", nepaliTitle: "झानेको दाल", category: "Simple Home Foods", prepTime: "25 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800", rating: 4.8, reviews: 1102, videoUrl: "",
    description: "Everyday lentil soup made extraordinary with a volatile hot oil tempering poured over it at the last second.",
    ingredients: ["Yellow or Red Lentils", "Ghee or Mustard Oil", "Garlic", "Cumin seeds", "Jimbu (optional)", "Dry red chili"],
    steps: ["Boil the lentils with a pinch of turmeric and salt until completely dissolved.", "In a separate small pan, heat a large spoonful of ghee.", "Add cumin seeds, heavily crushed garlic, and dry chilies to the very hot ghee.", "Once the garlic turns dark brown, immediately dump the sizzling oil into the pot of cooked lentils and slam the lid shut quickly to trap the smoke.", "Serve over rice."],
    tips: ["Trapping the smoke under the lid for a few minutes infuses the entire pot of dal with a rich, smoky flavor."]
  },
  {
    id: "50", title: "Wai Wai Sadeko", nepaliTitle: "सुख्खा चाउचाउ", category: "Simple Home Foods", prepTime: "5 mins", difficulty: "Easy", isGrandmaRecipe: false, region: "All Nepal",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", rating: 4.5, reviews: 890, videoUrl: "",
    description: "The ultimate midnight snack for Nepali youth. Raw Wai Wai instant noodles mixed with raw veggies.",
    ingredients: ["Wai Wai noodles (Chicken flavor)", "Onion", "Green Chilies", "Tomato", "Lemon"],
    steps: ["Without opening the packet, crush the noodles into small bites.", "Pour the crushed noodles into a bowl.", "Finely chop the onion, tomato, and chilies.", "Mix the veggies with the noodles.", "Empty the flavor packets from the noodle wrapper into the bowl.", "Squeeze a lemon and toss everything together.", "Eat raw."],
    tips: ["Do not cook the noodles! The crunch is the entire point of the dish."]
  }
];
