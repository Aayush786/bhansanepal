import { useState } from "react";
import axios from "axios";

export default function AddRecipe() {

  const [title, setTitle] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/recipes", {
      title,
      image:"",
      ingredients:[],
      steps:[]
    });

    alert("Recipe Added!");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Add Recipe</h1>

      <input
        className="border p-2 w-full"
        placeholder="Recipe Name"
        onChange={(e)=>setTitle(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-green-600 text-white px-4 py-2 mt-4"
      >
        Submit
      </button>
    </div>
  );
}