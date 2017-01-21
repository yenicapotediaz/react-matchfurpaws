import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {

  render() {
    return (
        <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><Link to="/">Home</Link></li>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/pets">Pets</Link></li>
               <li><Link to="/about">About</Link></li>
            </ul>
         </nav>
    );
  }
}

export default Navbar;
