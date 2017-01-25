import React, { Component } from 'react';
import $ from 'jquery';
import PetSearch from './PetSearch';
import PetCollection from './PetCollection';
import SinglePet from './SinglePet';

class Pets extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      displaySinglePet : false,
      pet: {}
    }
  }

  getPets(kids, location, species, home_type, clickCats, clickDogs){
    var cats_query,
        dogs_query,
        home_query,
        species_query,
        kids_query,
        location_query;

    if (species === "") {
      species_query = "";
    } else {
      species_query = '&species=' + species
    }

    if (clickCats === false) {
      cats_query = "";
    } else {
      cats_query = '&cats=' + clickCats;
    }

    if (location !== "") {
      location_query = '&location=' + location;
    } else {
      location_query = "";
    }

    if (clickDogs === false) {
      dogs_query = "";
    } else {
      dogs_query = '&dogs=' + clickDogs;
    }

    if (home_type === "House" || home_type === "") {
      home_query = "";
    } else {
      home_query = '&home_type' + home_type;
    }

    if(kids === false) {
      kids_query = "";
    } else {
      kids_query = "&kid_friendly=" + kids;
    }

    $.ajax({
      url:  'https://matchfurpaws-api.herokuapp.com/pets?adoption_status=Available' + species_query + home_query + dogs_query + cats_query + location_query + kids_query,
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0ODUzOTA3OTV9.wZgKHzTcnMUNStPZxRCoTczO3Pa71inNQCHWS0ojQY8'},
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({pets: data}, function(){
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  togglePetShow(){
    this.setState({displaySinglePet : !this.state.displaySinglePet})
    console.log(this.state.displaySinglePet);
    if (this.state.displaySinglePet === false) {
      $("#pet-form-render").hide();
    } else {
      $("#pet-form-render").show();
    }

  }

  petToDisplay(petData) {
    this.setState({displaySinglePet : !this.state.displaySinglePet, pet: petData})
    console.log(this.state.displaySinglePet);
    if (this.state.displaySinglePet === false) {
      $("#pet-form-render").hide();
    } else {
      $("#pet-form-render").show();
    }
  }

  render() {
      return (
      <div id="pets">
        <div id="pet-form-render">
          <PetSearch onSubmitForm={this.getPets.bind(this)}/>
        </div>
    		{
    			(this.state.displaySinglePet) ?
    				<SinglePet petData={this.state.pet} backfn={this.togglePetShow.bind(this)}/> : <PetCollection pets={this.state.pets} singlePetfn={this.petToDisplay.bind(this)}/>
    		}
      </div>
    );
  }
}
export default Pets;
