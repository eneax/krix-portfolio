import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from './layout';
import Footer from './footer';
import { ProjectLayout, DateTime, InternalLink } from '../elements'


export default class projectLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <ProjectLayout>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <DateTime>{markdownRemark.frontmatter.date}</DateTime>
          <hr/>

          <div dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }} />

          <InternalLink to="/portfolio">Back to portfolio</InternalLink>
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
