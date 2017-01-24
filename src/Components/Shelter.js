import React, { Component } from 'react';
import $ from 'jquery';

class ShelterProfile extends Component {
  render(){
    return (
      <div className="ShelterContainer">
        <ul id="shelterProf">
          <li className="Shelter">
            <strong> {this.props.shelter.name}</strong><br />
            <img className="shelter-image" alt="shelter profile" src={this.props.shelter.photos}/>
            <br/>
            Email: {this.props.shelter.email}<br/>
            Website: <a href="#">{this.props.shelter.website}</a><br />
            City: {this.props.shelter.city}<br />
            About us:{this.props.shelter.bio}
          </li>
        </ul>
      </div>
    );
  }
}

class ShelterCollection extends Component {
  render(){
    let shelterProfile;
    if(this.props.shelters){
      shelterProfile = this.props.shelters.map(shelter => {
        return (
          <ShelterProfile key={shelter.id} shelter={shelter} />
        );
      });
    }
    return (
      <div className="Shelters">
      {shelterProfile}
      </div>
    );
  }
}

class Shelter extends Component {
  constructor() {
    super();
    this.state = {
      shelters: []
    }
  }

  getShelter(email){
    var email_query = email.replace(/@/, "%40");
    $.ajax({
      url:  'https://matchfurpaws-api.herokuapp.com/shelters?email=' + email_query,
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0ODUyNDc2MDd9.oZ2uJ7Z_kqEyr8e0o2uE0EsJ6lPc4_9PymXP3pcHycg'},
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({shelters: data}, function(){
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div id="shelters">
        <Login onSubmitForm={this.getShelter.bind(this)}/>
        <ShelterCollection shelters={this.state.shelters}/>
      </div>
    );
  }
}


class Login extends Component {
  constructor() {
    super();
    this.state = {
      shelter: {}
    }
  }

  handleSubmit(e){
    this.setState({user:{
      email: this.refs.email.value,
      password: this.refs.password.value
    }}, function(){
      console.log(this.state.user);
      this.props.onSubmitForm(this.refs.email.value);
    });
    //add a way to clear form
    e.preventDefault();
  }

  render() {
    return (
      <div id="login">
        <h3> Welcome, please log in! </h3>
        <form onSubmit={this.handleSubmit.bind(this)} action="/login">
        <div>
          <label>Email</label><br/>
          <input type="text" ref="email" />
        </div>
        <div>
          <label>Password</label><br/>
          <input type="password" ref="password" />
        </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default Shelter;
