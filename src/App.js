import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Routes from './Routes';
import Footer from './Components/Footer';
import '../public/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
