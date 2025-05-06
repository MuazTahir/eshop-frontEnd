
'use client'
import CommonForm from '@/app/components/common/Form'
import { LoginUser } from '@/app/store/auth-Slice'
import { LoginFormControls } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const initialState = {
    email: '',
    password: ''
}

function Login() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const route = useRouter()

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const result = await dispatch(LoginUser(formData))

            console.log('Login', result);
            if (result?.payload?.success) {
                toast.success(result?.payload?.message)
            } else {
                toast.error(result?.payload?.message, {
                    description: 'Please! Sign In First'
                })

                if (result?.payload?.message === 'Ueser is not Exist!') {
                    toast.info('Redirecting to SignUp...')
                    route.push('/auth/SignUp')
                }

            }


        } catch (e) {
            console.log('error', e)
        }

    }

    return (

        <div className='m-auto w-full space-y-6 max-w-md'>

            <div className='text-black'>
                <h1 className='font-bold text-2xl text-center '>
                    Sign In to your Account
                </h1>
                <p className='text-center'>
                    Do not have an Account
                    <Link href='/auth/SignUp' className='ml-2 text-[#0E4749] hover:text-blue-600 hover:underline'>
                        Sign Up
                    </Link>
                </p>
                <CommonForm
                    ControlForm={LoginFormControls}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={'Login'}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
}

export default Login