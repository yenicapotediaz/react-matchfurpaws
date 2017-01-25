import React, { Component } from 'react';
import $ from 'jquery';


class SinglePet extends Component {

  render(){
    return (
      <div className="singlePet">
        {this.props.petData.name}
        <img className="pet-profile-image" alt="pet" src={this.props.petData.photos}/>
        Species: {this.props.petData.species}
        Age: {this.props.petData.est_age}
        Gender: {this.props.petData.gender}
        Breed: {this.props.petData.breed}
        Size: {this.props.petData.size}
        Exercise needs: {this.props.petData.exercise_needs}
        Home type: {this.props.petData.home_type}
        Good with cats: {(this.props.petData.cats)? "Yes" : "No"} <br />
        Good with dogs: {(this.props.petData.dogs)? "Yes" : "No"} <br />
        Good with kids: {(this.props.petData.kid_friendly)? this.props.petData.kid_ages : "No"} <br />
        Location: {this.props.petData.location}
        Adoption fee: {this.props.petData.adoption_fee}
        <br />
        <br />
        About {this.props.petData.name}: {this.props.petData.bio}<br />


        <button onClick={this.props.backfn}>Back to Pets</button>
      </div>
    );
  }
}

export default SinglePet;
