import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='page-head'>
          <h1>My app</h1>
         <button><Link to="/login">Login</Link></button>
         <button><Link to="/signup">Register</Link></button>
    </div>
  )
}

export default Header