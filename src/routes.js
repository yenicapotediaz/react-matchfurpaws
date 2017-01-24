import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Shelter from './Components/Shelter';
import Pets from './Components/Pets';
import Profile from './Components/Profile';
import About from './Components/About';
import Home from './Components/Home';


class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/shelter" component={Shelter}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/pets" component={Pets}/>
        <Route path="/about" component={About}/>
      </Router>
    );
  }
}

export default Routes;
