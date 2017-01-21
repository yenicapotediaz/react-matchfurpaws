import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Profile from './Components/Profile';
import Pets from './Components/Pets';
import Login from './Components/Login';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Profile />
        <Pets />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
