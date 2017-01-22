import React, { Component } from 'react';
import $ from 'jquery';

class PetProfiles extends Component {
  render(){
    return (
      <li className="Pet">
      <strong> {this.props.pet.name}</strong>
      <img alt="pet" src={this.props.pet.photos}/>
      <br/>
      {this.props.pet.species}<br/>
      {this.props.pet.bio}<br/>
      {this.props.pet.id} - {this.props.pet.shelter_id}
      </li>
    );
  }
}

class PetCollection extends Component {
  render(){
    let petProfiles;
    if(this.props.pets){
      petProfiles = this.props.pets.map(pet => {
        return (
          <PetProfiles key={pet.id} pet={pet} />
        );
      });
    }
    return (
      <div className="Pets">
      <h3> Here is a collection of adoptable pets</ h3>
      {petProfiles}
      </div>
    );
  }
}

class Pets extends Component {
  constructor() {
    super();
    this.state = {
      pets: []
    }
  }

  getPets(){
    $.ajax({
      url: 'https://matchfurpaws-api.herokuapp.com/pets',
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0ODUxNDAxMTl9.tTiUNMTaY7a2xH6jO3a7EzOsrZENm67YMlIIeZ4tzhM'},
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({pets: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getPets();
  }

  componentDidMount(){
    this.getPets();
  }

  render() {
    return (
      <div id="pets">
        Here we can include a form and load pets based on that.
        <PetCollection pets={this.state.pets}/>
      </div>
    );
  }
}

export default Pets;
