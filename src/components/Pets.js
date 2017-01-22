import React, { Component } from 'react';
import $ from 'jquery';

class PetProfiles extends Component {
  render(){
    return (
      <div className="PetContainer">
        <ul>
          <li className="Pet">
          <strong> {this.props.pet.name}</strong>
          <img alt="pet" src={this.props.pet.photos}/>
          <br/>
          {this.props.pet.species}<br/>
          {this.props.pet.bio}<br/>
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
      <h3> Here are your pet matches</ h3>
      {petProfiles}
      </div>
    );
  }
}

class PetSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: {
        species: "",
        dogs: "",
        cats: "",
        home_type: ""
      }
    }
  }

  handleSubmit(e){
    console.log(this.state.query);
    this.setState({query:{
      species: this.refs.species.value,
      dogs: this.refs.dogs.value,
      cats: this.refs.cats.value,
      home_type: this.refs.home_type.value,
    }}, function(){
      console.log(this.state.query);
      console.log(this.state.query.species);
    });
    //add a way to clear form
    e.preventDefault();
  }

  static defaultProps = {
    species_type: ["cat", "dog"],
    home_options: ["house", "apartment"]
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Species</label><br/>
            <select ref="species">
              {speciesOptions}
            </select>
          </div>
          <div>
            <label>good with cats</label><br/>
            <input type="hidden" value="false" ref="cats" />
            <input type="checkbox" value="true" ref="cats" />
          </div>
          <div>
            <label>good with dogs</label><br/>
            <input type="hidden" value="" ref="dogs" />
            <input type="checkbox" value="true" ref="cats" />
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

class Pets extends Component {
  constructor() {
    super();
    this.state = {
      pets: []
    }
  }

  getPets(){
    let petQuery = this.state.query;
    console.log(petQuery + "is PQ");
    if (this.state.query === undefined) {
      var basicUrl = 'https://matchfurpaws-api.herokuapp.com/pets'
    } else {
      var basicUrl = 'https://matchfurpaws-api.herokuapp.com/pets?species=' + this.state.query.species + '&dogs=' + this.state.query.dogs + '&cats=' + this.state.query.cats + '&home_type=' + this.props.query.home_type
    }
    $.ajax({
      url:  basicUrl,
      headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0ODUxNDAxMTl9.tTiUNMTaY7a2xH6jO3a7EzOsrZENm67YMlIIeZ4tzhM'},
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({pets: data}, function(){
          console.log(this.state);
          console.log(this.state.query);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentDidUpdate(){

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
        <PetSearch />
        <PetCollection pets={this.state.pets}/>
      </div>
    );
  }
}

export default Pets;
