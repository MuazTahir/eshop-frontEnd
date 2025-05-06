
'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { verify } from '@/app/store/auth-Slice'

export default function AuthProvider({ children }) {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Dispatching verify()');
        dispatch(verify())
    }, [dispatch])

    return <>{children}</>
}
