import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
    <nav class="dt w-100 border-box pa3 ph5-ns">
      <Link to="/" className="dtc v-mid mid-gray link dim w-25">
        <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name" />
      </Link>
      <div class="dtc v-mid w-75 tr">
        <Link to="/about" className="link dim dark-gray f6 f5-ns dib">
          About
        </Link>
      </div>
    </nav>		
	)
}

export default Navbar;

