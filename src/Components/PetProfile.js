import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class PetProfile extends Component {

  render(){
    return (
          <Col md={3} className="Pets" onClick={this.props.singlePetfn.bind(this, this.props.pet)}>
            <div className="petprofile"> <a href="#"><strong> {this.props.pet.name}</strong></a></div>
            <div className="petprofile">{this.props.pet.gender}</div>
            <div className="petprofile">{this.props.pet.breed}</div>
            <div><img className="pet-image " alt="pet" src={this.props.pet.photos}/></div>
            <br/>
          </Col>
    );
  }
}

export default PetProfile;
