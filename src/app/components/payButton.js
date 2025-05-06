

import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const url = 'http://localhost:5000/api' 

const PayButton = ({ cartItems }) => {
  const user = useSelector((state) => state.auth.user) 

  const handleCheckOut = () => {
    axios.post(`${url}/create-checkout-session`, {
      cartItems,
      userId: user._id,
    })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url
        }
      })
      .catch((error) => console.log(error.message))
  }

  return (

    <div>
      <button onClick={handleCheckOut}>Check Out</button>
    </div>
  )
}

export default PayButton
