import { createUserWithEmailAndPassword, getAuth} from '@firebase/auth';
import { useState} from 'react';
import { app } from "../firebase_config";
import './login.css';

import { Link } from 'react-router-dom';
import { async } from '@firebase/util';
import Context from '@mui/base/TabsUnstyled/TabsContext';


export const Signup = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [hasAccount, setHasAccount] = useState('');

    const signUp  = async()=>{
      try{
        await createUserWithEmailAndPassword(auth,email,password);
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
            <button className='btn_ui' onClick={()=>(signUp())} >Signup</button>
          </div > 
          <p class="forget">Have an account?
          <Link to="/login">Click here</Link></p>
        </div>
      </div>
    </div>
  </div>
      </>
  );
}

export default Signup;



