import React, { Component } from 'react';
import { Link } from 'react-router';
import '../public/css/App.css';


class App extends Component {
  render() {
    return (
      <div>
        <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><Link to="/">Home</Link></li>
               <li><Link to="shelter">Shelter</Link></li>
               <li><Link to="profile">Profile</Link></li>
               <li><Link to="about">About</Link></li>
               <li><Link to="pets">Pets</Link></li>
            </ul>
            <div className="content">
              {this.props.children}
            </div>
        </nav>
      </div>
    );
  }
}

export default App;
