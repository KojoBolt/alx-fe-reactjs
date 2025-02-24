import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";

function App (){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contant" element={<Contact/>} />
          <Route path="/Services" element={<Services/>} />
          <NavBar/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App; 