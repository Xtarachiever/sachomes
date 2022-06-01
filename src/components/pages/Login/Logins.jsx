import React, { useEffect, useState } from 'react';
import hand from '../../../images/hand.svg'
import './login.css';

function Login() {
  const [input,setInput] = useState('');
  const [password,setPassword] = useState('');
  const [validInput, setValidInput] = useState(false)
  const [validPass,setValidPass] =useState(false);
  const [activeInput, setActiveInput] = useState(false)
  const [activePass,setActivePass]=useState(false)
  useEffect(()=>{
      if(input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      )){
        setValidInput(true)
      }
      else{
        setValidInput(false)
      }
  },[input])
  useEffect(()=>{
    if(password.length >= 4){
      setValidPass(true)
    }
    else{
      setValidPass(false)
    }
  },[password])
  return (
    <div className="formBlock">
      <form className="form">
        <div className='welcome'>
          <h3>Hey Admin</h3>
          <img src={hand} alt="welcome wave"/>
        </div>
        <h5 className='mb-5 mt-2'>Login to your dashboard</h5>
        <input type="text" name="name" value={input}
        onChange={(e)=> setInput(e.target.value)}
        onFocus={()=>setActiveInput(true)}
        placeholder='Email Address' className={`mb-10 ${ (activeInput && validInput) ? "correct" : (activeInput && !validInput ) ?'incorrect' : " " } `}/>
        <div className='password'>
          <input type="password" value={password} name="Password"
          onChange={(e)=> setPassword(e.target.value)} 
          onFocus={()=>setActivePass(true)}
          className={`${ (activePass && validPass) ? "correct" : (activePass && !validPass ) ?'incorrect' : " " } `} />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        </div>
        <h4>Forgot Password?</h4>
        <button type='submit' className='w-full p-3 mt-5 rounded-lg text-white-500'>Login</button>
      </form>
    </div>
  )
}

export default Login;