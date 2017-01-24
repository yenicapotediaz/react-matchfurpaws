import React, { Component } from 'react';
import $ from 'jquery';

class PetProfiles extends Component {
  render(){
    console.log(this.props.pet);
    return (
      <div className="PetContainer">
        <ul id="petProf">
          <li className="Pet">
            <strong> {this.props.pet.name}</strong><br />
            <img className="pet-image" alt="pet" src={this.props.pet.photos}/>
            <br/>
            good with cats: {(this.props.pet.cats)? "Yes" : "No"} <br />
            good with dogs: {(this.props.pet.dogs)? "Yes" : "No"} <br />
            good with kids: {(this.props.pet.kid_friendly)? this.props.pet.kid_ages : "No"} <br />
            location: {this.props.pet.location}
          </li>
        </ul>
      </div>
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
      <h3> Here are your pet matches</h3>
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
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0ODUzNDEzMjV9.fCVhDq4TxRpxL5PnjKU45Ds3hzNXm5zBfFsvW3Y5OAo'},
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

  render() {
    return (
      <div id="pets">
        <PetSearch onSubmitForm={this.getPets.bind(this)}/>
        <PetCollection pets={this.state.pets}/>
      </div>
    );
  }
}

class PetSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: {
        species: ""
      },
      clickCats: false,
      clickDogs: false,
      clickKids: false
    }
  }

  handleSubmit(e){
    this.setState({query:{
      species: this.refs.species.value
    }}, function(){
      console.log(this.state);
      console.log(this.refs.cats.value);
      console.log(this.refs.dogs.value);
      this.props.onSubmitForm(this.state.clickKids, this.refs.location.value, this.refs.species.value, this.refs.home_type.value, this.state.clickCats, this.state.clickDogs)
    });
    e.preventDefault();
  }

  static defaultProps = {
    species_type: ["", "Cat", "Dog"],
    home_options: ["", "House", "Apartment"],
    location_options: ["", "Any", "Seattle"]
  }

  checkBox(type, e){
    console.log("This is e value in checkBox :", e.toString());
    if (type === "cats"){
      this.setState({clickCats: !this.state.clickCats})
    } else if(type === "dogs"){
      this.setState({clickDogs: !this.state.clickDogs})
    } else if(type === "kids"){
      this.setState({clickKids: !this.state.clickKids})
    }
  }

  render(){
    let speciesOptions = this.props.species_type.map(species => {
      return <option key={species} value={species}>{species}</option>
    })
    let homeOptions = this.props.home_options.map(home_type => {
      return <option key={home_type} value={home_type}>{home_type}</option>
    })
    let locationOptions = this.props.location_options.map(location => {
      return <option key={location} value={location}>{location}</option>
    })
    return (
      <div id="petSearch">
        <h3>Search for an adoptable pet:</h3>
        <form onSubmit={this.handleSubmit.bind(this)} action="/pets">
          <div>
            <label>Species</label><br/>
            <select ref="species">
              {speciesOptions}
            </select>
          </div>
          <div>
            <label>Good with:</label>
            <label>Cats</label>
            <input type="checkbox" onClick={this.checkBox.bind(this, "cats")} ref="cats" /><br/>
            <label>Dogs</label>
            <input type="checkbox" onClick={this.checkBox.bind(this, "dogs")} ref="dogs" /><br/>
            <label>Kids</label>
            <input type="checkbox" onClick={this.checkBox.bind(this, "kids")} ref="kids" /><br/>
          </div>
          <div>
           <label>Home type</label><br/>
           <select ref="home_type">
             {homeOptions}
           </select>
           <div>
             <label>Location</label><br/>
             <select ref="location">
               {locationOptions}
             </select>
           </div>
         </div>
          <input id="pet-form" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Pets;
