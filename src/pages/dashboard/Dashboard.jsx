import React from 'react'
import CustomForm from '../../components/form/CustomForm'
import CustomInput from '../../components/form/CustomInput'

function Dashboard() {
  // const handleSubmit = (e) => {
  //   console.log(e);
  //   e.preventDefault();
  //   console.log(e.target.checkValidity(), e)
  //   console.log(Object.fromEntries(new FormData(e.target)));
  // }

  // const handleInput = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.validationMessage);
  // }

  // const handleChageForm = (e) => {
  //   console.log(e.target.form)
  //   console.log(Object.fromEntries(new FormData(e.target.form)));
  // }

  return (
    <div className='w-1/2'>
      <CustomForm>
        <CustomInput name='fullname' label='Name' required />
        <CustomInput name='fullname' label='Last' required />
      </CustomForm>
      {/* <form onSubmit={handleSubmit} onChange={handleChageForm} >
        <label htmlFor="name">Nameteg</label>
        <input minLength='10' name='name' onChange={handleInput} id='name' type="text" className='bg-blue-200 invalid:border-red-500' required title='Field is required' />

        <input type='submit' value='Submit' />
      </form> */}
    </div>
  )
}

export default Dashboard 