import React, { useState } from 'react'
import Button from '../../../components/button/Button';
import CustomInput from '../../../components/form/CustomInput'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [signupBtnLoad, setSignupBtnLoad] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
      setSignupBtnLoad(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
  }

  return (
    <div className='animate-fade-out'>
        <h3 className='text-4xl font-bold m-2'>Sign Up</h3>
        <p className='m-2 mb-4 text-sm'>
        Already have an account? &nbsp;
        <span onClick={() => navigate('/sign-in')} className='text-primaryblue font-medium cursor-pointer'>Sign In</span>
        </p>

        <form onSubmit={handleSubmit}>
        <CustomInput id='username' label='Email' type='email' required minLength='6' />
        <CustomInput id='password' label='Password' type='password' required minLength='8' />
        <CustomInput id='confirmPassword' label='Confirm Password' type='password' required minLength='8' />

        <br />
        <Button title='Sign Up' classes='bg-primaryblue text-white px-4 py-2' align='center' loading={signupBtnLoad} />
        </form>
    </div>
  )
}

export default SignUp