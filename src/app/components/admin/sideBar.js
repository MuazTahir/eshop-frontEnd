
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { DatabaseZap, Feather, SendToBack, ShoppingBasket } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react'

// import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';

const sideBarProductItems = [
    {
        id: 'dashBoard',
        label: 'Dashboard',
        path: '/admin/dashboard',
        icons: <DatabaseZap />

    },
    {
        id: 'products',
        label: 'Products',
        path: '/admin/Products',
        icons: <ShoppingBasket />

    },
    {
        id: 'features',
        label: 'Users',
        path: '/admin/users',
        icons: <Feather />

    },
    {
        id: 'orders',
        label: 'Orders',
        path: '/admin/orders',
        icons: <SendToBack />

    }
]

function MenuItems({ setOpen }) {
    const router = useRouter();

    return <nav className='mt-8 flex-col flex gap-2'>
        {
            sideBarProductItems.map(Items =>
                <div key={Items.id} onClick={() => {
                    router.push(Items.path)
                    setOpen ? setOpen(false) : null
                }}
                    className='flex items-center font-medium cursor-pointer gap-2 rounded-md px-3 py-2 text-[#1e6956] hover:bg-muted hover:text-[#0E4749]'
                >
                    {
                        Items.icons
                    }
                    <span>
                        {
                            Items.label
                        }
                    </span>
                </div>
            )
        }
    </nav>

}

function AdminsSidebar({ open, setOpen }) {

    const router = useRouter();

    return (
        <Fragment>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side='left' className='w-64'>
                    <div className='flex flex-col h-full'>
                        <SheetHeader className='border-b'>
                            <SheetTitle className='flex gap-2 p-2 '>
                                <DatabaseZap size={30} />
                                <span onClick={() => {
                                    router.push('/admin/dashBoard')
                                    setOpen ? setOpen(false) : null
                                }} className='cursor-pointer  text-[#0E4749]'>
                                    Admin Panel
                                </span>
                            </SheetTitle>
                        </SheetHeader>
                        <MenuItems setOpen={setOpen} />
                    </div>
                </SheetContent>

            </Sheet>
            <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>

                <div className='flex items-center gap-2'>
                    <DatabaseZap size={30} />
                    <h1 onClick={() => router.replace('/admin/dashboard')} className='text-2xl font-extrabold cursor-pointer'>Admin Panel</h1>

                </div>
                <MenuItems />
            </aside>
        </Fragment>
    )
}

export default AdminsSidebar