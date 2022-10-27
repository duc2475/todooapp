
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import Signup from './components/Signup';
import { app } from "./firebase_config";
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import {useState, useEffect} from 'react'
import { MyContext } from './contexts/ConText';
const auth = getAuth(app);
function App() {

  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/about' element={<About />} />
          </Routes>      
          </BrowserRouter>
      </div>
  );
}

export default App;

export function useAuth() {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, user =>setCurrentUser(user));
    return unSub;
  }, [])
  return currentUser;
}
export function logout() {
  return signOut(auth);
}