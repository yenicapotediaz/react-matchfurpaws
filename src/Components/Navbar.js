import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
        <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a href="/">Home</a></li>
               <li><a href="/shelter">Shelter</a></li>
               <li><a href="/profile">Profile</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/pets">Pets</a></li>
            </ul>
         </nav>
    );
  }
}

export default Navbar;
