import React from 'react';
import HeroImage from '../hero-img';
import ContactContainer from '../contact-container';
import SkillsContainer from '../skills-container';

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home-container">
        <HeroImage/>
        <ContactContainer/>
        <SkillsContainer/>
      </div>
    );
  }
}

export default HomeContainer;
