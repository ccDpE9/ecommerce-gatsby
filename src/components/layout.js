import React from "react"
import { Link } from "gatsby"

import Navigation from "./navigation"

import ContextProvider from "../provider/ContextProvider"

import "../index.css"

const Layout = ({ children }) => (
  <ContextProvider>
    <div>
      <header>
        <Link to="/">
          <h3>Header</h3>
        </Link>
      </header>
      <Navigation />
      {children}
    </div>
  </ContextProvider>
)

export default Layout
