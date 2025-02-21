import { Contest } from "./UserContext"
import ProfilePage from './ProfilePage';


function App() {
  return (
    <>
    <Contest/>
    <UserContext.Provider>
    <ProfilePage />
    </UserContext.Provider>
    
    </>
  )
}

export default App
