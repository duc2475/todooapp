import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/ConText';
import { app } from "../firebase_config";
import './login.css';


export const Login = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');


    const signIn  = async()=>{
      try{
        await signInWithEmailAndPassword(auth,email,password);
        complete();
      }
      catch{
        alert("Tài khoản không hợp lệ!")
      }
    }
    const complete =() => {
      
      window.location.href = "/home";
    }
    
  return (
      
      <>
  <div className='section'>
    <div className='color'></div>
    <div className='color'></div>
    <div className='color'></div>
    <div className='box'>
      <div className='square'></div>
      <div className='square'></div>
      <div className='square'></div>
      <div className='square'></div>
      <div className='square'></div>
    </div>
    <div className='container'>
      <div className='form'>
        <h2>Login form</h2>
        <div>
          <div className='inputBox'>
            <input type="text" placeholder='Email' onChange={(event)=>setEmail(event.target.value)} required></input>
          </div>
          <div className='inputBox'>
            <input type="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value)} required></input>
          </div>
          <div className='inputBox login'>
            <button className='btn_ui' onClick={signIn}>Login</button>
          </div > 
          <p class="forget">Don't have an account?
          <Link to="/Signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  </div>
      </>
  );
}

export default Login;



