import React from 'react';
import profilePic from '../images/profile-pic.png';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <main>
        <article className="bg-white">
          <div className="vh-75 cover bg-center" style={{ backgroundImage: `url(${profilePic})` }} />
          <div className="ph4 ph5-m ph6-l">
            <div className="measure f3 center mv5 black-70">
              <h1 className="fw6 f3 avenir">
                About Me
              </h1>
              <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                As a child, I was fascinated by the monumental buildings, the timeless ones that take your breath away leaving you with only one question: "How did they build something like that?".
              </p>
              <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                I often looked at houses and fantasized about how to do one. These trivial observations began to evolve and at middle school, when I started the Technical Drawing lessons, I was really taken by it. Then, when I got to high school, I chose to attend a Technical Institute for Surveyors where I get a diploma in surveying in 2013. The same year, I enrolled at the University of Florence to obtain a five-year degree in Architecture.
              </p>
              <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                Almost five years have passed since then and soon I will also have completed this educational path thanks of whom I’m better understanding witch results achieve in the future. I am fascinated by all aspects of this subject, from urban planning to architectural design, especially the way of representing and communicating architecture.
              </p>
              <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                The latter, is an aspect that I have approached only in the last two years but which I would like to study in the near future with the intention of always improving myself.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export default About;