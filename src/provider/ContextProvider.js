import React, { useState } from "react";

import Context from "../context/StoreContext"

const initialStore = {
  cart: [],
}

const ContextProvider = ({ children }) => {
  const [store, updateStore] = useState(initialStore);

  return (
    <Context.Provider
      value={{
        store,
        addToCart: (itemId, quantity) => {
          store.cart.push({itemId, quantity});
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;
