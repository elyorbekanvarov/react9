import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function PublicLayout() {
  return (
    <>
    <header>
        <Navbar></Navbar>
    </header>
    <main>
        <Outlet></Outlet>
    </main>
      <Footer></Footer>
    </>
  )
}

export default PublicLayout