import { logoutUser } from '@/app/store/auth-Slice';
import { Button } from '@/components/ui/button'
import { AlignJustify, LogOut } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

function AdminHeader() {

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser())
  }


  return (
    <header className='flex items-center justify-center px-4 py-3 bg-background border-b'>
      <Button onClick={() => setOpen(true)} className='lg:hidden sm:block'>
        <AlignJustify />
        <span className='sr-only'>Toggle Menu</span>
      </Button>

      <div className='flex flex-1 justify-end cursor-pointer'>
        <Button onClick={handleLogout} className='inline-flex gap-2 items-center  bg-[#0E4749] rounded-md px-4 py-2 text-sm font-medium shadow'>
          <LogOut />
          LogOut
        </Button>
      </div>

    </header>
  )
}

export default AdminHeader