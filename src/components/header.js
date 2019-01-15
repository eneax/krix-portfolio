import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { above, avenir, indigo } from '../utils'


const Navbar = styled.nav`
  display: table;
  width: 100%;
  max-width: 48rem;
  margin-right: auto;
  margin-left: auto;
  padding: 2.625rem 1.3125rem .625rem 1.3125rem;
  box-sizing: border-box;
	${avenir};

  a {
		color: #000;
		font-weight: 900;
		display: table-cell;
		vertical-align: middle;
		text-decoration: none;
		&:hover {
			text-decoration: none;
			transition: color .03s ease-in;
		}
		&:hover,
		&:focus {
			color: ${indigo};
		}

		img {
			display: inline-block;
			width: 2rem;
			height: 2rem;
			margin-top: -0.2rem;
			transition: transform .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			&:hover { 
				transform: rotate(-5deg) scale(1.1);
			}
		}
	}
`

const NavLinkWrapper = styled.div`
  display: table-cell;
  width: 75%;
  text-align: right;
  a {
    font-size: 0.875rem;
    display: inline-block;
		${above.mobileL`
			font-size: 1rem;
		`}

		/* Hover Effect */
		position: relative;
		color: inherit;
		text-decoration: none;
		line-height: 24px;
		&:before, &:after {
			content: '';
			position: absolute;
			transition: transform .3s ease;
		}
		
		display: inline-block;
		padding-top: 10px;
		padding-bottom: 5px;
		overflow: hidden;
		&:before {
			left: 0;
			bottom: 0;
			width: 100%;
			height: 2px;
			background: ${indigo};
			transform:  translateX(-100%);
		}
		&:hover:before {
			transform:  translateX(0);
		}

  }
  a:nth-child(2) {
		margin-left: 1rem;
  }
`


const Header = ({ siteTitle }) => (
  <Navbar>
		<Link className="logo" to='/' title='Home'>
			<img src={logo} alt='Classical Building Logo'/>
		</Link>
		<NavLinkWrapper>
			<Link to='/portfolio' title='Portfolio'>Portfolio</Link>
			<Link to='/about' title='About'>About</Link>
		</NavLinkWrapper>
	</Navbar>	
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
