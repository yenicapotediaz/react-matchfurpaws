import React, { Component } from 'react';
import $ from 'jquery';

class ShelterProfile extends Component {

  redirectTo(url){
    window.location.href="http://"+url;
  }
  render(){
    return (
      <div className="row ShelterContainer">
        <div className="col-md-12">
          <h2><strong>{this.props.shelter.name}</strong></h2><br />
        </div>
        <div className="col-md-5">
          <img className="shelter-image" alt="shelter profile" src={this.props.shelter.photo}/>
        </div>
        <div className="col-md-5">
          <table className="shelter-table table table-condensed">
            <tbody>
              <tr>
                <td>Email</td>
                <td>{this.props.shelter.email}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td><a href="#" onClick={this.redirectTo.bind(this, this.props.shelter.website)}>{this.props.shelter.website}</a></td>
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

  getShelter(shelter_name){
    var shelter_query = shelter_name.replace(/ /, "+");
    $.ajax({
      url:  'https://matchfurpaws-api.herokuapp.com/shelters?name=' + shelter_query,
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0ODc1ODM3MTB9.wmlcEONP0yoS3HfNikyTC7Ile-TmDlCFgfr0IsRu2eI'},
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({shelters: data}, function(){
        });
      }.bind(this),
      error: function(xhr, status, err){
      }
    });
  }

  render() {
    return (
      <div id="shelters">
        <SearchShelter onSubmitForm={this.getShelter.bind(this)}/>
        <ShelterCollection shelters={this.state.shelters}/>
      </div>
    );
  }
}


class SearchShelter extends Component {
  constructor() {
    super();
    this.state = {
      shelter: {}
    }
  }

  handleSubmit(e){
    this.setState({shelter:{
      name: this.refs.shelter_name.value
    }}, function(){

      this.props.onSubmitForm(this.refs.shelter_name.value);
    });
    e.preventDefault();
  }

  render() {
    return (
      <div id="shelter-search">
        <form className="form-horizontal shelter-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label> Search for a Shelter</label>
            <input className="rounded" type="text" ref="shelter_name" />
            <input id="submit-space" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}



export default Shelter;
