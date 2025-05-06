
// components/CartHydrator.js
'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCartFromStorage } from '@/app/store/cart-Slice'

export default function CartHydrator() {
  const dispatch = useDispatch()

  useEffect(() => {
    const data = localStorage.getItem('cartItems')
    if (data) {
      dispatch(setCartFromStorage(JSON.parse(data)))
    }
  }, [dispatch]);

  return null;
}
