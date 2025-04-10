import { useState, useEffect } from "react";
import recipeData from  "../data.json"
import { Link } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

        useEffect(() => {
            setRecipes(recipeData);
        }, [])


        return (
            <div className="min-h-screen bg-green-900 p-6">
                <h1 className="text-3xl font-bold text-center text-white mb-6"> Recipe Sharing Platform</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recipes.map ((recipe) => (
                        <div key={recipe.id}
                            className="bg-white-rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 p-4 bg-gray-200"
                        >
                            <img 
                            src={recipe.image} 
                            alt={recipe.title}
                            className="w-full h-40 object-cover rounded-md" />

                    <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
                    <p className="text-gray-600 mt-2">{recipe.summary}</p>

                    <Link to={`/recipes/${recipe.id}`} className="bg-green-800 text-white p-2 rounded min-w-min text-center m-20 mt-20">View Recipe</Link>
                    
                    </div>
                    ))}
                </div>
            </div>
        )
}

export default HomePage;