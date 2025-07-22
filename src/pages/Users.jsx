import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bond mb-4">Users section</h2>
      <Outlet/>
    </div>
  )
}

export default Users