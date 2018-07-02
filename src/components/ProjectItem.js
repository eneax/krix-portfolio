import React from 'react';
import projects from '../utils/projects';
import Footer from './Footer';


const ProjectItem = ({ match }) => {
  const project = projects.find(({ id }) => id === match.params.projectId);

  return (
    <div>
      <article className='baskerville pb5'>
        <header className='avenir tc-l ph3 ph4-ns pt4 pt5-ns'>
          <h1 className='f3 f2-m f-subheadline-l measure lh-title fw1 mt0'>{project.title}</h1>
          <time className='f5 f4-l db fw1 baskerville mb4'>{project.time}</time>
          <img className='material w-100 dib measure f3' src={project.cover} alt={`${project.title} Cover Pic`} />
        </header>

        <div className="ph3 ph4-m ph5-l">
          <p className="f4 mb4 center measure lh-copy">{project.intro}</p>
          <div className="measure db center f5 f4-ns lh-copy">
            {
              project.resources.map((sub) => (
                <div key={sub.id}>
                  <img className="material db w-100 mt4 mt5-ns" src={sub.img} alt={`${sub.id} pic`} />
                  <p>{sub.desc}</p>                  
                </div>
              ))
            }
          </div>
        </div>
      </article>
      
      <Footer />
    </div>    
  )
}


export default ProjectItem;