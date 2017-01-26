import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="about-pic"  src="images/valentino.jpg" alt="kitty covering face" />
         </div>
         <div className="nine columns main-about">
            <h2>About MatchFurPaws</h2>
            <p>MatchFurPaws was created to help adopters find their ideal pet. It takes a different route in the search process: It allows the adopter to filter based on what is important to them, such as having a pet that is good with other pets in the household, children, ideal home type, exercise needs, etc. Once you find the pets that meet your lifestyle you can focus on reading profiles of pets and focus on their personality. The adopter can view a list of matches, their details, and
             contact the shelter to meet the pet. It is my hope that providing a focus on personality and lifestyle matching we
             can reduce the number of pets that get sent back to the shelter and provide these adoptable pets the happy endings they deserve.
            </p>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
