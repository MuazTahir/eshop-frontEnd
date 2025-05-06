'use client'
import React, { useEffect } from 'react'
import CheckAuth from './Check-auth'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Header from '../common/Header'
import AnimatedBackground from '../AnimationJs/authLayoutAnimation'

const AuthLayout = ({ children }) => {
    const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth)


    return (
        <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>

            {/* // Container */}
            <div>
                <Header />
            </div>
            <div className='flex min-h-screen w-full '>

                {/* left side */}
                <div className='hidden lg:flex w-1/2 relative z-10 items-center justify-center px-12 bg-[#002626]'>
                    <div className='max-w-md text-center space-y-6 text-white'>

                        <h1 className='text-4xl font-extrabold tracking-tight uppercase '>
                            Welcome
                        </h1>
                        <div>
                            <AnimatedBackground />

                        </div>

                        <h1 className='text-4xl font-extrabold tracking-tight uppercase '>
                            to our digital shopping area
                        </h1>
                        <p className='font-bold'>
                            For Better Experience <span className="text-blue-400 hover:text-blue-600">
                                <Link href='/auth/Login'>
                                    Login
                                </Link>
                            </span> /{" "}
                            <span className="text-blue-500 hover:text-blue-700">
                                <Link href='/auth/SignUp'>
                                    Sign Up
                                </Link>
                            </span>

                        </p>
                    </div>

                </div>
                {/* Right side */}
                <div className='flex flex-1 items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8'>
                    {children}
                </div>
            </div>
        </CheckAuth>
    )
}

export default AuthLayout