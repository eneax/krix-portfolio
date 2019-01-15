import styled from 'styled-components'
import { Link } from 'gatsby';
import { facebook, instagram, mail, indigo, mineShaft } from '../utils'


export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel:'noopener'
})`
	font-size: .875rem;
	-moz-osx-font-smoothing: grayscale;
	backface-visibility: hidden;
	transform: translateZ(0);
	transition: transform .25s ease-out;
	&:hover,
	&:focus {
		transform: scale(1.05);
		svg[data-icon="facebook-f"] {
			color: ${facebook};
		}
		svg[data-icon="instagram"] {
			color: ${instagram};
		}
		svg[data-icon="envelope"] {
			color: ${mail};
		}
	}
	&:active {
		transform: scale(.9);
	}
	display: inline-block;
  vertical-align: middle;
  padding: .5rem .5rem;
	margin-bottom: 1rem;
  color: ${mineShaft};
	svg {
		font-size: 2em;
	}
`

export const underlineEffect = `
	position: relative;
	text-decoration: none;
	line-height: 24px;
	&:before, 
	&:after {
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
`

export const InternalLink = styled(Link)`
	color: ${indigo};
  text-decoration: none;
	&:hover, &:focus {
		color: ${indigo};
	}
	
	${underlineEffect};
`
