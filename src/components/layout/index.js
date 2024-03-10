
import React from 'react'
import "./index.scss"
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Sidebar />
      
      <div className='App'>
          <div className='page'>
            

            <Outlet />
            
          </div>

      </div>
    </div>
  )
}

export default Layout 