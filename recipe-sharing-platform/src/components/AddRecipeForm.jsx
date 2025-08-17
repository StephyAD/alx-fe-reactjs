import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim() || ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please add at least 2 ingredients (one per line).";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">➕ Add New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-6 md:space-y-8"
      >
        {/* Recipe Title */}
        <div className="md:flex md:items-center md:gap-4">
          <label className="block text-gray-700 font-medium mb-2 md:w-1/3">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter recipe title"
          />
        </div>
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        {/* Ingredients */}
        <div className="md:flex md:items-start md:gap-4">
          <label className="block text-gray-700 font-medium mb-2 md:w-1/3">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full md:flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. 200g spaghetti\n100g bacon"
          ></textarea>
        </div>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}

        {/* Preparation Steps */}
        <div className="md:flex md:items-start md:gap-4">
          <label className="block text-gray-700 font-medium mb-2 md:w-1/3">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full md:flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Step 1...\nStep 2..."
          ></textarea>
        </div>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
