import React from 'react'
import useGlobalContext from '../../hooks/useGlobalContex'

function Page404() {
  const { userInfo } = useGlobalContext();
  return (
    <div>404  {userInfo.name}</div>
  )
}

export default Page404