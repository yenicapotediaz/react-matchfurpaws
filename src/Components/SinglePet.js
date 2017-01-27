import React, { Component } from 'react';


class SinglePet extends Component {
  redirectTo(url){
    window.location.href="http://"+url;
  }

  render(){
    return (
      <div className="row singlePet">
        <div className="pet-cont col-md-12">
          <h3 className="name pet-cont col-md-5">{this.props.petData.name}</h3><br />
          <button className="right-align back-button" onClick={this.props.backfn}>View All Pets</button>
        </div>
        <div className="pet-cont col-md-5">
          <img className="pet-profile-image" alt="pet" src={this.props.petData.photos}/>
        </div>
        <div className="pet-cont col-md-5">
          <table className="table table-condensed">
            <tbody>
              <tr>
                <td>Species</td>
                <td>{this.props.petData.species}</td>
              </tr>
              <tr>
                <td>Approx. Age</td>
                <td>{this.props.petData.est_age}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.props.petData.gender}</td>
              </tr>
              <tr>
                <td>Breed</td>
                <td>{this.props.petData.breed}</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>{this.props.petData.size}</td>
              </tr>
              <tr>
                <td>Exercise Needs</td>
                <td>{this.props.petData.exercise_needs}</td>
              </tr>
              <tr>
                <td>Home type</td>
                <td>{this.props.petData.home_type}</td>
              </tr>
              <tr>
                <td>Good with cats</td>
                <td>{(this.props.petData.cats)? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Good with dogs</td>
                <td>{(this.props.petData.dogs)? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Good with kids</td>
                <td>{(this.props.petData.kid_friendly)? this.props.petData.kid_ages : "No"}</td>
              </tr>
              <tr>
                <td>Adoption fee</td>
                <td>{this.props.petData.adoption_fee}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{this.props.petData.location}</td>
              </tr>
              <tr>
                <td>Shelter</td>
                <td><a href="#" onClick={this.redirectTo.bind(this, this.props.petData.shelter_url)}>{this.props.petData.shelter_name}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-2">
        </div>
        <div className="bio col-lg-5">
        {this.props.petData.bio}
        <br />
        <br />
        <br />
        </div>
      </div>
    );
  }
}

export default SinglePet;
