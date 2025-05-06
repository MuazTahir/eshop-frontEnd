
'use client'
import CommonForm from '@/app/components/common/Form'
import { SignUpUser } from '@/app/store/auth-Slice'
import { SignUpFormControls } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const initialState = {
    userName: '',
    email: '',
    password: ''
}

function Signup() {


    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const route = useRouter()


    console.log(formData)

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const result = await dispatch(SignUpUser(formData));

            // console.log("Signup Result:", result);

            if (result?.payload?.status) {
                toast.success(result?.payload?.message)
                // console.log("Navigating to /auth/Login");
                route.push('/auth/Login');
            } else {
                // console.error("Signup failed:", result);
                toast.error(result?.payload?.message, {
                    description: 'Try Another Email',
                    action: {
                        label: 'Try Again'
                    }
                })

            }
        } catch (error) {
            console.error("Signup error:", error);
        }
    }



    return (
        <div className='m-auto w-full space-y-6 max-w-md'>
            <div>
                <h1 className='font-bold text-2xl text-black'>
                    SignUp To Create You New Account
                </h1>
                <p className='text-center'>
                    Already have an account
                    <Link href='/auth/Login' className='ml-2 text-[#0E4749] hover:text-blue-500 hover:underline'>Login</Link>
                </p>
                <CommonForm
                    ControlForm={SignUpFormControls}
                    buttonText={'Sign Up'}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
}

export default Signup