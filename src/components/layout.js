import React from "react"
import Navbar from "./nav"


export default function Layout({children}){
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}
