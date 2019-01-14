import React from 'react'

import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from '../components/seo'
import ProjectsList from '../components/projectsList'
import { Title, Container } from '../elements'


const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Title>Portfolio</Title>
    <Container>
      <ProjectsList />
    </Container>
    <Footer />
  </Layout>
)


export default Portfolio
