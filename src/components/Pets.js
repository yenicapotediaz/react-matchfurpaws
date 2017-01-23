import React, { Component } from 'react';
import $ from 'jquery';

class PetProfiles extends Component {
  render(){
    return (
      <div className="PetContainer">
        <ul>
          <li className="Pet">
          <strong> {this.props.pet.name}</strong><br />
          <img alt="pet" src={this.props.pet.photos}/>
          <br/>
          {this.props.pet.species}<br/>
          {this.props.pet.bio}<br/>
          {this.props.pet.home_type}<br/>
          good with cats: {(this.props.pet.cats)? "Yes" : "No"} <br />
          good with dogs: {(this.props.pet.dogs)? "Yes" : "No"} <br />
          {this.props.pet.id} - {this.props.pet.shelter_id}
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

  getPets(species, home_type, clickCats, clickDogs){
    var cats_query,
    dogs_query;
    if (clickCats === false) {
      cats_query = "";
    } else {
      cats_query = '&cats=' + clickCats;
    }

    if (clickDogs === false) {
      dogs_query = "";
    } else {
      dogs_query = '&dogs=' + clickCats;
    }

    $.ajax({
      url:  'https://matchfurpaws-api.herokuapp.com/pets?species=' + species + '&home_type=' + home_type + dogs_query + cats_query,
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0ODUyMjgwOTF9.N1qlA41OD9xRRGNaQTIp9RNhgvq5mK2_x8nHCSE5ZV8'},
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
      clickDogs: false
    }
  }

  handleSubmit(e){
    this.setState({query:{
      species: this.refs.species.value
    }}, function(){
      console.log(this.state);
      console.log(this.refs.cats.value);
      console.log(this.refs.dogs.value);
      this.props.onSubmitForm(this.refs.species.value, this.refs.home_type.value, this.state.clickCats, this.state.clickDogs)
    });
    e.preventDefault();
  }

  static defaultProps = {
    species_type: ["cat", "dog"],
    home_options: ["house", "apartment"]
  }

  checkBox(pet_type, e){
    console.log(pet_type);
    console.log("This is e value in checkBox :", e.toString());
    if (pet_type == "cats"){
      this.setState({clickCats: !this.state.clickCats})
    } else {
      this.setState({clickDogs: !this.state.clickDogs})
    }
  }

  render(){
    let speciesOptions = this.props.species_type.map(species => {
      return <option key={species} value={species}>{species}</option>
    })
    let homeOptions = this.props.home_options.map(home_type => {
      return <option key={home_type} value={home_type}>{home_type}</option>
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
           <label>good with cats</label><br/>
           <input type="checkbox" onClick={this.checkBox.bind(this, "cats")} ref="cats" />
         </div>
         <div>
           <label>good with dogs</label><br/>
           <input type="checkbox" onClick={this.checkBox.bind(this, "dogs")} ref="dogs" />
         </div>
          <div>
           <label>Home Type</label><br/>
           <select ref="home_type">
             {homeOptions}
           </select>
         </div>
          <input id="pet-form" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Pets;
