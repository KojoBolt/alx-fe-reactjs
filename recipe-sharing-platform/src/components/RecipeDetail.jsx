import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('./data.json');
            if (!response.ok) throw new Error ("Failed to Load Recipe");

            const data = await response.json();
            const selectedRecipe = data.find((r) => r.id.toString() === id);
            setRecipe(selectedRecipe);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
  }, [id]);
    if (!recipe) {
        return <div className="text-center text-lg font-bold mt-10">Recipe Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-6">Ingredients</h2>
            <ul className="list-disc pl-6">
                {recipe.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-700 mt-6">Instructions</h2>
            <ol className="list-decimal pl-6">
                {recipe.instructions?.map((step, index) => (
                    <li key={index} className="mb-2">{step}</li>
                ))}
            </ol>

            <button 
                onClick={() => window.history.back()} 
                className="mt-6 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-700"
            >
                Back to Home
            </button>
        </div>
    );
}

export default RecipeDetail;
