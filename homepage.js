import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

export default function Home() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/recipes")
      .then(res => setRecipes(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Bhansa Nepal Recipes</h1>

      <div className="grid grid-cols-3 gap-6">
        {recipes.map(r => (
          <RecipeCard key={r._id} recipe={r}/>
        ))}
      </div>
    </div>
  );
}