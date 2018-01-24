import React from 'react';
import './_hero.scss';

class HeroImage extends React.Component {
  render() {
    return (
      <div className="img-container">
        <img src="../../src/imgs/me.jpg"/>
      </div>
    );
  }
}

export default HeroImage;
