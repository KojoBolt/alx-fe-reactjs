import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx"
import ProfileSettings from "./components/ProfileSettings.jsx"
import BlogPost from "./pages/BlogPost.jsx";

 function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/" element={<Profile.jsx/>}/>
        <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
        <Route path="/ProfileDetails" element={<ProfileDetails.jsx/>}/>
        <Route path="ProfileSettings" element={<ProfileSettings.jsx/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;

