import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
	return (
    <nav className='dt w-100 border-box pa3 ph4-ns pv4 avenir'>
      <Link to='/' className='dtc v-mid mid-gray link dim w-25'>
        <img src={logo} className='logo dib br-100' alt='Kri Xharja Logo' />
      </Link>
      <div className='dtc v-mid w-75 tr'>
        <Link to='/projects' className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'>
          Portfolio
        </Link>
        <Link to='/about' className='link dim dark-gray f6 f5-ns dib'>
          About
        </Link>
      </div>
    </nav>		
	)
}

export default Navbar;