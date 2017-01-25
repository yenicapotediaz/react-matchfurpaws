import React, { Component } from 'react';
import $ from 'jquery';
import PetProfile from './PetProfile';

class PetCollection extends Component {
  render(){
    let petProfiles;
    if(this.props.pets){
      petProfiles = this.props.pets.map(pet => {
        return (
          <PetProfile key={pet.id} pet={pet} singlePetfn={this.props.singlePetfn.bind(this)}/>
        );
      });
    }
    return (
      <div>
        <div className="Pets">
          {petProfiles}
        </div>
      </div>
    );
  }
}

export default PetCollection;
