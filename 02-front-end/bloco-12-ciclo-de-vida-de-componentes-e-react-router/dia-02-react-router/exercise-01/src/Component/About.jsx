import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="about-container">
        <h2>About Pokedex</h2>
        <p className="paragraph-about">This application simulates a Pokedex, a digital enciclopedia containing all Pokemon</p>
        <p className="paragraph-about">One can filter Pokemon by type, and see more details for each one of them</p>
        <img src="https://pngimage.net/wp-content/uploads/2018/06/pokédex-png-1.png" alt="Pokedex" className="pokedex-image" />
      </section>
      
    );
  }
}

export default About;
