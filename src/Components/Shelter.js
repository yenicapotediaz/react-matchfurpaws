import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class ShelterProfile extends Component {
  render(){
    return (
      <div className="row ShelterContainer">
        <div className="col-md-5">
          <strong> {this.props.shelter.name}</strong><br />
          <img className="shelter-image" alt="shelter profile" src={this.props.shelter.photos}/>
        </div>
        <div className="col-md-5">
          <table className="table table-bordered table-condensed">
            <tbody>
              <tr>
                <td>Email</td>
                <td>{this.props.shelter.email}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td><a href="#">{this.props.shelter.website}</a></td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.props.shelter.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-2">
        </div>
        <div className="col-md-12">
          <h3>About us:</h3>
          {this.props.shelter.bio}
        </div>
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
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0ODc0NjYzNzF9.xZzX9dF8Leg1UIylLCXLiWkWP-MW6I3H8MgHMdmyP-M'},
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
        <div id="form-toggle">
          <Login onSubmitForm={this.getShelter.bind(this)}/>
        </div>
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
    e.preventDefault();
  }

  render() {
    return (
      <div id="login">
        <h3> Welcome, please log in! </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
