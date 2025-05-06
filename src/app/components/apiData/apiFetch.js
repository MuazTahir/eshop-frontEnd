


'use client'

import { fetchMongoProducts } from '@/app/store/data-Slice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ApiFetch() {
    const dispatch = useDispatch()
    const { products, isLoading, error } = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(fetchMongoProducts())
    }, [dispatch])

    return (
        <main className='w-[90%] m-auto'>
            <h1 className='text-2xl font-bold mt-3 py-2 ml-2 text-[#002626]'>Our Newly Accesseries</h1>
            {isLoading && <p>Loading .....</p>}
            {error && <p>Error is: {error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
                {Array.isArray(products) && products.map((item) => (
                    <div
                        key={item.id || item._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <img
                            src={item.images?.[0] || item.image}
                            alt={item.title}
                            className="w-full h-48 object-contain"
                        />
                        <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1 mt-1.5">{item.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">{item.category?.name || item.brand}</p>
                            <p className="text-[#0E4749] font-bold text-lg mb-3">${item.price}</p>
                            <Link href={`/product/${item._id}`}>
                                <button className="mt-auto bg-[#0E4749] text-white px-4 py-2 rounded-md hover:bg-[#002626] transition">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default ApiFetch
