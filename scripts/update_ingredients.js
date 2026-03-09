import fs from 'fs';

const FILE_PATH = 'd:/bhansanepal/src/data/mockRecipes.js';

const ingredientQuantities = {
  // Main Dishes
  "1": ["500g Rice", "200g Yellow lentils (Dal)", "300g Seasonal vegetable (Cauliflower/Potato)", "1 tsp Turmeric", "1 tsp Cumin seeds", "1 tbsp Ghee"],
  "2": ["100g Gundruk (Fermented greens)", "1 medium Onion", "2 Tomatoes", "4 cloves Garlic", "50g Soybean", "3 Dry chilies"],
  "3": ["250g Millet or Buckwheat flour", "1 liter Water", "2 tbsp Ghee", "1 tsp Salt"],
  "4": ["500g Rice", "200g Black lentils", "1 tsp Jimbu (Himalayan herb)", "2 tbsp Ghee", "300g Mustang potatoes", "1/2 tsp Timur (Szechuan pepper)"],
  "5": ["150g Fermented bamboo shoots (Tama)", "3 medium Potatoes", "100g Black-eyed peas (Bodi)", "2 tbsp Mustard oil", "1 tsp Turmeric"],
  "6": ["500g 9 varieties of beans (sprouted)", "1 tsp Lovage seeds (Jwano)", "2 tbsp Ghee", "1 tbsp Ginger garlic paste"],
  "7": ["1kg Mutton or Chicken (bone-in)", "500g Rice", "3 medium Onions", "2 Tomatoes", "2 tbsp Meat Masala", "4 tbsp Mustard oil"],
  "8": ["200g Dry meat (Sukuti)", "2 Tomatoes", "1 large Onion", "3 Green chilies", "1 bunch Coriander"],
  "9": ["500g Chicken breast/thigh", "3 tbsp Mustard oil", "1 tsp Fenugreek seeds (Methi)", "5 cloves Garlic", "1 inch Ginger", "4 Red dry chilies"],
  "10": ["1kg Pork belly/shoulder", "1 tbsp Garlic paste", "1 tbsp Ginger paste", "1 tsp Cumin powder", "1/2 tsp Szechuan pepper (Timur)", "1 tbsp Lemon juice"],
  
  // Snacks
  "11": ["500g Flour", "500g Minced buffalo meat", "2 Onions", "1 tbsp Cumin", "1 bunch Coriander", "2 tbsp Momo Masala"],
  "12": ["500g Flour", "500g Minced chicken", "2 Onions", "1 tbsp Ginger paste", "1 tbsp Garlic paste", "1 tbsp Soy sauce"],
  "13": ["500g Flour", "1/2 head Cabbage", "2 Carrots", "200g Paneer", "1 Onion", "2 tbsp Butter"],
  "14": ["200g Puffed rice (Bhuja)", "1 pack Wai Wai noodles", "2 Boiled potatoes", "1 Onion", "1 Tomato", "2 Green chilies", "1 Lemon", "1 tbsp Mustard oil"],
  "15": ["4 medium Potatoes", "1 Onion", "2 Green chillies", "1 cup Besan (Gram flour)", "1 tsp Cumin powder", "1/2 tsp Turmeric", "Oil for frying"],
  "16": ["1 pack Puris (store-bought)", "3 Boiled potatoes", "100g White peas (Matar)", "2 tbsp Tamarind", "1 bunch Mint leaves", "1 tbsp Pani Puri Masala"],
  "17": ["2 cups All-purpose flour", "3 Potatoes", "1/2 cup Green peas", "1 tsp Cumin seeds", "1 tsp Garam masala", "Oil for frying"],
  "18": ["250g Black lentils", "1 inch Ginger", "1 tsp Cumin powder", "4 tbsp Mustard oil", "2 Eggs"],
  "19": ["3 large Onions", "1.5 cups Besan (Gram flour)", "3 Green chilies", "1/2 tsp Turmeric", "1 tsp Carom seeds (Ajwain)"],
  "20": ["250g Egg noodles", "1/4 head Cabbage", "1 Carrot", "1 Onion", "2 tbsp Soy sauce", "2 tbsp Ketchup", "1 tsp Momo Masala", "200g Chicken (optional)"],
  
  // Sweets
  "21": ["500g Rice flour", "1 cup Sugar", "2 tbsp Ghee", "2 ripe Bananas", "4 pods Cardamom", "Water"],
  "22": ["500g Rice flour", "200g Chaku (Molasses) or Khuwa", "50g Sesame seeds", "Boiling water"],
  "23": ["1 cup Taichin Rice", "2 liters Full-fat milk", "1/2 cup Sugar", "4 pods Cardamom", "50g Cashews", "25g Raisins", "2 tbsp Coconut flakes"],
  "24": ["2 cups Coarse rice flour", "4 tbsp Ghee", "1 liter Milk", "1/2 cup Sugar"],
  "25": ["500g Khuwa (Milk solids)", "1/2 cup Flour", "1/2 tsp Baking powder", "2 cups Sugar", "2 cups Water", "4 pods Cardamom"],
  "26": ["2 liters Milk", "2 tbsp Lemon juice", "2 cups Sugar", "4 cups Water", "1 tsp Rose water"],
  "27": ["2 liters Milk", "1/2 cup Ghee", "1 cup Sugar", "50g Edible gum (Gond)", "50g Almonds", "50g Pistachios", "1 tsp Cardamom"],
  "28": ["500g Flour", "100g Black gram flour (Urad dal)", "1/2 cup Ghee", "2 cups Sugar", "1 cup Water"],
  "29": ["500g Wheat flour", "200g Jaggery (Gud)", "4 tbsp Ghee", "1 tbsp Fennel seeds (Saunf)", "50g Dry coconut", "Water"],
  "30": ["500g Khuwa (Milk solids)", "1/2 cup Sugar", "1 tsp Cardamom powder", "20g Pistachios"],
  
  // Traditional
  "31": ["4 cups Beaten rice (Chiura)", "500g Choila (Spicy meat)", "100g Black soybeans", "200g Potato salad", "4 Boiled eggs", "4 Bara (Lentil pancake)", "1 bunch Spinach", "2 inch Ginger garlic chunks"],
  "32": ["2 cups Rice flour", "1 cup Water", "250g Minced meat", "2 Eggs", "1 Tomato", "1 Onion", "1 tsp Cumin powder"],
  "33": ["2 liters Buffalo milk", "1/2 cup Sugar", "1 tsp Cardamom", "2 tbsp Yogurt starter culture"],
  "34": ["1kg River fish", "2 tbsp Mustard seeds", "4 cloves Garlic", "3 Green chilies", "1 tsp Turmeric", "4 tbsp Mustard oil"],
  "35": ["500g Wheat flour", "2 medium Potatoes", "1 Radish", "500g Meat (Yak or Mutton)", "4 cloves Garlic", "1 Onion", "2 tbsp Butter"],
  "36": ["200g Kinema (Fermented soybeans)", "1 Onion", "1 Tomato", "2 Green chilies", "1 tsp Turmeric"],
  "37": ["500g Rice flour", "Warm water"],
  "38": ["200g Fermented bamboo shoots (Tama)", "2 Boiled potatoes", "1 tsp Red chili powder", "2 tbsp Mustard oil", "1 tsp Fenugreek seeds", "1/2 tsp Turmeric"],
  "39": ["1kg Pork belly", "1 medium Radish", "10 Dry red chilies", "1 inch Ginger", "5 cloves Garlic"],
  "40": ["500g Minced buffalo meat", "1 tbsp Garlic paste", "1 tbsp Ginger paste", "1 bunch Coriander", "1 tsp Cumin powder", "3 tbsp Mustard oil", "1 tsp Fenugreek seeds"],
  
  // Drinks
  "41": ["2 tbsp CTC Black Tea leaves", "500ml Full fat milk", "4 tsp Sugar", "4 Green cardamom", "1 inch Fresh ginger", "3 Cloves", "4 Black peppercorns"],
  "42": ["2 tbsp Strong black tea", "50g Yak butter (or cow butter)", "1 tsp Salt", "200ml Milk"],
  "43": ["500g Fermented whole millet seeds", "2 liters Boiling hot water"],
  "44": ["500ml Thick curd (Yogurt)", "4 tbsp Sugar", "200ml Ice water", "1 tsp Rose water", "20g Cashews and Raisins", "4 tbsp Fresh cream (Malai)"],
  
  // Simple Home Foods
  "45": ["6 Eggs", "1 large Onion", "2 Tomatoes", "1 tbsp Garlic ginger paste", "1/2 tsp Turmeric", "1 tsp Cumin powder"],
  "46": ["2 medium Potatoes", "1/2 head Cauliflower", "1 large Tomato", "1 tsp Cumin seeds", "1/2 tsp Turmeric", "1 tsp Coriander powder"],
  "47": ["4 large Tomatoes", "4 cloves Garlic", "3 Green chilies", "1 bunch Fresh coriander", "1/2 tsp Szechuan pepper (Timur)"],
  "48": ["500g Rayo Saag or Spinach", "4 Dry red chilies", "6 Garlic cloves", "2 tbsp Mustard oil", "1 tsp Salt"],
  "49": ["1 cup Yellow or Red Lentils", "2 tbsp Ghee or Mustard Oil", "4 cloves Garlic", "1 tsp Cumin seeds", "1 tsp Jimbu", "2 Dry red chilies"],
  "50": ["2 packs Wai Wai noodles", "1 Onion", "2 Green Chilies", "1 Tomato", "1 Lemon"]
};

let content = fs.readFileSync(FILE_PATH, 'utf8');

for (const [id, ingredients] of Object.entries(ingredientQuantities)) {
  const ingredientsString = JSON.stringify(ingredients, null, 2);
  const regex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?ingredients:\\s*\\[[\\s\\S]*?\\],)`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1\n    baseServings: 4,`);
    // Now replace the ingredients array
    const ingredientsRegex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?ingredients:\\s*)\\[[\\s\\S]*?\\]`);
    content = content.replace(ingredientsRegex, `$1${ingredientsString}`);
  }
}

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Successfully updated ingredients with quantities and added baseServings.");
