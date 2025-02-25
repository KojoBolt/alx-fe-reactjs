import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./src/Home";
import About from "./src/About";
import Contact from "./src/Contact";
import Services from "./src/Services";
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