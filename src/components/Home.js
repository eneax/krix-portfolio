import React from 'react';
import { projectOne, projectTwo, projectThree, projectFour } from '../utils/media';

const Home = () => {
	return (
		<div className='mw9 center ph3-ns'>
      <div className='cf ph2-ns'>
        <div className='fl w-100 w-50-ns pa2'>
          <div className='outline bg-white pv4'>
            <img src={projectOne} alt="Project One Pic" />
          </div>
        </div>
        <div className='fl w-100 w-50-ns pa2'>
          <div className='outline bg-white pv4'>
            <img src={projectTwo} alt="Project Two Pic" />
          </div>
        </div>
      </div>
      <div className='cf ph2-ns'>
        <div className='fl w-100 w-50-ns pa2'>
          <div className='outline bg-white pv4'>
            <img src={projectThree} alt="Project Three Pic" />
          </div>
        </div>
        <div className='fl w-100 w-50-ns pa2'>
          <div className='outline bg-white pv4'>
            <img src={projectFour} alt="Project Four Pic" />
          </div>
        </div>
      </div>
    </div>
	)
}

export default Home;