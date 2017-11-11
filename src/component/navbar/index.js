import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/testm">Testimonials</Link></li>
            <li><Link to="contact">Contact Me</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
