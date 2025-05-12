'use client'
import React, { useState } from 'react'
import AdminSideBar from './AdminSIdebar'
import AdminHeader from './AdminHeader'
import CheckAuth from '../auth/Check-auth'
import { useSelector } from 'react-redux'
import AdminsSidebar from './sideBar'

const AdminLayout = ({ children }) => {

  const [open, setOpen] = useState(false)

  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth)


  return (
    <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>

      <div className='min-h-screen w-full flex'>
        {/* sidebarAdmin */}
        {/* <AdminSideBar /> */}
        <AdminsSidebar open={open} setOpen={setOpen} />
        <div className='flex flex-1 flex-col'>
          {/* headerAdmin */}
          <AdminHeader setOpen={setOpen} />
          <main className='flex flex-1 bg-gray-200 p-4 md:p-6'>
            {children}
          </main>
        </div>


      </div>
    </CheckAuth>
  )
}

export default AdminLayout