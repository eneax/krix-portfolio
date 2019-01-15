import styled from 'styled-components'
import { above, baskerville, indigo } from '../utils'


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
    width: 50%;
    margin: 1.45rem auto 4rem auto;
    border: 0; 
    height: 1px; 
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
  }

  span {
    margin-top: 4rem;
  }
  
  img {
    border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
    display: inline-block;
    max-width: 30em;
    box-shadow: 0 2px 2px 0 rgba(79, 105, 198, .14), 
                0 3px 1px -2px rgba(79, 105, 198, .2), 
                0 1px 5px 0 rgba(79, 105, 198, .12) !important;
  }
`

export const DateTime = styled.p`
  color: ${indigo};
  ${baskerville};
  font-size: 1rem;
  ${above.laptop`
    font-size: 1.25rem;
  `}
  display: block;
  text-align: center;
  margin-bottom: 2rem;
`

export const ImageWrapper = styled.div`
	margin-bottom: 2rem;
	img {
		border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
	}
`
