// 'use client'
// import { logoutUser } from '@/app/store/auth-Slice'
// import { Button } from '@/components/ui/button'
// import { AlignJustify, LogOut, ShoppingBag, ShoppingCart } from 'lucide-react'
// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { toast } from 'sonner'

// function ShopHeader() {

//   const dispatch = useDispatch()
//   async function handleLogout() {
//     const action = await dispatch(logoutUser());

//     if (logoutUser.fulfilled.match(action)) {
//       toast.success(action.payload.message);
//     } else {
//       toast.error("Logout failed. Please try again.");
//     }
//   }

//   return (
//     <div>
//       <header className='flex items-center justify-center px-4 py-3 bg-background border-b'>
//         {/* Logo */}
//         <a href="/" className="flex items-center">
//           <img src="/images/nn1.svg" className="h-8 sm:h-9 mr-2 rounded-full" alt="Flowbite Logo" />
//           <span className="text-xl font-bold text-[#002626] dark:text-white">Shop_Flow</span>
//         </a>
//         <div className=' flex-1 justify-center items-center space-x-6 font-bold lg:flex hidden'>
//           <a href="/shoppingPanel/Home" className="text-[#002626] dark:text-white">Home</a>
//           <a href="#" className="text-[#0E4749] hover:text-[#002626]">Company</a>
//           <a href="#" className="text-[#0E4749] hover:text-[#002626]">Marketplace</a>
//           <a href="#" className="text-[#0E4749] hover:text-[#002626]">Features</a>
//         </div>
//         <button onClick={() => setOpen(true)} className='lg:hidden sm:block bg-gray-100 hover:bg-gray-200 transition rounded ml-2 px-1.5 py-0.5'>
//           <AlignJustify size={24} />
//           <span className='sr-only'>Toggle Menu</span>
//         </button>

//         <div className='flex flex-1 justify-end items-center'>
//           <div className='mr-4'>
//             <a href="/Cart">
//               <ShoppingBag />

//             </a>
//           </div>
//           <div className='w-10 h-10 rounded-full bg-gray-500 mr-4 hidden lg:block'>
//             {/* You can replace this with your user avatar image */}
//             <img src={'/images/avatar.jpg'} alt="Profile" className='w-full h-full object-cover rounded-full' />
//           </div>
//           <Button onClick={handleLogout} className='inline-flex gap-2 cursor-pointer items-center bg-[#0E4749] rounded-md px-4 py-2 text-sm font-medium shadow'>
//             LogOut
//             <LogOut />
//           </Button>
//         </div>

//       </header>
//     </div>
//   )
// }

// export default ShopHeader

'use client';
import { logoutUser } from '@/app/store/auth-Slice';
import { Button } from '@/components/ui/button';
import { AlignJustify, LogOut, ShoppingBag } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import Link from 'next/link';

function ShopHeader() {
  const dispatch = useDispatch();

  async function handleLogout() {
    const action = await dispatch(logoutUser());

    if (logoutUser.fulfilled.match(action)) {
      toast.success(action.payload.message);
    } else {
      toast.error('Logout failed. Please try again.');
    }
  }

  return (
    <div>
      <header className="flex items-center justify-center px-4 py-3 bg-background border-b">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/nn1.svg"
            className="h-8 sm:h-9 mr-2 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="text-xl font-bold text-[#002626] dark:text-white">
            Shop_Flow
          </span>
        </Link>

        {/* Center nav links */}
        <div className="flex-1 justify-center items-center space-x-6 font-bold lg:flex hidden">
          <Link href="/shoppingPanel/Home" className="text-[#002626] dark:text-white">
            Home
          </Link>
          <Link href="#" className="text-[#0E4749] hover:text-[#002626]">
            Company
          </Link>
          <Link href="#" className="text-[#0E4749] hover:text-[#002626]">
            Marketplace
          </Link>
          <Link href="#" className="text-[#0E4749] hover:text-[#002626]">
            Features
          </Link>
        </div>

        {/* Mobile menu toggle (example only, no functionality) */}
        <button
          onClick={() => setOpen(true)} // You should define `setOpen`
          className="lg:hidden sm:block bg-gray-100 hover:bg-gray-200 transition rounded ml-2 px-1.5 py-0.5"
        >
          <AlignJustify size={24} />
          <span className="sr-only">Toggle Menu</span>
        </button>

        {/* Right side controls */}
        <div className="flex flex-1 justify-end items-center">
          <div className="mr-4">
            <Link href="/Cart">
              <ShoppingBag />
            </Link>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-4 hidden lg:block">
            <img
              src={'/images/avatar.jpg'}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <Button
            onClick={handleLogout}
            className="inline-flex gap-2 cursor-pointer items-center bg-[#0E4749] rounded-md px-4 py-2 text-sm font-medium shadow"
          >
            LogOut
            <LogOut />
          </Button>
        </div>
      </header>
    </div>
  );
}

export default ShopHeader;
