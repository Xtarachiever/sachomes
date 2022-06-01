import React, { useState } from 'react';
import hand from '../../../images/hand.svg'
import './login.css';
import Validation from './Validation';

function Login() {
    const [input, setInput] = useState({
        email: "",
        password:""
    });
    const [activeInput,setActiveInput] = useState(false)
    const [activePass,setActivePass] = useState(false)
    const [errors, setErrors] = useState({})

    // useEffect(()=>{
    //     console.log(errors)
    // },[])
    const handleChange = (e)=>{
        setInput({...input, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Object.keys(errors).length === 0){
            console.log('submitted')
            setInput({
                email: "",
                password:""
            })
        }
    }
    const handleValidation = () =>{
        setErrors(Validation(input))
        console.log(errors)
        setActiveInput(true)
        setActivePass(true)
    }
  return (
    <div>
    <div className="formBlock">
      <form className="form">
        <div className='welcome'>
          <h3>Hey Admin</h3>
          <img src={hand} alt="welcome wave"/>
        </div>
        <h5 className='mb-5 mt-2'>Login to your dashboard</h5>
        <div className='inputBox'>
            <div className='inputClass'>
                <input type="text" name="email" value={input.email}
                onChange={handleChange}
                onBlur={handleValidation}
                placeholder='Email Address' className={(activeInput && errors.email) ? 'incorrect' : (activeInput && !errors.email) ? 'correct' : ""}/>
                {
                    (activeInput && errors.email) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (activeInput && !errors.email) ?
                     (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                     )
                     : " "
                }
            </div>
            {errors.email && <p className='error'>{errors.email}</p>}
            <div className='password'>
            <input type="password" name="password" value={input.password}
            onChange={handleChange}
            onBlur={handleValidation}
            className={(activePass && errors.password) ? 'incorrect' : (activePass && !errors.password) ? 'correct' : ""} />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
            </div>
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <h4>Forgot Password?</h4>
        <button type='button' onClick={handleSubmit} className='w-full p-3 mt-5 rounded-lg text-white-500'>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login