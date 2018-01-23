import React from 'react';
import './_hero.scss';

class HeroImage extends React.Component {
  render() {
    return (
      <div className="img-container">
        <h3 id="title">Full Stack JavaScript Developer</h3>
        <img src="src/imgs/orange.jpg"/>
      </div>
    );
  }
}

export default HeroImage;
