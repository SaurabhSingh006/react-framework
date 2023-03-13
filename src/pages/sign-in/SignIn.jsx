import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContex';
import './../../index.css';

function SignIn() {
  const { userInfo } = useGlobalContext();
  console.log(userInfo);

  useEffect(() => {
    console.log("render", userInfo);
  })

  return (
    <div className='flex flex-wrap h-screen text-white'>
      <div className='w-screen md:w-1/2 sm:w-1/2 bg-primaryblue grid place-content-center'>
        <div className='w-3/5 m-auto'>
          <h1 className='text-4xl font-bold py-2'>Welcome to our community</h1>
          <p className='text-slate-100'>Discover sustainable sportswear, athleisure and casualwear clothing for your active lifestyle. Jaspur connects you with the clothing you desire based on your values, while facilitating purchasing options that are most convenient for you.</p>
        </div>
      </div>

      <div className='grid place-content-center text-textcolor md:w-1/2'>
        <div>
          <h1 className='text-textcolor text-2xl'>Login form here</h1>
            <Link to='/home'>
              <button className='bg-green-900 p-2 text-white border-3 border-black border-solid rounded-xl'>Login</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn;