import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import recipeStore from './components/recipeStore';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/addRecipeForm/" element={<AddRecipeForm />} />
        <Route path="/recipestore/" element={<recipeStore />} />
      </Routes>
    </Router>
  )
}

export default App; 