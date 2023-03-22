import React from 'react';
import './../../index.css';
import { Outlet } from "react-router-dom"

function Welcome() {
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
            <Outlet />
          </div>
        </div>
      </div>
    )
}

export default Welcome;
