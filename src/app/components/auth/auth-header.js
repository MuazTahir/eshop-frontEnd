
'use client'
import React from 'react'
import ShopHeader from '../shoppingPanel/shopHeader'
import Header from '../common/Header'
const { useSelector } = require("react-redux")


function AuthHeader() {


    const { isAuthenticated } = useSelector((state) => state.auth)

    return (
        <div>{
            isAuthenticated ? <ShopHeader /> : <Header />
        }</div>
    )
}

export default AuthHeader
