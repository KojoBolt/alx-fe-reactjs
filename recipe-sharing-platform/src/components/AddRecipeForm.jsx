import { useState } from 'react';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!title.trim()) {
            newErrors.title = "Recipe title is required.";
        }

        const ingredientsArray = ingredients.split(',').map(item => item.trim());
        if (ingredientsArray.length < 2 || ingredientsArray.some(ing => ing === '')) {
            newErrors.ingredients = "Please enter at least two ingredients, separated by commas.";
        }

        if (!steps.trim()) {
            newErrors.steps = "Preparation steps cannot be empty.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newRecipe = {
                title,
                ingredients: ingredients.split(',').map(item => item.trim()),
                steps
            };

            console.log("New Recipe Submitted:", newRecipe);
            alert("Recipe submitted successfully! ");

            // Reset form
            setTitle('');
            setIngredients('');
            setSteps('');
            setErrors({});
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                    <label className="block font-semibold text-gray-700">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-green-200"
                        placeholder="Enter recipe title..."
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

               
                <div>
                    <label className="block font-semibold text-gray-700">Ingredients</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-green-200"
                        placeholder="Enter ingredients separated by commas (e.g., eggs, flour, sugar)..."
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>

               
                <div>
                    <label className="block font-semibold text-gray-700">Preparation Steps</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-green-200"
                        placeholder="Enter preparation steps..."
                    />
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                </div>

               
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
}

export default AddRecipeForm;
