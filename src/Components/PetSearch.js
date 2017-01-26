import React, { Component } from 'react';

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
      <div className="Container-form">
        <h5>Search for a pet!</h5>
        <form className="form-horizontal pet-form" onSubmit={this.handleSubmit.bind(this)} action="/pets">
          <div className="form-group">
            <div className="col-lg-2">
              <label>Location</label><br />
              <select ref="location">
                {locationOptions}
              </select>
            </div>
            <div className="col-lg-2">
              <label>Species</label><br />
              <select ref="species">
                {speciesOptions}
              </select>
            </div>
            <div className="col-lg-2">
              <label>Home type</label><br />
              <select ref="home_type">
                {homeOptions}
              </select>
            </div>
            <div className="col-lg-4">
              <label>Good with:</label><br />
                <label>Cats</label>
                <input type="checkbox" onClick={this.checkBox.bind(this, "cats")} ref="cats" />
                <label className="good-with">Dogs</label>
                <input type="checkbox" onClick={this.checkBox.bind(this, "dogs")} ref="dogs" />
                <label className="good-with">Kids</label>
                <input type="checkbox" onClick={this.checkBox.bind(this, "kids")} ref="kids" />
            </div>
            <div className="col-lg-2">
              <input id="pet-form" type="submit" value="Find your match" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PetSearch;
