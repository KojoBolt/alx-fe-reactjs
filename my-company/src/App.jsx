import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
function App (){
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contant" element={<Contact/>} />
          <Route path="/Services" element={<Services/>} /> 
      </Routes>
    
    </BrowserRouter>
  )
}

export default App; 