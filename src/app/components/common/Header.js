// import { ShoppingBag } from 'lucide-react'
// import React from 'react'

// function Header() {
//     return (
//         <header className='w-[90%] m-auto'>
//             <nav className="bg-white dark:bg-gray-800 border-b border-[#0E4749] px-4 py-2.5">
//                 <div className="max-w-screen-xl mx-auto flex items-center justify-between">
//                     {/* Logo */}
//                     <a href="/" className="flex items-center">
//                         <img src="/images/nn1.svg" className="h-8 sm:h-9 mr-2 rounded-full" alt="Flowbite Logo" />
//                         <span className="text-xl font-bold text-[#002626] dark:text-white">Shop_Flow</span>
//                     </a>

//                     {/* Center nav links */}
//                     <div className="hidden lg:flex justify-center flex-1 space-x-6 font-bold">
//                         <a href="/" className="text-[#002626] dark:text-white">Home</a>
//                         <a href="#" className="text-[#0E4749] hover:text-[#002626]">Features</a>
//                         <a href="#" className="text-[#0E4749] hover:text-[#002626]">Team</a>
//                         <a href="#" className="text-[#0E4749] hover:text-[#002626]">Contact</a>
//                     </div>

//                     {/* Right-side buttons */}
//                     <div className="flex items-center gap-2">
//                         <ShoppingBag />
//                         <a href="/auth/Login" className="text-[#0E4749] dark:text-white text-sm px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                             Log in
//                         </a>
//                         <a href="/auth/SignUp" className="text-white bg-[#0E4749] hover:bg-[#002626] text-sm  px-2 py-1 font-bold rounded">
//                             Get started
//                         </a>
//                     </div>
//                 </div>
//             </nav>
//             <br className=' border-2' />
//         </header>
//     )
// }

// export default Header

'use client';
import { ShoppingBag } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className='w-[90%] m-auto'>
      <nav className="bg-white dark:bg-gray-800 border-b border-[#0E4749] px-4 py-2.5">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/nn1.svg" className="h-8 sm:h-9 mr-2 rounded-full" alt="Flowbite Logo" />
            <span className="text-xl font-bold text-[#002626] dark:text-white">Shop_Flow</span>
          </Link>

          {/* Center nav links */}
          <div className="hidden lg:flex justify-center flex-1 space-x-6 font-bold">
            <Link href="/" className="text-[#002626] dark:text-white">Home</Link>
            <Link href="#" className="text-[#0E4749] hover:text-[#002626]">Features</Link>
            <Link href="#" className="text-[#0E4749] hover:text-[#002626]">Team</Link>
            <Link href="#" className="text-[#0E4749] hover:text-[#002626]">Contact</Link>
          </div>

          {/* Right-side buttons */}
          <div className="flex items-center gap-2">
            <ShoppingBag />
            <Link
              href="/auth/Login"
              className="text-[#0E4749] dark:text-white text-sm px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Log in
            </Link>
            <Link
              href="/auth/SignUp"
              className="text-white bg-[#0E4749] hover:bg-[#002626] text-sm px-2 py-1 font-bold rounded"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
      <br className='border-2' />
    </header>
  );
}

export default Header;
