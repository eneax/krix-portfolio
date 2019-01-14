import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer';
import { Title, Container, ImageWrapper } from '../elements'


const About = ({ data }) => (
  <Layout>
    <SEO title="About" />

    <Title>About Me</Title>

    <Container>
      <ImageWrapper>
        <Img
          fluid={data.profilePic.childImageSharp.fluid}
          alt={`Picture of me in Florence`}
        />
      </ImageWrapper>

      <p>
        As a child, I was fascinated by the monumental buildings, the timeless
        ones that take your breath away leaving you with only one question: "How
        did they build something like that?".
      </p>
      <p>
        I often looked at houses and fantasized about how to do one. These
        trivial observations began to evolve and at middle school, when I
        started the Technical Drawing lessons, I was really taken by it. Then,
        when I got to high school, I chose to attend a Technical Institute for
        Surveyors where I get a diploma in surveying in 2013. The same year, I
        enrolled at the University of Florence to obtain a five-year degree in
        Architecture.
      </p>
      <p>
        Almost five years have passed since then and soon I will also have
        completed this educational path thanks of whom I’m better understanding
        witch results achieve in the future. I am fascinated by all aspects of
        this subject, from urban planning to architectural design, especially
        the way of representing and communicating architecture.
      </p>
      <p>
        The latter, is an aspect that I have approached only in the last two
        years but which I would like to study in the near future with the
        intention of always improving myself.
      </p>
    </Container>

    <Footer />
  </Layout>
)

export default About


export const query = graphql`
  query profilePic {
    profilePic: file(relativePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
