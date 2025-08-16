import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json") 
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((r) => r.id === parseInt(id));
        setRecipe(selected);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link
        to="/"
        className="text-blue-500 hover:underline inline-block mb-4"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients?.map((item, idx) => (
            <li key={idx} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions?.map((step, idx) => (
            <li key={idx} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
