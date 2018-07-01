import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../utils/projects';
import Footer from './Footer';


const ProjectList = () => {
	return (
    <div className='mw9 center ph3-ns'>
      <div className='cf ph2-ns'>
        {
          projects.map(({ cover, id }) => (
            <Link to={`/projects/${id}`} key={id}>
              <div className='fl w-100 w-50-ns pa2'>
                <div className='outline bg-white pv4'>
                  <img src={cover} alt='name' />
                </div>
              </div>
            </Link>
          ))
        }
      </div>
      
      <Footer />
    </div>
	)
}

export default ProjectList;



/*

function Project ({ match }) {
  const project = projects.find(({ id }) => id === match.params.projectId);

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.time}</p>

      <ul>
        {
          project.resources.map((sub) => (
            <li key={sub.id}>
              <Link to={`/projects/${match.params.projectId}/${sub.id}`}>
                {sub.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

*/ 