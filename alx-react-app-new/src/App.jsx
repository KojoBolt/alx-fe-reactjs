import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './Counter'


function App() {
  return (
    <>
    <WelcomeMessage />
    <Header />
    <MainContent />
    <UserProfile />
    <div>
      <h1>User Profile</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
    <Counter />
    <Footer />
    </>
  )
}

export default App
