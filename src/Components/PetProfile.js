import React, { Component } from 'react';
import $ from 'jquery';

class PetProfile extends Component {

  render(){
    return (
      <div className="PetContainer">
        <ul id="petProf" onClick={this.props.singlePetfn.bind(this, this.props.pet)}>
          <li className="Pet">
            <a href="#"><strong> {this.props.pet.name}</strong></a>< br/>
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

export default PetProfile;
