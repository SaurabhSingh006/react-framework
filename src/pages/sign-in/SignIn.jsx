import React, { useEffect, useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContex';
import './../../index.css';
import CustomInput from './../../components/form/CustomInput';
import Button from '../../components/button/Button';
import { useNavigate } from "react-router-dom"

function SignIn() {
  const [loginBtnLoad, setLoginBtnLoad] = useState(false);
  const { userInfo } = useGlobalContext();
  const navigate = useNavigate();
  console.log(userInfo);

  useEffect(() => {
    console.log("render", userInfo,"ENVi", process.env.PROJECT_ENVIRONMENT);
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoginBtnLoad(true);
    setTimeout(() => {
      setLoginBtnLoad(false); 
      navigate("/home");
    }, 2000);
    console.log(Object.fromEntries(new FormData(e.target)));
  }

  return (
    <div className='flex flex-wrap h-screen text-white'>
      <div className=' w-screen md:w-1/2 bg-primaryblue grid place-content-center'>
        <div className='p-5 text-center md:w-3/5 m-auto'>
          <h1 className='text-3xl md:text-4xl md:font-bold py-2'>Welcome to our community</h1>
          <p className='text-slate-100'>Discover sustainable sportswear, athleisure and casualwear clothing for your active lifestyle. Jaspur connects you with the clothing you desire based on your values, while facilitating purchasing options that are most convenient for you.</p>
        </div>
      </div>

      <div className='grid place-content-center text-textcolor m-auto md:w-1/2 py-6'>
        <div className='w-72 md:w-96 m-auto'> 
          <h3 className='text-center text-4xl font-bold mb-5'>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <CustomInput id='username' label='Email' type='email' required minLength='6' />
            <CustomInput id='password' label='Password' type='password' required minLength='8' />

            <br />
            <Button title='Login' classes='bg-primaryblue text-white px-4 py-2' align='center' loading={loginBtnLoad} />
          </form>
        </div>
        
        {/* <div>
          <h1 className='text-textcolor text-2xl'>Login form here</h1>
            <Link to='/home'>
              <button className='bg-green-900 p-2 text-white border-3 border-black border-solid rounded-xl'>Login</button>
            </Link>
        </div> */}
      </div>
    </div>
  )
}

export default SignIn;