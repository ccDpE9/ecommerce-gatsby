import React from "react"

const Overlay = ({ cart }) => (
  <div
    className={
      "overlay absolute h-screen w-full z-40 bg-black transition visible duration-500 ease-liner transition opacity duration-500 ease-linear" +
      (cart ? " visible opacity-25" : " invisible opacity-0")
    }
  ></div>
)

export default Overlay
