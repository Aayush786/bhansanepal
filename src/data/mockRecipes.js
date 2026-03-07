export const RECIPE_CATEGORIES = [
  "Main Dishes",
  "Snacks / Street Food",
  "Sweets",
  "Traditional / Ethnic Food",
  "Drinks"
];

export const REGIONS = [
  "Kathmandu Valley",
  "Terai",
  "Himalayas",
  " पहाड (Hills)",
  "All Nepal"
];

export const mockRecipes = [
  {
    id: "1",
    title: "Sel Roti",
    nepaliTitle: "सेल रोटी",
    category: "Sweets",
    prepTime: "2 hrs",
    difficulty: "Medium",
    isGrandmaRecipe: true,
    region: "All Nepal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", // Placeholder (using generalized donut format temporarily)
    description: "Traditional Nepali festival bread made during Tihar and special occasions. Sweet, crispy on the outside, soft inside.",
    rating: 4.8,
    reviews: 124,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    comments: [
      { user: "Ram", text: "Best Sel Roti recipe! Came out perfectly round.", date: "2 days ago" },
      { user: "Sita", text: "Added a bit more cardamom, loved the flavor.", date: "1 week ago" }
    ],
    ingredients: [
      "Rice flour",
      "Sugar",
      "Ghee",
      "Banana",
      "Cardamom",
      "Water"
    ],
    steps: [
      "Soak rice overnight in water.",
      "Drain and grind the rice into a relatively fine paste.",
      "Mix sugar, mashed banana, and ghee into the paste. Ensure the batter is not too thick; it should slowly drop when poured.",
      "Heat a deep pan with oil/ghee.",
      "Pour the batter in a continuous circular ring shape into the hot oil.",
      "Deep fry until golden brown on both sides."
    ],
    tips: [
      "Batter consistency is key. If it's too thick, the roti will be hard. If too thin, it won't hold its shape.",
      "Use overripe bananas for the best flavor and texture."
    ]
  },
  {
    id: "2",
    title: "Aloo Chop",
    nepaliTitle: "आलु चप",
    category: "Snacks / Street Food",
    prepTime: "30 mins",
    difficulty: "Easy",
    isGrandmaRecipe: false,
    region: "Terai",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", // Patty placeholder
    description: "Spiced mashed potato patties, dipped in batter and deep-fried to crispy perfection. A beloved street food.",
    rating: 4.5,
    reviews: 89,
    videoUrl: "",
    comments: [
      { user: "Hari", text: "So crispy! Reminds me of Kathmandu streets.", date: "3 days ago" }
    ],
    ingredients: [
      "Potato",
      "Onion",
      "Green chillies",
      "Besan (Gram flour)",
      "Cumin powder",
      "Turmeric",
      "Oil for frying"
    ],
    steps: [
      "Boil and peel the potatoes.",
      "Mash the potatoes and mix with finely chopped onions, chillies, cumin, and salt.",
      "Form small flat patties from the mixture.",
      "Make a smooth batter using besan, water, a pinch of turmeric, and salt.",
      "Dip each patty into the batter and deep fry until golden and crispy."
    ],
    tips: [
      "Add a little rice flour to the besan batter for extra crispiness."
    ]
  },
  {
    id: "3",
    title: "Thakali Khana Set",
    nepaliTitle: "थकाली खाना",
    category: "Main Dishes",
    prepTime: "1 hr",
    difficulty: "Hard",
    isGrandmaRecipe: true,
    region: "Himalayas",
    image: "https://images.unsplash.com/photo-1626779836855-30fa1cc04c10?auto=format&fit=crop&q=80&w=800", // Thali placeholder
    description: "An iconic, meticulously prepared platter of rice, dal, curries, and pickles from the Mustang region.",
    rating: 4.9,
    reviews: 312,
    videoUrl: "",
    comments: [
      { user: "Gita", text: "Amazing thali. The jimbu temper makes all the difference.", date: "1 month ago" }
    ],
    ingredients: [
      "Rice",
      "Black lentils (Kaalo Dal)",
      "Jimbu (Himalayan herb)",
      "Ghee",
      "Seasonal Vegetables",
      "Chicken/Mutton (Optional)"
    ],
    steps: [
      "Cook rice until fluffy.",
      "Slow cook black lentils until creamy. Temper with ghee and jimbu.",
      "Prepare seasonal vegetable curry (tarkari).",
      "Prepare a spicy tomato and timur (Szechuan pepper) achar.",
      "Serve hot with a dollop of ghee on the rice."
    ],
    tips: [
      "The distinct flavor of Thakali dal comes from Jimbu and pureing the lentils."
    ]
  },
  {
    id: "4",
    title: "Yomari",
    nepaliTitle: "योमरी",
    category: "Sweets",
    prepTime: "1.5 hrs",
    difficulty: "Medium",
    isGrandmaRecipe: true,
    region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e80ad63?auto=format&fit=crop&q=80&w=800", // Dumpling placeholder
    description: "A Newari delicacy made of steamed rice-flour dough filled with sweet chaku (molasses) or khuwa.",
    rating: 4.7,
    reviews: 156,
    videoUrl: "",
    comments: [
      { user: "Prakash", text: "My yomaris finally didn't tear. Boiling hot water is indeed the secret.", date: "5 days ago" }
    ],
    ingredients: [
      "Rice flour",
      "Chaku (Molasses) or Khuwa",
      "Sesame seeds",
      "Hot water"
    ],
    steps: [
      "Make a smooth, soft dough using rice flour and hot water.",
      "Melt chaku and mix with roasted sesame seeds for the filing.",
      "Take a small piece of dough and mold it into a hollow cone/fig shape.",
      "Fill the cavity with the sweet mixture and pinch the top to seal.",
      "Steam for 15-20 minutes until the dough becomes slightly translucent."
    ],
    tips: [
      "The water for the dough must be boiling hot to make it malleable."
    ]
  }
];
