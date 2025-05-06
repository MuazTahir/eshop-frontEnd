import { sidebarComponent } from '@/config'
import { ChartNoAxesCombined } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function AdminSideBar() {

    const router = useRouter()

    return (
        <div className='min-w-52 text-center mt-3 p-4 shadow-2xl'>
            <h1 className='text-2xl flex font-mono tracking-tighter text-[#0E4749] font-bold'>
                <ChartNoAxesCombined />
                Admin Panel</h1>

            <div className='flex flex-col mt-8 gap-1'>
                {
                    sidebarComponent?.map((menuItem) => {
                        return <div
                            key={menuItem.id}
                            onClick={() => router.push(menuItem.path)}
                            className='flex items-center gap-2 rounded-md px-3 py-2  cursor-pointer'
                        >
                            {menuItem.icons}
                            <span className='font-medium text-[#25605e]'>
                                {menuItem.label}
                            </span>

                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default AdminSideBar