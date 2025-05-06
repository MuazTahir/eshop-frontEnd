// pages/shop/index.jsx or components/pages/ShoppingPage.jsx
'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShopProducts } from '@/app/store/shopProductSlice';
import ShoppingProductTilt from './shoppingProductTilt';
// import ShoppingProductTilt from '@/app/components/shopping/ShoppingProductTilt';

function AdminProductsShow() {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector(state => state.shopProducts);

    useEffect(() => {
        dispatch(fetchShopProducts());
    }, [dispatch]);

    if (isLoading) return <p className="text-center py-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="pt-20 px-4 w-[90%] m-auto">
            <div className='text-2xl font-bold font-mono pb-4'>

                <h1>Our Recent Added Products</h1>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products?.length > 0 ? (
                    products.map(product => (
                        <ShoppingProductTilt key={product._id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full text-center">No products found.</p>
                )}
            </div>
        </div>
    );
}

export default AdminProductsShow;
