import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
export default function Home() {
  return (
    <div className='w-full flex flex-col items-center h-full '>
      <Header />
      <Navigation/>
      <div className='border border-red-500 w-1100 flex flex-col items-center justify-start mt-3'>
        <Outlet/>

      </div>

    </div>
  )
}
