import React, { useEffect, useState } from 'react';
import useGlobalContext from '../../../hooks/useGlobalContex';
import './../../../index.css';
import CustomInput from '../../../components/form/CustomInput';
import Button from '../../../components/button/Button';
import { useNavigate } from "react-router-dom"

function SignIn() {
  // HOOKS
  const navigate = useNavigate();
  // CONTEXT
  const { userInfo } = useGlobalContext();
  // LOCAL STATE
  const [loginBtnLoad, setLoginBtnLoad] = useState(false);
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
    <div className='animate-fade-out'>
      <h3 className='text-4xl font-bold m-2'>Sign In</h3>
      <p className='m-2 mb-4 text-sm'>
        Don't have an account? &nbsp;
        <span onClick={() => navigate('/sign-up')} className='text-primaryblue font-medium cursor-pointer'>Sign Up</span>
      </p>

      <form onSubmit={handleSubmit}>
        <CustomInput id='username' label='Email' type='email' required minLength='6' />
        <CustomInput id='password' label='Password' type='password' required minLength='8' />

        <br />
        <Button title='Login' classes='bg-primaryblue text-white px-4 py-2' align='center' loading={loginBtnLoad} />
      </form>
    </div>
  )
}

export default SignIn;