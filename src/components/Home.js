import React from 'react';

const home = () => {
  return (
    <main className='pt4'>
      <div className="tc pv4 pv6-ns">
        <h1 className="f4 f3-ns fw6 dark-gray courier">Hi, I'm Kristjana!</h1>
        <h2 className="f6 mid-gray fw2 ttu tracked georgia">Architect Visualizer</h2>

        <a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href="https://www.facebook.com/kristjana.xharja" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-facebook-f fa-2x"></i>
        </a>
        <a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href="mailto:kristjana.xharja@gmail.com" target="_blank" rel="noopener noreferrer" >
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </main>
	)
}

export default home;
