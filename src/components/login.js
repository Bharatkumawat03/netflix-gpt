import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleIsSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg'/>
      </div>

      <div className=''>
        <form className='absolute w-[30%] rounded-md  bg-black my-28 mx-auto left-0 right-0 bg-opacity-85 p-16'>
          <p className='text-white text-3xl my-4 '>
           {isSignInForm ? "Sign In" : "Sign Up" } 
           </p>
          <input type='text' placeholder='username' className='bg-gray-700 p-3 my-3 rounded-md w-full'></input>
          <input type='password' placeholder='password' className='bg-gray-700 p-3 my-3 rounded-md w-full'></input>
          <button type='subbmit' className='bg-red-700 text-white py-3 rounded-md my-3 w-full'>        
          {isSignInForm ? "Sign In" : "Sign Up" }
          </button>
          <div className='flex justify-between my-3'>
            <form>
            <input type='checkbox' id='remember'  />
              <label for="remember" className='text-gray-500'>Remember me</label>
            </form>
            <p className='text-gray-500'>need help?</p>

          </div>
          <p  className='my-3 text-gray-500'>{isSignInForm ? "New to Netflix ?": "Already have a account?" } 
          <span onClick={toggleIsSignInForm} className='text-white cursor-pointer'>{isSignInForm ? " Sign up now.": " Sign In Now."  }</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login;
