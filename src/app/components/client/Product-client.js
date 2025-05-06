

'use client';

import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { addCartItems } from "@/app/store/cart-Slice";

export default function ProductClient({ product }) {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            toast.error('Sign in to your Account', {
                description: 'You must be logged in to add items to the cart.'
            });
            router.push('/auth/Login');
            return;
        }

        // 👇 Add actual cart logic here
        const isInCart = cartItems.find(item => item._id === product._id);
        // console.log(item.id)

        if (isInCart) {
            toast.error('Product already added to cart');
        } else {
            dispatch(addCartItems(product));
            toast.success('Product added to cart!');
        }

    };

    const handleBuyBtn = () => {
        if (!isAuthenticated) {
            toast.error('You have to Login To Procced', {
                description: 'No using Account'
            })
            return;
        }
    }

    return (
        <main className="p-6 w-[90%] m-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
                <img
                    src={product.images?.[0] || product.image}
                    alt={product.title}
                    className="w-full md:w-1/2 h-96 object-contain bg-gray-100 rounded"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-[#0E4749] text-xl font-semibold mt-4">${product.price}</p>
                    <p className="text-sm mt-1 text-gray-500"><span className="text-[#0E4749]">Brand:</span> {product.brand}</p>
                    <p className="text-sm text-gray-500"><span className="text-[#0E4749]">Model:</span> {product.model}</p>
                    <p className="text-sm text-gray-500"><span className="text-[#0E4749]">Color:</span> {product.color}</p>
                    <p className="text-sm text-gray-500"><span className="text-[#0E4749]">Category:</span> {product.category}</p>
                </div>
            </div>

            <div className="absolute right-[56px]">
                <button
                    onClick={handleAddToCart}
                    className="my-5 text-xl bg-[#0E4749] text-yellow-50 py-3 px-6 rounded-2xl hover:bg-[#2a3c3c]"
                >
                    Add to Cart
                </button>
                <button onClick={handleBuyBtn} className="my-5 ml-2 text-xl bg-[#0E4749] text-yellow-50 py-3 px-6 rounded-2xl hover:bg-[#2a3c3c]">
                    Buy Now
                </button>
            </div>
        </main>
    );
}
