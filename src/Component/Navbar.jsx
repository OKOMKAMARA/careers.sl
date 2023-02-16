import React from 'react'
import mainlogo from "../Assets/images/logo.png"
import Login from '../pages/Login'

const Navbar = () => {
  return (
        <nav className='nav'>
        <img src={mainlogo} alt='logo' /> 
        <div> 
         <ul  className="nav-ul">
                <li><a href="active">Home</a></li>
                <li><a href="https://careers.sl">Find out</a></li>
            </ul>
      </div>
      <button>
      <Login />
      </button>
   </nav> 
            
  )
}

export default Navbar
