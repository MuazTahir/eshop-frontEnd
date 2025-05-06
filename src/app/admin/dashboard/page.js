
'use client'
import UserGraph from '@/app/components/Extras/AdminGraphUser';
import LoadingSkeleton from '@/app/components/skeletonLoading';

import { fetchUser } from '@/app/store/user-slice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Admindashboard() {

  const { user: currentAdmin, isAuthenticated } = useSelector((state) => state.auth)
  const { user: allUser, isLoading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchUser())
  }, [dispatch])

  const totalUsers = allUser?.filter(u => u.role === 'user').length || 0;
  // console.log(totalUsers, 'user are')
  // console.log(currentAdmin, 'all users are')

  if (isLoading) return <LoadingSkeleton />
  // if (error) return <p>ERROR: {error}</p>

  return (
    <div className="min-h-screen w-full rounded-br-full bg-gradient-to-br from-[#0E4749] to-[#0c4b4e] px-6 md:px-12 py-10 text-white">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Dashboard Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center drop-shadow">
          Admin Dashboard
        </h1>

        {/* Admin Info and Total Users - Flexible Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Admin Info (No Card) */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Admin Information</h2>
            <div className="space-y-2 text-lg">
              {isAuthenticated && currentAdmin ? (
                <>
                  <p><span className="font-semibold text-white/90">Username:</span> {currentAdmin.user}</p>
                  <p><span className="font-semibold text-white/90">Email:</span> {currentAdmin.email}</p>
                  <p><span className="font-semibold text-white/90">Role:</span> {currentAdmin.role}</p>
                </>
              ) : (
                <p className="text-white/70">Admin not logged in.</p>
              )}
            </div>
          </div>

          {/* Total Users (Slight Card Highlight) */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-8 text-center shadow-md">
            <h2 className="text-xl font-medium text-white/90 mb-2">Total Registered Users</h2>
            <div className="text-6xl font-extrabold text-white">{totalUsers}</div>
            <p className="text-white/60 text-sm mt-2">Up-to-date from database</p>
          </div>
        </div>

        {/* User Graph (Standalone, Clean Section) */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">User Signup Trends</h2>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <UserGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;