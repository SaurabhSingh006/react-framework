import React from 'react'
import Loader from '../../components/loader/Loader'

function Dashboard() {
  return (
    <div className='bg-black'>
      <Loader type='bar' backgroundColor='blue' color='yellow' size="150px" loaderWeight="4px" />
    </div>
  )
}

export default Dashboard