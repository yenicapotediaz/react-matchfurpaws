import React, { Component } from 'react';
import PetProfile from './PetProfile';
import { Row } from 'react-bootstrap';

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
      <Row className="pet-profiles">
        {petProfiles}
      </Row>
    );
  }
}

export default PetCollection;
