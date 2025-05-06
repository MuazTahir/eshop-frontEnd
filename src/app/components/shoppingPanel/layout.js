'use client'
import React from 'react'
import ShopHeader from './shopHeader'
import CheckAuth from '../auth/Check-auth'
import { useSelector } from 'react-redux'

const ShoppingLayout = ({ children }) => {

    const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth)



    return (
        <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>

            <div className='flex flex-col bg-white min-h-screen text-black overflow-hidden'>
                {/* shopping header */}
                <ShopHeader />

                <main className='flex flex-col w-full'>
                    {children}
                </main>
            </div>
        </CheckAuth>
    )
}

export default ShoppingLayout