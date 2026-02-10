import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <Link to="products">Products</Link> | 
      <Link to="create">Create Product</Link>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard