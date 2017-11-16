import React from 'react';
import TextContainer from '../text-container';

class ResumeContainer extends React.Component {
  render() {
    return (
      <div className="resume-container">
        <h2>My Resume</h2>
        <h3>Download a .pdf</h3>
        <p>Or view here</p>
        <TextContainer />
      </div>
    );
  }
}

export default ResumeContainer;
