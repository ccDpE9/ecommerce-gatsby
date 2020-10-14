import React, { useContext } from "react"

import StoreContext from "../context/StoreContext"

const Cart = ({ visibility }) => {
  const {
    store: { cart },
  } = useContext(StoreContext)
  console.log(cart)
  console.log(visibility)

  return (
    <div
      className={
        "cart bg-gray-900 h-screen w-64 absolute right-0 transition duration-300 ease-out z-50 " +
        (visibility ? " transform translate-x-0" : " transform translate-x-full")
      }
    >
      {
        cart.map(item => (
          <p>{ item.itemId }</p>
        ))
      }
    </div>
  )
}

export default Cart
