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
    <div className='bg-blue text-red'>
      fghdfhjdff { userInfo.name }
    </div>
  )
}

export default SignIn;