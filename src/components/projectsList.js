import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { above, baskerville, indigo } from '../utils'


const  PROJECTS_LIST_QUERY = graphql`
  query ProjectsList {
    allMarkdownRemark(sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          frontmatter {
            title
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 1240) {
                  src
              		srcSet
              		sizes
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }
`


const PortfolioWrapper = styled.div`
  float: left;
  width: 100%;
  ${above.tablet`
    width: 50%;
  `}
  padding: 1rem;


  ${baskerville};
  font-size: 1rem;
  text-align: center;
  ${above.laptop`
    font-size: 1.25rem;
  `}
  display: block;
  color: #000;
  &:hover {
    transition: color .3s ease-in;
  }
  &:hover,
  &:focus {
    color: ${indigo};
  }

  p{
    margin-top: .5rem;
    margin-bottom: 2rem;
  }
`


const Cover = styled(Img)`
  border: 1px solid #e7e7e7;

  box-shadow: 0 2px 2px 0 rgba(79, 105, 198, .14), 
                0 3px 1px -2px rgba(79, 105, 198, .2), 
                0 1px 5px 0 rgba(79, 105, 198, .12) !important;
  
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover { 
    transform: rotate(2deg) scale(1.01);
  }
`


const ProjectsList = () => (
  <StaticQuery
    query={PROJECTS_LIST_QUERY}
    render={(data) => (
      <>
        {data.allMarkdownRemark.edges.map(edge => (
          <Link
            to={`/portfolio${edge.node.frontmatter.slug}`}
            key={edge.node.frontmatter.slug}
          >  
            <PortfolioWrapper>
              <Cover fluid={edge.node.frontmatter.cover.childImageSharp.fluid} />
              <p>{edge.node.frontmatter.title}</p>
            </PortfolioWrapper>
          </Link>
        ))}
      </>
    )}
  />
)


export default ProjectsList
