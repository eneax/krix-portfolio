import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import 'tachyons';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="landing-page">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;