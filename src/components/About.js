import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="about-pic"  src="images/valentino.jpg" alt="kitty covering face" />
         </div>
         <div className="nine columns main-col">
            <h2>About MatchFurPaws</h2>
            <p>MatchFurPaws was created to help an adopter find their ideal pet. It does so by matching adoptable pets
             to an adopter based on what they are both looking for. The adopter can view a list of matches, their details, and
             contact the shelter to meet the pet. It is my hope that providing a focus on personality and lifestyle matching we
             can reduce the number of pets that get sent back to the shelter.
            </p>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
