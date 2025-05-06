'use client'
import React from 'react'
import AdminSideBar from './AdminSIdebar'
import AdminHeader from './AdminHeader'
import CheckAuth from '../auth/Check-auth'
import { useSelector } from 'react-redux'
import AdminsSidebar from './sideBar'

const AdminLayout = ({ children }) => {

  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth)


  return (
    <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>

      <div className='min-h-screen w-full flex'>
        {/* sidebarAdmin */}
        {/* <AdminSideBar /> */}
        <AdminsSidebar />
        <div className='flex flex-1 flex-col'>
          {/* headerAdmin */}
          <AdminHeader />
          <main className='flex flex-1 bg-gray-200 p-4 md:p-6'>
            {children}
          </main>
        </div>


      </div>
    </CheckAuth>
  )
}

export default AdminLayout