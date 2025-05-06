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

            <div className='w-[90%] m-auto mt-9'>
                <h1 className='text-center text-2xl font-bold text-[#0E4749] '>Shopping Cart</h1>
                {
                    cart.cartItems.length === 0 ? (
                        <div className='flex justify-center items-center flex-col mt-8'>
                            <h2 className='text-2xl md:text-3xl text-gray-400 font-mono font-bold'>Your Shopping Cart is Empty</h2>
                            <img src="/images/shopping.png" alt="shopping" className='w-[120px]' />
                            <hr className='border border-black w-1/2 my-4' />
                            <div className='my-6'>
                                <a className='flex justify-center items-center font-bold text-[#0E4749]' href="/shoppingPanel/Home">
                                    <ArrowLeft /> Move to Shopping Area</a>
                            </div>
                        </div>
                    ) : (
                        <div className='mt-4'>
                            <div className='grid grid-cols-5 items-center'>
                                <h3>Product</h3>
                                <h3>Title</h3>
                                <h3 className=''>Price</h3>
                                <h3>Quantity</h3>
                                <h3>Total</h3>
                            </div>
                            <hr className='border border-[#0E4749] w-full ' />
                            {
                                cart.cartItems?.map(cartItems => {
                                    return <div key={cartItems.brand} className='grid grid-cols-5 items-center py-5'>
                                        <div>
                                            <img src={cartItems.image} className='w-[60px]' alt={cartItems.brand} />
                                        </div>
                                        <div>
                                            <h1 className='font-bold text-[#0E4749] '>{cartItems.model}</h1>
                                            <p>{cartItems.brand}</p>
                                            <button onClick={() => handleRemoveCartItem(cartItems)} className='bg-[#156265] leading-[unset] text-white font-semibold text-sm px-2 py-0.5 rounded-2xl hover:bg-[#0E4749]'>
                                                Remove
                                            </button>
                                        </div>
                                        <div className=' font-bold text-[#0E4749]'>
                                            ${cartItems.price}
                                        </div>
                                        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-2 py-1 w-fit shadow-sm">
                                            <button onClick={() => handleDecCartItem(cartItems)} className="bg-[#0E4749] text-white px-3 py-1 rounded-full hover:bg-[#156060] transition">
                                                -
                                            </button>
                                            <div className="min-w-[20px] text-center font-medium">{cartItems.cartQuantity}</div>
                                            <button onClick={() => handleIncrCartitem(cartItems)} className="bg-[#0E4749] text-white px-3 py-1 rounded-full hover:bg-[#156060] transition">
                                                +
                                            </button>
                                        </div>

                                        <div>
                                            ${cartItems.price * cartItems.cartQuantity}
                                        </div>
                                    </div>
                                })
                            }

                            <div>
                                <button className='bg-[#0E4749] text-white px-3 py-2 rounded-md cursor-pointer' onClick={() => handleClearCartItem()}>Clear</button>
                            </div>
                            {/* //check and subtotal */}
                            <div className="w-full flex justify-end mt-10">
                                <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-6 border border-gray-200 mr-6">
                                    <h2 className="text-2xl font-bold text-[#0E4749] mb-4">Order Summary</h2>

                                    <div className="flex justify-between text-lg mb-2">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium text-gray-800">${cartTotalAmount.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between text-lg mb-2">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium text-gray-800">$0.00</span>
                                    </div>

                                    <hr className="my-4 border-gray-300" />

                                    <div className="flex justify-between text-xl font-semibold text-[#0E4749]">
                                        <span>Total</span>
                                        <span>${cartTotalAmount} /-</span>
                                    </div>

                                    <a

                                        className="block text-center mt-6 bg-[#0E4749] text-white py-3 rounded-xl font-semibold hover:bg-[#146f6f] transition"
                                    >
                                        <PayButton cartItems={cart.cartItems} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
