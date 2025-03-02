import create from 'zustand'


const useRecipeStore = create(set => ({
  recipes: [ { id: 1, title: 'Pasta', description: 'Delicious Italian pasta' },
    { id: 2, title: 'Pizza', description: 'Homemade pepperoni pizza' }],

    searchTerm: "",
    filteredRecipes: [],

    addRecipe: (newRecipe) =>
      set((state) => ({
        recipes: [...state.recipes, { ...newRecipe, id: state.recipes.length + 1 }],
      })),
  
    updateRecipe: (id, updatedRecipe) =>
      set((state) => ({
        recipes: state.recipes.map((recipe) =>
          recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
        ),
      })),
  
   
    deleteRecipe: (id) =>
      set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
      })),

      setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes(); 
      },

      filterRecipes: () => {
        const { recipes, searchTerm } = get();
        const filtered = recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        set({ filteredRecipes: filtered });
      },
    
}));

export default useRecipeStore;