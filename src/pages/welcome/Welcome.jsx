import React, { useEffect, useRef } from 'react';
import './../../index.css';
import { Outlet } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

function Welcome() {
    const formRef = useRef(null);

    useEffect(() => {
        console.log("Welcom")
        setTimeout(() => {
            formRef.current.scrollIntoView();
        }, 2000);
    });

    return (
      <div className='flex flex-wrap max-w-full h-screen text-white'>
        <div className='relative max-w-screen h-screen md:w-1/2 bg-primaryblue grid place-content-center'>
          <div className='p-5 text-center md:w-3/5 m-auto'>
            <h1 className='text-3xl md:text-4xl md:font-bold py-2'>Welcome to our community</h1>
            <p className='text-slate-100'>Discover sustainable sportswear, athleisure and casualwear clothing for your active lifestyle. Jaspur connects you with the clothing you desire based on your values, while facilitating purchasing options that are most convenient for you.</p>
          </div>

          <div className='animte-ping block md:w-auto absolute bottom-5 left-2/4 md:hidden'>
            <MdDoubleArrow style={{ transformOrigin: 'center', transform: 'translateX(-50%) rotateZ(-90deg)', fontSize: '40px' }} />
          </div>
        </div>
  
        <div ref={formRef} className='grid place-content-center text-textcolor h-screen m-auto md:w-1/2 py-6'>
          <div className='w-72 md:w-96 m-auto'> 
            <Outlet />
          </div>
        </div>
      </div>
    )
}

export default Welcome;
