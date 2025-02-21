import ProfilePage from './ProfilePage';


function App() {

  const userData = {name: "Jane", email: "jane.doe@example.com"}
  return <ProfilePage userData={userData}/>
}

export default App
