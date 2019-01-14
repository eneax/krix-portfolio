import styled from 'styled-components'
import { above, baskerville } from '../utils'


export const Container = styled.div`
  ${baskerville};
  font-size: 1.25rem;
  line-height: 1.5;
  max-width: 48rem;
  margin-bottom: 4rem;
  ${above.tablet`
		font-size: 1.5rem;
	`}
`

export const ProjectLayout = styled(Container)`
  padding: 1rem;
  ${above.tablet`
		padding: 2rem;
  `}
  
  h1 {
    font-size: 2.5rem;
    text-align: center;
    ${above.tablet`
      font-size: 2.25rem;
    `}
    ${above.laptop`
      font-size: 4rem;
    `}
    max-width: 30em;
    line-height: 1.25;
    font-weight: 200;
    margin-top: 0;
  }

  hr {
    margin-top: 1.45rem;
    margin-bottom: 4rem;
    border: 0; 
    height: 1px; 
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
  }
`

export const ImageWrapper = styled.div`
	margin-bottom: 2rem;
	img {
		border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
	}
`
