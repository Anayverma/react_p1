import './App.css' 
import UserContextProvider from './Context/UserProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>hihihihihiih hihi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    // <>
    // <h1>hi</h1></>
    )
}

export default App
