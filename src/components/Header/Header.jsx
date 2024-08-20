import React from 'react'
import './Header.css'
import logo from '../../images/logo.jpg';

export const Header = () => {
  return (
    <>
    <div className='main_container'>
        <div className='brand'>
            <div className='logo'><img src={logo}></img></div>
            <div className='name'><h1>CreatedInAm</h1></div>
        </div>
        <div className='navigation'>
            <nav>
                <ul>
                    <li>Home </li>
                    <li>Clients</li>
                    <li>Projects</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        <div className='auth'>
            <div><a>Log In</a></div>
            <button className='button'>Sign Up</button>
        </div>
    </div>

    </>
  )
}
