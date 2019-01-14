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
      /* border-radius: 100%; */
      


			
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
  }
  a:nth-child(2) {
		margin-left: 1rem;
  }
`


// const Navbar = styled.nav`
//   ${avenir};
//   display: table;
//   width: 100%;
//   box-sizing: border-box;
//   padding: 2rem 1rem;
//   ${above.mobileL`
//     padding-left: 2rem;
//     padding-right: 2rem;
// 	`}

//   a {
//     display: table-cell;
//     vertical-align: middle;
//     color: ${grey};
//     text-decoration: none;
//     transition: color .15s ease-in;

//     opacity: 1;
//     transition: opacity .15s ease-in;

//     &:link,
//     &:visited {
//       transition: color .15s ease-in;
//     }
//     &:hover {
//       transition: color .15s ease-in;
//       opacity: .5;
//       transition: opacity .15s ease-in;
//     }
//     &:active {
//       transition: color .15s ease-in;
//       opacity: .8;
//       transition: opacity .15s ease-out;
//     }
//     &:focus {
//       transition: color .15s ease-in;
//       outline: 1px dotted currentColor;
//       opacity: .5;
//       transition: opacity .15s ease-in;
//     }

// 		img {
//       max-width: 8rem;
//       max-height: 8rem;
//       padding-left: 0;
//       margin-left: -2rem;
//       display: inline-block;
//       border-radius: 100%;
// 		}
// 	}
// `


// const NavLinkWrapper = styled.div`
//   display: table-cell;
//   vertical-align: middle;
//   width: 75%;
//   text-align: right;

  

//   a {
//     color: #4d4d4f;
//     font-size: .875rem;
//     margin-right: 1rem;
//     margin-top: -2rem;
//     ${above.mobileL`
//       font-size: 1rem;
//       margin-right: 2rem;
// 		`}
//     display: inline-block;

//     text-decoration: none;
//     transition: color .15s ease-in;

//     opacity: 1;
//     transition: opacity .15s ease-in;

//     &:link,
//     &:visited {
//       transition: color .15s ease-in;
//     }
//     &:hover {
//       transition: color .15s ease-in;
//       opacity: .5;
//       transition: opacity .15s ease-in;
//     }
//     &:active {
//       transition: color .15s ease-in;
//       opacity: .8;
//       transition: opacity .15s ease-out;
//     }
//     &:focus {
//       transition: color .15s ease-in;
//       outline: 1px dotted currentColor;
//       opacity: .5;
//       transition: opacity .15s ease-in;
//     }

//   }
//   a:nth-child(2) {
//     margin-right: 1rem;
//   }
// `


const Header = ({ siteTitle }) => (
  <Navbar>
		<Link className="logo" to='/' title='Home'>
			<img src={logo} alt='Enea Xharja Logo'/>
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
