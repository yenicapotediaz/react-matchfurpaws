import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, NoMatch } from 'react-router';
import Shelter from './Components/Shelter';
import Pets from './Components/Pets';
import Profile from './Components/Profile';
import About from './Components/About';
import Home from './Components/Home';
import App from './App';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="shelter" component={Shelter}/>
      <Route path="pets" component={Pets}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
