import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecipeDetail() {

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/recipes/${id}`)
      .then(res => setRecipe(res.data));
  }, []);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>

      <img src={recipe.image} className="w-full max-w-xl mt-4"/>

      <h2 className="mt-6 font-bold">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((i, index) => (
          <li key={index}>• {i}</li>
        ))}
      </ul>

      <h2 className="mt-6 font-bold">Steps</h2>
      <ol>
        {recipe.steps.map((s, index) => (
          <li key={index}>{index+1}. {s}</li>
        ))}
      </ol>
    </div>
  );
}