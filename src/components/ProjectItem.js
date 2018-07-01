import React from 'react';
// import { Link, Route } from 'react-router-dom';
import projects from '../utils/projects';
import Footer from './Footer';


const ProjectItem = ({ match }) => {
  const project = projects.find(({ id }) => id === match.params.projectId);

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.time}</p>

      {
        project.resources.map((sub) => (
          <div>
            <h3 key={sub.id}>{sub.name}</h3>
            <p>{sub.id}</p>
            <img src={sub.img} alt={`${sub.id} pic`} />
            <p>{sub.desc}</p>
          </div>
        ))
      }
      
      <Footer />
    </div>    
  )
}


export default ProjectItem;


/*

<div>
      <h2>{project.title}</h2>
      <p>{project.time}</p>

      <ul>
        {project.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
      
    </div>


*/ 




/*

<div>
      <article className="baskerville pb5">
        <header className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
          <h1 className="f3 f2-m f-subheadline-l measure lh-title fw1 mt0">{project.title}</h1>
          <time className="f5 f4-l db fw1 baskerville mb4">{project.time}</time>
          <img className="w-100 dib measure f3" src={project.resources[0].img1} alt=" by Adam Morse" />
        </header>
        <div className="ph3 ph4-m ph5-l">
          <p className="f4 mb4 center measure lh-copy">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
          </p>
          <div className="measure db center f5 f4-ns lh-copy">
            <img className="db w-100 mt4 mt5-ns" src={project.resources[1].img2} alt="foundations of a building on a cliff overlooking a lighthouse." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[2].img3} alt="sea with mist covering the rocky formations near the shore." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[3].img4} alt="dusk skyline above a grassy rockface covered in trees." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[4].img5} alt="sea and sky on the horizon with the foundations of a demolished house." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[5].img6} alt="sea and sky on the horizon with the foundations of a demolished house." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[6].img7} alt="sea and sky on the horizon with the foundations of a demolished house." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[7].img8} alt="sea and sky on the horizon with the foundations of a demolished house." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[8].img9} alt="sea and sky on the horizon with the foundations of a demolished house." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
            <img className="db w-100 mt4 mt5-ns" src={project.resources[9].img10} alt="sea and sky on the horizon with the foundations of a demolished house." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>    


*/ 