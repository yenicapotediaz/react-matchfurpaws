import React, { Component } from 'react';
import $ from 'jquery';

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
        <form className="pet-form" onSubmit={this.handleSubmit.bind(this)} action="/pets">
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
          <input id="pet-form" type="submit" value="Find your match" />
        </form>
      </div>
    );
  }
}

export default PetSearch;
