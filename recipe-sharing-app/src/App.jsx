import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/addRecipeForm/" element={<AddRecipeForm />} />
        <Route path="/RecipeDetails/" element={<RecipeDetails/>} />
      </Routes>
    </Router>
  )
}

export default App; 