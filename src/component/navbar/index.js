import './_navbar.scss';
import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <ul id="navbar">
            <li><h1>Michelle Scharlock</h1></li>
            <li><Link to="/"><span id="tiptop">Home</span></Link></li>
            <li><Link to="/about"><span>About</span></Link></li>
            <li><Link to="/resume"><span>Resume</span></Link></li>
            <li><Link to="/projects"><span>Projects</span></Link></li>
            <li><Link to="/values"><span>Values</span></Link></li>
            <li><Link to="/contact"><span>Contact Me</span></Link></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
