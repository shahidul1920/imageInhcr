import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

export default function Main() {
  return (
    <div>
      <Header />
      <div>
        <Outlet>

        </Outlet>
      </div>
      <Footer />
    </div>
  )
}
