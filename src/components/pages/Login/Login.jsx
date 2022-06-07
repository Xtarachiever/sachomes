import React, { useState } from 'react';
import './login.css'
import hand from '../../../images/hand.svg';
import openEyes from '../../../images/icon/open-eyes.svg';
import closedEyes from '../../../images/icon/closed-eyes.svg'
import {Formik, Form, Field,ErrorMessage} from 'formik'
import TextError from './TextError';

function Login() {
  const [passwordType,setPassword] = useState('password');
  const initialValues = {
    email:'',
    password:''
  }
  const onSubmit=(values, {resetForm}) =>{
    console.log('Form data', values)
    resetForm({values : ''})
  }
  const validate = values =>{
    let errors = {}

    if(!values.email){
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = 'Invalid Email Address'
    }
    if(!values.password){
      errors.password = 'Required'
    } else if(values.password.length < 5){
      errors.password = 'Password must be greater than 4'
    }
    return errors
  }

  const togglePassword = ()=>{
    if(passwordType === 'password'){
      setPassword('text')
    }
    else{
      setPassword('password')
    }
  }
  // console.log(formik.errors)
  return (
    <div className='formBlock'>
      <div className='login-page'>
        <div className='welcome'>
          <h3>Hey Admin</h3>
          <img src={hand} alt="welcome wave"/>
        </div>
        <h5 className='mb-5 mt-2'>Login to your dashboard</h5>
        <Formik initialValues={initialValues} validate={validate}
        onSubmit={onSubmit}
        validateOnMount>
          {
            formik => {
              // console.log('Formik Props', formik)
              return(
                <Form>
                  <label htmlFor='email'>
                    <Field type="email" id="email" name='email' placeholder='Email'
                    className={formik.touched.email && formik.errors.email ? 'border-error' : formik.touched.email && !formik.errors.email ? 'border-correct': 'null'}/>
                    <ErrorMessage name='email' component={TextError}/>
                    {
                    (formik.touched.email && formik.errors.email) ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> : (formik.touched.email && !formik.errors.email) ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg> : ''
                  }
                  </label>
                  <label htmlFor='password'>
                    <Field type={passwordType} id="password" name='password' placeholder='Password'
                    className={formik.touched.password && formik.errors.password ? 'border-error' : formik.touched.password && !formik.errors.password ? 'border-correct': 'null'}/>
                    {
                      (passwordType === 'password') ? 
                      <img src={openEyes} onClick={togglePassword} alt="open-eyes"/> : (passwordType === 'text') ?  
                      <img src={closedEyes} alt="closed-eyes" onClick={togglePassword}/> : ''
                    }
                    <ErrorMessage name='password'>
                      {
                        errorMsg => <div className='errors'>{errorMsg}</div>
                      }
                    </ErrorMessage>
                  </label>
                  <button type='submit' className='button w-full p-3 mt-5 rounded-lg text-white-500'
                  disabled={!formik.isValid}>Login</button>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </div>
  )
}

export default Login