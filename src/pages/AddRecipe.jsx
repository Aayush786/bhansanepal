import { useState } from 'react';
import { ChefHat, Plus, Trash2, Camera } from 'lucide-react';

export default function AddRecipe() {
  const [title, setTitle] = useState('');
  const [nepaliTitle, setNepaliTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);

  const handleAddIngredient = () => setIngredients([...ingredients, '']);
  const handleRemoveIngredient = (idx) => setIngredients(ingredients.filter((_, i) => i !== idx));
  const handleIngredientChange = (val, idx) => {
    const newArr = [...ingredients];
    newArr[idx] = val;
    setIngredients(newArr);
  };

  const handleAddStep = () => setSteps([...steps, '']);
  const handleRemoveStep = (idx) => setSteps(steps.filter((_, i) => i !== idx));
  const handleStepChange = (val, idx) => {
    const newArr = [...steps];
    newArr[idx] = val;
    setSteps(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Recipe submitted successfully! Waiting for moderation.');
    // In a real app, POST to backend here
    setTitle('');
    setNepaliTitle('');
    setIngredients(['']);
    setSteps(['']);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 animate-in fade-in zoom-in-95 duration-500">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-100 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-100/50 rounded-bl-full -z-0"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-2 flex items-center gap-3">
            <ChefHat className="w-10 h-10 text-brand-600" />
            Share Your Recipe
          </h1>
          <p className="text-gray-500 mb-10 font-medium">Contribute to the largest collection of authentic Nepali flavors.</p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Recipe Title (English)</label>
                <input 
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow" 
                  placeholder="e.g. Momo" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Recipe Title (Nepali)</label>
                <input 
                  value={nepaliTitle}
                  onChange={(e) => setNepaliTitle(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow" 
                  placeholder="e.g. म:म" 
                />
              </div>
            </div>

            {/* Photo Upload Stub */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cover Photo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl h-32 flex flex-col items-center justify-center text-gray-500 hover:border-brand-500 hover:bg-brand-50 transition-colors cursor-pointer group">
                <Camera className="w-8 h-8 mb-2 group-hover:text-brand-600" />
                <span className="font-semibold group-hover:text-brand-700">Click to upload image</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Ingredients</label>
              <div className="space-y-3">
                {ingredients.map((ing, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <input 
                      required
                      value={ing}
                      onChange={(e) => handleIngredientChange(e.target.value, idx)}
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500" 
                      placeholder="e.g. 2 cups flour" 
                    />
                    {ingredients.length > 1 && (
                       <button type="button" onClick={() => handleRemoveIngredient(idx)} className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                         <Trash2 className="w-5 h-5"/>
                       </button>
                    )}
                  </div>
                ))}
              </div>
              <button type="button" onClick={handleAddIngredient} className="mt-3 flex items-center gap-1.5 text-brand-600 font-semibold hover:text-brand-800 transition-colors text-sm bg-brand-50 px-3 py-1.5 rounded-lg">
                <Plus className="w-4 h-4"/> Add Ingredient
              </button>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Instructions</label>
              <div className="space-y-3">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-8 h-8 shrink-0 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold mt-1 shadow-sm block">
                      {idx + 1}
                    </div>
                    <textarea 
                      required
                      value={step}
                      onChange={(e) => handleStepChange(e.target.value, idx)}
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none" 
                      placeholder="Describe this step..." 
                      rows={2}
                    />
                    {steps.length > 1 && (
                       <button type="button" onClick={() => handleRemoveStep(idx)} className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg mt-1 transition-colors">
                         <Trash2 className="w-5 h-5"/>
                       </button>
                    )}
                  </div>
                ))}
              </div>
              <button type="button" onClick={handleAddStep} className="mt-3 flex items-center gap-1.5 text-brand-600 font-semibold hover:text-brand-800 transition-colors text-sm bg-brand-50 px-3 py-1.5 rounded-lg">
                <Plus className="w-4 h-4"/> Add Step
              </button>
            </div>

            <hr className="border-gray-100" />

            <div className="flex justify-end">
              <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 w-full md:w-auto">
                Submit Recipe
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
