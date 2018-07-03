import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'tachyons';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import ProjectItem from './ProjectItem';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="landing-page">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={ProjectList} />
            <Route path='/projects/:projectId' component={ProjectItem} />
            <Route path='/about' component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;