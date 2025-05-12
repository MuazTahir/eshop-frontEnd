'use client'
import { ArrowLeft } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShopHeader from '../components/shoppingPanel/shopHeader'
import { clearCart, decCartItems, getTotal, incrementCartItems, removeCartItems } from '../store/cart-Slice'
import { toast } from 'sonner'
import PayButton from '../components/payButton'

export default function CartPage() {

    const cart = useSelector((state) => state.cart)
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotal())
    }, [cart.cartItems])

    const handleRemoveCartItem = (cartItems) => {
        dispatch(removeCartItems(cartItems))
        toast.error('Product Removed Successfully!')
    }

    const handleDecCartItem = (cartItems) => {
        dispatch(decCartItems(cartItems))
        toast.info('Quantity of Product is Reduced')
    }

    const handleIncrCartitem = (cartItems) => {
        dispatch(incrementCartItems(cartItems))
        toast.info('Quantity had been Increased')
    }

    const handleClearCartItem = () => {
        dispatch(clearCart())
        toast.success('Cart has been Cleared!')
    }

    return (
        <div>
            <ShopHeader />

            <div className='w-[90%] max-w-6xl mx-auto mt-9'>
                <h1 className='text-center text-2xl font-bold text-[#0E4749]'>Shopping Cart</h1>

                {cart.cartItems.length === 0 ? (
                    <div className='flex flex-col items-center justify-center mt-8 text-center'>
                        <h2 className='text-xl md:text-3xl text-gray-400 font-mono font-bold'>Your Shopping Cart is Empty</h2>
                        <img src="/images/shopping.png" alt="shopping" className='w-[100px] mt-4' />
                        <hr className='border border-black w-1/2 my-4' />
                        <a href="/shoppingPanel/Home" className='flex items-center gap-2 text-[#0E4749] font-bold'>
                            <ArrowLeft /> Move to Shopping Area
                        </a>
                    </div>
                ) : (
                    <div className='mt-6'>
                        <div className='hidden sm:grid grid-cols-5 gap-4 py-2 border-b border-[#0E4749] font-semibold text-gray-700'>
                            <h3>Product</h3>
                            <h3>Title</h3>
                            <h3>Price</h3>
                            <h3>Quantity</h3>
                            <h3>Total</h3>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            {cart.cartItems.map(cartItems => (
                                <div key={cartItems.brand} className="flex flex-col sm:grid sm:grid-cols-5 items-start sm:items-center gap-4 py-5 border-b border-gray-200">
                                    <div className="sm:col-span-1 w-full flex justify-center sm:justify-start">
                                        <img src={cartItems.image} className="w-20 h-20 object-contain" alt={cartItems.brand} />
                                    </div>

                                    <div className="sm:col-span-1 w-full text-left">
                                        <h1 className="font-bold text-[#0E4749]">{cartItems.model}</h1>
                                        <p className="text-sm text-gray-500">{cartItems.brand}</p>
                                        <button onClick={() => handleRemoveCartItem(cartItems)} className="mt-1 text-xs bg-[#156265] text-white font-semibold px-3 py-1 rounded-full hover:bg-[#0E4749]">
                                            Remove
                                        </button>
                                    </div>

                                    <div className="sm:col-span-1 w-full text-left font-bold text-[#0E4749]">
                                        ${cartItems.price}
                                    </div>

                                    <div className="sm:col-span-1 w-full">
                                        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-2 py-1 w-fit shadow-sm">
                                            <button onClick={() => handleDecCartItem(cartItems)} className="bg-[#0E4749] text-white px-3 py-1 rounded-full hover:bg-[#156060] transition">
                                                -
                                            </button>
                                            <div className="min-w-[20px] text-center font-medium">{cartItems.cartQuantity}</div>
                                            <button onClick={() => handleIncrCartitem(cartItems)} className="bg-[#0E4749] text-white px-3 py-1 rounded-full hover:bg-[#156060] transition">
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-1 w-full text-left font-bold text-[#0E4749]">
                                        ${(cartItems.price * cartItems.cartQuantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mt-6 flex justify-between items-center flex-col sm:flex-row gap-4'>
                            <button
                                onClick={handleClearCartItem}
                                className="bg-[#0E4749] text-white px-4 py-2 rounded-md hover:bg-[#156060] transition w-full sm:w-auto"
                            >
                                Clear Cart
                            </button>

                            <div className="w-full sm:max-w-sm bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
                                <h2 className="text-xl font-bold text-[#0E4749] mb-4">Order Summary</h2>

                                <div className="flex justify-between text-base mb-2">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium text-gray-800">${cartTotalAmount.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-base mb-2">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-gray-800">$0.00</span>
                                </div>

                                <hr className="my-4 border-gray-300" />

                                <div className="flex justify-between text-lg font-semibold text-[#0E4749]">
                                    <span>Total</span>
                                    <span>${cartTotalAmount.toFixed(2)} /-</span>
                                </div>

                                <div className="mt-6">
                                    <PayButton cartItems={cart.cartItems} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
