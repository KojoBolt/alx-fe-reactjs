import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx"
import ProfileSettings from "./components/ProfileSettings.jsx"

 function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile.jsx/>}/>
        <Route path="/ProfileDetails" element={<ProfileDetails.jsx/>}/>
        <Route path="ProfileSettings" element={<ProfileSettings.jsx/>}/>


      </Routes>
    </div>
  )
}

export default App;

