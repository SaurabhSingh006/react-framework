import React, { useEffect } from 'react';
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

      <div className='text-textcolor md:w-1/2'>
        <h1>fghdfhjdff { userInfo.name }</h1>
      </div>
    </div>
  )
}

export default SignIn;