
'use client';
import React from 'react';
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export default function ShopSidebar({ open, setOpen }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle className="text-[#0E4749] font-bold">Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-4">
          <Link onClick={() => setOpen(false)} href="/shoppingPanel/Home" className="hover:text-[#0E4749]">Home</Link>
          <Link onClick={() => setOpen(false)} href="#" className="hover:text-[#0E4749]">Company</Link>
          <Link onClick={() => setOpen(false)} href="#" className="hover:text-[#0E4749]">Marketplace</Link>
          <Link onClick={() => setOpen(false)} href="#" className="hover:text-[#0E4749]">Features</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
