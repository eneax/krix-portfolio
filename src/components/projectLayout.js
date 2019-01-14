import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import Footer from './footer';
import { ProjectLayout } from '../elements'

import { above, baskerville, indigo } from '../utils'
import styled from 'styled-components'


export const DateTime = styled.p`
  font-size: 1rem;
  ${above.laptop`
    font-size: 1.25rem;
  `}
  display: block;
  ${baskerville};
  color: ${indigo};
  text-align: center;
  margin-bottom: 2rem;
`

const PostContent = styled.div`
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

export default class projectLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <ProjectLayout>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <DateTime>{markdownRemark.frontmatter.date}</DateTime>
          <hr/>

          <PostContent dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }} />
        </ProjectLayout>

        <Footer />
      </Layout>
    )
  }
};



export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`
