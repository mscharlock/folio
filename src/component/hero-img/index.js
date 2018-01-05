import React from 'react';
import '../../style/lib/_heroimg.scss';

class HeroImage extends React.Component {
  render() {
    return (
      <div className="img-container">
        <img id="hero" src="../../../imgs/mevol.jpg"/>
      </div>
    );
  }
}

export default HeroImage;
