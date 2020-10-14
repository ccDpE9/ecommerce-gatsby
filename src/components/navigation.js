import React, { useState } from "react"
import { Link } from "gatsby"

import Cart from "../components/Cart"

const ListLink = props => (
  <li style={{"display": "inline"}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Navigation = () => {
  const [cartVisible, setCartVisible] = useState(false)

  const toggleCartVisible = () => {
    setCartVisible(!cartVisible)
  }

  return (
    <div className="bg-gray-900 w-screet h-16">
      <nav>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/contact">Contact</ListLink>
          <button onClick={toggleCartVisible}>Cart</button>
        </ul>
      </nav>
      <Cart visibility={cartVisible} />
      <Overlay cart={cartVisible} />
    </div>
  )
}

export default Navigation
