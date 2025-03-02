import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [
    { id: 1, title: "Pasta", description: "Delicious Italian pasta" },
    { id: 2, title: "Pizza", description: "Homemade pepperoni pizza" },
    { id: 3, title: "Salad", description: "Fresh and healthy salad" },
  ],
  favorites: [],
  recommendations: [],

  toggleFavorite: (recipeId) => 
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites.filter((id) => id !== recipeId)
        : [...state.favorites, recipeId],
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
